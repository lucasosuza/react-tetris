import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = ({ type }) => (
  <div>
    <Stage />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
);

export default Tetris;
