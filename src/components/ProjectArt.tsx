import { Project } from '../constants';

type ArtKind = NonNullable<Project['art']>;

const LABELS: Record<ArtKind, string> = {
  soc: 'Illustration of endpoints sending logs to a central SIEM and an alert panel',
  network: 'Illustration of a segmented network where traffic between two zones is blocked',
  stego: 'Illustration of an image whose pixels carry hidden data, next to a lock',
  trading: 'Illustration of a candlestick chart with a command prompt',
};

/** Logs from many endpoints converge on one SIEM, then surface as alerts. */
const Soc = () => (
  <>
    {[60, 140, 220, 300].map((y) => (
      <g key={y}>
        <rect x="50" y={y} width="70" height="48" rx="4" />
        <line x1="64" y1={y + 18} x2="106" y2={y + 18} opacity="0.5" />
        <line x1="64" y1={y + 30} x2="90" y2={y + 30} opacity="0.5" />
        <line x1="120" y1={y + 24} x2="245" y2="200" opacity="0.6" />
      </g>
    ))}
    <rect x="245" y="140" width="120" height="120" rx="6" />
    <circle cx="305" cy="185" r="16" />
    <line x1="270" y1="225" x2="340" y2="225" opacity="0.5" />
    <line x1="365" y1="200" x2="450" y2="200" />
    <polyline points="438,190 450,200 438,210" />
    <rect x="450" y="80" width="150" height="240" rx="6" />
    {[115, 165, 215, 265].map((y, i) => (
      <g key={y}>
        {i === 1 && <rect x="458" y={y - 22} width="134" height="44" fill="currentColor" fillOpacity="0.22" stroke="none" />}
        <circle cx="478" cy={y} r="7" fill={i === 1 ? 'currentColor' : 'none'} />
        <line x1="498" y1={y} x2="570" y2={y} opacity="0.6" />
      </g>
    ))}
  </>
);

/** Three zones around a router; one path is blocked. */
const Network = () => (
  <>
    <rect x="270" y="155" width="100" height="90" rx="8" />
    <line x1="290" y1="185" x2="350" y2="185" opacity="0.5" />
    <line x1="290" y1="205" x2="350" y2="205" opacity="0.5" />
    <line x1="290" y1="225" x2="330" y2="225" opacity="0.5" />
    {[
      { x: 50, y: 40 },
      { x: 50, y: 270 },
      { x: 440, y: 155 },
    ].map(({ x, y }) => (
      <g key={`${x}-${y}`}>
        <rect x={x} y={y} width="150" height="90" rx="6" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={x + 20 + i * 42} y={y + 30} width="28" height="30" rx="3" opacity="0.6" />
        ))}
      </g>
    ))}
    <line x1="200" y1="95" x2="270" y2="185" />
    <line x1="370" y1="200" x2="440" y2="200" />
    <line x1="200" y1="315" x2="270" y2="215" strokeDasharray="8 8" opacity="0.6" />
    <circle cx="235" cy="265" r="18" fill="currentColor" fillOpacity="0.22" />
    <line x1="226" y1="256" x2="244" y2="274" />
    <line x1="244" y1="256" x2="226" y2="274" />
  </>
);

/** An image made of pixels, some carrying hidden bits, and a lock. */
const Stego = () => (
  <>
    <rect x="50" y="60" width="310" height="280" rx="6" />
    {Array.from({ length: 70 }, (_, i) => {
      const col = i % 10;
      const row = Math.floor(i / 10);
      const marked = (i * 7 + 3) % 5 === 0;
      return (
        <rect
          key={i}
          x={70 + col * 28}
          y={82 + row * 34}
          width="22"
          height="26"
          rx="2"
          strokeWidth="2"
          fill={marked ? 'currentColor' : 'none'}
          opacity={marked ? 1 : 0.35}
        />
      );
    })}
    <line x1="380" y1="200" x2="450" y2="200" />
    <polyline points="438,190 450,200 438,210" />
    <rect x="470" y="195" width="100" height="85" rx="8" />
    <path d="M492 195 v-30 a28 28 0 0 1 56 0 v30" />
    <circle cx="520" cy="230" r="9" fill="currentColor" />
    <line x1="520" y1="238" x2="520" y2="258" />
  </>
);

/** Candlestick chart with a command prompt. */
const CANDLES = [
  { x: 110, hi: 250, lo: 310, top: 265, bot: 300, up: true },
  { x: 170, hi: 230, lo: 300, top: 250, bot: 285, up: true },
  { x: 230, hi: 240, lo: 290, top: 255, bot: 280, up: false },
  { x: 290, hi: 200, lo: 270, top: 215, bot: 255, up: true },
  { x: 350, hi: 170, lo: 240, top: 185, bot: 225, up: true },
  { x: 410, hi: 180, lo: 250, top: 195, bot: 235, up: false },
  { x: 470, hi: 130, lo: 210, top: 145, bot: 195, up: true },
  { x: 530, hi: 100, lo: 180, top: 115, bot: 165, up: true },
];

const Trading = () => (
  <>
    <line x1="60" y1="345" x2="590" y2="345" opacity="0.5" />
    <line x1="60" y1="50" x2="60" y2="345" opacity="0.5" />
    {CANDLES.map((c) => (
      <g key={c.x}>
        <line x1={c.x} y1={c.hi} x2={c.x} y2={c.lo} />
        <rect
          x={c.x - 13}
          y={c.top}
          width="26"
          height={c.bot - c.top}
          fill={c.up ? 'currentColor' : 'none'}
        />
      </g>
    ))}
    <polyline points="84,64 104,80 84,96" />
    <line x1="114" y1="98" x2="146" y2="98" />
  </>
);

const ART: Record<ArtKind, () => JSX.Element> = { soc: Soc, network: Network, stego: Stego, trading: Trading };

export const ProjectArt = ({ kind }: { kind: ArtKind }) => {
  const Art = ART[kind];
  return (
    <div className="aspect-[8/5] w-full border border-ink/20 bg-ink text-paper">
      <svg
        viewBox="0 0 640 400"
        role="img"
        aria-label={LABELS[kind]}
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Art />
      </svg>
    </div>
  );
};
