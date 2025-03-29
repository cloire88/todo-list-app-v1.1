import React from "react";
import { TodoWrapper } from "../TodoWrapper";
import { Todo } from "../Todo";
import { v4 as uuidv4 } from "uuid";

export const BoardList = () => {
    const [boards, setBoards] = React.useState([]);
    const addBoard = (board) => {
        setBoards([...boards, { id: uuidv4(), name: board }]);
    };

    return (
        <div className="board-list">
            {boards.map((board) => (
                <div key={board.id} className="board">
                    <h2>{board.name}</h2>
                    <TodoWrapper boardId={board.id} />
                </div>
            ))}
        </div>
    );
}

