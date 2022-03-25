import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Dramas from "./pages/dramas/";
import DramaDetails from "./pages/dramas/DramaDetails";
import Songs from "./pages/songs";
import Actresses from "./pages/actresses";
import Categories from "./pages/categories";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dramas" element={<Dramas />} />
          <Route path="/dramas/:id" element={<DramaDetails />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/actresses" element={<Actresses />} />
          <Route path="/categories/*" element={<Categories />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
