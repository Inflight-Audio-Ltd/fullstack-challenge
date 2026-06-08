import { useRef, useState } from "react";

/**
 * Manages a one-second interval timer with reactive and synchronous access to elapsed time.
 *
 * @returns Timer state and controls.
 * @returns.seconds Current elapsed time in seconds; updates every second while running.
 * @returns.start Starts the timer from an optional initial value. No-op if already running.
 * @returns.cancel Stops the interval without resetting the elapsed time.
 * @returns.getSeconds Returns the latest elapsed seconds without triggering a re-render.
 */
export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        secondsRef.current = next;
        return next;
      });
    }, 1000);
  };

  /**
   * Starts counting from {@link initialSeconds}. Does nothing if the timer is already active.
   *
   * @param initialSeconds - Elapsed seconds to resume from. Defaults to `0`.
   */
  const start = (initialSeconds = 0) => {
    if (intervalRef.current) return;

    setSeconds(initialSeconds);
    secondsRef.current = initialSeconds;

    startInterval();
  };

  /** Stops the interval. The current elapsed time is preserved. */
  const cancel = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  /**
   * Reads the current elapsed seconds from a ref.
   *
   * Useful in cleanup handlers where state may be stale.
   */
  const getSeconds = () => secondsRef.current;

  return { seconds, start, cancel, getSeconds };
};
