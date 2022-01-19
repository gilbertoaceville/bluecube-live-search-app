import React, { useReducer } from "react";
import SearchBar from "../searchbar/searchbar.component";
import { BsFillBellFill } from "@react-icons/all-files/bs/BsFillBellFill";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { MdChatBubble } from "@react-icons/all-files/md/MdChatBubble";
import { RiHeartFill } from "@react-icons/all-files/ri/RiHeartFill";
import { BiMenuAltLeft } from "@react-icons/all-files/bi/BiMenuAltLeft";
import {
  grayColor,
  notifyList,
  primaryColor,
  profileUrl,
  redColor,
  staticUrL,
} from "../../utility/constants";
import classes from "./navigation.module.css";

/**
 *
 * @returns jsx for Navigation Bar on the Right Layout
 */
const Navigation = () => {
  const [toggle, setToggle] = useReducer(state => !state, true);
  
  /**
   *
   * @param {*} e === Synthetic Event
   * stopPropagation cancels event listening attached to window
   * onclick, class attribute is removed from the HTML element and...
   * side drawer is displayed
   */
  const addSideBar = (e) => {
    e.stopPropagation();
    document.documentElement.removeAttribute("class");
  };

  const {
    menu_icon,
    nav_bar,
    nav_icon,
    notification_number,
    profile_container,
    profile_wrap,
    img_wrap,
    active_dot,
    profile_text_wrap,
    drop_down,
    drop_down_items,
    drop_down_img_wrapper,
    drop_down_img_text_wrap,
    drop_down_text,
  } = classes;
  return (
    <header>
      <nav className={nav_bar}>
        <div onClick={addSideBar} className={menu_icon}>
          <BiMenuAltLeft color={primaryColor} fontSize={25} />
        </div>
        <SearchBar />
        <div className={nav_icon}>
          <BsFillBellFill color={primaryColor} onClick={setToggle} />
          <span className={notification_number}>3</span>
          <div
            style={{ display: toggle ? "block" : "none" }}
            className={drop_down}
          >
            {notifyList.map(({ img, timer, title, latest }) => (
              <ul key={title} className={drop_down_items}>
                <li>
                  <span className={drop_down_img_text_wrap}>
                    <div className={drop_down_img_wrapper}>
                      <img src={img} alt="profile" />
                    </div>
                    <div className={drop_down_text}>
                      <p style={{ color: latest && primaryColor }}>{title}</p>
                      <label>{timer}</label>
                    </div>
                  </span>
                  <span>
                    {title.indexOf("commented") !== -1 ? (
                      <MdChatBubble color={primaryColor} />
                    ) : (
                      <RiHeartFill color={latest ? redColor : grayColor} />
                    )}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className={profile_container}>
          <div className={profile_wrap}>
            <div className={img_wrap}>
              <img src={profileUrl ? profileUrl : staticUrL} alt="profile" />
            </div>
            <div className={active_dot}></div>
          </div>
          <div className={profile_text_wrap}>
            <p>
              Abigail <MdKeyboardArrowDown />
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
