interface DoneScreenProps {
  exerciseName: string;
}

export function DoneScreen({ exerciseName }: DoneScreenProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background: 'var(--ex-done-bg)',
        padding: 'var(--ex-page-padding)',
      }}
    >
      <h1
        className="font-semibold tracking-tight"
        style={{
          fontSize: 'var(--ex-name-size)',
          color: 'var(--ex-done-fg)',
        }}
      >
        {exerciseName}
      </h1>
      <p
        className="mt-6 font-bold"
        style={{
          fontSize: 'var(--ex-heading-size)',
          color: 'var(--ex-done-fg)',
        }}
      >
        Concluído
      </p>
    </div>
  );
}
