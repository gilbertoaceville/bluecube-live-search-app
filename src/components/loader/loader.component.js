import React from "react";
import classes from "./loader.module.css";

//Preloader
const Loader = () => {
const {loader, loader_wrap} = classes;
  return (
    <div className={loader}>
      <div className={loader_wrap}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
