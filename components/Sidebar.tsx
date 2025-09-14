'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MODULES } from '@/lib/routes';

export default function Sidebar({ year }: { year: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-slate-200 bg-white">
      <nav className="p-3">
        <ul className="space-y-1">
          {MODULES.map(m => {
            const href = `/${year}/${m.slug}`;
            const active = pathname.startsWith(href);
            return (
              <li key={m.slug}>
                <Link
                  href={href}
                  className={`block rounded-lg px-3 py-2 transition ${
                    active ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'
                  }`}
                >
                  {m.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
