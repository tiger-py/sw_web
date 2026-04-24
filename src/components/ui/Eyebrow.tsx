type EyebrowProps = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
      {children}
    </div>
  );
}