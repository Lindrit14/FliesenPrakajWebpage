import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards({ text, icon, onClick }) {
  return (
    <div className="w-1/2 h-1/6 flex flex-col justify-center p-14">
      <div className="flex justify-center items-center">
        <div className="p-4 border w-full hover:border-2 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={icon} />
          <button onClick={onClick} className="p-7">
            <p className="text-xl">{text}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
