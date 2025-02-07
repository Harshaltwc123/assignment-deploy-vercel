import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./component/Navbar1";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Whatweoffer from "./pages/Whatweoffer";
import Aboutus from "./pages/Aboutus";
import Hubnexeducate from "./pages/Hubnexeducate";
import Getintouch from "./pages/Getintouch";
import Footer from "./component/Footer";

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
      <Navbar1 />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10"><Home/></h1>} />
        <Route path="/companies" element={<h1 className="text-center mt-10"><Companies/></h1>} />
        <Route path="/whatweoffer" element={<h1 className="text-center mt-10"><Whatweoffer/></h1>} />
        <Route path="/aboutus" element={<h1 className="text-center mt-10"><Aboutus/></h1>} />
        <Route path="/hubnexeducate" element={<h1 className="text-center mt-10"><Hubnexeducate/></h1>} />
        <Route path="/getintouch" element={<h1 className="text-center mt-10"><Getintouch/></h1>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  
  );
}

export default App;
