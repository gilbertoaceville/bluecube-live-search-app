import React, { useCallback, useContext, useEffect, useRef } from "react";
import { AppDataContext } from "../../App";
import { HiOutlineSearch } from "@react-icons/all-files/hi/HiOutlineSearch";
import Button from "../button/button.component";
import classes from "./searchbar.module.css";
import { debounce } from "lodash";

/**
 *
 * @returns an input tag with an icon and a button
 * accesses setQuery (setState) function through context API (AppDataContext)
 */
const SearchBar = () => {
  const { query, setQuery } = useContext(AppDataContext);

  //inputRef
  const inputRef = useRef();

  /**
   *
   * @param {*} e Synthetic event
   * @param {*} text refers to value of the input
   * @returns query
   */
  // const searchQuery = (e, text) => {
  //   e.preventDefault();
  //   if (!text) return;
  //   setQuery(text);
  // };
  const { form_container } = classes;

  const handleSearchQuery = useCallback(
    (e) => {
      e.preventDefault();
      if (query !== "") {
        debounce(() => {
          setQuery(inputRef.current.value.trim());
        }, 100)();
      }
    },
    [query, setQuery]
  );

  // useEffect(() => {
  //   document
  //     .addEventListener("change", handleSearchQuery);
  //   return () =>
  //     document
  //       .removeEventListener("change", handleSearchQuery);
  // }, [handleSearchQuery]);
  return (
    <form onSubmit={handleSearchQuery} className={form_container}>
      <HiOutlineSearch color="#7e7d84" onClick={handleSearchQuery} />
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
