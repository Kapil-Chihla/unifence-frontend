import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./HomePage";
import AboutUs from "./Routes/AboutUs";
import ScrollToTop from "./ScrollToTop.jsx"; // Make sure the path matches your file structure
import ContactUs from "./Routes/ContactUs.jsx";
import OurApprovals from "./Routes/OurApprovals.jsx";
import UniferenceSuraksh from "./Routes/UnifenceSuraksh.jsx";
import PowerTransmission from "./Routes/PowerTransmission.jsx";
import Railway from "./Routes/Railway.jsx";
import UnifenceFencade from "./Routes/UnifenceFencade.jsx";
import ChainLinkFence from "./Routes/ChainLinkFence.jsx";
import HoneyComb from "./Routes/HoneyComb.jsx";
import KishenShanti from "./Routes/KisenShanti.jsx";
import Concertina from './Routes/Concertina.jsx';
import FenceAddOns from './Routes/FenceAddOns.jsx'
import WovenMesh from "./Routes/WovenMesh.jsx";
import OtherWelded from "./Routes/OtherWelded.jsx";
import WeldMesh from "./Routes/WeldMesh.jsx";
import Wires from "./Routes/Wires.jsx";
import Gabions from "./Routes/Gabions.jsx";
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <div className="w-full overflow-x-hidden"> 
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-approvals" element={<OurApprovals/>} />
          <Route path="/unifence-suraksh" element={<UniferenceSuraksh/>} />
          <Route path="/power-transmission-and-distribution" element={<PowerTransmission/>} />
          <Route path="/railway-electrification-structures" element={<Railway/>} />
          <Route path="/unifence-fencade" element={<UnifenceFencade/>} />
          <Route path="/chain-link-fence" element={<ChainLinkFence/>} />
          <Route path="/honeycomb-fence" element={<HoneyComb/>} />
          <Route path="/unifence-kisen-shanti" element={<KishenShanti/>} />
          <Route path="/unifence-concertina-coil" element={<Concertina/>} />
          <Route path="/fence-add-ons" element={<FenceAddOns/>} />
          <Route path="/woven-mesh" element={<WovenMesh/>} />
          <Route path="/other-welded-mesh-products" element={<OtherWelded/>} />
          <Route path="/weld-mesh-fence" element={<WeldMesh/>} />
          <Route path="/wires" element={<Wires/>} />
          <Route path="/gabions" element={<Gabions/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;