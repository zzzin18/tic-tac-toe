export default function Log({ turns }) {
  //gameBoard.jsx에서 버튼 눌리는걸 암 -> App으로 불러와서 App쪽에서 건내야함
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player}selected{turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
