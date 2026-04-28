import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Network, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CONF_URL = "https://www.eventbrite.com/e/aws-community-day-ottawa-tickets-1987796160827";
const HACK_URL = "https://www.eventbrite.com/e/devops-for-genai-hackathon-ottawa-2026-tickets-1984872192158";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#top" className="font-mono text-sm tracking-tight">
            <span className="text-gradient font-bold">AWS_OTT</span>
            <span className="text-muted-foreground">/2026</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#tracks" className="hover:text-foreground transition-smooth">Tracks</a>
            <a href="#agenda" className="hover:text-foreground transition-smooth">Agenda</a>
            <a href="#experience" className="hover:text-foreground transition-smooth">Experience</a>
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
          <div className="max-w-4xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground">Ottawa · 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              AWS Community Day
              <br />
              <span className="text-gradient">+ GenAI Hackathon</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Two days. One community. Cloud builders, DevOps engineers, and GenAI innovators converge in Ottawa for talks, networking, and a full-blown hackathon.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground mb-10">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> 2026</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Community-driven</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow">
                <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                  Register for Conference <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-foreground/20 bg-background/30 backdrop-blur-sm hover:bg-foreground/10">
                <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                  Join the Hackathon
                </a>
              </Button>
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
                AWS Community Day Ottawa 2026 is a volunteer-organized gathering for cloud practitioners across the National Capital Region. Expect deep technical content on <span className="text-foreground font-medium">AWS, DevOps, and Generative AI</span>, plus the conversations that make community events unforgettable.
              </p>
              <p>
                Paired with the <span className="text-foreground font-medium">DevOps for GenAI Hackathon</span>, the weekend becomes a hands-on playground where teams ship real systems, win prizes, and take ideas from whiteboard to demo.
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
                <h3 className="text-3xl font-bold mb-4">Conference</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  A full day of technical talks, panels, and networking with cloud practitioners from across Canada.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Keynotes & technical talks", "AWS, DevOps, and GenAI tracks", "Networking with community leaders", "Swag, snacks, and after-party"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-gradient-primary hover:opacity-90 border-0 w-full h-12">
                  <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                    Get Conference Ticket <ArrowRight className="ml-2 w-4 h-4" />
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
                  Team up, ship fast, and build production-ready GenAI systems with modern DevOps practices.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Team-based competition", "Build real GenAI systems", "Live demos & judging", "Prizes for winning teams"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full h-12 border-accent/40 bg-accent/5 hover:bg-accent/15 text-foreground">
                  <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                    Enter the Hackathon <ArrowRight className="ml-2 w-4 h-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What the day looks like.</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { time: "08:30", title: "Registration & Coffee", desc: "Check in, grab swag, meet fellow builders." },
              { time: "09:30", title: "Opening Keynote", desc: "Setting the stage for the day ahead." },
              { time: "10:30", title: "Technical Talks — Cloud & DevOps", desc: "Deep dives from practitioners shipping in production." },
              { time: "12:30", title: "Lunch & Networking", desc: "Conversations that turn into collaborations." },
              { time: "13:30", title: "Hackathon Kickoff", desc: "Teams form, problems drop, builds begin." },
              { time: "15:00", title: "GenAI Track", desc: "What's real, what's hype, and what to build next." },
              { time: "18:00", title: "Demos & Awards", desc: "Winning teams take the stage." },
              { time: "19:00", title: "After Party", desc: "You made it. Celebrate with the community." },
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
              { icon: Rocket, title: "Builder Zone", desc: "Hands-on demos, open-source projects, and live coding stations from community maintainers." },
              { icon: Users, title: "Networking Zone", desc: "Dedicated space to connect with speakers, sponsors, recruiters, and fellow cloud builders." },
              { icon: Trophy, title: "Hackathon Arena", desc: "Where teams build, ship, and demo their GenAI + DevOps creations in real time." },
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
              Tickets are limited. Lock in your spot for the conference, the hackathon, or both.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow animate-pulse-glow">
                <a href={CONF_URL} target="_blank" rel="noopener noreferrer">
                  Conference Ticket <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-accent/40 bg-accent/5 hover:bg-accent/15">
                <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                  Hackathon Entry
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
            <span className="text-gradient font-bold">AWS_OTT</span>/2026 — Community Day + Hackathon
          </div>
          <div>Organized by the Ottawa cloud community. Not affiliated with Amazon.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
