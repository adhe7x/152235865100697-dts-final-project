import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
