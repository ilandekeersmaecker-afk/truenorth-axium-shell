'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function YearSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean); // [year, module, ...]
  const currentYear = Number(parts[0] || new Date().getFullYear());
  const moduleSlug = parts[1] || 'axis';
  const thisYear = new Date().getFullYear();

  const go = (y: number) => router.push(`/${y}/${moduleSlug}`);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => go(currentYear - 1)}
        className="px-2 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-50"
        aria-label="Ga naar vorig jaar"
      >←</button>
      <div className="min-w-[64px] text-center font-medium">{currentYear}</div>
      {currentYear < thisYear && (
        <button
          onClick={() => go(currentYear + 1)}
          className="px-2 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-50"
          aria-label="Ga naar volgend jaar"
        >→</button>
      )}
    </div>
  );
}
