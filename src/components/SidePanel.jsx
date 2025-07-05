import { useNavigate } from "react-router-dom";

const SidePanel = () => {
  const navigate = useNavigate();

  return (
    <div className="w-80 min-h-screen text-white flex flex-col p-4  backdrop-blur-2xl contrast-125">
      <h2 className="text-2xl font-bold mb-4" style={{fontFamily:'Trebuchet MS'}}>BlogPen</h2>
      <div className="buttons flex flex-col justify-center">
        <button
          className="mb-2 p-2 text-md flex items-center bg-gray-300/20 rounded hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          <img src="/icons/home.png" alt="" className="mx-3 h-6 w-6"/>
          Home
        </button>
        <button
          className="mb-2 p-2 text-md flex items-center bg-gray-300/20 rounded hover:bg-gray-600"
          onClick={() => navigate("/dashboard")}
        >
          <img src="/icons/dashboard.png" alt="" className="mx-3 h-5 w-5"/>
          Dashboard
        </button>
        <button
          className="mb-2 p-2 text-md flex items-center bg-gray-300/20 rounded hover:bg-gray-600"
          onClick={() => navigate("/createpost")}
        >
          <img src="/icons/create.png" alt="" className="mx-3 h-5 w-5"/>
          Create
        </button>
      </div>
    </div>
  );
};

export default SidePanel;