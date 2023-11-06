import "./Parallax.css";
import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
//########## Add Images ##########
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";

const gsapInit = () => {
  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  const gotoSection = (index, direction) => {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });

    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
      },
      { yPercent: 0 },
      0
    ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
    currentIndex = index;
  };
};

const sections = [
  { title: "Scrolling", image: image1 },
  { title: "Infinite", image: image2 },
  { title: "Website", image: image3 },
];

const Parallax = () => {
  useEffect(() => {
    gsap.registerPlugin(Observer);
    gsapInit();
  }, []);

  return sections.map((section) => {
    return (
      <section key={section.title}>
        <div className="outer">
          <div className="inner">
            <div
              className="bg"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              <h2>{section.title}</h2>
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default Parallax;
