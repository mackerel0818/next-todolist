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

  // 새 투두 입력을 위한 상태
  const [newTodoText, setNewTodoText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0); // 기본값은 첫번째 카테고리

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

  // 새 투두 추가 함수
  const addTodo = (e) => {
    e.preventDefault();

    if (!newTodoText.trim()) return; // 빈 입력은 무시

    const updatedLists = [...todoLists];
    updatedLists[selectedCategory].todos.push({
      text: newTodoText,
      status: "incomplete",
    });

    setTodoLists(updatedLists);
    setNewTodoText(""); // 입력 필드 초기화
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
          />
        ))}
      </div>

      {/* 새 투두 입력 폼 */}
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
    </main>
  );
}
