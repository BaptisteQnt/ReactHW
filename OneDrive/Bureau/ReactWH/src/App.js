import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/plat/:slug" element={<DishDetails />}  />
        <Route path="/a-propos" element={<About/>}/>
        <Route path="/panier" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        
      </Route>
    </Routes>
  );
}

export default App;
