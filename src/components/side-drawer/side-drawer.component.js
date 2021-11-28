import React, { useEffect } from "react";
import { IoCube } from "@react-icons/all-files/io5/IoCube";
import { pageLinks, primaryColor } from "../../utility/constants";
import classes from "./side-drawer.module.css";

/**
 *
 * @returns jsx for SideDrawer on the Left Layout
 */
const SideDrawer = () => {
  const { drawer_container, logo, nav, nav_links, remove_drawer } = classes;

  useEffect(() => {
    // Hides side drawer from the focused UI
    window.addEventListener("click", () => {
      document.documentElement.classList.add(remove_drawer);
    });

    return () =>
      // clean-up
      window.removeEventListener("click", () => {
        document.documentElement.classList.add(remove_drawer);
      });
  }, [remove_drawer]);
  return (
    <section onClick={(e) => e.stopPropagation()} className={drawer_container}>
      <div className={logo}>
        <header>
          <h1>
            <IoCube color={primaryColor} size={30} /> <label>bluecube</label>
          </h1>
        </header>
      </div>
      <nav className={nav}>
        <ul className={nav_links}>
          {pageLinks.map(({ icon, ref }) => (
            <li key={ref}>
              {icon}
              <a href={`#${ref}`}>{ref}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SideDrawer;
