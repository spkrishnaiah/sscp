import Topbar from "./Topbar/Topbar";
import Home from "./Home/Home";
import History from "./History/History";
import TechSpec from "./Tech Spec/Tech_Spec";
import Customers from "./Customer/Customer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact US/Contact";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/History" element={<History />} />
        <Route path="/TechSpec" element={<TechSpec />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
