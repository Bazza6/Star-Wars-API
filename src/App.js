import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Starship from "./components/Starship";
import { Styled_background } from "./styled-component/styled";
import { useState } from "react";

function App() {

  const [isAutheticated, setisAutheticated] = useState(false);


  return (
    <>
      <Styled_background>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/main" element={<Main />} />

          <Route path="/starship/:ID" element={<Starship />} />

          <Route path="/log-in" element={<LogIn setisAutheticated={setisAutheticated} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>


      </Styled_background>
    </>
  );
}

export default App;