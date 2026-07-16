import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import { pakets } from "@/data/packages";
import { waLink, pesanFormMessage, WA_DISPLAY, WA_NUMBER } from "@/lib/whatsapp";
import { RainbowBorder } from "@/components/site/RainbowBorder";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Hubungi Kami — Pelangi Badut Banyuwangi" },
      {
        name: "description",
        content:
          "Pesan jasa badut dan hiburan ulang tahun anak di Banyuwangi. Hubungi admin via WhatsApp untuk konsultasi gratis.",
      },
      { property: "og:title", content: "Hubungi Kami — Pelangi Badut Banyuwangi" },
      {
        property: "og:description",
        content: "Konsultasi & pemesanan hiburan ulang tahun anak di Banyuwangi.",
      },
    ],
  }),
  component: KontakPage,
});

const schema = z.object({
  nama: z.string().trim().min(2, "Nama minimal 2 karakter").max(80, "Terlalu panjang"),
  tanggal: z.string().min(1, "Tanggal wajib diisi"),
  paket: z.string().min(1, "Pilih salah satu paket"),
  lokasi: z.string().trim().max(160).optional().or(z.literal("")),
  catatan: z.string().trim().max(500).optional().or(z.literal("")),
});
type FormValues = z.infer<typeof schema>;

function KontakPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nama: "", tanggal: "", paket: "", lokasi: "", catatan: "" },
  });

  const onSubmit = (data: FormValues) => {
    const msg = pesanFormMessage({
      nama: data.nama,
      tanggal: data.tanggal,
      paket: data.paket,
      lokasi: data.lokasi || undefined,
      catatan: data.catatan || undefined,
    });
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="px-6 pt-16 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            Hubungi Kami
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Mari wujudkan acara impian
          </h1>
          <p className="mt-3 text-slate-600">
            Isi formulir di bawah dan tim kami akan menghubungi Anda melalui WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <RainbowBorder>
              <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl p-7 sm:p-9 space-y-5">
                <div>
                  <div className="text-lg font-semibold text-slate-900">Formulir Pemesanan</div>
                  <div className="text-sm text-slate-500 mt-1">
                    Kami akan meneruskan detail ke admin via WhatsApp.
                  </div>
                </div>

                <Field label="Nama Lengkap" error={errors.nama?.message}>
                  <input
                    {...register("nama")}
                    placeholder="Nama Anda"
                    className="input"
                  />
                </Field>

                <Field label="Tanggal Acara" error={errors.tanggal?.message}>
                  <input type="date" {...register("tanggal")} className="input" />
                </Field>

                <Field label="Pilih Paket" error={errors.paket?.message}>
                  <select {...register("paket")} className="input appearance-none pr-9 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_0.9rem_center]">
                    <option value="">— Pilih paket —</option>
                    {pakets.map((p) => (
                      <option key={p.id} value={`${p.nama} (${p.harga})`}>
                        {p.nama} — {p.harga}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Lokasi Acara (opsional)" error={errors.lokasi?.message}>
                  <input
                    {...register("lokasi")}
                    placeholder="Alamat / kota"
                    className="input"
                  />
                </Field>

                <Field label="Catatan (opsional)" error={errors.catatan?.message}>
                  <textarea
                    {...register("catatan")}
                    rows={3}
                    placeholder="Tema, jumlah tamu, permintaan khusus..."
                    className="input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:scale-[1.01] transition-transform"
                >
                  <Send className="h-4 w-4" />
                  Kirim via WhatsApp
                </button>
              </form>
            </RainbowBorder>
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              accent="bg-emerald-100 text-emerald-600"
              title="WhatsApp Admin"
              value={WA_DISPLAY}
              href={`https://wa.me/${WA_NUMBER}`}
            />
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              accent="bg-sky-100 text-sky-600"
              title="Area Layanan"
              value="Banyuwangi & sekitarnya"
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              accent="bg-amber-100 text-amber-600"
              title="Jam Operasional"
              value="Setiap hari · 08.00 – 21.00 WIB"
            />

            {/* Map placeholder */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden">
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.25),transparent_55%)]" />
                <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.4)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-rose-500/50 blur-md animate-ping" />
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg">
                      <MapPin className="h-4 w-4" fill="currentColor" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-slate-900">Banyuwangi, Jawa Timur</div>
                <div className="text-xs text-slate-500 mt-1">
                  Melayani seluruh wilayah Banyuwangi dan sekitarnya.
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://instagram.com/pelangibadutbanyuwangi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-amber-400 text-white">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">Instagram</div>
                  <div className="text-sm font-semibold text-slate-900">@pelangibadut</div>
                </div>
              </a>
              <a
                href="https://tiktok.com/@pelangibadutbanyuwangi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-slate-900 hover:shadow-md transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M16.5 3a5.5 5.5 0 0 0 5 3.2v3.1a8.4 8.4 0 0 1-5-1.6v7.2a6.4 6.4 0 1 1-6.4-6.4c.3 0 .5 0 .8.1v3.2a3.3 3.3 0 1 0 2.4 3.1V3h3.2Z"/></svg>
                </span>
                <div>
                  <div className="text-xs text-slate-500">TikTok</div>
                  <div className="text-sm font-semibold text-slate-900">@pelangibadut</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  );
}

function InfoCard({
  icon,
  title,
  value,
  accent,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  accent: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
        {icon}
      </span>
      <div>
        <div className="text-xs text-slate-500">{title}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
