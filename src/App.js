import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Benefit from "./Pages/Benefit";
import Work from "./Pages/Work";
import WorkSecond from "./Pages/WorkSecond";
import Community from "./Pages/Community";
import PaymentSystem from "./Pages/PaymentSystem";
import EscrowsTable from "./component/EscrowsTable";
function App() {
  return (
    <div>
      <Navbar />
      <PaymentSystem/>
      <Work />
      <WorkSecond />
      <Community />
      <Benefit />
      {/* <EscrowsTable/> */}
      <Footer />
    </div>
  );
}

export default App;
