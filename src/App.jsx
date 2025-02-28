// import "./App.css";
import { useServerLink } from "./context/server.context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import PageLoader from "./components/PageLoader";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermCondition from "./pages/TermCondition";
import SolarRecycling from "./pages/SolarRecycling";
import SolarDecommissioning from "./pages/SolarDecommissioning";
import SolarDigitization from "./pages/SolarDigitization";
import Product from "./pages/Product";
import SolarPVPanelRecycling from "./pages/SolarPVPanelRecycling";
import Blog1 from "./pages/blogPage/Blog1";
import Blog2 from "./pages/blogPage/Blog2";

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
          <Route
            path={`${serverLink}/solar-recycling`}
            element={<SolarRecycling />}
          />
          <Route
            path={`${serverLink}/decommissioning`}
            element={<SolarDecommissioning />}
          />
          <Route
            path={`${serverLink}/digitization`}
            element={<SolarDigitization />}
          />
          <Route path={`${serverLink}/product`} element={<Product />} />
          <Route
            path={`${serverLink}/solar-pv-panel-recycling`}
            element={<SolarPVPanelRecycling />}
          />
          <Route path={`${serverLink}/solar-panel-waste`} element={<Blog1 />} />
          <Route
            path={`${serverLink}/solar-panel-recyling`}
            element={<Blog2 />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageLoader>
  );
}

export default App;
