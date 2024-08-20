import { useState, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import Footer from "./Components/Footer/Footer";
import SubFooter from "./Components/Footer/SubFooter";

function App() {
  const user = useContext(AuthContext);
  return (
    <> 
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        {/* <Footer/>
        <SubFooter/> */}
      </AuthProvider>
    </>
  );
}

export default App;
