interface CircularTimerProps {
  secondsRemaining: number;
  totalSeconds: number;
  variant?: 'active' | 'rest';
}

export function CircularTimer({
  secondsRemaining,
  totalSeconds,
  variant = 'active',
}: CircularTimerProps) {
  const size = 280;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const fraction = totalSeconds > 0 ? secondsRemaining / totalSeconds : 0;
  const clamped = Math.max(0, Math.min(1, fraction));
  const dashOffset = circumference * (1 - clamped);

  const trackVar =
    variant === 'rest' ? 'var(--ex-ring-rest-track)' : 'var(--ex-ring-track)';
  const progressVar =
    variant === 'rest'
      ? 'var(--ex-ring-rest-progress)'
      : 'var(--ex-ring-progress)';

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 'var(--ex-ring-size)', height: 'var(--ex-ring-size)' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackVar}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressVar}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{
            transition: 'stroke-dashoffset 0.95s linear',
          }}
        />
      </svg>
      <span
        className="absolute tabular-nums font-bold leading-none"
        style={{
          fontSize: 'var(--ex-ring-number-size)',
          fontWeight: 'var(--ex-timer-weight)',
          color:
            variant === 'rest'
              ? 'var(--ex-rest-fg)'
              : 'var(--ex-timer-color)',
        }}
      >
        {secondsRemaining}
      </span>
    </div>
  );
}
