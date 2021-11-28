import React, { useEffect, useState } from "react";
import Card from "../card/card.component";
import classes from "./image-cards.module.css";

/**
 *
 * @param {*} param0 data(props) refers to fetch data
 * @returns
 */
const ImageCards = ({ data = [] }) => {
  const [text, setText] = useState("");

  // display text after 3 secs
  const checkData = () => {
    setTimeout(() => {
      setText("Data Queried Not Found");
    }, 3000);
  };

  useEffect(() => {
    checkData();
  }, [data, text]);
  const { cards_wrapper, text_wrapper } = classes;
  return (
    <div className={cards_wrapper}>
      {!data?.length ? (
        <header className={text_wrapper}>
          <h1>{text}</h1>
        </header>
      ) : (
        data?.map((item) => (
          <Card
            key={item.id}
            alt_desc={item.alt_description}
            img={item.urls.thumb}
            name={item.user.first_name}
            location={item.user.location || "New York"}
          />
        ))
      )}
    </div>
  );
};

export default ImageCards;
