import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import VendorList from "./components/VendorList";

function App() {
  return (
    <div className="flex">
      <NavBar />
      <VendorList />
    </div>
  );
}

export default App;
