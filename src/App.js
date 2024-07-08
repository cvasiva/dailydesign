import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewPortfolioPage from "./components/View_Portfolio_Page";
import DesignPage from "./components/Design_Page";
import MenuNavigations from "./components/Menu_Navigations";
import UiuxMenuPage from "./components/Ui_ux_Menu_Page";
import SociamediadesignPage from "./components/Social_media_design_Page";
import SocialmediaBranding from "./components/Socialmedia_Branding";
import Consultation from "./pages/Consultation";
import ScrollToTop from "./context/ScrollToTop";
import Services from "./pages/Services";
import ErrorBoundary from "./ErrorBoundary";
import Graphicdesig from "./pages/Graphicdesig";
import Appdesign1 from "./pages/Appdesign1";
import Websitedesign1 from "./pages/Websitedesign1";
function App() {
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     if (event.target.tagName === 'IMG') {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Routes basename="/">
            <Route element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<ErrorBoundary />} />
            <Route exact path="/services" element={<Services />} />
            <Route
              exact
              path="/viewportfolio"
              element={<ViewPortfolioPage />}
            />

            <Route path="/viewportfolio/:id" element={<DesignPage />} />
            <Route path="/designs" element={<MenuNavigations />} />
            <Route path="/designs/:id" element={<MenuNavigations />} />
            <Route path="/designs/:id/:designs" element={<UiuxMenuPage />} />
            <Route
              path="/social_media_designs"
              element={<SocialmediaBranding />}
            />
            <Route
              path="/social_media_designs/:id"
              element={<SociamediadesignPage />}
            />
            <Route exact path="/contacts" element={<Consultation />} />
            <Route exact path="/graphicdesign" element={<Graphicdesig />} />
            <Route exact path="/websitedesign" element={<Websitedesign1 />} />
            <Route exact path="/appdesign" element={<Appdesign1 />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
