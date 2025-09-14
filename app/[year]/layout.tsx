import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function YearLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { year: string };
}) {
  const { year } = params;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto w-full max-w-7xl px-4 py-6 flex gap-6">
        <Sidebar year={year} />
        <main className="flex-1">
          {children}
          <div className="app-version">v0.1</div>
        </main>
      </div>
    </div>
  );
}
