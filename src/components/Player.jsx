import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }
  function handleInputChange(event) {
    event.preventDefault();

    setNewName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{newName}</span>
        ) : (
          <input
            type="text"
            value={newName}
            onChange={handleInputChange}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;
