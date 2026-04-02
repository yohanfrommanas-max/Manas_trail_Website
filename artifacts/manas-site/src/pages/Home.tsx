import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import phoneImg from "@assets/9c15a158-e1c7-4231-a824-f62db9cb9c59_1775146573203.JPG";
import iconImg from "@assets/IMG_4640_1775146664190.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
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
    <main className="bg-black text-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={iconImg} alt="" className="h-6 w-6 object-contain" />
            <span className="text-[15px] font-[400] tracking-[0.08em] text-white/90">manas</span>
          </div>
          <a
            href="mailto:sam@joinmanas.com"
            className="text-[13px] text-white/50 hover:text-white transition-colors"
            data-testid="link-contact-nav"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fade}
            className="text-[13px] tracking-[0.2em] uppercase text-white/40 mb-8"
          >
            Cognitive Wellness
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fade}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-[300] leading-[1.05] tracking-[-0.03em] max-w-[900px] mb-8"
          >
            Train your mind to{" "}
            <span className="italic text-white/60">think better.</span>
            <br />
            Not just feel better.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fade}
            className="text-[17px] leading-[1.7] text-white/40 max-w-[520px] font-[300]"
          >
            The first platform that treats your cognitive health like a fitness
            programme — with daily workouts, measurable progress, and a system
            that grows with you.
          </motion.p>
        </div>
      </section>

      {/* Product Image */}
      <section className="px-6 pb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[600px] mx-auto relative"
        >
          <img
            src={phoneImg}
            alt="Manas app on iPhone"
            className="w-full rounded-3xl"
          />
          <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.7)]" />
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-32 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-white/30 mb-6">
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
            <p className="text-[16px] leading-[1.8] text-white/40 font-[300]">
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
      <section className="px-6 py-32 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="text-[13px] tracking-[0.2em] uppercase text-white/30 mb-16"
          >
            The System
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fade}
                className="bg-black p-10 flex flex-col"
              >
                <span className="text-[12px] text-white/20 mb-8 font-mono">
                  {p.num}
                </span>
                <h3 className="text-[24px] font-[400] tracking-[-0.01em] mb-4">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white/40 font-[300]">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon + Tagline */}
      <section className="px-6 py-40 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-24 h-24 mb-12"
          >
            <img
              src={iconImg}
              alt="Manas icon"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-[300] leading-[1.15] tracking-[-0.02em] max-w-[700px]"
          >
            The gym for your mind.
            <br />
            <span className="text-white/30">For ages 15 to 45.</span>
          </motion.h2>
        </div>
      </section>

      {/* Traction */}
      <section className="px-6 py-32 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="mb-16"
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-white/30 mb-6">
              Traction
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[300] leading-[1.15] tracking-[-0.02em] max-w-[600px]">
              This is not a concept.{" "}
              <span className="text-white/40">
                This is a product in motion.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {credibility.map((item, i) => (
              <motion.div
                key={item.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fade}
                className="bg-black p-10"
              >
                <span className="text-[12px] text-white/20 mb-6 block font-mono">
                  {item.num}
                </span>
                <h3 className="text-[18px] font-[500] tracking-[-0.01em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-white/40 font-[300]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-40 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
            className="text-[clamp(2rem,4.5vw,4rem)] font-[300] leading-[1.1] tracking-[-0.03em] max-w-[700px] mb-6"
          >
            We are building the cognitive wellness category.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fade}
            className="text-[17px] text-white/40 font-[300] mb-12"
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
            className="inline-flex items-center gap-3 text-[15px] font-[400] text-white border border-white/[0.15] rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
            data-testid="link-contact-cta"
          >
            sam@joinmanas.com
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 opacity-40">
            <img src={iconImg} alt="" className="h-4 w-4 object-contain" />
            <span className="text-[13px] font-[400] tracking-[0.08em] text-white/90">manas</span>
          </div>
          <span className="text-[12px] text-white/20">
            {new Date().getFullYear()} Manas
          </span>
        </div>
      </footer>
    </main>
  );
}
