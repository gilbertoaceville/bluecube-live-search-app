import React, { createContext, useMemo, useState } from "react";
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

  return (
    <AppDataContext.Provider
      value={{
        data: response.results,
        error,
        loading,
        setQuery,
      }}
    >
      <LandingPage />
    </AppDataContext.Provider>
  );
}

export default App;
