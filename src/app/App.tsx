import { useState, useEffect, useRef } from "react";
import {
  Wheat,
  Truck,
  Handshake,
  ShieldCheck,
  PackageCheck,
  BarChart3,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Leaf,
  Package,
  Building2,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────
interface NavItem { label: string; href: string }
interface Product { name: string; desc: string; image: string; available: boolean; tag: string }
interface Service { icon: React.ElementType; title: string; desc: string }
interface Step { num: string; title: string; desc: string }
interface Stat { value: string; label: string; icon: React.ElementType }
interface Trust { icon: React.ElementType; title: string; desc: string }

// ─── DATA ──────────────────────────────────────────────
const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS: Product[] = [
  {
    name: "Rice",
    desc: "Premium quality parboiled and white rice, sourced from trusted farms. Available in bulk supply and packaged formats for retail and wholesale.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&auto=format",
    available: true,
    tag: "High Demand",
  },
  {
    name: "Maize",
    desc: "Grade A yellow and white maize for food processing, animal feed, and industrial applications. Consistent quality, year-round supply.",
    image: "https://www.shutterstock.com/image-photo/corn-grains-hands-successful-farmer-260nw-2471409883.jpg?w=600&h=400&fit=crop&auto=format",
    available: true,
    tag: "Bulk Available",
  },
  {
    name: "Wheat",
    desc: "Milling-grade hard and soft wheat varieties for flour production, baking industries, and food manufacturers requiring reliable raw material sourcing.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&auto=format",
    available: true,
    tag: "Seasonal",
  },
  {
    name: "Other Grains",
    desc: "Sorghum, soybeans, millet, groundnuts, and specialty grains. Our diverse product range meets varied agricultural and industrial requirements.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&auto=format",
    available: true,
    tag: "Enquire",
  },
];

const SERVICES: Service[] = [
  {
    icon: TrendingUp,
    title: "Grain Trading",
    desc: "We facilitate efficient grain trading between farmers, processors, and end-users — ensuring fair pricing, transparent transactions, and reliable market access.",
  },
  {
    icon: Leaf,
    title: "Agricultural Supply",
    desc: "End-to-end agricultural supply services including product sourcing, quality verification, and coordinated procurement for businesses of all sizes.",
  },
  {
    icon: Truck,
    title: "Bulk Distribution",
    desc: "Organised bulk logistics and distribution operations covering storage, handling, transportation, and timely delivery to your specified location.",
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    desc: "Strategic supply partnerships with processors, retailers, exporters, and institutional buyers. We build long-term relationships founded on consistency.",
  },
];

const STEPS: Step[] = [
  { num: "01", title: "Source Quality Products", desc: "We identify and engage trusted farmers and certified agricultural producers to secure premium-grade grain at source." },
  { num: "02", title: "Quality Checking", desc: "Every product batch undergoes thorough quality verification — checking moisture content, purity, and grade standards before acceptance." },
  { num: "03", title: "Storage & Preparation", desc: "Products are stored in proper facilities and prepared for distribution, maintaining quality through careful handling and conditioning." },
  { num: "04", title: "Customer Delivery", desc: "Timely, organised delivery to your location — whether local collection, city distribution, or bulk logistics coordination." },
];

const STATS: Stat[] = [
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "200+", label: "Customers Served", icon: Users },
  { value: "12+", label: "Products Supplied", icon: Package },
  { value: "4", label: "States Covered", icon: Globe },
];

const TRUST: Trust[] = [
  { icon: ShieldCheck, title: "Quality Sourcing", desc: "We partner with verified farms and certified suppliers to guarantee consistently high-grade agricultural products." },
  { icon: Truck, title: "Reliable Delivery", desc: "Scheduled, dependable delivery operations with proper logistics and communication at every stage." },
  { icon: BarChart3, title: "Competitive Pricing", desc: "Market-fair pricing models that benefit both buyers and suppliers — transparent, with no hidden charges." },
  { icon: Globe, title: "Strong Supplier Network", desc: "An established network of farmers, traders, and logistics partners across multiple states and regions." },
];

// ─── HELPERS ───────────────────────────────────────────
function goTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function useOnScreen(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── SECTION HEADER ────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto mb-14" : "mb-14"}>
      <span
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
        style={{ color: "#c49a26", fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className="w-8 h-px bg-current opacity-70" />
        {eyebrow}
        <span className="w-8 h-px bg-current opacity-70" />
      </span>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
      </h2>
      {sub && <p className="text-muted-foreground leading-relaxed text-base max-w-xl" style={{ marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined }}>{sub}</p>}
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "products", "services", "why", "process", "contact"];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleNav = (href: string) => { setMenuOpen(false); goTo(href); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAVIGATION ───────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center"
              style={{ backgroundColor: "#1e4d2b" }}
            >
              <Wheat size={18} className="text-white" />
            </div>
            <div>
              <p
                className="text-sm font-bold leading-none tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#1e4d2b" }}
              >
                DALGLOBAL
              </p>
              <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase font-medium">
                Ventures
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === href.slice(1)
                    ? "text-white"
                    : scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
                style={activeSection === href.slice(1) ? { backgroundColor: "#1e4d2b" } : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#c49a26", fontFamily: "'Montserrat', sans-serif" }}
            >
              Request Supply
              <ArrowRight size={14} />
            </button>
            <button
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-colors ${
                scrolled ? "border-border text-foreground" : "border-white/40 text-white"
              }`}
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-b border-border shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {NAV.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="w-full mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1e4d2b" }}
              >
                Request Supply
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=900&fit=crop&auto=format"
            alt="Golden grain fields at harvest"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(15,36,18,0.88) 0%, rgba(15,36,18,0.70) 50%, rgba(15,36,18,0.40) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-white/20 backdrop-blur-sm bg-white/5">
              <Star size={13} style={{ color: "#c49a26" }} fill="#c49a26" />
              <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
                Agricultural Trading &amp; Supply
              </span>
            </div>

            <h1
              className="font-bold leading-[1.07] mb-6 text-white"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
            >
              Quality Agricultural
              <br />
              <span style={{ color: "#c49a26" }}>Products.</span>
              <br />
              Reliable Supply
              <br />
              Solutions.
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
              Dalglobal Ventures provides dependable grain trading and agricultural supply services,
              connecting customers with quality products from trusted sources.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => goTo("#products")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "#1e4d2b", fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Products
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => goTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Contact Us
              </button>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/15">
              {[
                { icon: CheckCircle, text: "Quality Verified Products" },
                { icon: Truck, text: "Reliable Logistics" },
                { icon: Award, text: "Trusted Supplier" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: "#c49a26" }} />
                  <span className="text-white/70 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => goTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce"
        >
          <ChevronDown size={24} className="text-white/40" />
        </button>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="py-28" style={{ backgroundColor: "#fafaf7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=530&fit=crop&auto=format"
                    alt="Agricultural grain field"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=530&fit=crop&auto=format"
                    alt="Grain harvesting operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating stat */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-5 rounded-xl shadow-xl flex items-center gap-5 border border-border"
                style={{ backgroundColor: "#1e4d2b" }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>5+</p>
                  <p className="text-xs text-white/60 tracking-widest uppercase mt-0.5">Years</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <p className="text-sm font-semibold text-white">Established Experience</p>
                  <p className="text-xs text-white/60">Agricultural Trading</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 lg:pt-0">
              <SectionHeader
                eyebrow="About Us"
                title={<>Who We <span style={{ color: "#1e4d2b" }}>Are</span></>}
                sub="Dalglobal Ventures is an agricultural trading company focused on sourcing, supplying, and distributing quality grain products while maintaining reliability and customer satisfaction."
              />

              <p className="text-muted-foreground leading-relaxed mb-8">
                We connect farmers and producers with buyers, processors, and distributors — building
                dependable supply chains that benefit every party in the agricultural value chain.
                Our commitment is to quality, consistency, and the growth of the agricultural sector.
              </p>

              {/* Mission */}
              <div
                className="rounded-xl p-5 mb-8 border-l-4 border-0"
                style={{ backgroundColor: "#f4efe4", borderLeftColor: "#1e4d2b" }}
              >
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1e4d2b", fontFamily: "'Montserrat', sans-serif" }}>Our Mission</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  To be the most reliable agricultural supply partner in our region — delivering quality products,
                  fair trade, and dependable service to every customer we serve.
                </p>
              </div>

              {/* Value cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, label: "Quality", desc: "Grade A products only" },
                  { icon: PackageCheck, label: "Reliability", desc: "Consistent supply chain" },
                  { icon: Users, label: "Customer Trust", desc: "Long-term partnerships" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4 border border-border text-center bg-white hover:border-green-800/20 transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "#e8f0ea" }}
                    >
                      <Icon size={17} style={{ color: "#1e4d2b" }} />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────── */}
      <section id="products" className="py-28" style={{ backgroundColor: "#f4efe4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Products"
            title={<>Quality Grains &amp; <span style={{ color: "#1e4d2b" }}>Agricultural Products</span></>}
            sub="We supply a curated range of premium grain products, sourced from verified farms and distributed with care."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Services"
            title={<>What We <span style={{ color: "#1e4d2b" }}>Offer</span></>}
            sub="From sourcing to delivery, we provide comprehensive agricultural supply solutions for businesses and individuals."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section
        id="why"
        className="py-28"
        style={{
          background: "linear-gradient(135deg, #1a3d24 0%, #1e4d2b 60%, #2d6e40 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ color: "#c49a26", fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="w-8 h-px bg-current" />
              Why Choose Us
              <span className="w-8 h-px bg-current" />
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              The Dalglobal Difference
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              We&apos;ve built our reputation on four uncompromising pillars that define every transaction we handle.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl p-6 text-center border border-white/10 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(196,154,38,0.2)" }}>
                  <Icon size={18} style={{ color: "#c49a26" }} />
                </div>
                <p className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{value}</p>
                <p className="text-xs text-white/50 tracking-widest uppercase">{label}</p>
              </div>
            ))}
          </div>

          {/* Trust pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6 border border-white/10 hover:border-white/25 transition-colors group"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(196,154,38,0.18)" }}
                >
                  <Icon size={20} style={{ color: "#c49a26" }} />
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLY PROCESS ───────────────────────────── */}
      <section id="process" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="How It Works"
            title={<>Our Supply <span style={{ color: "#1e4d2b" }}>Process</span></>}
            sub="A clear, structured process that guarantees product quality and on-time delivery every time."
            center
          />
          <div className="relative">
            {/* Connector line desktop */}
            <div
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: "#e8f0ea" }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="py-28" style={{ backgroundColor: "#f4efe4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <SectionHeader
                eyebrow="Contact Us"
                title={<>Request a <span style={{ color: "#1e4d2b" }}>Quotation</span></>}
                sub="Tell us what you need and our team will respond with availability, pricing, and supply details within 24 hours."
              />

              {/* Contact info */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "+234 000 000 0000" },
                  { icon: Mail, label: "Email", value: "info@dalglobalventures.com" },
                  { icon: MapPin, label: "Location", value: "Nigeria — Multi-State Operations" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#e8f0ea" }}
                    >
                      <Icon size={17} style={{ color: "#1e4d2b" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Supply categories quick-select hint */}
              <div className="p-5 rounded-xl border border-border bg-white">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Popular Enquiries</p>
                <div className="flex flex-wrap gap-2">
                  {["Bulk Rice Supply", "Maize (Wholesale)", "Wheat (Milling Grade)", "Mixed Grain Order", "Export Partnership"].map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-border font-medium text-muted-foreground cursor-default hover:border-green-700/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#e8f0ea" }}
                  >
                    <CheckCircle size={30} style={{ color: "#1e4d2b" }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Enquiry Received
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you for reaching out. Our team will review your request and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium underline underline-offset-4"
                    style={{ color: "#1e4d2b" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3
                      className="text-xl font-bold text-foreground mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Request a Supply Quote
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">All fields are required. We respond within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Adeyemi"
                        value={form.name}
                        onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-green-700/40 focus:ring-1 focus:ring-green-700/20 transition-all"
                        style={{ backgroundColor: "#fafaf7" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-green-700/40 focus:ring-1 focus:ring-green-700/20 transition-all"
                        style={{ backgroundColor: "#fafaf7" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 000 000 0000"
                      value={form.phone}
                      onChange={e => setForm(s => ({ ...s, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-green-700/40 focus:ring-1 focus:ring-green-700/20 transition-all"
                      style={{ backgroundColor: "#fafaf7" }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-1.5">Message / Requirements</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe the product(s), quantity, location, and any other requirements..."
                      value={form.message}
                      onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-green-700/40 focus:ring-1 focus:ring-green-700/20 transition-all resize-none"
                      style={{ backgroundColor: "#fafaf7" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: "#1e4d2b", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Wheat size={16} />
                    Submit Supply Request
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24 working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{ backgroundColor: "#111c13" }}>
        {/* Top band */}
        <div
          className="py-16 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#c49a26" }}
                  >
                    <Wheat size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>DALGLOBAL</p>
                    <p className="text-xs tracking-[0.15em] text-white/40 uppercase">Ventures</p>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
                  Agricultural Trading &amp; Supply Solutions. Connecting quality producers with dependable buyers across Nigeria.
                </p>
                <div className="flex gap-3">
                  {[Building2, Globe, Mail].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
                    >
                      <Icon size={15} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Quick Links</p>
                <ul className="space-y-3">
                  {["Home", "About", "Products", "Services", "Contact"].map(link => (
                    <li key={link}>
                      <button
                        onClick={() => goTo(`#${link.toLowerCase()}`)}
                        className="text-sm text-white/55 hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Products</p>
                <ul className="space-y-3">
                  {["Rice (Parboiled & White)", "Maize (Yellow & White)", "Wheat (Milling Grade)", "Sorghum", "Soybeans", "Mixed Grains"].map(p => (
                    <li key={p} className="text-sm text-white/55">{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              © 2025 Dalglobal Ventures. Agricultural Trading &amp; Supply Solutions.
            </p>
            <p className="text-xs text-white/20">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const { ref, visible } = useOnScreen();
  return (
    <div
      ref={ref}
      className="bg-white rounded-xl overflow-hidden border border-border group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{ opacity: visible ? 1 : 0, transform: visible ? undefined : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s" }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={`${product.name} — agricultural product`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: product.available ? "#1e4d2b" : "#6b5f48" }}
          >
            {product.tag}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3
            className="text-base font-bold text-foreground"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-emerald-700 font-medium">Available</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-5">{product.desc}</p>
        <button
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#f4efe4", color: "#1e4d2b", fontFamily: "'Montserrat', sans-serif" }}
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Enquire About {product.name}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useOnScreen();
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className="bg-white rounded-xl p-6 border border-border hover:border-green-700/20 hover:shadow-md transition-all duration-300 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, box-shadow 0.3s, border-color 0.3s`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: "#e8f0ea" }}
      >
        <Icon size={22} style={{ color: "#1e4d2b" }} />
      </div>
      <h3
        className="text-base font-bold text-foreground mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
      <div className="mt-5 pt-4 border-t border-border">
        <button
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: "#1e4d2b" }}
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Learn More <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

// ─── STEP CARD ────────────────────────────────────────
function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, visible } = useOnScreen();
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >

      {/* Number */}
      <div
        className="w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6 shadow-md border-4 border-white"
        style={{ backgroundColor: "#1e4d2b" }}
      >
        <span
          className="text-xs font-bold text-white/50 tracking-widest leading-none mb-0.5"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          STEP
        </span>
        <span
          className="text-2xl font-extrabold text-white leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {step.num}
        </span>
      </div>
      <h3
        className="text-base font-bold text-foreground mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {step.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{step.desc}</p>
    </div>
  );
}
