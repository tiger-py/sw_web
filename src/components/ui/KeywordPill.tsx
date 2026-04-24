type KeywordPillProps = {
  children: React.ReactNode;
};

export function KeywordPill({ children }: KeywordPillProps) {
  return (
    <span className="rounded-full border border-white/18 bg-black px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white">
      {children}
    </span>
  );
}