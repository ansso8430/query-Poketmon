import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DetailPage } from "./pages/DetailPage";
import { IndexPage } from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<IndexPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
