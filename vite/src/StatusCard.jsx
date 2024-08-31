import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";

function StatusCard() {
  const [status, setStatus] = useState([]);
  const [txt, setTxt] = useState("Hello");
  const [bg, setBg] = useState("#000000");
  const [txtColor, setTxtColor] = useState("#ffffff");

  const handleOnClick = () => {
    const obj = {
      txt,
      bg,
      txtColor,
      createdAt: Date.now(),
    };

    setStatus([...status, obj]);
    console.log(obj);
  };

  const onRemove = (createdAt) => {
    setStatus([...status.filter((data) => data.createdAt !== createdAt)]);
  };
  return (
    <div className="container mx-auto">
      <div className="my-4">
        <label>
          Status Text
          <input
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            className="w-60 p-1 border rounded-md mx-4"
            type="text"
            placeholder="Add Text"
          />
        </label>
        <label>
          Bg Color
          <input
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className={`w-60 p-1 border rounded-md mx-4`}
            type="color"
            placeholder="Select Bg Color"
          />
        </label>
        <label>
          Txt Color
          <input
            value={txtColor}
            onChange={(e) => setTxtColor(e.target.value)}
            className={`w-60 ] p-1 border rounded-md mx-4`}
            type="color"
            placeholder="Select Text Color"
          />
        </label>
        <button
          onClick={handleOnClick}
          className="p-1 bg-slate-900 text-white px-3 rounded-md"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {status.map((data) => (
          <Card removeCard={onRemove} key={data.createdAt} data={data} />
        ))}
      </div>
    </div>
  );
}

export default StatusCard;
