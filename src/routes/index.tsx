import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield, HeartPulse, Bot, Zap, Trophy, Calendar, MapPin, Users,
  Menu, X, Instagram, QrCode,
  ChevronDown, Sparkles, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Countdown } from "@/components/Countdown";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebgy2D9CZ2R28luTDsd2PbaHG-OPIkcREiWVi3b9dlX7o65g/viewform";

const NAV = [
  { l: "About", h: "#about" },
  { l: "Domains", h: "#domains" },
  { l: "Timeline", h: "#timeline" },
  { l: "Prizes", h: "#prizes" },
  { l: "Gallery", h: "#gallery" },
  { l: "FAQ", h: "#faq" },
  { l: "Contact", h: "#contact" },
];

const DOMAINS = [
  { icon: Shield, title: "Cyber Security", desc: "Build defenses, ethical hacks, and secure systems for tomorrow's digital world.", grad: "from-cyan-400 to-blue-600" },
  { icon: HeartPulse, title: "Health Care", desc: "Innovate medical tech, diagnostics, and patient-centric solutions saving lives.", grad: "from-pink-400 to-purple-600" },
  { icon: Bot, title: "AI & Robotics", desc: "Intelligent automation, machine learning and autonomous systems shaping reality.", grad: "from-violet-400 to-indigo-600" },
];

const TIMELINE = [
  { d: "09 May 2026", t: "Registration Opens", desc: "Form your team of 2–4 and lock your domain." },
  { d: "20 May 2026", t: "Registration Closes", desc: "Final submissions of team details and ideas." },
  { d: "29 May 2026", t: "Event Day", desc: "Hack from sunrise to spotlight at MITM Mysore." },
  { d: "30 May 2026", t: "Winners Announced", desc: "₹15,000 prize pool unlocked for the best builds." },
];

const STUDENTS = ["Akshay G", "Likith V", "Sandesh SP", "Saqib Ahmed Z", "Sumukh Bharadwaj KS", "Vaishakh B", "Subbaiah K P", "Yashwanth HB"];
const FACULTY = ["Dr. Balakrishna K", "Prof. Shivaprasad K", "Prof. Sandesh N G"];

const FAQS = [
  { q: "Who can participate?", a: "Any undergraduate student passionate about innovation. Teams of 2–4 across disciplines are welcome." },
  { q: "Is there a registration fee?", a: "Yes. A registration fee of ₹150 per head is applicable for VOLT X THINKATHON 2026." },
  { q: "Where is the venue?", a: "Maharaja Institute of Technology Mysore (MITM) — ECE Department, Belawadi, Srirangapatna." },
  { q: "What should we bring?", a: "Laptops, chargers, your stack of choice, hardware (if any) and unlimited curiosity." },
  { q: "Where are responses stored?", a: "All registrations submitted via the Google Form are securely stored in Google Sheets." },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <nav className={`glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_8px_40px_rgba(120,80,255,0.25)]" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] shadow-[var(--shadow-neon-blue)]">
              <Zap className="h-5 w-5 text-white" />
            </span>
            <span className="text-base sm:text-lg">VOLT<span className="text-gradient"> X </span>THINKATHON</span>
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <li key={n.h}>
                <a href={n.h} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                  {n.l}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={FORM_URL} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] px-5 py-2 text-sm font-medium text-white shadow-[var(--shadow-neon-blue)] hover:scale-105 transition-transform"
            >
              Register <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md hover:bg-white/5" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.h}>
                  <a onClick={() => setOpen(false)} href={n.h} className="block px-3 py-2.5 rounded-lg hover:bg-white/5 text-sm">
                    {n.l}
                  </a>
                </li>
              ))}
              <li>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block mt-2 px-3 py-2.5 rounded-lg text-center bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] text-white font-medium">
                  Register Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-up" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full glass-card rounded-3xl p-8 text-center">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-white/10" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
        <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] flex items-center justify-center mb-4 shadow-[var(--shadow-neon)]">
          <CheckCircle2 className="h-9 w-9 text-white" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">Registration form opened!</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Complete the Google Form in the new tab. Your responses are securely stored in Google Sheets and the team will reach out via email.
        </p>
        <a
          href={FORM_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] px-6 py-2.5 text-sm font-medium text-white"
        >
          Reopen Form <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
      <div className="glow-orb h-[500px] w-[500px] -top-20 -left-20 bg-[oklch(0.65_0.27_305)] animate-pulse-glow" />
      <div className="glow-orb h-[400px] w-[400px] -bottom-20 -right-20 bg-[oklch(0.72_0.2_235)] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-8 animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
          <span>MITM Mysore · ECE Department · 29 May 2026</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          VOLT <span className="text-gradient">X</span> THINKATHON
          <span className="block text-3xl sm:text-5xl lg:text-6xl mt-3 text-muted-foreground font-medium">2026</span>
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Powering Ideas. <span className="text-gradient font-semibold">Building Tomorrow.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={onRegister}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] px-8 py-3.5 font-medium text-white shadow-[var(--shadow-neon)] hover:scale-105 transition-transform"
          >
            Register Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full glass px-8 py-3.5 font-medium hover:bg-white/10 transition-colors">
            Explore Event
          </a>
        </div>

        <div className="mt-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Countdown to launch</p>
          <Countdown />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[var(--neon-blue)]" /> 29 May 2026</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--neon-purple)]" /> MITM College</span>
          <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[var(--neon-cyan)]" /> 2–4 Members</span>
          <span className="flex items-center gap-2"><Trophy className="h-4 w-4 text-[var(--neon-blue)]" /> ₹15,000 Pool</span>
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[var(--neon-cyan)]" /> ₹150 / head</span>
        </div>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 h-6 w-6 text-muted-foreground animate-bounce" />
    </section>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-block glass rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[var(--neon-cyan)] mb-4">{tag}</div>
      <h2 className="text-4xl sm:text-5xl font-bold font-display">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function About() {
  const items = [
    { icon: Sparkles, t: "Event Purpose", d: "A 1-day high-voltage Thinkathon empowering students to ideate, prototype and pitch solutions that solve real problems." },
    { icon: Zap, t: "Innovation Goals", d: "Pitch your idea for a problem currently faced by society — in cybersecurity, healthcare or AI/robotics — and turn it into a working prototype, not just slides." },
    { icon: Users, t: "Student Collaboration", d: "Cross-disciplinary teams of 2–4 unite to learn, build and battle for the ₹15,000 prize pool." },
  ];
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="About" title="Where ideas spark, builders ignite." sub="Hosted by the Department of Electronics & Communication Engineering, Maharaja Institute of Technology Mysore." />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.t} className="glass-card rounded-2xl p-7 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] flex items-center justify-center mb-4">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{it.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Domains() {
  return (
    <section id="domains" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Tracks" title="Three domains. Infinite possibilities." />
        <div className="grid md:grid-cols-3 gap-6">
          {DOMAINS.map((d, i) => (
            <div key={d.title} className="group relative glass-card rounded-3xl p-8 overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${d.grad} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
              <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${d.grad} flex items-center justify-center mb-5 shadow-lg`}>
                <d.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader tag="Roadmap" title="Mark your calendar." />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-purple)] via-[var(--neon-blue)] to-transparent -translate-x-1/2 sm:-translate-x-1/2" />
          {TIMELINE.map((t, i) => (
            <div key={t.t} className={`relative mb-10 sm:mb-14 flex sm:items-center ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
              <div className="sm:w-1/2 sm:px-8 pl-12 sm:pl-0">
                <div className="glass-card rounded-2xl p-6 animate-fade-up">
                  <div className="text-xs font-semibold tracking-wider text-[var(--neon-cyan)] uppercase mb-1">{t.d}</div>
                  <h3 className="text-xl font-bold font-display mb-1">{t.t}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] ring-4 ring-background shadow-[var(--shadow-neon)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prizes({ onRegister }: { onRegister: () => void }) {
  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="Rewards" title="Build big. Win big." />
        <div className="relative glass-card rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.27_305)]/15 via-transparent to-[oklch(0.72_0.2_235)]/15" />
          <Trophy className="relative mx-auto h-16 w-16 text-[var(--neon-cyan)] mb-6 animate-float" />
          <div className="relative text-7xl sm:text-9xl font-bold font-display text-gradient mb-4 leading-none">
            ₹15,000
          </div>
          <p className="relative text-xl text-muted-foreground mb-2">Total Prize Pool</p>
          <p className="relative text-sm text-muted-foreground/70 mb-8">+ Certificates · Mentorship · Goodies for all finalists</p>
          <button onClick={onRegister} className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] px-7 py-3 font-medium text-white shadow-[var(--shadow-neon)]">
            Claim Your Spot <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const seeds = [11, 22, 33, 44, 55, 66];
  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Glimpses" title="Moments from our innovation labs." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {seeds.map((s, i) => (
            <div key={s} className={`relative overflow-hidden rounded-2xl glass-card group ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.27_305)]/30 to-[oklch(0.72_0.2_235)]/30 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="relative h-full w-full flex items-center justify-center text-muted-foreground/50 text-sm">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const names = ["MITM", "ECE Dept", "IEEE", "Innovation Cell", "Tech Club", "Startup Hub"];
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Partners" title="Powered by visionaries." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {names.map((n) => (
            <div key={n} className="glass rounded-xl py-6 px-4 text-center text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-[var(--neon-blue)]/40 transition-colors">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeader tag="FAQ" title="Things you might ask." />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="glass-card rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium pr-4">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QRSection({ onRegister }: { onRegister: () => void }) {
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&bgcolor=10-10-30&color=FFFFFF&margin=10&data=${encodeURIComponent(FORM_URL)}`;
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl glass-card rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--neon-cyan)] mb-4">
            <QrCode className="h-4 w-4" /> Scan to Register
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold font-display mb-3">Skip the typing. <span className="text-gradient">Scan it.</span></h3>
          <p className="text-muted-foreground mb-6">Point your camera and jump straight into the registration form. Responses go directly to our secure Google Sheets.</p>
          <button onClick={onRegister} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] px-6 py-3 font-medium text-white">
            Or Register Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative p-4 bg-white rounded-2xl shadow-[var(--shadow-neon)]">
            <img src={qr} alt="Registration QR" className="h-56 w-56 sm:h-64 sm:w-64" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Coordinators" title="The team behind the voltage." />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold font-display mb-1">Faculty Coordinators</h3>
            <p className="text-xs text-muted-foreground mb-5 uppercase tracking-wider">Mentors guiding the journey</p>
            <ul className="space-y-3">
              {FACULTY.map((n) => (
                <li key={n} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] flex items-center justify-center text-sm font-bold">
                    {n.split(" ").pop()?.[0]}
                  </div>
                  <span className="font-medium">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold font-display mb-1">Student Coordinators</h3>
            <p className="text-xs text-muted-foreground mb-5 uppercase tracking-wider">Reach out for any query</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {STUDENTS.map((n) => (
                <li key={n} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-sm">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)]/40 to-[var(--neon-purple)]/40 flex items-center justify-center text-xs font-bold">
                    {n.split(" ")[0][0]}
                  </div>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.27_305)] to-[oklch(0.72_0.2_235)] flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </span>
              VOLT X THINKATHON
            </div>
            <p className="text-sm text-muted-foreground">Powering Ideas. Building Tomorrow. Hosted by MITM Mysore — ECE Department.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.h}><a href={n.h} className="hover:text-foreground transition-colors">{n.l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-[var(--neon-blue)]/50 hover:text-[var(--neon-blue)] transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>© 2026 VOLT X THINKATHON · MITM ECE Department. All rights reserved.</span>
          <span>Crafted with ⚡ for innovators.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const [modal, setModal] = useState(false);
  const onRegister = () => {
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
    setModal(true);
  };
  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main>
        <Hero onRegister={onRegister} />
        <About />
        <Domains />
        <Timeline />
        <Prizes onRegister={onRegister} />
        <Gallery />
        
        <QRSection onRegister={onRegister} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <RegisterModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
