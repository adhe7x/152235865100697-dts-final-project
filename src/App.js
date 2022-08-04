import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";
import RecipesInfo from "./components/RecipesInfo";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>}
            />
            <Route exact path="/recipes" element={
              <ProtectedRoute>
                <Recipes />
              </ProtectedRoute>}
            />
            <Route path="/:MealId" element={
              <ProtectedRoute>
                <RecipesInfo />
              </ProtectedRoute>}
            />
            <Route exact path="/categories" element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>}>
            </Route>
            <Route exact path="/login" element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>}
            />
            <Route exact path="/register" element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>}
            />
            <Route path="*" element={<NoMatch />} />
        </Routes>        
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
