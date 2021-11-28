import React from "react";
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { IoIosHeartEmpty } from "@react-icons/all-files/io/IoIosHeartEmpty";
import { AiOutlineDislike } from "@react-icons/all-files/ai/AiOutlineDislike";
import Button from "../button/button.component";
import classes from "./card.module.css";

/**
 *
 * @param {*} param0
 * data is passed from parent component (ImageCards)
 * props are image, name, location and alt_desc = img alt description for a single item
 * @returns single image card
 */
const Card = ({ img, alt_desc, name = "William", location }) => {
  const {
    card_container,
    card__footer,
    card_btns,
    slider_container,
    slider,
    overlay,
  } = classes;
  return (
    <figure className={card_container}>
      <div className={overlay}></div>
      <div className={slider_container}>
        {[...Array(4)].map((_, index) => (
          <span key={index.toString()} className={slider}></span>
        ))}
      </div>
      <img
        src={img}
        alt={alt_desc}
        draggable={false}
        loading="eager"
        width="100%"
        height="100%"
      />
      <div className={card__footer}>
        <header>
          <h1>
            {name}, {Math.floor(Math.random() * 30) + 20}
          </h1>
        </header>
        <p>
          <IoLocationOutline /> {location}
        </p>
        <div className={card_btns}>
          <Button label={<IoIosHeartEmpty />} ariaLabel="Love image" />
          <Button label={<AiOutlineDislike />} ariaLabel="Like image" />
        </div>
      </div>
    </figure>
  );
};

export default Card;
