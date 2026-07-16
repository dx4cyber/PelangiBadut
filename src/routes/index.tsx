import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Wand2, Gamepad2, Heart, ArrowRight } from "lucide-react";
import { RainbowBorder } from "@/components/site/RainbowBorder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pelangi Badut Banyuwangi — Hiburan Ulang Tahun Anak" },
      {
        name: "description",
        content:
          "Ceriakan momen spesial buah hati dengan badut profesional, sulap edukatif, dan games interaktif di Banyuwangi.",
      },
      { property: "og:title", content: "Pelangi Badut Banyuwangi" },
      {
        property: "og:description",
        content:
          "Hiburan ulang tahun anak paling lengkap di Banyuwangi. Badut profesional, sulap, dan games interaktif.",
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="absolute -z-10 top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -z-10 top-40 right-10 h-[320px] w-[320px] rounded-full bg-sky-200/40 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Melayani Banyuwangi & Sekitarnya
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]"
          >
            Ceriakan Momen Spesial{" "}
            <span className="relative inline-block">
              Buah Hati
              <span className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-[linear-gradient(90deg,#fbbf24,#38bdf8,#e879f9,#34d399)] opacity-70" />
            </span>{" "}
            Bersama Pelangi Badut!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Hiburan ulang tahun anak paling lengkap di Banyuwangi. Badut profesional, sulap
            edukatif, dan games interaktif yang bikin acara tak terlupakan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/paket" className="relative group">
              <span className="absolute inset-0 rounded-full bg-slate-900 opacity-20 blur-md group-hover:opacity-40 animate-pulse" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
                Lihat Paket Layanan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <RainbowBorder>
              <div className="flex flex-col sm:flex-row items-center gap-5 rounded-3xl p-6 sm:p-7">
                <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M16.5 3a5.5 5.5 0 0 0 5 3.2v3.1a8.4 8.4 0 0 1-5-1.6v7.2a6.4 6.4 0 1 1-6.4-6.4c.3 0 .5 0 .8.1v3.2a3.3 3.3 0 1 0 2.4 3.1V3h3.2Z"/></svg>
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-400 ring-2 ring-white flex items-center justify-center">
                    <Heart className="h-2.5 w-2.5 text-white" fill="currentColor" />
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Social Proof
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-semibold text-slate-900">
                    Telah Dipercaya di TikTok dengan{" "}
                    <span className="text-amber-500">Lebih dari 9.8K+ Likes!</span>
                  </div>
                </div>
                <a
                  href="https://tiktok.com/@pelangibadutbanyuwangi"
                  target="_blank"
                  rel="noreferrer"
                  className="sm:ml-auto shrink-0 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:scale-105 transition-transform"
                >
                  Lihat TikTok <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </RainbowBorder>
          </motion.div>
        </div>
      </section>

      {/* Bento Features */}
      <section className="px-6 mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              Kenapa Pelangi Badut
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Hiburan lengkap, penuh keceriaan
            </h2>
            <p className="mt-3 text-slate-600">
              Kami menyajikan pengalaman ulang tahun yang tak hanya menghibur, tapi juga edukatif
              dan penuh kenangan.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                icon: Sparkles,
                title: "Badut Profesional",
                desc: "Karakter ceria dan berpengalaman yang tahu cara membuat anak-anak tertawa lepas.",
                accent: "bg-amber-100 text-amber-600",
              },
              {
                icon: Wand2,
                title: "Trik Sulap Edukatif",
                desc: "Sulap interaktif yang memancing rasa ingin tahu sekaligus menghibur seluruh keluarga.",
                accent: "bg-sky-100 text-sky-600",
              },
              {
                icon: Gamepad2,
                title: "Games Interaktif",
                desc: "Permainan seru dengan hadiah yang bikin anak-anak terlibat aktif dari awal sampai akhir.",
                accent: "bg-emerald-100 text-emerald-600",
              },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.accent}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-900 p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#fbbf24,transparent_40%),radial-gradient(circle_at_80%_60%,#38bdf8,transparent_40%)]" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Siap membuat acara buah hati tak terlupakan?
            </h3>
            <p className="mt-3 text-slate-300 max-w-lg mx-auto">
              Konsultasikan konsep ulang tahun impian Anda bersama tim kami — gratis!
            </p>
            <Link
              to="/kontak"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:scale-105 transition-transform"
            >
              Konsultasi Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
