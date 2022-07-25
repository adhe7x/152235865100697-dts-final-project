import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GettingSkill from "./components/GettingSkill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main container">
        <Home />
        <GettingSkill />
      </div>
      <Footer />
    </div>
  );
}

export default App;
