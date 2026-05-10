type EyebrowTone = "default" | "light";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: EyebrowTone;
};

export function Eyebrow({
  children,
  className = "",
  tone = "default",
}: EyebrowProps) {
  const toneClass = tone === "light" ? "text-white/85" : "text-sw-eyebrow";

  return (
    <div
      className={[
        "text-base font-semibold uppercase leading-tight tracking-[0.18em] sm:text-lg lg:text-xl",
        toneClass,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
