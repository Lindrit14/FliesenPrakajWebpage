import { useNavigate } from "react-router-dom";

function MoreProjects() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className="p-5 bg-pearl-400 rounded-full"
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
}

export default MoreProjects;
