import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import StatusCard from "./pages/StatusCard";
import Weather from "./pages/Weather";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Product from "./pages/ProductDetail";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import { auth } from "./utils/firebase";
import Profile from "./pages/Profile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/statusCard" element={<StatusCard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
