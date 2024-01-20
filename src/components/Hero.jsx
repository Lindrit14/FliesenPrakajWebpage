const images = [
  { src: "public/poolfliesen.png", alt: "Pool Fliesen" },
  { src: "public/aussengartenfliesen.png", alt: "Außen Garten Fliesen" },
  { src: "public/Fliesen-Grau.jpg", alt: "Fliesen Grau" },
  { src: "public/holzoptikfliesen.jpg", alt: "Holzoptik Fliesen" },
  { src: "public/badezimmer beige.jpg", alt: "Badezimmer Beige" },
];

const Hero = () => {
  const replicatedImages = [...images, ...images, ...images]; // replicate more times for smoother scrolling
  return (
    <section className="  flex  text-center bg-cover bg-center h-screen  justify-center  overflow-hidden ">
      <div id="outerHero" className="flex  items-center justify-center">
        <div
          id="Text-and-Button"
          className="w-1/2 flex flex-col h-full items-center justify-center gap-20"
        >
          <div id="Text" className="flex flex-col gap-3 px-8  text-left ">
            <h1 className="text-5xl ">
              Professionelle{" "}
              <span className="underline decoration-coral-200 decoration-2 ">
                Fliesenverlegung
              </span>{" "}
              für moderne Lebensräume.
            </h1>
            <p className=" text-xl text-left ">
              Von der sorgfältigen Auswahl der Materialien bis hin zur perfekten
              Umsetzung – wir garantieren{" "}
              <span className="underline decoration-coral-200 decoration-2">
                Qualität
              </span>{" "}
              , die überzeugt und Räume zum Leben erweckt.
            </p>
          </div>
          <div className=" p-3 border w-3/4 hover:border-2 ">
            <button className="">
              <p className="text-lg">
                Kontaktieren Sie uns für eine individuelle Beratung
              </p>
            </button>
          </div>
        </div>

        <div
          id="picture-showcase"
          className="w-1/2 flex flex-col gap-1  relative carousel "
        >
          {replicatedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" h-1/3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
