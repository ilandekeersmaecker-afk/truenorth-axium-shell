// app/cijfers/page.tsx
"use client";

import { useState } from "react";

type PanelKey = "cost" | "profit" | "hours" | null;

export default function CijfersPage() {
  const [openPanel, setOpenPanel] = useState<PanelKey>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <h1 className="text-2xl font-semibold">Cijfers</h1>
        </div>
      </header>

      {/* Content container */}
      <main className="mx-auto max-w-screen-xl px-4 py-8">
        {/* 3 vlakken: mobiel onder elkaar, >md naast elkaar */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PanelButton
            title="True Cost"
            onClick={() => setOpenPanel("cost")}
          />
          <PanelButton
            title="True Profit"
            onClick={() => setOpenPanel("profit")}
          />
          <PanelButton
            title="True Hours"
            onClick={() => setOpenPanel("hours")}
          />
        </div>

        {/* Minimum hourly rate */}
        <section className="mt-12 text-center">
          <div className="text-sm text-slate-500 mb-1">Minimum hourly rate</div>
          <div className="text-4xl font-bold tracking-tight">—</div>
        </section>
      </main>

      {/* Popup (overlay + venster-in-venster) */}
      {openPanel && (
        <Overlay onClose={() => setOpenPanel(null)}>
          <Popup
            title={
              openPanel === "cost"
                ? "True Cost details"
                : openPanel === "profit"
                ? "True Profit details"
                : "True Hours details"
            }
            onClose={() => setOpenPanel(null)}
          >
            {/* Scrollbare inhoud komt hier later — placeholder */}
            <div className="space-y-4">
              <p className="text-slate-600">
                Inhoud volgt later. Dit venster schaalt mee met de inhoud en
                wordt scrollbaar als het groter is dan het scherm.
              </p>
              <div className="h-32 rounded border border-slate-200" />
            </div>
          </Popup>
        </Overlay>
      )}
    </div>
  );
}

/* ====== Components ====== */

function PanelButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      className="border border-slate-300 rounded-lg h-[220px] p-4 cursor-pointer select-none"
    >
      <div className="text-lg font-semibold text-center">{title}</div>
      {/* vrije ruimte voor toekomstige info */}
    </div>
  );
}

function Overlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      onClick={onClose} // klik buiten het venster sluit
    >
      <div
        className="flex min-h-full items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()} // klik binnen popup sluit NIET
      >
        {children}
      </div>
    </div>
  );
}

function Popup({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 max-w-3xl w-full">
      {/* Titel gecentreerd, sluit-icoon rechts (meescrollend) */}
      <div className="p-4 border-b flex items-center justify-center relative">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
        <button
          onClick={onClose}
          aria-label="Sluiten"
          className="absolute right-3 top-3 text-slate-500 hover:text-slate-700"
        >
          ×
        </button>
      </div>

      {/* Scrollbare inhoud als nodig */}
      <div className="p-4 max-h-[80vh] overflow-auto">{children}</div>
    </div>
  );
}
