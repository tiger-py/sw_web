type KeywordPillProps = {
  children: React.ReactNode;
};

export function KeywordPill({ children }: KeywordPillProps) {
  return (
    <span className="rounded-full border border-white/18 bg-black px-4 py-2 text-sm uppercase tracking-[0.16em] text-white">
      {children}
    </span>
  );
}