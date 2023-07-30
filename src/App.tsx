import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/use";
import Homepage from "./pages/Client/homepage";
import Signup from "./pages/Client/Signup";
import Signin from "./pages/Client/Signin";
import ProductDetail from "./pages/Client/productdetail";
import AdminLayout from "./components/layout/admin";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
