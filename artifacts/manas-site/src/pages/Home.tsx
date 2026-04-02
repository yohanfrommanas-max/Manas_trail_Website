import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import phoneIconImg from "@assets/9c15a158-e1c7-4231-a824-f62db9cb9c59_1775146573203.JPG";
import iconImg from "@assets/IMG_4640_1775146664190.png";
import logoImg from "@assets/5df2a8f9-876b-4b14-8cdd-d3c1d33d046f_1775146664182.jpeg";
import screenHome from "@assets/35f44a07-44f9-47d9-a59a-c7c7d2adab6b_1775147332341.jpeg";
import screenExplore from "@assets/f3f71ccf-c0e9-4e4d-b1bd-90b9ea86bc53_1775147332321.jpeg";
import screenSleep from "@assets/1c76c2b0-bd1d-46b8-b535-6e966475926b_1775147426224.jpeg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const pillars = [
  {
    num: "01",
    title: "Train",
    desc: "12 cognitive mini-games targeting focus, memory, and reasoning.",
  },
  {
    num: "02",
    title: "Calm",
    desc: "Sleep casts, breathwork, and mood-curated music.",
  },
  {
    num: "03",
    title: "Journal",
    desc: "Guided reflection with Stoic prompts and emotional tracking.",
  },
];

const credibility = [
  {
    num: "01",
    title: "Science at the Core",
    desc: "A leading neuroscientist and clinical psychologist are embedded in Manas. Every feature is grounded in peer-reviewed cognitive science.",
  },
  {
    num: "02",
    title: "Samsung UK Partnership",
    desc: "Pilot interest confirmed with a VP at Samsung UK. Positions Manas for device-level integration and B2B scale.",
  },
  {
    num: "03",
    title: "A Team of Seven",
    desc: "Cross-functional founding team spanning product, cognitive wellness, technology, and commercial development.",
  },
  {
    num: "04",
    title: "Built by Experts",
    desc: "All 12 cognitive games are in active development with a leading product development studio. This is a functioning platform.",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <img src={logoImg} alt="Manas" className="h-6" />
          <a
            href="mailto:sam@joinmanas.com"
            className="text-[13px] text-foreground/40 hover:text-foreground transition-colors"
            data-testid="link-contact-nav"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fade}
            className="text-[13px] tracking-[0.2em] uppercase text-foreground/35 mb-8"
          >
            Cognitive Wellness
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fade}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-[300] leading-[1.05] tracking-[-0.03em] max-w-[820px] mb-8"
          >
            Train your mind to{" "}
            <span className="italic text-foreground/40">think better.</span>
            <br />
            Not just feel better.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fade}
            className="text-[17px] leading-[1.7] text-foreground/45 max-w-[480px] font-[300]"
          >
            The first platform that treats your cognitive health like a fitness
            programme — with daily workouts, measurable progress, and a system
            that grows with you.
          </motion.p>
        </div>
      </section>

      {/* App Screenshots — three phones */}
      <section className="px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[900px] mx-auto flex items-end justify-center gap-4 md:gap-6"
        >
          <div className="w-[28%] flex-shrink-0">
            <img
              src={screenExplore}
              alt="Manas Explore screen"
              className="w-full rounded-[20px] shadow-2xl"
            />
          </div>
          <div className="w-[34%] flex-shrink-0 -mb-4">
            <img
              src={screenHome}
              alt="Manas Home screen"
              className="w-full rounded-[24px] shadow-2xl"
            />
          </div>
          <div className="w-[28%] flex-shrink-0">
            <img
              src={screenSleep}
              alt="Manas Sleep screen"
              className="w-full rounded-[20px] shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="px-6 py-28 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-foreground/30 mb-6">
              The Problem
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[300] leading-[1.15] tracking-[-0.02em]">
              AI dependency and social media are degrading how we think.
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fade}
            className="flex flex-col justify-end"
          >
            <p className="text-[16px] leading-[1.8] text-foreground/45 font-[300]">
              Attention spans are shrinking. Independent thinking is eroding.
              Memory is outsourced to devices. Most wellness apps tell you to
              breathe and journal. That is not enough. Manas is built to
              actually reverse cognitive decline — scientifically grounded,
              beautifully designed, and built for the long term.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 py-28 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="text-[13px] tracking-[0.2em] uppercase text-foreground/30 mb-16"
          >
            The System
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fade}
                className="rounded-2xl bg-card border border-foreground/[0.05] p-10 flex flex-col"
              >
                <span className="text-[12px] text-foreground/20 mb-8 font-mono">
                  {p.num}
                </span>
                <h3 className="text-[22px] font-[500] tracking-[-0.01em] mb-3">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-foreground/45 font-[300]">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase — phone on desk + icon */}
      <section className="px-6 py-28 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <img
              src={phoneIconImg}
              alt="Manas on iPhone home screen"
              className="w-full max-w-[440px] rounded-3xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fade}
            className="flex flex-col"
          >
            <img src={iconImg} alt="" className="w-16 h-16 object-contain mb-8" />
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[300] leading-[1.15] tracking-[-0.02em] mb-6">
              The gym for your mind.
              <br />
              <span className="text-foreground/30">For ages 15 to 45.</span>
            </h2>
            <p className="text-[16px] leading-[1.8] text-foreground/45 font-[300] max-w-[420px]">
              Manas lives on your phone, right where you need it. Daily cognitive workouts that fit into your routine — designed to be opened, not ignored.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Traction */}
      <section className="px-6 py-28 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="mb-16"
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-foreground/30 mb-6">
              Traction
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[300] leading-[1.15] tracking-[-0.02em] max-w-[600px]">
              This is not a concept.{" "}
              <span className="text-foreground/35">
                This is a product in motion.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credibility.map((item, i) => (
              <motion.div
                key={item.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fade}
                className="rounded-2xl bg-card border border-foreground/[0.05] p-10"
              >
                <span className="text-[12px] text-foreground/20 mb-6 block font-mono">
                  {item.num}
                </span>
                <h3 className="text-[18px] font-[500] tracking-[-0.01em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-foreground/45 font-[300]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-[300] leading-[1.1] tracking-[-0.03em] max-w-[650px] mb-6"
          >
            We are building the cognitive wellness category.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fade}
            className="text-[17px] text-foreground/40 font-[300] mb-12"
          >
            If this resonates, let us talk.
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            variants={fade}
            href="mailto:sam@joinmanas.com"
            className="inline-flex items-center gap-3 text-[15px] font-[400] text-white bg-[hsl(258,60%,55%)] rounded-full px-8 py-4 hover:bg-[hsl(258,60%,48%)] transition-all duration-300 shadow-lg shadow-[hsl(258,60%,55%)]/20"
            data-testid="link-contact-cta"
          >
            sam@joinmanas.com
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <img src={logoImg} alt="Manas" className="h-5 opacity-40" />
          <span className="text-[12px] text-foreground/25">
            {new Date().getFullYear()} Manas
          </span>
        </div>
      </footer>
    </main>
  );
}
