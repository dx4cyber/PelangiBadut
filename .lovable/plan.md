## Pelangi Badut Banyuwangi — 3-Page Website

Premium minimalist site in Bahasa Indonesia with clean slate-50/white backgrounds, amber-400 + sky-400 accents, ultra-subtle rainbow gradients on borders/badges only, and Framer Motion animations (fade-in stagger, hover-scale, page transitions).

### Assets
- Save uploaded logo as a Lovable Asset (`src/assets/logo.png.asset.json`) and use it in the navbar + footer.

### Global
- Install `framer-motion`.
- Add design tokens to `src/styles.css`: amber/sky accents, subtle rainbow gradient variable, glass surface.
- Update `__root.tsx` head: title "Pelangi Badut Banyuwangi — Hiburan Ulang Tahun Anak", proper meta/OG in Bahasa Indonesia. Keep placeholder-free.
- New shared components in `src/components/site/`:
  - `Navbar.tsx` — sticky floating glassmorphic (`backdrop-blur-md bg-white/70`), round logo + brand text, 3 tabs (Home, Paket Layanan, Hubungi Kami) with sliding pill background using `layoutId` from framer-motion. Mobile: hamburger dropdown.
  - `Footer.tsx` — minimal, brand + socials.
  - `FloatingWhatsApp.tsx` — fixed bottom-right pulsing button linking to wa.me/6281235484116.
  - `SiteLayout.tsx` — wraps children with navbar, footer, floating WA, and framer-motion page transition wrapper.
- Route layout: convert `src/routes/__root.tsx` root component to render `<SiteLayout><Outlet/></SiteLayout>`.

### Page 1 — `/` (Home)
Replace placeholder in `src/routes/index.tsx`:
- Hero: large serif/sans display heading "Ceriakan Momen Spesial Buah Hati Bersama Pelangi Badut!", subcopy, primary CTA "Lihat Paket Layanan" with gentle pulse ring, secondary "Hubungi Kami". Soft rainbow gradient underline accent.
- Social proof card: "Telah Dipercaya di TikTok dengan Lebih dari 9.8K+ Likes!" with TikTok icon, hover-scale, thin rainbow border.
- Bento grid (3 cards): Badut Profesional, Trik Sulap Edukatif, Games Interaktif — staggered fade-in, hover translate-y.
- Page-specific head(): title + description + og:title/og:description in Bahasa Indonesia.

### Page 2 — `/paket` (Paket Layanan)
New `src/routes/paket.tsx`:
- Section header + tab switcher (shadcn Tabs) with sliding pill: "Paket Sedang" | "Paket Besar & Premium".
- Package data in `src/data/packages.ts` (typed). Renders as high-fidelity pricing cards (grid, responsive). Each card: name, price (Rp format), checklist with amber check icons, "Pesan via WhatsApp" button that opens wa.me with pre-filled message including package name.
- Paket Fullset card highlighted with subtle rainbow gradient border + "Paling Lengkap" ribbon.
- Paket Glamour card: VIP badge (amber gradient).
- Below cards: disclaimer badge "NB: Untuk lokasi yang jauh, terdapat tambahan biaya transportasi."
- Paket Besar 1/2/Fullset/Glamour: sensible premium placeholder features (MC, badut count, backdrop, sulap, dekorasi mewah, sound system, LED, video sinematik, fotografer, MUA, sweet corner, dll — scaled up per tier).
- Page-specific head().

### Page 3 — `/kontak` (Hubungi Kami)
New `src/routes/kontak.tsx`:
- Booking form (react-hook-form + zod): Nama, Tanggal Acara (date), Paket (Select with all 8 packages), optional Lokasi/Catatan. Submit builds WhatsApp message template and opens `https://wa.me/6281235484116?text=...` in a new tab. Client-side zod validation with length limits.
- Info cards: WhatsApp Admin (081235484116), Area Layanan (Banyuwangi & sekitarnya), Jam Operasional. Rainbow-thin border on hover.
- Simulated map placeholder: styled card with pin icon and "Banyuwangi, Jawa Timur" — pure CSS gradient (no external map).
- Social buttons: Instagram + TikTok (use links previously provided by user in project context — if unknown, use placeholders `https://instagram.com/pelangibadutbanyuwangi` and `https://tiktok.com/@pelangibadutbanyuwangi`).
- Page-specific head().

### Technical Notes
- All colors via semantic tokens or amber-*/sky-* Tailwind utilities (no hardcoded hex in components).
- Rainbow gradient defined once in `styles.css` as `--gradient-rainbow-subtle` (low-saturation, ~40% opacity), applied as border via `border-image` or wrapper div with padding.
- Framer Motion: `motion.div` with `variants` for stagger; `AnimatePresence` + `motion.div` keyed by pathname in `SiteLayout` for page transitions; `layoutId="nav-pill"` for navbar sliding pill.
- WhatsApp helper `src/lib/whatsapp.ts` centralizes number + message builder with `encodeURIComponent`.
- Fully responsive: mobile-first, grid collapses to 1 col, navbar becomes sheet/hamburger.
- No backend needed (Lovable Cloud not enabled).
