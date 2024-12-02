import React from "react";
import "./App.css";
import AppRoutes from "./AppRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <AppRoutes></AppRoutes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
