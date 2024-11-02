import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EducationalApps from "./components/EducationalApps";
import EducationalVideo from "./components/EducationalVideo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero id="home" />
      <EducationalApps id="educational-web-apps" />
      <EducationalVideo id="educational-videos" />
      {/* Add Contacts when ready */}
      <Footer />
    </div>
  );
}

export default App;
