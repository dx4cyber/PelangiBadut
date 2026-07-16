import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Pelangi Badut</div>

              <div className="text-xs text-slate-500">Banyuwangi</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 max-w-xs">
            Ceriakan momen spesial buah hati dengan hiburan badut profesional, sulap edukatif, dan
            games interaktif.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigasi</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-slate-600 hover:text-slate-900">Home</Link></li>
            <li><Link to="/paket" className="text-slate-600 hover:text-slate-900">Paket Layanan</Link></li>
            <li><Link to="/kontak" className="text-slate-600 hover:text-slate-900">Hubungi Kami</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Kontak</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>WhatsApp: 081235484116</li>
            <li>Area: Banyuwangi & sekitarnya</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="
https://www.instagram.com/pelangi_badut_banyuwangi?igsh=MWQzeng1bGx1eGU3OQ==
" target="_blank" rel="noreferrer" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://tiktok.com/@pelangibadutbanyuwangi" target="_blank" rel="noreferrer" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M16.5 3a5.5 5.5 0 0 0 5 3.2v3.1a8.4 8.4 0 0 1-5-1.6v7.2a6.4 6.4 0 1 1-6.4-6.4c.3 0 .5 0 .8.1v3.2a3.3 3.3 0 1 0 2.4 3.1V3h3.2Z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Pelangi Badut Banyuwangi. All rights reserved.
      </div>
    </footer>
  );
}
