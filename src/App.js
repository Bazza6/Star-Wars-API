import Navbar from "./components/Navbar";
import { Route, Router, Routes, } from "react-router-dom";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Starship from "./components/Starship";
import { Styled_background } from "./styled-component/styled";
import { useState } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styled-component/globalStyles";
import GuardedRoute from "./components/GuardedRoute";


function App() {

  const [isAutheticated, setisAutheticated] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Styled_background>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />

          <Route
            path="/main"
            element={
              <GuardedRoute auth={isAutheticated}>
                <Main />
              </GuardedRoute>
            }
          />

          <Route path="/starship/:ID" element={<Starship />} />

          <Route path="/log-in" element={<LogIn setisAutheticated={setisAutheticated} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>



      </Styled_background>
    </>
  );
}

export default App;