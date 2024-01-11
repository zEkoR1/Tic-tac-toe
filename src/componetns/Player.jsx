import React, { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let edittablePlayerName = <span className="player-name"> {playerName}</span>;

  if (isEditing) {
    edittablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' :undefined}>
      <span className="player">
        {edittablePlayerName}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
