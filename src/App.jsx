// import "./App.css";
import Home from "./pages/Home";
import PageScroll from "./PageScroll";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-scroll" element={<PageScroll />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <div className="button">Hover</div>
      </div>
      <div>
        <PageScroll />
      </div> */}
    </>
  );
}

export default App;
