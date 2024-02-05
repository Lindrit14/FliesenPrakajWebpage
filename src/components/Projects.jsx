import { useNavigate } from "react-router-dom";
import CardsProjects from "./utils/CardsProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/more-projects");
  };

  return (
    <section className=" h-screen w-3/4 p-3 bg-concrete-50">
      <h1 className="text-center">Unsere Projekte</h1>
      <div className="flex justify-end">
        <div className="inline-flex border px-2">
          <button
            className="flex items-center gap-2 "
            onClick={handleMoreClick}
          >
            <p>Mehr</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/564x/78/ea/ab/78eaabb637b9a0eedae9c4d6c26ab95c.jpg"
          }
          title={"Modern Kitchen Tiling"}
          region={"1010 Wien"}
          category={"Küche"}
        />
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/564x/3e/2d/c8/3e2dc87e80bd7ea0533630938e6bc765.jpg"
          }
          title={"Elegant Bathroom Renovation"}
          region={"1190 Wien"}
          category={"Badezimmer"}
        />
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/564x/3e/13/b8/3e13b8893c67ca29bfdc996a3d9063f1.jpg"
          }
          title={"Stylish Outdoor Patio"}
          region={"1030 Wien"}
          category={"Außenbereich"}
        />
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/564x/34/c0/96/34c096795ad5bbe1c9ed80d7921c4c3a.jpg"
          }
          title={"Contemporary Living Room Flooring"}
          region={"1050 Wien"}
          category={"Wohnzimmer"}
        />
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/564x/4d/ea/aa/4deaaac9fd4a15a1f00808de4ad12bc8.jpg"
          }
          title={"Classic Hallway Design"}
          region={"1070 Wien"}
          category={"Flur"}
        />
        <CardsProjects
          imageUrl={
            "https://i.pinimg.com/474x/4a/5f/8e/4a5f8eb2bb2d6bc2ec6e0a0a31ffa749.jpg"
          }
          title={"Luxury Villa Pool Tiles"}
          region={"1120 Wien"}
          category={"Badezimmer"}
        />
      </div>
    </section>
  );
};

export default Projects;
