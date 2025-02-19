// import "./App.css";
import { useServerLink } from "./context/server.context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollTry from "./pages/ScrollTry";
import PageScroll from "./PageScroll";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestOverlay from "./test/TestOverlay";
import About from "./pages/About";
import PageLoader from "./components/PageLoader";

// const develpomentServername = "/beyondrenewables";
// const develpomentServername = "";

function App() {
  const { serverLink } = useServerLink();

  console.log(serverLink);

  return (
    <PageLoader>
      <BrowserRouter>
        <Routes>
          <Route path={`${serverLink}/`} element={<Home />} />
          <Route path={`${serverLink}/about`} element={<About />} />
          <Route path={`${serverLink}/page-scroll`} element={<PageScroll />} />
          {/* Test pages */}
          <Route path={`${serverLink}/scrolltry`} element={<ScrollTry />} />
          <Route
            path={`${serverLink}/test-overlay`}
            element={<TestOverlay />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageLoader>
  );
}

export default App;
