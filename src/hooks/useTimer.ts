import { useEffect, useRef } from 'react';
import type { Screen } from './useSessionReducer';

export function useTimer(
  screen: Screen,
  paused: boolean,
  dispatch: (action: { type: 'TICK' } | { type: 'REST_TICK' }) => void
) {
  const dispatchRef = useRef(dispatch);
  dispatchRef.current = dispatch;

  const screenRef = useRef(screen);
  screenRef.current = screen;

  useEffect(() => {
    if (screen !== 'active' && screen !== 'rest') return;
    if (paused) return;

    const id = setInterval(() => {
      if (screenRef.current === 'active') {
        dispatchRef.current({ type: 'TICK' });
      } else if (screenRef.current === 'rest') {
        dispatchRef.current({ type: 'REST_TICK' });
      }
    }, 1000);

    return () => clearInterval(id);
  }, [screen, paused]);
}
