import { waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Halo Admin Pelangi Badut Banyuwangi, saya ingin bertanya tentang layanan.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.98 11.98 0 0 0 5.8 1.48h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.22-3.48-8.39ZM12.01 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.68.96.98-3.59-.23-.37a9.79 9.79 0 0 1-1.51-5.23c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.09 1.02 6.95 2.88a9.75 9.75 0 0 1 2.88 6.95c-.01 5.42-4.42 9.81-9.85 9.81Zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
    </a>
  );
}
