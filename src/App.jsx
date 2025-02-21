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
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermCondition from "./pages/TermCondition";

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
          <Route path={`${serverLink}/contact`} element={<Contact />} />
          <Route path={`${serverLink}/blog`} element={<Blog />} />
          <Route
            path={`${serverLink}/privacy-policy`}
            element={<PrivacyPolicy />}
          />
          <Route
            path={`${serverLink}/term-condition`}
            element={<TermCondition />}
          />
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
