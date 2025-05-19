export default function TodoCard({ title, todos, bgColor, onToggle }) {
  return (
    <div className="todo-card" style={{ backgroundColor: bgColor }}>
      <h2 className="card-title">{title}</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <div
              className={`checkbox ${todo.status}`}
              onClick={() => onToggle && onToggle(index)}
            >
              {todo.status === "success" && (
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11.606C3.24162 11.9159 7.04127 13.873 8.15873 16.4756C9.34392 12.2928 14 4.25713 22 2.47559"
                    stroke="#F9F3E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {todo.status === "failure" && (
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="failure-svg"
                >
                  <path
                    d="M2 17.4756C6 10.9756 11.5 4.47559 16.5 3.47559"
                    stroke="#F9F3E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.56774 2.47559C4.91399 7.47559 7.91399 11.9756 16.414 17.4756"
                    stroke="#F9F3E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
