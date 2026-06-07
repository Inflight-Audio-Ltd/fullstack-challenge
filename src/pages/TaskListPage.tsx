import { Link } from "react-router-dom";
import { createRandomTask } from "../utils/createRandomTask";
import { formatTime } from "../utils/formatTime";
import "../App.css";
import { useTasks } from "../contexts/tasks";

export function TaskListPage() {
  const { tasks, addTask } = useTasks();

  return (
    <main className="app">
      <div className="page-header">
        <h1>Tasks</h1>
        <button
          type="button"
          className="add-task-button"
          onClick={() => addTask(createRandomTask())}
        >
          Add random task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`} className="task-card">
              <span className="task-title">{task.title}</span>
              <span className="task-time">{formatTime(task.elapsedTime)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
