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
};

function Parallax() {
  useEffect(() => {
    gsap.registerPlugin(Observer);
    gsapInit();
  }, []);
  return <></>;
}

export default Parallax;
