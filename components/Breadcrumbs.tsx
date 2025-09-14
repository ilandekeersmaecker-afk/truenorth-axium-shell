'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean); // ["2025","axis",...]
  const crumbs = segments.map((seg, i) => ({
    label: seg.replace(/-/g, ' ').replace(/\b\w/g, m => m.toUpperCase()),
    href: '/' + segments.slice(0, i + 1).join('/'),
  }));

  return (
    <nav aria-label="Breadcrumbs" className="text-sm text-slate-600">
      <ol className="flex items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            <Link href={c.href} className="hover:underline">{c.label}</Link>
            {i < crumbs.length - 1 && <span>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
