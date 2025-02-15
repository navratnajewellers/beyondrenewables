// import "./App.css";
import { useServerLink } from "./context/server.context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PageScroll from "./PageScroll";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// const develpomentServername = "/beyondrenewables";
// const develpomentServername = "";

function App() {
  const { serverLink } = useServerLink();

  console.log(serverLink);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${serverLink}/`} element={<Home />} />
        <Route path={`${serverLink}/page-scroll`} element={<PageScroll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
