import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { CartContext } from "../context/CartContext";
import { Badge, Button } from "antd";
import { LogoutOutlined, MoonOutlined, ShoppingCartOutlined } from "@ant-design/icons";

function Header() {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("theme in header=>", theme);
  console.log("user in header=>", user);
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header
      className={`
    ${theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"}
    "text-gray-600 body-font"`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <Link className="ml-3 text-xl">Learning React Router</Link>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link to="/weather" className="mr-5 hover:text-gray-900">
            Weather App
          </Link>
          <Link to="/useState" className="mr-5 hover:text-gray-900">
            Use State
          </Link> */}
          <Link to="/useEffect" className="mr-5 hover:text-gray-900">
            Use Effect
          </Link>
          <Link to="/statusCard" className="mr-5 hover:text-gray-900">
            Status Cards
          </Link>

          {user?.isLogin ? (
            <div className="flex mx-2 rounded-md items-center border-2 border-gray-200 py-1">
              <Link to={"/profile"}>
                <h1 className="mx-2">{user.username}</h1>
              </Link>
              <Button className="mx-2" shape="circle" icon={<LogoutOutlined />} onClick={handleSignOut} >

              </Button>
            </div>
          ) : (
            <Link to="/signin" className="mr-5 hover:text-gray-900">
              Login
            </Link>
          )}
        </nav>

        <Link to={'/cart'}>
          <Badge count={cartItems.length} className="mx-4">

            <Button
              icon={<ShoppingCartOutlined />}

              shape="circle"
              onClick={() => {
                setTheme(theme == "light" ? "dark" : "light");
              }}
            />
          </Badge>
        </Link>

        <Button
          icon={<MoonOutlined />}
          shape="circle"
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        />
      </div>
    </header>
  );
}

export default Header;
