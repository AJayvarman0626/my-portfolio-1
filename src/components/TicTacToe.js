import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState([]);
  const winner = calculateWinner(board)?.winner;

  useEffect(() => {
    const result = calculateWinner(board);
    if (result) {
      setWinningLine(result.line);
      setGameOver(true);
    } else if (board.every(Boolean)) {
      setGameOver(true);
    }
  }, [board]);

  useEffect(() => {
    if (!isPlayerTurn && !winner && board.some(cell => cell === null)) {
      const timeout = setTimeout(makeComputerMove, 500);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || !isPlayerTurn) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const makeComputerMove = () => {
    const bestMove = getBestMove(board);
    if (bestMove !== null) {
      const newBoard = [...board];
      newBoard[bestMove] = "O";
      setBoard(newBoard);
      setIsPlayerTurn(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setWinningLine([]);
  };

  const renderSquare = (index) => {
    const isWinningSquare = winningLine.includes(index);
    return (
      <button
        className={`square ${isWinningSquare ? "win-glow" : ""}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const resultText = winner
    ? winner === "X"
      ? "🎉 You Win!"
      : "😓 Try Again"
    : "🤝 Match Draw";

  return (
    <Col lg={12}>
      <div className="tictactoe-box wow slideInUp">
        <h3>Let's Play</h3>
        <div className="board">
          {[0, 1, 2].map((row) => (
            <div key={row} className="board-row">
              {renderSquare(row * 3)}
              {renderSquare(row * 3 + 1)}
              {renderSquare(row * 3 + 2)}
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="overlay">
            <div className="overlay-content">
              <h1>{resultText}</h1>
              <button onClick={resetGame}>OK</button>
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function getBestMove(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const tempBoard = [...board];
      tempBoard[i] = "O";
      if (calculateWinner(tempBoard)?.winner === "O") return i;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const tempBoard = [...board];
      tempBoard[i] = "X";
      if (calculateWinner(tempBoard)?.winner === "X") return i;
    }
  }

  const empty = board.map((v, i) => (v === null ? i : null)).filter(v => v !== null);
  return empty.length ? empty[Math.floor(Math.random() * empty.length)] : null;
}
