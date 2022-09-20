import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Starship from "./components/Starship";


function App() {

  let [starships, setStarships] = useState({
    "count": 0,
    "next": null,
    "previous": null,
    "results": [],
  })

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then(res => res.json())
      .then(res => setStarships(res));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/main" element={<Main starships={starships} setStarships={setStarships} />} />

        <Route path="/starship/:ID" element={<Starship starships={starships} />} />

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
