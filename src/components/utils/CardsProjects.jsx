import Divider from "./divider";
// eslint-disable-next-line
const CardsProjects = ({ imageUrl, title, region, category }) => {
  return (
    <div className="flex flex-col w-1/3 p-9 justify-center items-center gap-3 mb-[-2em] ">
      <div className=" flex flex-col gap-2 items-center">
        <img
          className=" w-[300px] h-[300px] object-cover "
          src={imageUrl}
          alt="card image"
        />
        <hr className="w-3/4 h-0.5" />
      </div>

      <div id="lower-part" className="flex flex-col w-[300px]">
        <h2 className="truncate"> {title} </h2>
        <p> {region} </p>
        <p className="border rounded-full text-center max-w-min px-2">
          {" "}
          {category}{" "}
        </p>
      </div>
    </div>
  );
};

export default CardsProjects;
