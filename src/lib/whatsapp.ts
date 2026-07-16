export const WA_NUMBER = "6281235484116";
export const WA_DISPLAY = "0812-3548-4116";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function pesanPaketMessage(paket: string, harga: string) {
  return `Halo Admin Pelangi Badut Banyuwangi 👋\n\nSaya tertarik untuk memesan:\n• Paket: ${paket}\n• Harga: ${harga}\n\nMohon info ketersediaan tanggalnya. Terima kasih!`;
}

export function pesanFormMessage(input: {
  nama: string;
  tanggal: string;
  paket: string;
  lokasi?: string;
  catatan?: string;
}) {
  return [
    "Halo Admin Pelangi Badut Banyuwangi 👋",
    "",
    "Saya ingin melakukan pemesanan:",
    `• Nama: ${input.nama}`,
    `• Tanggal Acara: ${input.tanggal}`,
    `• Paket: ${input.paket}`,
    input.lokasi ? `• Lokasi: ${input.lokasi}` : null,
    input.catatan ? `• Catatan: ${input.catatan}` : null,
    "",
    "Mohon konfirmasi ketersediaannya. Terima kasih!",
  ]
    .filter(Boolean)
    .join("\n");
}
