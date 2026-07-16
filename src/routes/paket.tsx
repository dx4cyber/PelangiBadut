import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles, Crown, Info } from "lucide-react";
import { pakets, type Paket } from "@/data/packages";
import { waLink, pesanPaketMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/paket")({
  head: () => ({
    meta: [
      { title: "Paket Layanan — Pelangi Badut Banyuwangi" },
      {
        name: "description",
        content:
          "Pilihan paket hiburan ulang tahun anak di Banyuwangi mulai dari Rp 1.500.000. Paket Sedang hingga Paket Glamour.",
      },
      { property: "og:title", content: "Paket Layanan — Pelangi Badut Banyuwangi" },
      {
        property: "og:description",
        content: "Paket badut, sulap, dan dekorasi ulang tahun anak lengkap di Banyuwangi.",
      },
    ],
  }),
  component: PaketPage,
});

const tabs = [
  { id: "sedang", label: "Paket Sedang" },
  { id: "besar", label: "Paket Besar & Premium" },
] as const;

function PaketPage() {
  const [tab, setTab] = useState<"sedang" | "besar">("sedang");
  const list = pakets.filter((p) => p.tier === tab);

  return (
    <div className="px-6 pt-16 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Paket Layanan
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Pilih paket yang paling pas
          </h1>
          <p className="mt-3 text-slate-600">
            Dari paket sederhana hingga glamour, semua kami rancang untuk pengalaman yang berkesan.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {tabs.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="relative px-5 py-2.5 text-sm font-semibold z-10"
                >
                  {active && (
                    <motion.span
                      layoutId="paket-tab"
                      className="absolute inset-0 rounded-full bg-slate-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${active ? "text-white" : "text-slate-600"}`}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p, i) => (
              <PaketCard key={p.id} paket={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3.5 text-sm text-amber-800 max-w-2xl">
            <Info className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
            <span>
              <span className="font-semibold">NB:</span> Untuk lokasi yang jauh, terdapat tambahan
              biaya transportasi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaketCard({ paket, index }: { paket: Paket; index: number }) {
  const isVip = paket.highlight === "vip";
  const isPopuler = paket.highlight === "populer";

  const inner = (
    <div className={`relative flex h-full flex-col rounded-3xl bg-white p-7 ${isPopuler || isVip ? "" : "border border-slate-200"}`}>
      {paket.ribbon && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-md ${
              isVip
                ? "bg-gradient-to-r from-amber-500 to-amber-600"
                : "bg-slate-900"
            }`}
          >
            {isVip ? <Crown className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
            {paket.ribbon}
          </div>
        </div>
      )}

      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {paket.tier === "sedang" ? "Paket Sedang" : "Paket Premium"}
        </div>
        <h3 className="mt-1.5 text-xl font-semibold text-slate-900">{paket.nama}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900">{paket.harga}</span>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-100" />

      <ul className="space-y-2.5 flex-1">
        {paket.fitur.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
            <span
              className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                isVip ? "bg-amber-100 text-amber-600" : "bg-sky-100 text-sky-600"
              }`}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waLink(pesanPaketMessage(paket.nama, paket.harga))}
        target="_blank"
        rel="noreferrer"
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          isVip
            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
            : isPopuler
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.98 11.98 0 0 0 5.8 1.48h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.22-3.48-8.39Z" />
        </svg>
        Pesan via WhatsApp
      </a>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      {isPopuler || isVip ? (
        <div
          className={`relative rounded-[1.6rem] p-[2px] shadow-[0_20px_50px_rgb(0,0,0,0.08)] ${
            isVip
              ? "bg-[linear-gradient(135deg,#fbbf24,#f59e0b,#e879f9,#38bdf8)]"
              : "bg-[linear-gradient(135deg,rgba(251,191,36,0.7),rgba(56,189,248,0.7),rgba(232,121,249,0.6),rgba(52,211,153,0.7))]"
          }`}
        >
          {inner}
        </div>
      ) : (
        <div className="shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl">{inner}</div>
      )}
    </motion.div>
  );
}
