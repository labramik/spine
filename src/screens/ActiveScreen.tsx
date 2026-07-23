import { Button } from '@/components/ui/button';

interface ActiveScreenProps {
  exerciseName: string;
  secondsRemaining: number;
  currentSet: number;
  totalSets: number;
  onInstructions: () => void;
  onNext: () => void;
}

export function ActiveScreen({
  exerciseName,
  secondsRemaining,
  currentSet,
  totalSets,
  onInstructions,
  onNext,
}: ActiveScreenProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{
        background: 'var(--ex-bg)',
        padding: 'var(--ex-page-padding)',
      }}
    >
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

      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <span
          className="tabular-nums font-bold leading-none"
          style={{
            fontSize: 'var(--ex-timer-size)',
            fontWeight: 'var(--ex-timer-weight)',
            color: 'var(--ex-timer-color)',
          }}
        >
          {secondsRemaining}
        </span>
        <span
          className="font-medium"
          style={{
            fontSize: 'var(--ex-body-size)',
            color: 'var(--ex-set-color)',
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
