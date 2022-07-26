import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/recipes" element={<Recipes />} /> */}
            {/* <Route path="/categories" element={<Categories />} /> */}
            {/* <Route path="/registration" element={<Registration />} /> */}
        </Routes>        
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
