import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Network, Zap, Camera, Eye, Bot, Activity, Heart, Download, Mic } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import awsLogo from "@/assets/aws-logo.svg";


const galleryImages = Object.values(
  import.meta.glob("@/assets/gallery/*.jpg", { eager: true, import: "default" })
) as string[];

const CONF_URL = "https://www.eventbrite.com/e/aws-community-day-ottawa-tickets-1987796160827";
const COMMUNITY_DAY_LABEL = "Community Day";
const HACK_URL = "https://www.eventbrite.com/e/devops-for-genai-hackathon-ottawa-2026-tickets-1984872192158";
const VENUE = "Invest Ottawa, 7 Bayview Rd, Ottawa, ON";
const EVENT_DATE = "August 21–22, 2026";

const SPONSOR_DECK_URL = "/sponsor-deck.pptx";
const VOLUNTEER_FORM_URL = "https://forms.gle/YnbVmSmUGpV6PoFq6";
const SPONSOR_CONTACT_EMAIL = "info@capitalcarbonconsulting.com";

const SPEAKERS = [
  { name: "Speaker TBA", role: "Keynote Speaker", company: "Coming Soon", image: "" },
  { name: "Speaker TBA", role: "Cloud Architect", company: "Coming Soon", image: "" },
  { name: "Speaker TBA", role: "DevOps Engineer", company: "Coming Soon", image: "" },
  { name: "Speaker TBA", role: "AI/ML Specialist", company: "Coming Soon", image: "" },
  { name: "Speaker TBA", role: "Platform Engineer", company: "Coming Soon", image: "" },
  { name: "Speaker TBA", role: "GenAI Practitioner", company: "Coming Soon", image: "" },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const visibleCount = 3;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (current + offset) % total;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">05 / Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Moments from past events.</h2>
          <p className="text-lg text-muted-foreground mt-4">A look back at the energy, collaboration, and community spirit from our previous gatherings.</p>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {Array.from({ length: visibleCount }).map((_, offset) => (
              <div
                key={getIndex(offset)}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border group"
              >
                <img
                  src={galleryImages[getIndex(offset)]}
                  alt={`Community event photo ${getIndex(offset) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Previous photos"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Next photos"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#top" className="font-mono text-sm tracking-tight">
            <span className="text-gradient font-bold">awscommunityday</span>
            <span className="text-muted-foreground">/2026</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#tracks" className="hover:text-foreground transition-smooth">Tracks</a>
            <a href="#agenda" className="hover:text-foreground transition-smooth">Agenda</a>
            <a href="#experience" className="hover:text-foreground transition-smooth">Experience</a>
            <a href="#gallery" className="hover:text-foreground transition-smooth">Gallery</a>
            <a href="#speakers" className="hover:text-foreground transition-smooth">Speakers</a>
            <a href="#sponsors" className="hover:text-foreground transition-smooth">Sponsors</a>
            <a href="#volunteers" className="hover:text-foreground transition-smooth">Volunteers</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 border-0">
            <a href={CONF_URL} target="_blank" rel="noopener noreferrer">Register</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-accent-glow" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Title & CTA */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground">Ottawa · Aug 21–22, 2026</span>
              </div>

              <img src={awsLogo} alt="AWS" className="h-8 md:h-10 mb-6 invert brightness-0 invert opacity-90" />

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-2">
                COMMUNITY DAY 2026
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-accent leading-tight mb-2 flex items-center gap-3">
                <svg viewBox="0 0 40 24" className="w-8 h-5 md:w-10 md:h-6 flex-shrink-0" fill="none">
                  <path d="M4 16c8 4 20 4 32 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M30 12l4 4 2-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                OTTAWA
              </h2>
              <p className="text-base md:text-lg font-medium text-muted-foreground tracking-wide mb-6">
                <span className="text-accent font-semibold">Co-located with the DevOps for GenAI Hackathon</span>
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
                Join us for a dynamic AWS Community Day co-located with a hands-on DevOps & GenAI Hackathon, where builders, engineers, and technology leaders come together to explore the future of cloud and AI-powered delivery.
              </p>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground mb-10">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {EVENT_DATE}</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {VENUE}</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Community-driven</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow animate-pulse-glow relative overflow-hidden">
                  <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                    Register for Community Day <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="text-base h-14 px-8 bg-background/20 backdrop-blur-sm border border-accent/50 shadow-[0_0_15px_rgba(146,119,255,0.15)] hover:shadow-[0_0_25px_rgba(146,119,255,0.3)] hover:border-accent/80 hover:bg-accent/10 transition-all duration-300">
                  <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                    Register for Hackathon <Code2 className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right — GenAI + DevOps Platform Visual */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-80 h-96 lg:w-[26rem] lg:h-[30rem]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute inset-12 bg-primary/8 rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite_1s]" />

                {/* Center node: GenAI Platform */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full border border-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
                    <div className="absolute -inset-3 rounded-full border border-primary/25 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute -inset-10 rounded-full bg-accent/5 blur-xl animate-[pulse_4s_ease-in-out_infinite]" />
                    <div className="w-22 h-22 w-[5.5rem] h-[5.5rem] rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_0_30px_rgba(146,119,255,0.3)] relative animate-[pulse_3s_ease-in-out_infinite]">
                      <Sparkles className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-accent/80 whitespace-nowrap">GenAI Platform</span>
                  </div>
                </div>

                {/* Top: Code */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Code</span>
                </div>

                {/* Top-right: Agents */}
                <div className="absolute top-[18%] right-2 animate-[float_5s_ease-in-out_infinite_0.8s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Agents</span>
                </div>

                {/* Right: Inference */}
                <div className="absolute top-[45%] right-0 animate-[float_7s_ease-in-out_infinite_1.5s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Inference</span>
                </div>

                {/* Bottom-right: Observe */}
                <div className="absolute bottom-[18%] right-4 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Observe</span>
                </div>

                {/* Bottom: Deploy */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-[float_5.5s_ease-in-out_infinite_1s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Deploy</span>
                </div>

                {/* Bottom-left: Scale */}
                <div className="absolute bottom-[18%] left-4 animate-[float_6s_ease-in-out_infinite_2s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(146,119,255,0.1)]">
                    <Activity className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Scale</span>
                </div>

                {/* Connecting lines — animated left-to-right shimmer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  {/* Code to center */}
                  <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite]" />
                  {/* Agents to center */}
                  <line x1="78%" y1="25%" x2="58%" y2="43%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.8s_linear_infinite_0.3s]" />
                  {/* Inference to center */}
                  <line x1="82%" y1="50%" x2="60%" y2="50%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_2s_linear_infinite_0.6s]" />
                  {/* Observe to center */}
                  <line x1="78%" y1="75%" x2="58%" y2="57%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.7s_linear_infinite_0.9s]" />
                  {/* Deploy to center */}
                  <line x1="50%" y1="85%" x2="50%" y2="60%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite_1.2s]" />
                  {/* Scale to center */}
                  <line x1="22%" y1="75%" x2="42%" y2="57%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.9s_linear_infinite_1.5s]" />
                </svg>

                {/* Shimmer particles */}
                <div className="absolute top-[20%] left-[30%] w-1 h-1 rounded-full bg-accent/60 animate-[shimmer_3s_ease-in-out_infinite]" />
                <div className="absolute top-[60%] right-[25%] w-1 h-1 rounded-full bg-primary/60 animate-[shimmer_3s_ease-in-out_infinite_1s]" />
                <div className="absolute bottom-[35%] left-[40%] w-1 h-1 rounded-full bg-accent/40 animate-[shimmer_3s_ease-in-out_infinite_2s]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">01 / About</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Built by the community, for the community.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This unique event blends inspiring talks, real-world case studies, and collaborative hacking. Attendees will dive into <span className="text-foreground font-medium">modern AWS architectures, platform engineering practices, and the rapidly evolving role of Generative AI in DevOps workflows</span>. From automating pipelines with AI agents to rethinking developer experience and operational resilience, the sessions are practical, forward-looking, and deeply relevant.
              </p>
              <p>
                The co-located <span className="text-foreground font-medium">DevOps for GenAI Hackathon</span> gives participants the chance to apply these ideas in real time — building innovative solutions using Cloud services and GenAI tools. Whether you're experimenting with AI-driven automation, enhancing observability, or prototyping next-gen platform capabilities, you'll collaborate, learn from mentors, and push boundaries in a fast-paced environment.
              </p>
              <p>
                Whether you're a seasoned cloud architect, DevOps practitioner, or AI enthusiast, this event is your opportunity to connect, learn, and build what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">02 / Tracks</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Choose your adventure. Or do both.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Conference card */}
            <article className="group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elevated transition-smooth overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-smooth" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Track 01</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Community Day</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Inspiring talks, real-world case studies, and collaborative sessions. Dive into modern AWS architectures, platform engineering, and the role of GenAI in DevOps workflows.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Inspiring talks & real-world case studies", "Modern AWS architectures & platform engineering", "AI-driven automation & observability", "Connect with cloud architects & technology leaders"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-gradient-primary hover:opacity-90 border-0 w-full h-12">
                  <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                    Register for Community Day <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>

            {/* Hackathon card */}
            <article className="group relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elevated transition-smooth overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-smooth" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Track 02</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Hackathon</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Get ready to team up and hack the future of DevOps with AI-powered tools in a fun, hands-on challenge! This event is perfect for tech enthusiasts, developers, and anyone interested in the intersection of DevOps and AI.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Team-based hands-on challenge", "Explore the intersection of DevOps & AI", "Showcase your skills & work on cool projects", "Network with like-minded individuals"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full h-12 border-accent/40 bg-accent/5 hover:bg-accent/15 text-foreground">
                  <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                    Register for Hackathon <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">03 / Agenda</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What the days look like.</h2>
            <p className="text-lg text-muted-foreground mt-4">AWS Community Day (Co-located with DevOps for GenAI Hackathon)</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-accent">Day 1 — Friday, August 21</h3>
            {[
              { time: "16:00", title: "Kickoff", desc: "Welcome and opening remarks." },
              { time: "16:15", title: "Keynote", desc: "Setting the stage for the weekend ahead." },
              { time: "17:00", title: "Community Connect & Refreshments", desc: "Networking, conversations, and light refreshments." },
              { time: "17:30", title: "Hackathon Starts", desc: "Teams form, problems drop, builds begin. Teams can leave to work on the solution." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 group">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-sm text-accent pt-1">{item.time}</div>
                  <div className="w-px flex-1 bg-border mt-4 group-last:hidden" />
                </div>
                <div className="flex-1 pb-10 group-last:pb-0">
                  <div className="relative pl-6 border-l border-border -ml-px pl-10">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <h3 className="text-2xl font-bold mb-8 mt-12 text-accent">Day 2 — Saturday, August 22</h3>
            {[
              { time: "09:00", title: "Registration & Coffee", desc: "Check in, grab swag, meet fellow builders." },
              { time: "09:30", title: "Keynote", desc: "Inspiration and insights to kick off day two." },
              { time: "10:00", title: "Technical Talks — Cloud & DevOps", desc: "Deep dives from practitioners shipping in production." },
              { time: "12:00", title: "Lunch & Networking", desc: "Conversations that turn into collaborations." },
              { time: "16:00", title: "Hackathon Demos", desc: "Teams present their solutions to the judges." },
              { time: "17:00", title: "Hackathon Ends", desc: "Final submissions and wrap-up." },
              { time: "17:30", title: "Award Ceremony", desc: "Winning teams take the stage." },
              { time: "18:00", title: "Closing Remarks", desc: "Thank you and see you next year!" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 group">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-sm text-accent pt-1">{item.time}</div>
                  <div className="w-px flex-1 bg-border mt-4 group-last:hidden" />
                </div>
                <div className="flex-1 pb-10 group-last:pb-0">
                  <div className="relative pl-6 border-l border-border -ml-px pl-10">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">04 / Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">More than talks. A full experience.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Builder Zone", desc: "Experiment with AI-driven automation, enhance observability, and prototype next-gen platform capabilities." },
              { icon: Users, title: "Networking Zone", desc: "Connect with seasoned cloud architects, DevOps practitioners, AI enthusiasts, and technology leaders." },
              { icon: Trophy, title: "Hackathon Arena", desc: "Collaborate, learn from mentors, and push boundaries building innovative solutions with Cloud & GenAI tools." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-accent/40 transition-smooth group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GalleryCarousel />

      {/* SPONSORS */}
      <section id="sponsors" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">06 / Sponsors</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Become a sponsor.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with us to reach Canada's most engaged cloud and AI community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8">
                <a href={SPONSOR_DECK_URL} download>
                  <Download className="mr-2 w-5 h-5" /> Download Sponsor Deck
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-accent/40 bg-accent/5 hover:bg-accent/15">
                <a href={`mailto:${SPONSOR_CONTACT_EMAIL}?subject=Sponsorship%20Inquiry%20-%20AWS%20Community%20Day%20Ottawa%202026`}>
                  Contact Us About Sponsorship
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">07 / Speakers</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Learn from the best.</h2>
            <p className="text-lg text-muted-foreground mt-4">Industry leaders and community experts sharing real-world insights on AWS, DevOps, and GenAI.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SPEAKERS.map((speaker, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/60 transition-smooth">
                  {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                      <Mic className="w-8 h-8 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-sm">{speaker.name}</h4>
                <p className="text-xs text-muted-foreground">{speaker.role}</p>
                <p className="text-xs text-accent/70">{speaker.company}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Interested in speaking? We'd love to hear from you.</p>
            <Button asChild variant="outline" className="border-accent/40 bg-accent/5 hover:bg-accent/15">
              <a href="https://forms.gle/Fw85zJWMmsjKRRUx8" target="_blank" rel="noopener noreferrer">
                Submit a Talk Proposal <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section id="volunteers" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 mx-auto mb-6 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">08 / Volunteers</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Help us make it happen.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              AWS Community Day Ottawa is 100% community-driven. We're looking for passionate volunteers to help with event logistics, registration, speaker support, and more. It's a great way to give back, build your network, and be part of something meaningful.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              {[
                { title: "Event Day Support", desc: "Help with registration, wayfinding, and attendee experience." },
                { title: "Technical Support", desc: "Assist speakers with A/V setup and hackathon logistics." },
                { title: "Community Outreach", desc: "Help spread the word and engage the local tech community." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-6 rounded-xl bg-gradient-card border border-border">
                  <h4 className="font-bold mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8">
              <a href={VOLUNTEER_FORM_URL} target="_blank" rel="noopener noreferrer">
                Sign Up to Volunteer <Heart className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-glow" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ottawa's biggest <span className="text-gradient">cloud + AI</span> weekend.
              <br />Don't miss it.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're a seasoned cloud architect, DevOps practitioner, or AI enthusiast, this event is your opportunity to connect, learn, and build what's next.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow animate-pulse-glow">
                <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                  Register for Community Day <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-accent/40 bg-accent/5 hover:bg-accent/15">
                <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                  Register for Hackathon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-mono">
            <span className="text-gradient font-bold">awscommunityday</span>/2026 — Community Day + GenAI Hackathon
          </div>
          <div>Organized by DevOps + AI Community of Practice · Venue: {VENUE}</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
