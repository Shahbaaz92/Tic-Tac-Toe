function Log({ turns }) {
  return (
    <ol id="log">
      <li>
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        ))}
      </li>
    </ol>
  );
}

export default Log;
