import React from "react";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import classes from "./list-card.module.css";
import { lists } from "../../utility/constants";

/**
 * 
 * @returns list of items e.g World
 */
const ListCard = () => {
  const { list_card_container } = classes;
  return (
    <section className={list_card_container}>
      {lists.map((item) => (
        <ul key={item}>
          <li>
            {item} <MdKeyboardArrowDown />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default ListCard;
