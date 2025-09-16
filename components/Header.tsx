import Breadcrumbs from './Breadcrumbs';
import YearSwitcher from './YearSwitcher';

export default function Header() {
  return (
    <>
      {/* Minimal brand banner */}
      <div className="w-full bg-[#0A1220] border-b-4 border-[#39D2BE]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-lg font-semibold text-white tracking-wide">
          True North Axium (Test)
        </div>
      </div>




      {/* Main header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-3 items-center">
          {/* Left: mock user */}
          <div className="justify-self-start">
            <div className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-200" />
              <span className="text-sm text-slate-700">Ilan (mock)</span>
            </div>
          </div>

          {/* Center: breadcrumbs */}
          <div className="justify-self-center">
            <Breadcrumbs />
          </div>

          {/* Right: year switcher */}
          <div className="justify-self-end">
            <YearSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
