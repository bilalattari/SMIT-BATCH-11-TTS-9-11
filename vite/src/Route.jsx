import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import StatusCard from "./pages/StatusCard";
import Weather from "./pages/Weather";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Product from "./pages/ProductDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/statusCard" element={<StatusCard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
