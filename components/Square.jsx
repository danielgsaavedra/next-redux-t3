"use client";

import { useDispatch } from "react-redux";
import { makeMove } from "@/infraestructure/redux/slices/gameSlice";

function Square({ index, value }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`${value} square`}
        onClick={() => dispatch(makeMove(index))}
        disabled={value}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
