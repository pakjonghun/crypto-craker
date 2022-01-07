import { Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  const onChangeMode = () => {
    if (!localStorage.theme) window.matchMedia("(prefers-color-scheme: dark)");

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <ul className="flex items-center fixed left-5 top-5 ">
        <li className="">
          <button
            className=" py-3 px-4 dark:bg-stone-500 bg-stone-400 rounded-sm shadow-sm"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </li>
        <li>
          <button
            className="ml-3 py-3 px-4 dark:bg-stone-500 bg-stone-400 rounded-sm shadow-sm"
            onClick={() => navigate("/")}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            className="ml-3 py-3 px-4 dark:bg-stone-500 bg-stone-400 rounded-sm shadow-sm"
            onClick={onChangeMode}
          >
            MODE
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navigation;
