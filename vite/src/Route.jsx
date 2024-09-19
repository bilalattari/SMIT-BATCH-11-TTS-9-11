import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
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
import CartPage from "./pages/Cart";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import AdminLayout from "./pages/Admin/Layout";

function AppRouter() {
  const { user } = useContext(UserContext);
  const { isLogin } = user;
  console.log("user=>", user);
  const userRole = "user";

  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route
          path="/auth"
          element={
            <>
              <Outlet />{" "}
            </>
          }
        >
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Home Routes */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Outlet />
              <footer className="py-3 bg-gray-100 justify-center items-center flex">
                <h1>Footer</h1>
              </footer>
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route
            path="profile"
            element={user.isLogin ? <Profile /> : <Navigate to={"/signin"} />}
          />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="statusCard" element={<StatusCard />} />
          <Route path="weather" element={<Weather />} />
          <Route path="useState" element={<UseState />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            isLogin && userRole == "admin" ? (
              <AdminLayout />
            ) : isLogin && userRole !== "admin" ? (
              <Navigate to={"/"} />
            ) : (
              <Navigate to={"/auth/signin"} />
            )
          }
        >
          <Route
            path="products"
            element={<h1 className="text-5xl text-center">Products</h1>}
          />
          <Route
            path="users"
            element={<h1 className="text-5xl text-center">Users</h1>}
          />
          <Route
            path="orders"
            element={<h1 className="text-5xl text-center">Orders</h1>}
          />
          <Route
            path="faqs"
            element={<h1 className="text-5xl text-center">FAQs</h1>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
