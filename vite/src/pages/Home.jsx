import Avatar from "../components/Avatar";

function Home() {
  const batch = "SMIT-TTS-9-11-(HO)";
  const isLogin = false;

  const users = [
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "See Stars in the Sky",
      username: "Galaxy",
      bgColor : "black",
      txtColor : "white"
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "See Stars in the Sky",
      username: "Flowers",
      bgColor : "purple",
      txtColor : "white"
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "See Stars in the Sky",
      username: "Waterfall",
      bgColor : "skyblue",
      txtColor : "blue"
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "See Stars in the Sky",
      username: "ABCD",
      bgColor : "brown",
      txtColor : "white"
    },
  ];

  return (
    <div>
      <h1 className="text-3xl underline text-center font-semibold my-4">
        USER PROFILES
      </h1>

      {users.map((data, ind) => (
        <Avatar
          key={ind}
          bgColor={data.bgColor}
          txtColor={data.txtColor}
          img={data.img}
          username={data.username}
          title={data.title}
          onClick={() => console.log(data)}
        />
      ))}

      {/* <h1>Our Batch is {batch} </h1> */}

      {/* <button> {isLogin ? "Log out" : "Login"} </button>

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
      </table> */}

      {/* <h1>
        This Function {`()=> "string"`} returns
        {(() => (
          <h1 style={{ textDecoration: "underline" }}> string</h1>
        ))()}
      </h1> */}
    </div>
  );
}

export default Home;
