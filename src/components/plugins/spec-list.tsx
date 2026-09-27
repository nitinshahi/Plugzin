export type Spec = { label: string; value: string };

export function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className="flex w-full flex-col gap-2">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="border-ash-400 font-helvetica text-ash-300 flex items-center justify-between border-t border-dashed pt-2 text-2xs uppercase"
        >
          <dt>{spec.label}</dt>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
