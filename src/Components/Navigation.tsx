import { Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="flex items-center fixed left-5 top-5 ">
        <li className="">
          <button
            className=" py-3 px-4  bg-stone-400 rounded-sm shadow-sm"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </li>
        <li>
          <button
            className="ml-3 py-3 px-4  bg-stone-400 rounded-sm shadow-sm"
            onClick={() => navigate("/")}
          >
            HOME
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navigation;
