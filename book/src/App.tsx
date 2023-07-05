import { useRef } from "react";
import Home from "./Pages/Home";
import { GlobalStyle } from "./Style/Global";
import {Routes, Route} from "react-router-dom"
import PageStyle from "./Style/PageStyle";
import './Font/font.css'
import NavBar from "./Component/NavBar/NavBar";



function App() {
  const containerRef = useRef(null)

  return (
    <div>
      <GlobalStyle />
      <PageStyle>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
      </PageStyle>
    </div>
  );
}

export default App;
