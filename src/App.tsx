import { programme, REST_SECONDS } from '@/data/programme';
import { useSessionReducer } from '@/hooks/useSessionReducer';
import { useTimer } from '@/hooks/useTimer';
import { IntroScreen } from '@/screens/IntroScreen';
import { ActiveScreen } from '@/screens/ActiveScreen';
import { RestScreen } from '@/screens/RestScreen';
import { DoneScreen } from '@/screens/DoneScreen';
import { InstructionsOverlay } from '@/components/InstructionsOverlay';

export function App() {
  const [state, dispatch] = useSessionReducer();

  useTimer(state.screen, state.instructionsOpen, dispatch);

  const exercise = programme[state.exerciseIndex];

  switch (state.screen) {
    case 'intro':
      return (
        <IntroScreen
          exerciseName={exercise.name}
          onStart={() => dispatch({ type: 'START' })}
        />
      );

    case 'active':
      return (
        <>
          <ActiveScreen
            exerciseName={exercise.name}
            secondsRemaining={state.secondsRemaining}
            totalSeconds={exercise.durationSec ?? 0}
            currentSet={state.currentSet}
            totalSets={exercise.sets}
            onInstructions={() => dispatch({ type: 'OPEN_INSTRUCTIONS' })}
            onNext={() => dispatch({ type: 'ADVANCE_SET' })}
          />
          <InstructionsOverlay
            exercise={exercise}
            open={state.instructionsOpen}
            onClose={() => dispatch({ type: 'CLOSE_INSTRUCTIONS' })}
          />
        </>
      );

    case 'rest':
      return (
        <RestScreen
          secondsRemaining={state.restSecondsRemaining}
          totalSeconds={REST_SECONDS}
          onSkip={() => dispatch({ type: 'SKIP_REST' })}
        />
      );

    case 'done':
      return <DoneScreen exerciseName={exercise.name} />;
  }
}

export default App;
