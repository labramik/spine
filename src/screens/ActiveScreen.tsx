import { Button } from '@/components/ui/button';
import { CircularTimer } from '@/components/CircularTimer';
import { HomeButton } from '@/components/HomeButton';

interface ActiveScreenProps {
  exerciseName: string;
  secondsRemaining: number;
  totalSeconds: number;
  currentSet: number;
  totalSets: number;
  onInstructions: () => void;
  onNext: () => void;
  onHome: () => void;
}

export function ActiveScreen({
  exerciseName,
  secondsRemaining,
  totalSeconds,
  currentSet,
  totalSets,
  onInstructions,
  onNext,
  onHome,
}: ActiveScreenProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{
        background: 'var(--ex-bg)',
        padding: 'var(--ex-page-padding)',
      }}
    >
      <HomeButton onHome={onHome} color="var(--ex-fg)" />
      <header className="flex-shrink-0 text-center">
        <h1
          className="font-semibold tracking-tight"
          style={{
            fontSize: 'var(--ex-name-size)',
            fontWeight: 'var(--ex-name-weight)',
            color: 'var(--ex-fg)',
          }}
        >
          {exerciseName}
        </h1>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-6">
        <CircularTimer
          secondsRemaining={secondsRemaining}
          totalSeconds={totalSeconds}
          variant="active"
        />
        <span
          className="font-semibold tracking-wide"
          style={{
            fontSize: 'var(--ex-set-size)',
            color: 'var(--ex-fg)',
          }}
        >
          Série {currentSet} / {totalSets}
        </span>
      </main>

      <footer
        className="flex flex-shrink-0 items-center justify-center"
        style={{ gap: 'var(--ex-btn-gap)' }}
      >
        <Button
          onClick={onInstructions}
          variant="outline"
          className="cursor-pointer rounded-[var(--ex-btn-radius)] px-8 font-semibold"
          style={{
            height: 'var(--ex-btn-height)',
            minWidth: 'var(--ex-btn-min-width)',
            fontSize: 'var(--ex-btn-font-size)',
            borderColor: 'var(--ex-border)',
            color: 'var(--ex-fg)',
          }}
        >
          Instruções
        </Button>
        <Button
          onClick={onNext}
          className="cursor-pointer rounded-[var(--ex-btn-radius)] px-8 font-semibold"
          style={{
            height: 'var(--ex-btn-height)',
            minWidth: 'var(--ex-btn-min-width)',
            fontSize: 'var(--ex-btn-font-size)',
            backgroundColor: 'var(--ex-accent)',
            color: 'var(--ex-accent-fg)',
          }}
        >
          Seguinte
        </Button>
      </footer>
    </div>
  );
}
