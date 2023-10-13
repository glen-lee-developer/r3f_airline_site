import { ThreeScene } from "./scene";
import { Leva } from "leva";
import FlightSelection from "./components/FlightSelection";
import Header from "./components/Header";
import Globe from "./components/Globe";

function App() {
  return (
    <main className="h-screen relative ">
      <Header />
      <ThreeScene />
      <FlightSelection />
      <Globe />
      {/* WELCOME */}
      {/* EXECUTIVECLUB */}
      {/* PLACE SUGGESTIONS */}
      {/* OUR DESTINATIONS (GLOBE) */}
      {/* LIST OF CLASSES */}
      {/* OUR FLEET */}
      {/* SUBSCRIBE */}
      {/* FOOTER */}
    </main>
  );
}

export default App;
