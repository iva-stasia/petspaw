import React from "react";
import Search from "../Search";
import AppBarMenu from "./AppBarMenu";

const AppBar = () => {
  return (
    <div className="flex gap-2.5">
      <Search />
      <AppBarMenu />
    </div>
  );
};

export default AppBar;
