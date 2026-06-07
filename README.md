# Frontend Challenge — Task Manager

A small React application for managing tasks and tracking time spent on each one.

## Getting started

```bash
npm install
npm run dev
```

Open the app in your browser and explore the task list and task detail views.

## What the app should do

- Display a list of tasks, each showing its title and total time spent.
- Allow adding new tasks from the list page.
- Navigate to a task detail page where a timer runs while you are viewing that task.
- Reflect the accumulated time on the task detail page and on the list page when you return.

Tasks should **survive a full page reload** — anything the user has added or any time they have logged should still be there when they come back.

## Known issues

The current implementation has bugs. Your task is to find and fix them so the app behaves as described above.

1. **Elapsed time is not preserved when leaving a task**  
   Open a task and let the timer run for a while. Go back to the list page. The time shown for that task does not match what you saw on the detail page — the elapsed time appears to be lost or reset.

2. **Tasks are not kept after a reload**  
   Add one or more tasks (and optionally spend some time on them). Refresh the browser. The task list is empty or incomplete, as if nothing had been saved.

You are free to change any part of the codebase. Focus on making the behavior correct; there is no single prescribed approach.

## Tech stack

- React
- TypeScript
- React Router
- Vite

## What we look for

- Correct, reliable behavior for the scenarios above.
- Clear reasoning about state, side effects, and persistence.
- Sensible use of React patterns without unnecessary complexity.

Good luck!
