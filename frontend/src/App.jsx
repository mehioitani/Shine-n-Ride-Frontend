import "./App.css";
import Navbar from "./components/clientSide/navbar/navbar";
import Video from "./components/landingVideo/video.jsx";
import ServicesCard from "./components/clientSide/services-card/servicesCard";

function App() {
  return (
    <div className="my-app">
      <Navbar />
      <Video />
      <ServicesCard/>
    </div>
  );
}

export default App;
