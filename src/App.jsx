import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./Comp/Homepage";
import Navbar from "./Comp/Navbar";
import Footer from "./Comp/Footer";
import { useEffect, useState } from "react";
import Cart from "./Comp/Cart";
import Wishlist from "./Comp/Wishlist";
import SingleProduct from "./Comp/SingleProduct";

function App() {

  const [product,setProduct] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/").then((res)=>{
      return res.json()
    }).then((result)=>{
      setProduct(result)
    })
  },[])

  return ( 
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage productData={product}/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   );
}

export default App;