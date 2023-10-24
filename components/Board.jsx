"use client";

import { useSelector, useDispatch } from "react-redux";
import Square from "@/components/Square";
import { resetGame } from "@/infraestructure/redux/slices/gameSlice";

function Board() {
  const board = useSelector((state) => state.game.board);
  const winner = useSelector((state) => state.game.winner);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="flex justify-center items-center mt-5">
        <div className="grid grid-cols-3 gap-3 w-80">
          {board.map((value, index) => (
            <Square key={index} index={index} value={value} />
          ))}
        </div>
      </div>
      {winner && (
        <div className="flex flex-col items-center my-5">
          <div className="text-2xl mb-4">
            {winner === "T" ? "Es un empate!" : `Ganador: ${winner}`}
          </div>
          <button
            className="rounded bg-red-600 p-2 text-white"
            onClick={() => dispatch(resetGame())}
          >
            Reiniciar juego
          </button>
        </div>
      )}
    </>
  );
}

export default Board;
