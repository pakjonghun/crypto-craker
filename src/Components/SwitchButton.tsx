import React, { FC } from "react";
import { useMatch, Link, useResolvedPath } from "react-router-dom";

const SwitchButton: FC<{ to: string }> = ({ to }) => {
  const path = useResolvedPath(to);
  const isMatch = useMatch({ path: path.pathname, end: true });
  return (
    <Link
      className={`${
        isMatch ? "text-red-500" : ""
      } block text-center cursor-pointer py-2 bg-indigo-100 rounded-md shadow-sm`}
      to={path.pathname}
    >
      {to.toUpperCase()}
    </Link>
  );
};

export default SwitchButton;
