import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./component/Navbar1";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Whatweoffer from "./pages/Whatweoffer";
import Aboutus from "./pages/Aboutus";
import Hubnexeducate from "./pages/Hubnexeducate";
import Getintouch from "./pages/Getintouch";
import Footer from "./component/Footer";
import Strategic from "./component/Strategic";
import Technology from "./component/Technology";
import Investment from "./component/Investment";
import Ecosystem from "./component/Ecosystem";
import Search from "./component/Search";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
    {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10">Home Page</h1>} />
        <Route path="/about" element={<h1 className="text-center mt-10">About Page</h1>} />
        <Route path="/contact" element={<h1 className="text-center mt-10">Contact Page</h1>} />
      </Routes>
    </Router> */}

    <Router>
    <ScrollToTop/>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10"><Home/></h1>} />
        <Route path="/companies" element={<h1 className="text-center mt-10"><Companies/></h1>} />
        <Route path="/whatweoffer" element={<h1 className="text-center mt-10"><Whatweoffer/></h1>} />
        <Route path="/aboutus" element={<h1 className="text-center mt-10"><Aboutus/></h1>} />
        <Route path="/hubnexeducate" element={<h1 className="text-center mt-10"><Hubnexeducate/></h1>} />
        <Route path="/getintouch" element={<h1 className="text-center mt-10"><Getintouch/></h1>} />
        <Route path="/search" element={<h1 className="text-center mt-10"><Search/></h1>} />
        <Route path="/strategic" element={<h1 className="text-center mt-10"><Strategic/></h1>} />
        <Route path="/technology" element={<h1 className="text-center mt-10"><Technology/></h1>} />
        <Route path="/investment" element={<h1 className="text-center mt-10"><Investment/></h1>} />
        <Route path="/ecosystem" element={<h1 className="text-center mt-10"><Ecosystem/></h1>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  
  );
}

export default App;
