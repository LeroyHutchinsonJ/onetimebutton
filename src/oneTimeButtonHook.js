import React from "react";
import { useState } from "react";

export default function OneTimeButtonHook() {
  //Mood is the variable setMood is the function to control it
  var [mood, setMood] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          alert("Hi");
          setMood(true);
        }}
        disabled={mood}
      >
        Click me
      </button>
    </div>
  );
}
