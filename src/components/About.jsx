import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  // Create refs
  const imageRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    gsap.fromTo(
      el,
      { x: -500, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = text1Ref.current;
    gsap.fromTo(
      el,
      { x: 500, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = text2Ref.current;
    gsap.fromTo(
      el,
      { x: 500, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = text3Ref.current;
    gsap.fromTo(
      el,
      { x: 500, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="text-white bg-concrete-900  w-3/4 flex items-center justify-center">
      <div id="outerAbout" className="flex h-full">
        <div className="w-1/2 h-full flex items-center overflow-hidden">
          <div className="object-fit w-full">
            <img
              ref={imageRef}
              className="scale-x-[-1] w-full h-full"
              src="../FLOben.jpg"
              alt="Fliesenleger bei der Arbeit"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly w-1/2 px-16  overflow-hidden">
          <div ref={text1Ref} className="flex flex-col gap-5">
            <h1 className="text-3xl text-pretty">Unsere Geschichte.</h1>
            <p className="text-lg text-pretty">
              Seit <span className="underline">über 15 Jahren</span> in Wien
              etabliert, verbinden wir handwerkliche Perfektion mit kreativem
              Design in der Fliesenverlegung. Unser Familienbetrieb, gegründet
              von <span className="underline">Ramiz Prakaj</span>, hat sich als
              zuverlässiger Partner etabliert.
            </p>
          </div>
          <div ref={text2Ref} className="flex flex-col gap-5">
            <h1 className="text-3xl text-pretty">Unsere Team.</h1>
            <p className="text-lg text-pretty">
              Hinter jedem Erfolg steht ein engagiertes Team. Unsere Mitarbeiter
              sind das Herzstück von allem, was wir tun. Mit einem bunten Mix
              aus erfahrenen Experten und talentierten Neulingen bringen wir
              frische Perspektiven und innovative Ideen in deinen Lebensraum.
            </p>
          </div>

          <div ref={text3Ref} className="flex flex-col gap-5">
            <h1 className="text-3xl text-pretty">Kontaktieren Sie uns.</h1>
            <p className="text-lg text-pretty">
              Wir freuen uns darauf, von Ihnen zu hören! Für Fragen, Anfragen
              oder Feedback erreichen Sie uns unter
            </p>
            <div className=" p-3 border hover:border-2 max-w-fit  ">
              <button className=" bg-concord-900">
                <p className="text-lg">fliesenprakaj@gmail.com</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
