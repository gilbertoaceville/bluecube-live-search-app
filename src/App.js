import React, {
  createContext,
  useMemo,
  useState,
} from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import { useAjax } from "./hooks/useAjax";

require("dotenv").config();
export const AppDataContext = createContext(null);
function App() {
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  const [query, setQuery] = useState("men");
  const { data, error, loading } = useAjax(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
  );
  const response = useMemo(() => (data === null ? { data: [] } : data), [data]);

  // const text = "Deliver us from all evil and give us our daily bread";
  // const itemize = () => {
  //   const letters = text
  //     .split("")
  //     .filter((l) => l !== " ")
  //     .reduce((collection, item) => {
  //       const letter = item.toLowerCase();
  //       console.log(letter, collection);
  //       return {
  //         ...collection,
  //         [letter]: (collection[letter] || 0) + 1,
  //       };
  //     }, {});

  //   // return Object.entries(letters).sort((a, b) => b[1] - a[1]);
  // };
  // useEffect(() => {
  //   // console.log(itemize());
  //   // toggling using useReducer
  // }, [text]);
  return (
    <AppDataContext.Provider
      value={{
        data: response.results,
        error,
        loading,
        query,
        setQuery,
      }}
    >
      <LandingPage />
    </AppDataContext.Provider>
  );
}

export default App;
  