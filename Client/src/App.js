import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";
import NotFound from "./component/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfound" element={<NotFound />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
