import type { Task } from "../types/task";

const titles = [
  "Fix navigation bug",
  "Refactor API client",
  "Design onboarding flow",
  "Audit accessibility",
  "Optimize bundle size",
  "Investigate memory leak",
  "Draft release notes",
  "Clean up dead code",
  "Add error boundaries",
  "Review analytics events",
];

const descriptions = [
  "Investigate the reported issue, document findings, and propose a fix with minimal scope.",
  "Improve readability and test coverage while keeping existing behavior unchanged.",
  "Sketch the user journey, identify edge cases, and align with the current design system.",
  "Run through key screens with keyboard and screen reader tools, then file actionable tickets.",
  "Profile the build output, remove unused dependencies, and verify load time improvements.",
  "Reproduce the issue locally, capture metrics, and patch the root cause.",
  "Summarize shipped changes, breaking updates, and migration steps for the team.",
  "Search for unused exports and stale feature flags, then remove them safely.",
  "Wrap fragile UI paths so failures degrade gracefully instead of blanking the page.",
  "Confirm event names and payloads match the tracking plan before shipping.",
];

const pick = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

export const createRandomTask = (): Task => ({
  id: crypto.randomUUID(),
  title: pick(titles),
  description: pick(descriptions),
  elapsedTime: 0,
});
