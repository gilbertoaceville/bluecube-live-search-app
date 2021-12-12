import React, { useContext, useRef } from "react";
import { AppDataContext } from "../../App";
import { HiOutlineSearch } from "@react-icons/all-files/hi/HiOutlineSearch";
import Button from "../button/button.component";
import classes from "./searchbar.module.css";

/**
 * 
 * @returns an input tag with an icon and a button
 * accesses setQuery (setState) function through context API (AppDataContext)
 */
const SearchBar = () => {
  const { setQuery } = useContext(AppDataContext);

  //inputRef
  const inputRef = useRef();

  /**
   * 
   * @param {*} e Synthetic event
   * @param {*} text refers to value of the input
   * @returns query
   */
  const searchQuery = (e, text) => {
    e.preventDefault();
    if (!text) return;
    setQuery(text);
  };
  const { form_container } = classes;

  // useEffect(() => {
  //   if (query !== "") {
  //     debounce(() => {
  //       const searchQuery = (e) => {
  //         setQuery(e.target.value);
  //       };
  //       document.querySelector("input").addEventListener("change", searchQuery);
  //     }, 10000)();

  //     return () =>
  //       document
  //         .querySelector("input")
  //         .removeEventListener("change", searchQuery);
  //   }
  // }, [query]);
  return (
    <form
      onSubmit={(e) => searchQuery(e, inputRef.current.value.trim())}
      className={form_container}
    >
      <HiOutlineSearch color="#7e7d84" onClick={()=>alert(4)} />
      <label>
        <input
          type="text"
          name="search"
          ref={inputRef}
          placeholder="Find Something..."
          autoFocus
        />
      </label>
      <Button label="Search" ariaLabel="search" type="submit" />
    </form>
  );
};

export default SearchBar;