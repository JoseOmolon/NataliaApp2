import { HashRouter as Router } from "react-router-dom"; // Use HashRouter for single-page style
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import EducationalApps from "./components/EducationalApps";
import EducationalVideo from "./components/EducationalVideo";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Hero id="home" />
        <EducationalApps id="educational-web-apps" />
        <EducationalVideo id="educational-videos" />
        {/* <Contacts id="contacts" /> Uncomment when ready */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
