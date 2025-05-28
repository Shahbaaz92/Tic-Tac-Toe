import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function toggle() {
    setIsEditing(!isEditing);
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggle}>Edit</button>
    </li>
  );
}

export default Player;
