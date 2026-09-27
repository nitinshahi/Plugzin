import { Check } from "lucide-react";

export function CompatibilityList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className="text-brand mt-0.5 size-5 shrink-0"
            strokeWidth={2.5}
          />
          <span className="font-helvetica leading-auto text-ash-300 text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
