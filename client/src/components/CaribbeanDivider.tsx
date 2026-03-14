/**
 * Caribbean-style decorative dividers with wavy patterns
 * Adds tropical aesthetic to section breaks
 */

interface CaribbeanDividerProps {
  variant?: 'wave-top' | 'wave-bottom' | 'double-wave' | 'zigzag';
  color?: 'primary' | 'secondary' | 'accent';
  height?: number;
}

export function WaveDividerTop({ color = 'primary', height = 60 }: Omit<CaribbeanDividerProps, 'variant'>) {
  const colorMap = {
    primary: '#FFC107',
    secondary: '#17A697',
    accent: '#FF6B35',
  };

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: `${height}px` }}
    >
      <path
        d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}

export function WaveDividerBottom({ color = 'primary', height = 60 }: Omit<CaribbeanDividerProps, 'variant'>) {
  const colorMap = {
    primary: '#FFC107',
    secondary: '#17A697',
    accent: '#FF6B35',
  };

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: `${height}px` }}
    >
      <path
        d="M0,80 Q300,120 600,80 T1200,80 L1200,0 L0,0 Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}

export function DoubleWaveDivider({ color = 'primary', height = 80 }: Omit<CaribbeanDividerProps, 'variant'>) {
  const colorMap = {
    primary: '#FFC107',
    secondary: '#17A697',
    accent: '#FF6B35',
  };

  return (
    <svg
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: `${height}px` }}
    >
      {/* First wave */}
      <path
        d="M0,40 Q300,0 600,40 T1200,40 L1200,80 Q900,120 600,80 T0,80 Z"
        fill={colorMap[color]}
        opacity="0.8"
      />
      {/* Second wave */}
      <path
        d="M0,60 Q300,20 600,60 T1200,60 L1200,160 L0,160 Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}

export function ZigzagDivider({ color = 'primary', height = 40 }: Omit<CaribbeanDividerProps, 'variant'>) {
  const colorMap = {
    primary: '#FFC107',
    secondary: '#17A697',
    accent: '#FF6B35',
  };

  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: `${height}px` }}
    >
      <polyline
        points="0,20 100,0 200,20 300,0 400,20 500,0 600,20 700,0 800,20 900,0 1000,20 1100,0 1200,20"
        stroke={colorMap[color]}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TropicalPattern() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        {/* Tropical leaf pattern */}
        <g fill="currentColor">
          {/* Leaf 1 */}
          <ellipse cx="100" cy="100" rx="30" ry="50" transform="rotate(-45 100 100)" />
          <path d="M100 50 Q110 80 100 150" stroke="currentColor" strokeWidth="2" fill="none" />

          {/* Leaf 2 */}
          <ellipse cx="300" cy="150" rx="35" ry="55" transform="rotate(30 300 150)" />
          <path d="M300 95 Q315 125 300 205" stroke="currentColor" strokeWidth="2" fill="none" />

          {/* Leaf 3 */}
          <ellipse cx="150" cy="300" rx="28" ry="48" transform="rotate(-60 150 300)" />
          <path d="M150 252 Q160 280 150 348" stroke="currentColor" strokeWidth="2" fill="none" />

          {/* Flower accents */}
          <circle cx="350" cy="80" r="8" />
          <circle cx="340" cy="75" r="6" />
          <circle cx="360" cy="75" r="6" />
          <circle cx="345" cy="65" r="6" />
          <circle cx="355" cy="65" r="6" />

          {/* Decorative dots */}
          <circle cx="200" cy="50" r="3" />
          <circle cx="250" cy="200" r="3" />
          <circle cx="80" cy="350" r="3" />
          <circle cx="320" cy="320" r="3" />
        </g>
      </svg>
    </div>
  );
}

export function CoralPattern() {
  return (
    <div className="absolute inset-0 opacity-3 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          {/* Coral branches */}
          <path d="M50 200 Q100 150 150 180 Q180 200 200 150" />
          <path d="M350 100 Q300 150 280 200 Q270 250 300 280" />
          <path d="M100 350 Q150 300 200 320 Q250 340 280 300" />

          {/* Decorative circles */}
          <circle cx="150" cy="180" r="8" fill="none" />
          <circle cx="200" cy="150" r="6" fill="none" />
          <circle cx="280" cy="200" r="7" fill="none" />
          <circle cx="200" cy="320" r="8" fill="none" />
        </g>
      </svg>
    </div>
  );
}
