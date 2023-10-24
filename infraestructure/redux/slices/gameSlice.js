import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
  },
  reducers: {
    makeMove: (state, action) => {
      const index = action.payload;
      if (state.board[index] || state.winner) return;
      state.board[index] = state.isXNext ? "✖️" : "⭕";
      state.isXNext = !state.isXNext;
      state.winner = calculateWinner(state.board);
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isXNext = true;
      state.winner = null;
    },
  },
});

export const { makeMove, resetGame } = gameSlice.actions;
export default gameSlice.reducer;

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every((square) => square)) {
    return "T";
  }
  return null;
}
