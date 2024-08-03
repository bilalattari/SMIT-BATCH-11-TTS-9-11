import "./App.css";
function App() {
  const webData = {
    heading: "All Products at your Fingertips",
    subheading:
      "You can find more then 1000 types of products collection on our website",
    categories: [
      {
        category: "Men",
        key: 1,
      },
      {
        category: "Women",
        key: 2,
      },
      {
        category: "Child",
        key: 3,
      },
      {
        category: "New Born",
        key: 4,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl font-bold underline">{webData.heading}</h1>
      <h2 className="text-2xl font-semibold mt-4 ">{webData.subheading}</h2>

      <div className="grid grid-cols-3 my-4 cursor-pointer justify-center items-center gap-5">
        {webData.categories.map((data) => {
          return (
            <div
              key={data.key}
              className="border rounded-md border-blue-400 p-4 flex-1"
            >
              <h1 className="font-semibold text-2xl ">{data.category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
