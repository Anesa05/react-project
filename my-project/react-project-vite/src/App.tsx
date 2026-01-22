import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdoptPet from "./pages/AdoptPet";
import Register from "./pages/Regjistrimi";
import Shop from "./pages/Shop";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adopt" element={<AdoptPet />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
