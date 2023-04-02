import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/use";
import Homepage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
