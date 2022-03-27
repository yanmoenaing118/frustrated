import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/home"));
const Dramas = lazy(() => import("./pages/dramas"));
const DramaDetails = lazy(() => import("./pages/dramas/DramaDetails"));
const Songs = lazy(() => import("./pages/songs"));
const Actresses = lazy(() => import("./pages/actresses"));
const Categories = lazy(() => import("./pages/categories"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dramas" element={<Dramas />} />
            <Route path="/dramas/:id" element={<DramaDetails />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/actresses" element={<Actresses />} />
            <Route path="/categories/*" element={<Categories />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
