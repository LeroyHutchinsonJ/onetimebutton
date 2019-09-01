import React from "react";
import { useState } from "react";

export default function OneTimeButtonHook() {
  var [mood, setMood] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          alert("Hi");
          setMood((mood = true));
        }}
        disabled={mood}
      >
        Click me
      </button>
    </div>
  );
}
