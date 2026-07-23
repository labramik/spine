import { Button } from '@/components/ui/button';

interface RestScreenProps {
  secondsRemaining: number;
  onSkip: () => void;
}

export function RestScreen({ secondsRemaining, onSkip }: RestScreenProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background: 'var(--ex-rest-bg)',
        padding: 'var(--ex-page-padding)',
      }}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1
          className="font-semibold tracking-tight"
          style={{
            fontSize: 'var(--ex-heading-size)',
            color: 'var(--ex-rest-fg)',
          }}
        >
          Descansa
        </h1>
        <span
          className="tabular-nums font-bold leading-none"
          style={{
            fontSize: 'var(--ex-timer-size)',
            color: 'var(--ex-rest-fg)',
          }}
        >
          {secondsRemaining}
        </span>
      </div>

      <footer className="flex-shrink-0 pb-8">
        <Button
          onClick={onSkip}
          variant="outline"
          className="cursor-pointer rounded-[var(--ex-btn-radius)] px-8 font-semibold"
          style={{
            height: 'var(--ex-btn-height)',
            minWidth: 'var(--ex-btn-min-width)',
            fontSize: 'var(--ex-btn-font-size)',
            borderColor: 'var(--ex-border)',
            color: 'var(--ex-rest-fg)',
          }}
        >
          Saltar descanso
        </Button>
      </footer>
    </div>
  );
}
