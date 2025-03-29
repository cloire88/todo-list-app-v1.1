import React, { useState } from "react";
import { TodoWrapper } from "../TodoWrapper";
import { v4 as uuidv4 } from "uuid";

export const BoardWrapper = () => {
  const [boards, setBoards] = useState([]);

  const addBoard = () => {
    setBoards([...boards, { id: uuidv4(), name: `Board ${boards.length + 1}` }]);
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <div className="BoardWrapper">
      <button onClick={addBoard} className="add-board-btn">Add Board</button>
      <div className="board-list">
        {boards.map((board) => (
          <div key={board.id} className="board">
            <h2>{board.name}</h2>
            <button onClick={() => deleteBoard(board.id)} className="delete-board-btn">Delete Board</button>
            <TodoWrapper />
          </div>
        ))}
      </div>
    </div>
  );
};
