import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { TaskListPage } from "./pages/TaskListPage";
import { TaskProvider } from "./contexts/tasks";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
