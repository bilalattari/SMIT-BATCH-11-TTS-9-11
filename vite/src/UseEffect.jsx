import { useEffect, useState } from "react";

function UseEffect() {
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
    <div>
      <h1>Learning Use Effect</h1>
      <input
        placeholder="Search"
        type="search"
        className="border w-3/4 p-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searched.map((data) => (
        <h1 className="text-left p-2 my-1 bg-purple-100" key={data.id}>
          {data.id + ") "} {data.title}
        </h1>
      ))}
    </div>
  );
}

export default UseEffect;
