import { useState } from "react";

export default function ToggleBoxes() {
  const [activeBox, setActiveBox] = useState("box1"); // default box1

  return (
    <div className="p-4 space-y-4">
      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setActiveBox("box1")}
          className={`px-4 py-2 rounded-md border 
            ${activeBox === "box1" ? "bg-blue-500 text-white" : "bg-white text-black"}
          `}
        >
          Show Box 1
        </button>
        <button
          onClick={() => setActiveBox("box2")}
          className={`px-4 py-2 rounded-md border 
            ${activeBox === "box2" ? "bg-green-500 text-white" : "bg-white text-black"}
          `}
        >
          Show Box 2
        </button>
      </div>

      {/* Boxes */}
      <div className="flex justify-center">
        {activeBox === "box1" && (
          <div className="w-[200px] h-[150px] bg-blue-100 flex items-center justify-center rounded-lg shadow">
            <p className="font-bold">📦 Box 1</p>
          </div>
        )}
        {activeBox === "box2" && (
          <div className="w-[200px] h-[150px] bg-green-100 flex items-center justify-center rounded-lg shadow">
            <p className="font-bold">📦 Box 2</p>
          </div>
        )}
      </div>
    </div>
  );
}
