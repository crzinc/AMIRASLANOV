"use client";

import { useEffect, useState } from "react";
import { dict, getInitialLocale, localeLabels, locales, type Locale } from "@/lib/i18n";

const TG = "https://t.me/amramrslnv";
const WA = "https://wa.me/994506590423";
const EMAIL = "amramrslnv@gmail.com";
const QUVEX = "https://quvex.org";
const FOOD = "https://foodsavorycatering.com";

const STACK = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "React Native",
  "PWA",
  "Tailwind",
  "SEO",
  "API",
  "Telegram Bots",
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [task, setTask] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    } catch {}
  }, [locale]);

  const t = (k: string) => dict[locale][k] ?? k;

  const leadText = () => {
    const n = name.trim() || "—";
    const c = contact.trim() || "—";
    const ts = task.trim() || "—";
    if (locale === "az")
      return `Salam, Amir! Mən ${n}. Əlaqə: ${c}. Tapşırıq: ${ts}. Smeta və müddət istəyirəm.`;
    if (locale === "en")
      return `Hi Amir! I'm ${n}. Contact: ${c}. Task: ${ts}. I need an estimate + timeline.`;
    return `Привет, Амир! Я ${n}. Контакт: ${c}. Задача: ${ts}. Нужны смета и сроки.`;
  };

  const sendWA = () =>
    window.open(`${WA}?text=${encodeURIComponent(leadText())}`, "_blank");
  const sendTG = () =>
    window.open(`${TG}?text=${encodeURIComponent(leadText())}`, "_blank");

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-950">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fafaf9]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-[17px] font-extrabold tracking-tight">
              AMIRASLANOV
            </span>
            <span className="kicker-mono hidden text-neutral-500 sm:inline">
              dev
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-[13.5px] font-medium text-neutral-600 md:flex">
            <a href="#services" className="hover:text-black">{t("nav.services")}</a>
            <a href="#work" className="hover:text-black">{t("nav.work")}</a>
            <a href="#process" className="hover:text-black">{t("nav.process")}</a>
            <a href="#pricing" className="hover:text-black">{t("nav.pricing")}</a>
            <a href="#partners" className="hover:text-black">{t("nav.partners")}</a>
            <a href="#faq" className="hover:text-black">{t("nav.faq")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-stone-200 bg-white p-0.5">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`rounded-full px-2.5 py-1 text-[12px] font-bold transition ${
                    locale === l ? "bg-neutral-950 text-white" : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-neutral-950 px-4 py-2 text-[13px] font-semibold text-white hover:bg-neutral-800 sm:block"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-stone-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.5fr_1fr] md:pt-20">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-[12px] font-semibold">
                {t("hero.badge")}
              </span>
              <span className="flex items-center gap-2 text-[12.5px] font-medium text-neutral-600">
                <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {t("hero.available")}
              </span>
            </div>
            <h1 className="display-tight text-[52px] font-extrabold sm:text-[76px] lg:text-[92px]">
              {t("hero.title.1")}
              <br />
              {t("hero.title.2")}
              <br />
              <span className="text-neutral-400">{t("hero.title.3")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-neutral-600">
              {t("hero.sub")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-neutral-950 px-7 py-4 text-center text-[15px] font-bold text-white hover:bg-neutral-800"
              >
                {t("hero.cta.main")}
              </a>
              <a
                href={TG}
                target="_blank"
                className="rounded-full border border-neutral-950 px-7 py-4 text-center text-[15px] font-bold hover:bg-neutral-950 hover:text-white"
              >
                {t("hero.cta.tg")}
              </a>
            </div>
            <p className="kicker-mono mt-5 text-neutral-500">{t("hero.note")}</p>
          </div>

          {/* side card */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-stone-200 bg-white p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-lg font-extrabold text-white">
                  AA
                </div>
                <div>
                  <p className="font-bold leading-tight">Amir Amiraslanov</p>
                  <p className="text-[13px] text-neutral-500">Full-stack • Next.js / Mobile</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-stone-100 pt-6 text-center">
                <div>
                  <p className="text-xl font-extrabold">{t("hero.stats.1.n")}</p>
                  <p className="mt-1 text-[11.5px] leading-tight text-neutral-500">{t("hero.stats.1.t")}</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold">{t("hero.stats.2.n")}</p>
                  <p className="mt-1 text-[11.5px] leading-tight text-neutral-500">{t("hero.stats.2.t")}</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold">{t("hero.stats.3.n")}</p>
                  <p className="mt-1 text-[11.5px] leading-tight text-neutral-500">{t("hero.stats.3.t")}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a href={TG} target="_blank" className="rounded-xl bg-[#229ED9] px-4 py-3 text-center text-[14px] font-bold text-white hover:opacity-90">
                  Telegram — @amramrslnv
                </a>
                <a href={WA} target="_blank" className="rounded-xl bg-[#25D366] px-4 py-3 text-center text-[14px] font-bold text-white hover:opacity-90">
                  WhatsApp — +994 50 659 04 23
                </a>
                <a href={`mailto:${EMAIL}`} className="rounded-xl border border-stone-200 px-4 py-3 text-center text-[14px] font-bold hover:bg-neutral-950 hover:text-white">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-neutral-950 p-6 text-white">
              <p className="kicker-mono text-neutral-400">quvex.org — live</p>
              <p className="mt-2 text-[15px] font-semibold leading-snug">
                CRM для детейлингов: запись, заказы, оплата, аналитика.
              </p>
              <a href={QUVEX} target="_blank" className="mt-4 inline-block rounded-full bg-white px-5 py-2.5 text-[13.5px] font-bold text-black hover:bg-stone-200">
                {t("work.1.cta")} →
              </a>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-t border-stone-200 bg-white py-4">
          <p className="kicker-mono mb-3 text-center text-neutral-400">{t("stack.title")}</p>
          <div className="animate-marquee flex w-max gap-3 pr-3">
            {[...STACK, ...STACK].map((s, i) => (
              <span key={i} className="rounded-full border border-stone-200 px-5 py-2 text-[13px] font-semibold text-neutral-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="kicker-mono text-neutral-500">{t("services.kicker")}</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="display-tight text-4xl font-extrabold sm:text-5xl">{t("services.title")}</h2>
          <p className="max-w-md text-[15px] text-neutral-600">{t("services.sub")}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="card-invert rounded-3xl border border-stone-200 bg-white p-7">
              <p className="kicker-mono card-muted text-neutral-400">0{n}</p>
              <h3 className="mt-3 text-[22px] font-extrabold">{t(`services.${n}.t`)}</h3>
              <p className="card-muted mt-3 text-[14.5px] leading-relaxed text-neutral-600">
                {t(`services.${n}.d`)}
              </p>
              <p className="card-badge mt-5 inline-block rounded-full bg-neutral-950 px-3 py-1.5 text-[12px] font-bold text-white">
                {t(`services.${n}.li`)}
              </p>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-6 block rounded-2xl border border-dashed border-stone-300 bg-white p-5 text-center text-[15px] font-bold hover:bg-neutral-950 hover:text-white">
          {t("services.cta")}
        </a>
      </section>

      {/* WORK */}
      <section id="work" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="kicker-mono text-neutral-500">{t("work.kicker")}</p>
          <h2 className="display-tight mt-3 text-4xl font-extrabold sm:text-5xl">{t("work.title")}</h2>
          <p className="mt-3 text-neutral-600">{t("work.sub")}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-stone-200">
              <div className="bg-neutral-950 p-7 text-white">
                <p className="kicker-mono text-neutral-400">{t("work.1.tag")}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight">{t("work.1.title")}</h3>
              </div>
              <div className="p-7">
                <p className="text-[14.5px] leading-relaxed text-neutral-600">{t("work.1.desc")}</p>
                <ul className="mt-5 space-y-2">
                  {[`work.1.r1`, `work.1.r2`, `work.1.r3`].map((k) => (
                    <li key={k} className="flex items-center gap-2 text-[14px] font-semibold">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[12px]">✓</span>
                      {t(k)}
                    </li>
                  ))}
                </ul>
                <a href={QUVEX} target="_blank" className="mt-6 inline-block rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-bold text-white hover:bg-neutral-800">
                  {t("work.1.cta")} →
                </a>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-stone-200">
              <div className="border-b border-stone-200 bg-[#fafaf9] p-7">
                <p className="kicker-mono text-neutral-500">{t("work.2.tag")}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight">{t("work.2.title")}</h3>
              </div>
              <div className="p-7">
                <p className="text-[14.5px] leading-relaxed text-neutral-600">{t("work.2.desc")}</p>
                <ul className="mt-5 space-y-2">
                  {[`work.2.r1`, `work.2.r2`, `work.2.r3`].map((k) => (
                    <li key={k} className="flex items-center gap-2 text-[14px] font-semibold">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[12px]">✓</span>
                      {t(k)}
                    </li>
                  ))}
                </ul>
                <a href={FOOD} target="_blank" className="mt-6 inline-block rounded-full border border-neutral-950 px-6 py-3 text-[14px] font-bold hover:bg-neutral-950 hover:text-white">
                  {t("work.2.cta")} →
                </a>
              </div>
            </article>
          </div>

          <a href="#contact" className="mt-4 flex flex-col items-start justify-between gap-4 rounded-3xl bg-neutral-950 p-7 text-white sm:flex-row sm:items-center md:p-9">
            <div>
              <h3 className="text-2xl font-extrabold">{t("work.3.title")}</h3>
              <p className="mt-2 max-w-lg text-[14.5px] text-neutral-400">{t("work.3.desc")}</p>
            </div>
            <span className="rounded-full bg-white px-7 py-3.5 text-[14.5px] font-bold text-black">
              {t("work.3.cta")}
            </span>
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="kicker-mono text-neutral-500">{t("process.kicker")}</p>
        <h2 className="display-tight mt-3 text-4xl font-extrabold sm:text-5xl">{t("process.title")}</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-white p-7">
              <p className="text-4xl font-extrabold text-stone-200">0{n}</p>
              <h3 className="mt-4 text-[17px] font-extrabold">{t(`process.${n}.t`)}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-600">{t(`process.${n}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="kicker-mono text-neutral-500">{t("pricing.kicker")}</p>
          <h2 className="display-tight mt-3 text-4xl font-extrabold sm:text-5xl">{t("pricing.title")}</h2>
          <p className="mt-3 text-neutral-600">{t("pricing.sub")}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`rounded-3xl border p-7 ${
                  n === 2 ? "border-neutral-950 bg-neutral-950 text-white" : "border-stone-200 bg-[#fafaf9]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-[15px] font-bold ${n === 2 ? "text-white" : ""}`}>{t(`pricing.${n}.t`)}</p>
                  {n === 2 && (
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-black">
                      {t("pricing.2.badge")}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-4xl font-extrabold">{t(`pricing.${n}.p`)}</p>
                <p className={`mt-1.5 inline-block rounded-full px-3 py-1 text-[12.5px] font-bold ${n === 2 ? "bg-white/10 text-white" : "bg-neutral-950/[0.06] text-neutral-800"}`}>{t(`pricing.${n}.s`)}</p>
                <p className={`mt-2 text-[13.5px] ${n === 2 ? "text-neutral-400" : "text-neutral-600"}`}>{t(`pricing.${n}.d`)}</p>
                <ul className={`mt-6 space-y-2.5 border-t pt-6 text-[13.5px] font-medium ${n === 2 ? "border-neutral-800" : "border-stone-200"}`}>
                  {[1, 2, 3, 4].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>—</span> {t(`pricing.${n}.f${f}`)}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 block rounded-full py-3.5 text-center text-[14.5px] font-bold ${
                    n === 2 ? "bg-white text-black hover:bg-stone-200" : "bg-neutral-950 text-white hover:bg-neutral-800"
                  }`}
                >
                  {t("pricing.cta")}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[13.5px] text-neutral-500">{t("pricing.note")}</p>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-3xl bg-neutral-950 p-7 text-white md:p-12">
          <p className="kicker-mono text-neutral-400">{t("partners.kicker")}</p>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="display-tight max-w-xl text-4xl font-extrabold sm:text-5xl">
              {t("partners.title")}
            </h2>
            <p className="max-w-md text-[15px] text-neutral-400">{t("partners.sub")}</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-neutral-800 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-neutral-950 p-6">
                <p className="text-3xl font-extrabold text-neutral-700">0{n}</p>
                <h3 className="mt-3 text-[16px] font-extrabold">{t(`partners.${n}.t`)}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-400">
                  {t(`partners.${n}.d`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-lg text-[14px] text-neutral-400">{t("partners.note")}</p>
            <a
              href="#contact"
              className="shrink-0 rounded-full bg-white px-7 py-3.5 text-[14.5px] font-bold text-black hover:bg-stone-200"
            >
              {t("partners.cta")} →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="kicker-mono text-center text-neutral-500">{t("faq.kicker")}</p>
        <h2 className="display-tight mt-3 text-center text-4xl font-extrabold sm:text-5xl">{t("faq.title")}</h2>
        <div className="mt-10 space-y-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <details key={n} className="group rounded-2xl border border-stone-200 bg-white px-6 py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-bold">
                {t(`faq.${n}.q`)}
                <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xl font-light text-white">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-relaxed text-neutral-600">{t(`faq.${n}.a`)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-stone-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="kicker-mono text-neutral-400">{t("contact.kicker")}</p>
            <h2 className="display-tight mt-3 text-4xl font-extrabold sm:text-5xl">{t("contact.title")}</h2>
            <p className="mt-4 max-w-md text-[15px] text-neutral-400">{t("contact.sub")}</p>
            <div className="mt-8 space-y-3">
              <p className="kicker-mono text-neutral-500">{t("contact.direct")}</p>
              <div className="flex flex-wrap gap-2">
                <a href={TG} target="_blank" className="rounded-full bg-white px-5 py-2.5 text-[13.5px] font-bold text-black hover:bg-stone-200">Telegram</a>
                <a href={WA} target="_blank" className="rounded-full bg-white px-5 py-2.5 text-[13.5px] font-bold text-black hover:bg-stone-200">WhatsApp</a>
                <a href={`mailto:${EMAIL}`} className="rounded-full border border-neutral-700 px-5 py-2.5 text-[13.5px] font-bold hover:bg-white hover:text-black">Email</a>
              </div>
              <p className="pt-2 text-[13px] text-neutral-500">@amramrslnv • +994 50 659 04 23 • {EMAIL}</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 text-neutral-950 md:p-8">
            <label className="text-[13px] font-bold">{t("contact.form.name")}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.form.name.ph")}
              className="mt-2 w-full rounded-xl border border-stone-200 bg-[#fafaf9] px-4 py-3.5 text-[14.5px] outline-none focus:border-black"
            />
            <label className="mt-5 block text-[13px] font-bold">{t("contact.form.contact")}</label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={t("contact.form.contact.ph")}
              className="mt-2 w-full rounded-xl border border-stone-200 bg-[#fafaf9] px-4 py-3.5 text-[14.5px] outline-none focus:border-black"
            />
            <label className="mt-5 block text-[13px] font-bold">{t("contact.form.task")}</label>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder={t("contact.form.task.ph")}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-[#fafaf9] px-4 py-3.5 text-[14.5px] outline-none focus:border-black"
            />
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button onClick={sendTG} className="rounded-full bg-[#229ED9] py-3.5 text-[14.5px] font-bold text-white hover:opacity-90">
                {t("contact.form.send.tg")}
              </button>
              <button onClick={sendWA} className="rounded-full bg-[#25D366] py-3.5 text-[14.5px] font-bold text-white hover:opacity-90">
                {t("contact.form.send.wa")}
              </button>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-neutral-500">{t("contact.form.note")}</p>
          </div>
        </div>
        <footer className="border-t border-neutral-800">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-[12.5px] text-neutral-500 sm:flex-row sm:items-center">
            <span className="font-extrabold text-white">AMIRASLANOV</span>
            <span>{t("footer.stack")}</span>
            <span>{t("footer.rights")}</span>
          </div>
        </footer>
      </section>

      {/* sticky mobile */}
      <a
        href="#contact"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-neutral-950 py-4 text-center text-[15px] font-bold text-white shadow-2xl sm:hidden"
      >
        {t("sticky.cta")} →
      </a>
    </div>
  );
}
