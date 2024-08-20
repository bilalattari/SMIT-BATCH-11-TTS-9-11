import "./App.css";

function App() {
  const batch = "SMIT-TTS-9-11-(HO)";
  const isLogin = false;
  const students = [
    {
      name: "Siddique",
      rollNo: 122425,
    },
    {
      name: "ABCD",
      rollNo: 12345,
    },
    {
      name: "AAA",
      rollNo: 12345,
    },
    {
      name: "SSS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
    {
      name: "DDSDS",
      rollNo: 1233345,
    },
    {
      name: "DDSDS",
      rollNo: 12345,
    },
  ];

  return (
    <div>
      <h1>Our Batch is {batch} </h1>

      <button> {isLogin ? "Log out" : "Login"} </button>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{data.name}</td>
                <td>{data.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <h1>
        This Function {`()=> "string"`} returns
        {(() => (
          <h1 style={{ textDecoration: "underline" }}> string</h1>
        ))()}
      </h1> */}
    </div>
  );
}

export default App;
