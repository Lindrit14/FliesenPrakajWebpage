import { useState } from "react";
import Cards from "./utils/Cards";
import ServiceDisplay from "./utils/ServiceDisplay";
import {
  faClone,
  faBroom,
  faHammer,
  faUpRightAndDownLeftFromCenter,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <section
      id="Services"
      className="p-4 h-screen bg-concrete-50 w-3/4 overflow-hidden"
    >
      <div
        id="outerService"
        className="h-full flex items-center justify-center"
      >
        <div
          id="left-picture"
          className="w-1/2 flex flex-col gap-12 justify-center items-center h-1/2    "
        >
          <Cards
            icon={faClone}
            text={"Fliesenverlegung"}
            onClick={() => handleServiceChange("Fliesenverlegung")}
          />
          <Cards
            icon={faBroom}
            text={"Reinigung"}
            onClick={() => handleServiceChange("Reinigung")}
          />
          <Cards
            icon={faHammer}
            text={"Sanierung"}
            onClick={() => handleServiceChange("Sanierung")}
          />
          <Cards
            icon={faUpRightAndDownLeftFromCenter}
            text={"Großformat"}
            onClick={() => handleServiceChange("Großformat")}
          />
          <Cards
            icon={faChessBoard}
            text={"Mozzaik"}
            onClick={() => handleServiceChange("Mozzaik")}
          />
        </div>
        <div
          id="verticalDivider"
          className="h-full w-[1px] bg-black mx-auto my-0"
        ></div>

        {selectedService === "Fliesenverlegung" && (
          <ServiceDisplay
            title={"Fliesenverlegung"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam consequuntur nemo esse consequatur velit? Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?"
            }
            color={"bg-wood-700"}
            srcImage={"/Fliesenverlegen1.jpg"}
          />
        )}
        {selectedService === "Reinigung" && (
          <ServiceDisplay
            title={"Reinigung der Fliesen"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam consequuntur nemo esse consequatur velit? Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?"
            }
            color={" bg-coral-300"}
            srcImage={"/reinigungfliesen.jpg"}
          />
        )}
        {selectedService === "Sanierung" && (
          <ServiceDisplay
            title={"Sanierung"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam consequuntur nemo esse consequatur velit? Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?"
            }
            color={" bg-olive-700"}
            srcImage={"/sanierung.jpg"}
          />
        )}
        {selectedService === "Großformat" && (
          <ServiceDisplay
            title={"Großformat"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam consequuntur nemo esse consequatur velit? Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?"
            }
            color={" bg-concrete-600"}
            srcImage={"/pool-grossformat.jpg"}
          />
        )}
        {selectedService === "Mozzaik" && (
          <ServiceDisplay
            title={"Mozzaik"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam consequuntur nemo esse consequatur velit? Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?Dolores aperiam consequuntur nemo esse consequatur velit?"
            }
            color={" bg-concord-200"}
            srcImage={"/mozaik.jpg"}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
