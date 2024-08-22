function Avatar({ img, username, title = "---", onClick, bgColor, txtColor }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bgColor ? bgColor : "white",
        color: txtColor ? txtColor : "black",
      }}
      className="cursor-pointer w-1/2 my-2 mx-auto flex border p-3 border-purple-400 rounded-full"
    >
      <img
        className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
        src={img}
      />
      <div className="flex-1  ml-3">
        <h1 className="font-medium text-2xl text-left">{username}</h1>
        <h1 className="font-normal text-left">{title}</h1>
      </div>
    </div>
  );
}

export default Avatar;
