import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import NewsPage from "./components/NewsPage";
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [mode, setmode] = useState("light");
  let toogle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
    }
  };
  // console.log(mode)
  const loadingBarRef = useRef(null)

  return (
    <>
      <Router>
        
        <Navbar mode={mode} toogle={toogle} />
        <LoadingBar color="#f11946" ref={loadingBarRef} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsPage 
                key="general" changeref={loadingBarRef}
                data={{ category: "general" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <NewsPage  
                key="business" changeref={loadingBarRef}
                data={{ category: "business" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <NewsPage changeref={loadingBarRef}
                key="entertainment"
                data={{ category: "entertainment" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <NewsPage changeref={loadingBarRef}
                key="health"
                data={{ category: "health" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsPage changeref={loadingBarRef}
                key="science"
                data={{ category: "science" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <NewsPage changeref={loadingBarRef}
                key="sports"
                data={{ category: "sports" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <NewsPage changeref={loadingBarRef}
                key="technology"
                data={{ category: "technology" }}
                mode={mode}
                toogle={toogle}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
