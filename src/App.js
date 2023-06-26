
import Home from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Details from "./components/Details";



function App() {

  return (
     <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/category" element={<Category />}/>
      <Route path="/details" element={<Details />}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
  
  );
}

export default App;
