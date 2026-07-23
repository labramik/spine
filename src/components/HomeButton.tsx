import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

interface HomeButtonProps {
  onHome: () => void;
  /** Tailwind/text color utility or CSS color value */
  color?: string;
  variant?: 'outline' | 'default';
}

export function HomeButton({ onHome, color, variant = 'outline' }: HomeButtonProps) {
  const style: React.CSSProperties = {};
  if (color) {
    if (variant === 'outline') {
      style.borderColor = color;
      style.color = color;
    } else {
      style.backgroundColor = color;
    }
  }

  return (
    <Button
      onClick={onHome}
      variant={variant}
      size="icon"
      className="absolute left-4 top-4 z-10 cursor-pointer rounded-full"
      style={style}
      aria-label="Voltar ao início"
    >
      <Home className="h-5 w-5" />
    </Button>
  );
}
