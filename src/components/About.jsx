function About() {
  return (
    <section className="  text-white bg-pearl-900 w-3/4 flex items-center justify-center ">
      <div id="outerAbout" className="flex h-full">
        <div id="pictures" className="w-1/2 h-full flex items-center ">
          <div className="object-fit w-full  ">
            <img
              className="scale-x-[-1] w-full h-full"
              src="../FLOben.jpg"
              alt="Fliesenleger bei der Arbeit"
            />
          </div>
        </div>
        <div
          id="text"
          className=" flex flex-col justify-center w-1/2 px-5 gap-5"
        >
          <h1 className="text-3xl  text-center">Unsere Geschichte</h1>
          <p className="text-xl text-center ">
            Seit <span className="underline">über 15 Jahren</span> in Wien
            etabliert, verbinden wir handwerkliche Perfektion mit kreativem
            Design in der Fliesenverlegung. Unser Familienbetrieb, gegründet von{" "}
            <span className="underline">Ramiz Prakaj</span> , hat sich als
            zuverlässiger Partner etabliert.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
