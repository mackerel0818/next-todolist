export default function TodoCard({
  title,
  todos,
  bgColor,
  onToggle,
  onDelete,
  isDeleteMode,
}) {
  return (
    <div className="todo-card" style={{ backgroundColor: bgColor }}>
      <h2 className="card-title">{title}</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
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
              {isDeleteMode && (
                <button
                  className="delete-button"
                  onClick={() => onDelete && onDelete(index)}
                  aria-label="삭제"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 2V1C5 0.447715 5.44772 0 6 0H8C8.55228 0 9 0.447715 9 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H12.618L12 12.7742C11.9234 13.4683 11.3478 14 10.6667 14H3.33333C2.65221 14 2.07662 13.4683 2 12.7742L1.38199 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H5ZM6 2H8V1H6V2ZM3.37799 4L3.98565 12H10.0144L10.622 4H3.37799Z"
                      fill="#33322e"
                    />
                    <path
                      d="M6 6C6.55228 6 7 6.44772 7 7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7C5 6.44772 5.44772 6 6 6Z"
                      fill="#33322e"
                    />
                    <path
                      d="M8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V7C7 6.44772 7.44772 6 8 6Z"
                      fill="#33322e"
                    />
                  </svg>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
