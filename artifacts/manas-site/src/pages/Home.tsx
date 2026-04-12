import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import phoneImg from "@assets/Screenshot_2026-04-02_at_10.24.41_pm_1775148924611.png";
import gradientLogo from "@assets/72ae9c3d-9546-44dc-8a9e-bdbd8aefe9ca_1775147772052.jpeg";
import logoMark from "@assets/edd26aed-3bdc-4289-bdf3-b84ec3bcd1c9_1775147772069.jpeg";
import manasFullLogo from "@assets/manas_full_logo_white_1776018638027.jpg";
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

const pillarColors = [
  "from-sky-100/60 to-blue-50/40 border-sky-200/40",
  "from-violet-100/60 to-purple-50/40 border-violet-200/40",
  "from-pink-100/50 to-fuchsia-50/40 border-pink-200/40",
];

const credColors = [
  "from-emerald-50/60 to-teal-50/40 border-emerald-200/30",
  "from-sky-50/60 to-cyan-50/40 border-sky-200/30",
  "from-violet-50/60 to-indigo-50/40 border-violet-200/30",
  "from-amber-50/60 to-orange-50/40 border-amber-200/30",
];

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
    title: "Built by the Right People",
    desc: "Cross-functional founding team spanning product, cognitive wellness, technology, and commercial development.",
  },
  {
    num: "04",
    title: "Built to a Standard, Not a Deadline",
    desc: "All 12 cognitive games are in active development with a leading product development studio. Built to ship, not to demo.",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoMark} alt="Manas" className="h-9 w-9 object-contain" />
            <span className="text-[17px] font-[400] tracking-[-0.01em]">manas</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center text-[13px] font-[400] text-white bg-[hsl(258,60%,55%)] rounded-full px-5 py-2 hover:bg-[hsl(258,60%,48%)] transition-all duration-300 shadow-md shadow-[hsl(258,60%,55%)]/15"
            data-testid="link-contact-nav"
          >
            Get in touch
          </Link>
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
            className="text-[clamp(1.125rem,2.5vw,1.25rem)] leading-[1.7] text-foreground/50 max-w-[480px] font-[400]"
          >
            The first platform that treats your cognitive health like a fitness
            programme. Daily workouts, measurable progress, and a system
            that grows with you.
          </motion.p>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="px-6 pb-32 pt-12">
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
            <p className="text-[clamp(1.0625rem,2.5vw,1.1875rem)] leading-[1.8] text-foreground/50 font-[400]">
              Attention spans are shrinking. Independent thinking is eroding.
              Memory is outsourced to devices. Most wellness apps tell you to
              breathe and journal. That is not enough. Manas is built to
              actually reverse cognitive decline. Scientifically grounded,
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
                className={`rounded-2xl bg-gradient-to-br ${pillarColors[i]} border p-10 flex flex-col`}
              >
                <span className="text-[12px] text-foreground/25 mb-8 font-mono">
                  {p.num}
                </span>
                <h3 className="text-[22px] font-[500] tracking-[-0.01em] mb-3">
                  {p.title}
                </h3>
                <p className="text-[clamp(1rem,2.5vw,1.125rem)] leading-[1.7] text-foreground/50 font-[400]">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-6 py-28 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="max-w-[480px]"
          >
            <img
              src={phoneImg}
              alt="Manas on iPhone home screen"
              className="w-full rounded-2xl"
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
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[300] leading-[1.15] tracking-[-0.02em] mb-6">
              The gym for your mind.
              <br />
              <span className="text-foreground/30">For ages 15 to 65.</span>
            </h2>
            <p className="text-[clamp(1.0625rem,2.5vw,1.1875rem)] leading-[1.8] text-foreground/50 font-[400] max-w-[420px]">
              Manas lives on your phone, right where you need it. Daily cognitive workouts that fit into your routine. Designed to be opened, not ignored.
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
                className={`rounded-2xl bg-gradient-to-br ${credColors[i]} border p-10`}
              >
                <span className="text-[12px] text-foreground/20 mb-6 block font-mono">
                  {item.num}
                </span>
                <h3 className="text-[18px] font-[500] tracking-[-0.01em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[clamp(0.9375rem,2.5vw,1.0625rem)] leading-[1.7] text-foreground/50 font-[400]">
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
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={manasFullLogo}
            alt="Manas"
            className="h-20 md:h-24 object-contain mb-12 cursor-pointer"
          />
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fade}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-[300] leading-[1.1] tracking-[-0.03em] max-w-[650px] mb-6"
          >
            We are building the cognitive wellness category.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            variants={fade}
            className="text-[clamp(1.125rem,2.5vw,1.25rem)] text-foreground/45 font-[400] mb-12"
          >
            If you'd like to be a part of the journey, we would love to hear from you.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={3}
            variants={fade}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[15px] font-[400] text-white bg-[hsl(258,60%,55%)] rounded-full px-8 py-4 hover:bg-[hsl(258,60%,48%)] transition-all duration-300 shadow-lg shadow-[hsl(258,60%,55%)]/20"
              data-testid="link-contact-cta"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-foreground/[0.06]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoMark} alt="Manas" className="h-6 w-6 object-contain opacity-50" />
            <span className="text-[13px] text-foreground/30 font-[300]">manas</span>
          </div>
          <span className="text-[12px] text-foreground/25">
            {new Date().getFullYear()} Manas
          </span>
        </div>
      </footer>
    </main>
  );
}
