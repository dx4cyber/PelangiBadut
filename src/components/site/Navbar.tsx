import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const tabs = [
  { to: "/", label: "Home" },
  { to: "/paket", label: "Paket Layanan" },
  { to: "/kontak", label: "Hubungi Kami" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
              <img src="/logo.png" alt="Logo" className="..." />
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900 hidden sm:block">
              Pelangi Badut <span className="text-slate-400 font-normal">Banyuwangi</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 relative">
            {tabs.map((t) => {
              const active = pathname === t.to;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-slate-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active ? "text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 rounded-2xl border border-white/60 bg-white/90 p-2 backdrop-blur-md shadow-lg"
            >
              {tabs.map((t) => {
                const active = pathname === t.to;
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                      active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {t.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
