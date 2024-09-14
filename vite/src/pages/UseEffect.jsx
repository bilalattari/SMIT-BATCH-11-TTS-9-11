import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { ShoppingCartOutlined } from "@ant-design/icons";

function UseEffect() {
  const { isItemAdded } = useContext(CartContext)
  const { theme, setTheme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Use Effect Chal gya");
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res->", res);
        setProducts(res);
      });
  };

  const searched = products?.filter(
    (data) => data.title.toLowerCase().indexOf(search) !== -1
  );

  console.log("Component Chal gya", search);
  return (
    <div className="container mx-auto">
      <h1>Learning Use Effect</h1>
      <input
        placeholder="Search"
        type="search"
        className="border w-3/4 p-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searched.map((data) => (
        <Link key={data.id} to={`/product/${data.id}`}>
          <div className="flex w-100 items-center px-2 bg-purple-100 my-2">
            <div className="flex-grow flex">

              <img className="h-10 w-10" src={data.image} />
              <h1 className="text-left p-2 my-1 ">
                {data.id + ") "} {data.title}
              </h1>
            </div>

            {isItemAdded(data.id) ? <ShoppingCartOutlined color="white" className="mx-4" /> : null}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UseEffect;
