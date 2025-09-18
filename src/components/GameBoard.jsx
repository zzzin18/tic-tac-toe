// 1. turns 대신 board prop을 받도록 수정
export default function GameBoard({ onSelectSquare, board }) {
  // 2. turns로 보드를 만드는 로직을 전부 삭제
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }

  // 3. App.jsx에서 넘어온 board prop을 직접 사용
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
