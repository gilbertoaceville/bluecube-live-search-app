import React, { lazy, useContext } from "react";
import { Suspense } from "react";
import { AppDataContext } from "../../App";
import ListCard from "../../components/list-card/list-card.component";
import Navigation from "../../components/navigation/navigation.component";
import SideDrawer from "../../components/side-drawer/side-drawer.component";
import Loader from "../../components/loader/loader.component";
import classes from "./LandingPage.module.css";

const ImageCards = lazy(() =>
  import("../../components/image-cards/image-cards.component")
);

/**
 * 
 * @returns a grid layout with two columns
 * represents the entire UI
 */
const LandingPage = () => {
  const { error, data } = useContext(AppDataContext);
  const { app, layout, right_layout, error_text } = classes;
  return (
    <main className={app}>
      <article className={layout}>
        <SideDrawer />
        <section className={right_layout}>
          <Navigation />
          <ListCard />
          {error ? (
            <header className={error_text}>
              <h1>An error occurred</h1>
            </header>
          ) : (
            <Suspense fallback={<Loader />}>
              <ImageCards data={data} />
            </Suspense>
          )}
        </section>
      </article>
    </main>
  );
};

export default LandingPage;
