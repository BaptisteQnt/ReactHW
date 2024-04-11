import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }


  return (
    <Routes>
      <Route element={<Layout cart={cart} />}>
        <Route index element={<Home />} />
        <Route path="/plat/:slug" element={<DishDetails addToCart={addToCart} />}  />
        <Route path="/a-propos" element={<About/>}/>
        <Route path="/panier" element={<Cart cart={cart}/>} />
        <Route path="*" element={<PageNotFound />} />
        
      </Route>
    </Routes>
  );
}

export default App;
