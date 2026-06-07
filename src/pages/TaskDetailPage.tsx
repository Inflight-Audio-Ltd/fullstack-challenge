import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { formatTime } from "../utils/formatTime";
import "../App.css";
import { useTimer } from "../hooks/timer";
import { useTasks } from "../contexts/tasks";

export function TaskDetailPage() {
  const timer = useTimer();
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTasks();
  const task = tasks.find((item) => item.id === id);

  useEffect(() => {
    if (!task || !id) return;

    timer.start(task.elapsedTime);
  }, []);

  if (!task) {
    return (
      <main className="app">
        <Link to="/" className="back-link">
          Back to tasks
        </Link>

        <div className="error-state">
          <h1>Task not found</h1>
          <p>No task exists with id &quot;{id}&quot;.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="app">
      <Link to="/" className="back-link">
        Back to tasks
      </Link>

      <h1>{task.title}</h1>
      <p className="task-description">{task.description}</p>

      <div className="timer">
        <span className="timer-label">Time spent</span>
        <span className="timer-value">{formatTime(timer.seconds)}</span>
      </div>
    </main>
  );
}
