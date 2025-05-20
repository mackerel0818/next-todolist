"use client";

import TodoCard from "./components/TodoCard";
import { useState } from "react";

export default function Home() {
  const [todoLists, setTodoLists] = useState([
    {
      title: "Todo",
      bgColor: "#FFF0EE",
      todos: [
        {
          text: "SQLD - 챕터 6 풀기",
          status: "incomplete",
        },
        {
          text: "아가미 읽기",
          status: "incomplete",
        },
        {
          text: "가방 모티브 뜨기",
          status: "incomplete",
        },
      ],
    },
    {
      title: "Don't forget",
      bgColor: "#D0F4F0",
      todos: [{ text: "퇴근 - 출입증 챙기기", status: "incomplete" }],
    },
    {
      title: "Reminders",
      bgColor: "#F9F3E5",
      todos: [
        { text: "출근하기", status: "incomplete" },
        { text: "일하기", status: "success" },
        { text: "퇴근하기", status: "incomplete" },
      ],
    },
    {
      title: "Wishlist",
      bgColor: "#F4D799",
      todos: [],
    },
  ]);

  const [newTodoText, setNewTodoText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const cycleTodoStatus = (listIndex, todoIndex) => {
    const updatedLists = [...todoLists];
    const currentStatus = updatedLists[listIndex].todos[todoIndex].status;

    let newStatus;
    if (currentStatus === "incomplete") {
      newStatus = "success";
    } else if (currentStatus === "success") {
      newStatus = "failure";
    } else {
      newStatus = "incomplete";
    }

    updatedLists[listIndex].todos[todoIndex].status = newStatus;
    setTodoLists(updatedLists);
  };

  const deleteTodo = (listIndex, todoIndex) => {
    const updatedLists = [...todoLists];
    updatedLists[listIndex].todos.splice(todoIndex, 1);
    setTodoLists(updatedLists);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!newTodoText.trim()) return;

    const updatedLists = [...todoLists];
    updatedLists[selectedCategory].todos.push({
      text: newTodoText,
      status: "incomplete",
    });

    setTodoLists(updatedLists);
    setNewTodoText("");
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <main className="container">
      <h1 className="title">Today, Maybe</h1>
      <div className="grid-container">
        {todoLists.map((list, listIndex) => (
          <TodoCard
            key={listIndex}
            title={list.title}
            todos={list.todos}
            bgColor={list.bgColor}
            onToggle={(todoIndex) => cycleTodoStatus(listIndex, todoIndex)}
            onDelete={(todoIndex) => deleteTodo(listIndex, todoIndex)}
            isDeleteMode={isDeleteMode}
          />
        ))}
      </div>

      <div className="form-actions-container">
        <div className="add-todo-container">
          <form onSubmit={addTodo} className="add-todo-form">
            <div className="category-buttons">
              {todoLists.map((list, index) => (
                <button
                  key={index}
                  type="button"
                  className={`category-button ${
                    selectedCategory === index ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === index ? list.bgColor : "white",
                    borderColor: "#33322e",
                  }}
                  onClick={() => setSelectedCategory(index)}
                >
                  {list.title}
                </button>
              ))}
            </div>

            <div className="input-button-container">
              <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="새로운 할 일을 입력하세요"
                className="todo-input"
              />

              <button type="submit" className="add-button">
                추가
              </button>
            </div>
          </form>
        </div>

        <button
          className={`delete-mode-button ${isDeleteMode ? "active" : ""}`}
          onClick={toggleDeleteMode}
        >
          {isDeleteMode ? "그만하기" : "삭제하기"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="trash-icon"
          >
            <path
              d="M5 2V1C5 0.447715 5.44772 0 6 0H8C8.55228 0 9 0.447715 9 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H12.618L12 12.7742C11.9234 13.4683 11.3478 14 10.6667 14H3.33333C2.65221 14 2.07662 13.4683 2 12.7742L1.38199 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H5ZM6 2H8V1H6V2ZM3.37799 4L3.98565 12H10.0144L10.622 4H3.37799Z"
              fill="currentColor"
            />
            <path
              d="M6 6C6.55228 6 7 6.44772 7 7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7C5 6.44772 5.44772 6 6 6Z"
              fill="currentColor"
            />
            <path
              d="M8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V7C7 6.44772 7.44772 6 8 6Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
