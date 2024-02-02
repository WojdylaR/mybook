import { useRef } from "react";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom"
import PageStyle from "./Style/PageStyle";
import './Font/font.css'
import NavBar from "./Component/NavBar/NavBar";
import useWindowSize from "./Hook/useScreenSize";



function App() {
  const containerRef = useRef(null)
  const windowWidth = useWindowSize().width

  return (
    <div>
      <PageStyle>
      {windowWidth && windowWidth > 750 ? <NavBar /> : ""}
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      </PageStyle>
    </div>
  );
}

export default App;
