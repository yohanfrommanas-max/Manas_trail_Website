import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Brain, Wind, BookOpen, Activity, Users, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden text-foreground selection:bg-cyan/30 selection:text-cyan">
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b-0 border-white/5 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-wide text-foreground">MANAS</div>
          <a href="mailto:sam@joinmanas.com">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-foreground font-sans">
              Contact Us
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Meditating with neural patterns" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
        </motion.div>

        <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-medium tracking-widest uppercase mb-8">
              <Activity className="w-3 h-3" />
              <span>Cognitive Wellness Platform</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight mb-6">
              The Gym for <br/>
              <span className="gradient-text">Your Mind.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mb-12 font-light leading-relaxed">
              Train your mind to think better. Not just feel better. The first platform that treats cognitive health like a fitness programme.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <a href="mailto:sam@joinmanas.com">
                <Button className="bg-foreground text-background hover:bg-white/90 h-14 px-8 text-lg font-sans rounded-full group">
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      {/* Core Message Section */}
      <section className="py-32 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden glass-panel p-2">
                <img 
                  src="/lifestyle-usage.png" 
                  alt="Mindful app usage" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Wellness apps tell you to breathe. <br/>
                <span className="text-cyan">Manas goes further.</span>
              </motion.h2>
              
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground font-sans font-light leading-relaxed">
                <p>
                  Chronic AI dependency and social media overconsumption are degrading attention, memory, and independent thinking across every age group.
                </p>
                <p>
                  Manas exists to reverse that. We've built a system with daily workouts, measurable progress, and science-backed interventions that grow with you.
                </p>
                <p className="text-foreground font-medium">
                  Scientifically grounded. Beautifully designed. Built for the long term.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

      {/* Three Pillars Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img 
            src="/neural-bg.png" 
            alt="Abstract neural background" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">A holistic cognitive system.</h2>
            <p className="text-xl text-muted-foreground font-sans font-light max-w-2xl mx-auto">
              Three interconnected pillars designed to rebuild and strengthen your mental capacity.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Brain,
                title: "Train",
                desc: "12 cognitive mini-games targeting focus, memory, and reasoning.",
                color: "text-cyan",
                bg: "bg-cyan/10",
                border: "border-cyan/20"
              },
              {
                icon: Wind,
                title: "Calm",
                desc: "Sleep casts, breathwork, and mood-curated music to reset your baseline.",
                color: "text-violet",
                bg: "bg-violet/10",
                border: "border-violet/20"
              },
              {
                icon: BookOpen,
                title: "Journal",
                desc: "Guided reflection with Stoic prompts and emotional tracking.",
                color: "text-rose",
                bg: "bg-rose/10",
                border: "border-rose/20"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className={`glass-panel p-8 rounded-2xl border ${pillar.border} hover:-translate-y-2 transition-transform duration-500`}
              >
                <div className={`w-14 h-14 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-32 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="flex flex-col justify-center">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet/30 bg-violet/10 text-violet text-xs font-medium tracking-widest uppercase mb-8">
                <Shield className="w-3 h-3" />
                <span>The Platform</span>
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Not a pitch deck. <br/>
                <span className="text-violet">A functioning product.</span>
              </motion.h2>
              
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground font-sans font-light leading-relaxed">
                <p>
                  All 12 cognitive games are in active development with a leading product development studio.
                </p>
                <p>
                  The interface is dark, focused, and free from the distraction mechanics that plague modern software. It is a tool, not a trap.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 grid grid-cols-2 gap-6">
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <div className="text-3xl font-serif text-cyan mb-2">12</div>
                  <div className="text-sm font-sans text-muted-foreground">Cognitive Games</div>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <div className="text-3xl font-serif text-violet mb-2">∞</div>
                  <div className="text-sm font-sans text-muted-foreground">Personalized Journeys</div>
                </div>
              </motion.div>
            </div>

            <div className="relative flex justify-center">
              <motion.div variants={fadeIn} className="relative z-10 w-full max-w-sm">
                <div className="absolute inset-0 bg-cyan/20 blur-[100px] rounded-full" />
                <img 
                  src="/app-mockup.png" 
                  alt="Manas App Interface" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      {/* Traction & Credibility */}
      <section className="py-32 relative bg-card">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              Traction & Credibility
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Science at the Core",
                  desc: "A leading neuroscientist and clinical psychologist are embedded in Manas. Every feature is grounded in peer-reviewed cognitive science, not wellness trends.",
                  accent: "border-l-cyan"
                },
                {
                  icon: Smartphone,
                  title: "Samsung UK Partnership",
                  desc: "Pilot interest confirmed with a VP at Samsung UK. Positions Manas for device-level integration and B2B scale.",
                  accent: "border-l-violet"
                },
                {
                  icon: Users,
                  title: "A Team of Seven",
                  desc: "Cross-functional founding team spanning product, cognitive wellness, technology, and commercial development.",
                  accent: "border-l-rose"
                },
                {
                  icon: Shield,
                  title: "Built by Experts",
                  desc: "Active development partnered with a leading product development studio. We are building the category standard.",
                  accent: "border-l-gold"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className={`glass-panel p-8 rounded-xl border-l-4 border-r border-t border-b border-r-white/5 border-t-white/5 border-b-white/5 ${item.accent}`}
                >
                  <item.icon className="w-6 h-6 text-foreground mb-4 opacity-80" />
                  <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-sans font-light leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Background" 
            className="w-full h-full object-cover blur-sm opacity-20"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl font-serif font-bold mb-8">
              We are building the cognitive wellness category.
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground font-sans font-light mb-12">
              If this resonates, let us talk.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <a href="mailto:sam@joinmanas.com">
                <Button className="bg-cyan text-background hover:bg-cyan/90 h-16 px-10 text-xl font-sans rounded-full group shadow-[0_0_40px_-10px_rgba(77,217,217,0.5)] hover:shadow-[0_0_60px_-10px_rgba(77,217,217,0.7)] transition-shadow">
                  sam@joinmanas.com
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 relative z-10 glass-panel">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-sans text-muted-foreground">
          <div className="font-serif text-xl font-bold tracking-wide text-foreground mb-4 md:mb-0">MANAS</div>
          <div className="flex gap-6">
            <span>© {new Date().getFullYear()} Manas. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
