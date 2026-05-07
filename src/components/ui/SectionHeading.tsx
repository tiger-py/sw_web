import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-3xl text-xl leading-9 text-sw-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}