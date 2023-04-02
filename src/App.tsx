import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/use";
import Homepage from "./pages/homepage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
