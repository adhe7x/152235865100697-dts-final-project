import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/recipes" element={<Recipes />} />
            <Route path="/categories" element={<Categories />} />
            {/* <Route path="/registration" element={<Registration />} /> */}
        </Routes>        
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
