import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
function ServiceDisplay({ title, text, color, srcImage }) {
  const textRef = useRef(null);
  const pictureRef = useRef(null);
  const colorDiv = useRef(null);
  useEffect(() => {
    const el = textRef.current;
    gsap.fromTo(
      el,
      { y: -200, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = pictureRef.current;
    gsap.fromTo(
      el,
      { y: 200, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = colorDiv.current;
    gsap.fromTo(
      el,
      { x: 500, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div id="right-information" className="w-1/2 flex flex-col items-center">
      <div ref={textRef} id="text" className="p-10 flex flex-col gap-4">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div id="picture-and-color" className=" relative ">
        <div
          ref={colorDiv}
          id="color-block"
          className={`w-60 h-96 ${color} absolute top-[-50px] right-[-100px] z-0 `}
        ></div>
        <div ref={pictureRef} className="z-10">
          <img src={srcImage} className="relative z-10"></img>
        </div>
      </div>
    </div>
  );
}

export default ServiceDisplay;
