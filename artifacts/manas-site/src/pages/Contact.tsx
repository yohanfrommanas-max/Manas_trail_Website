import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import logoMark from "@assets/edd26aed-3bdc-4289-bdf3-b84ec3bcd1c9_1775147772069.jpeg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const enquiryTypes = [
  { key: "investor", label: "Investor", desc: "SAFE round & funding", color: "bg-violet-400" },
  { key: "corporate", label: "Corporate Wellness", desc: "Pilots & partnerships", color: "bg-emerald-400" },
  { key: "press", label: "Press & Media", desc: "Coverage & interviews", color: "bg-cyan-400" },
  { key: "product", label: "Product / General", desc: "Beta access & feedback", color: "bg-amber-400" },
];

const contactInfo = [
  { label: "Investment Enquiries", desc: "SAFE round, deck requests, due diligence", color: "bg-violet-400" },
  { label: "Corporate Wellness", desc: "Pilots, team licences, B2B partnerships", color: "bg-emerald-400" },
  { label: "Press & Media", desc: "Coverage, interviews, product access", color: "bg-cyan-400" },
  { label: "Product & General", desc: "Beta access, feedback, anything else", color: "bg-amber-400" },
];

const messagePlaceholders: Record<string, string> = {
  investor: "I'm interested in learning more about Manas's fundraising round...",
  corporate: "We're exploring cognitive wellness programmes for our team of...",
  press: "I'm writing about mental wellness technology and would love to...",
  product: "I'd love to be part of the beta and share feedback on...",
};

const roleOptions = [
  { value: "", label: "Select your role" },
  { value: "vc", label: "Venture Capital / VC Fund" },
  { value: "angel", label: "Angel Investor" },
  { value: "family_office", label: "Family Office" },
  { value: "corporate_vc", label: "Corporate VC" },
  { value: "accelerator", label: "Accelerator / Incubator" },
  { value: "other_investor", label: "Other Investor" },
  { value: "hr_lead", label: "HR / People Lead" },
  { value: "wellness_lead", label: "Wellness Programme Lead" },
  { value: "journalist", label: "Journalist / Writer" },
  { value: "other", label: "Other" },
];

const sourceOptions = [
  { value: "", label: "Select one" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Personal referral" },
  { value: "press", label: "Press / media coverage" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "google", label: "Google search" },
  { value: "investor_network", label: "Investor network" },
  { value: "conference", label: "Event or conference" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState("investor");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  const showOrgFields = selectedType === "investor" || selectedType === "corporate";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !message.trim() || !consent) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  }

  function resetForm() {
    setSubmitted(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setOrganisation("");
    setRole("");
    setSource("");
    setMessage("");
    setConsent(false);
    setSelectedType("investor");
  }

  const inputClass =
    "w-full bg-foreground/[0.03] border border-foreground/[0.08] rounded-xl px-4 py-3.5 text-[15px] font-[400] text-foreground placeholder:text-foreground/25 outline-none transition-all duration-200 focus:border-[hsl(258,60%,55%)] focus:ring-2 focus:ring-[hsl(258,60%,55%)]/10";
  const selectClass =
    "w-full bg-foreground/[0.03] border border-foreground/[0.08] rounded-xl px-4 py-3.5 text-[15px] font-[400] text-foreground outline-none transition-all duration-200 focus:border-[hsl(258,60%,55%)] focus:ring-2 focus:ring-[hsl(258,60%,55%)]/10 appearance-none cursor-pointer";
  const labelClass = "block text-[11px] tracking-[0.12em] uppercase text-foreground/30 mb-2 font-[500]";

  return (
    <main className="bg-background text-foreground min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={logoMark} alt="Manas" className="h-9 w-9 object-contain" />
            <span className="text-[17px] font-[400] tracking-[-0.01em]">manas</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-foreground/40 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fade}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-foreground/30 mb-6">
              Get in touch
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-[300] leading-[1.1] tracking-[-0.02em] mb-5">
              Let's start a{" "}
              <span className="italic text-foreground/40">conversation.</span>
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.125rem)] leading-[1.75] text-foreground/45 font-[400] max-w-[380px] mb-12">
              Whether you're an investor, a potential partner, a corporate wellness lead, or just curious. We read every message.
            </p>

            <div className="flex flex-col gap-3 mb-12">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                  variants={fade}
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-foreground/[0.06] bg-foreground/[0.015] hover:border-foreground/[0.1] transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} />
                  <div>
                    <div className="text-[14px] font-[500] text-foreground/80">{item.label}</div>
                    <div className="text-[12px] text-foreground/30">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-[12px] text-foreground/25 tracking-[0.05em] border-t border-foreground/[0.06] pt-5">
              We aim to respond within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fade}
            className="rounded-2xl border border-foreground/[0.06] bg-foreground/[0.015] p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(258,60%,55%)]/30 to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100/60 border border-emerald-200/40 flex items-center justify-center">
                  <Check className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-[24px] font-[300] tracking-[-0.02em]">Message received.</h3>
                <p className="text-[15px] text-foreground/45 leading-[1.65] max-w-[300px]">
                  Thank you for reaching out. A member of the Manas team will be in touch within 48 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="text-[13px] text-[hsl(258,60%,55%)] hover:text-[hsl(258,60%,45%)] underline underline-offset-4 mt-2 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-[22px] font-[400] tracking-[-0.02em] mb-1.5">Send us a message</h2>
                <p className="text-[14px] text-foreground/40 mb-8">Tell us who you are and what's on your mind.</p>

                <div className="grid grid-cols-2 gap-2 mb-7">
                  {enquiryTypes.map((type) => (
                    <button
                      key={type.key}
                      onClick={() => setSelectedType(type.key)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                        selectedType === type.key
                          ? "border-[hsl(258,60%,55%)] bg-[hsl(258,60%,55%)]/[0.05]"
                          : "border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/[0.12]"
                      }`}
                    >
                      <span className="text-[12px] font-[500] text-foreground/70 block mb-0.5">{type.label}</span>
                      <span className="text-[10px] text-foreground/25">{type.desc}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Samuel"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Thomas"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  {showOrgFields && (
                    <>
                      <div className="mb-4">
                        <label className={labelClass}>Organisation</label>
                        <input
                          type="text"
                          value={organisation}
                          onChange={(e) => setOrganisation(e.target.value)}
                          placeholder={selectedType === "investor" ? "Fund or firm name" : "Company name"}
                          className={inputClass}
                        />
                      </div>
                      <div className="mb-4">
                        <label className={labelClass}>Your Role</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} className={selectClass}>
                          {roleOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  <div className="mb-4">
                    <label className={labelClass}>How did you find us?</label>
                    <select value={source} onChange={(e) => setSource(e.target.value)} className={selectClass}>
                      {sourceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="h-px bg-foreground/[0.06] my-6" />

                  <div className="mb-4">
                    <label className={labelClass}>Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={messagePlaceholders[selectedType]}
                      required
                      maxLength={1000}
                      className={`${inputClass} h-28 resize-none leading-[1.6]`}
                    />
                    <div className={`text-right text-[10px] mt-1 font-mono ${message.length > 900 ? (message.length >= 1000 ? "text-red-400" : "text-amber-400") : "text-foreground/20"}`}>
                      {message.length} / 1000
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setConsent(!consent)}
                      className={`w-[18px] h-[18px] rounded flex-shrink-0 mt-0.5 border flex items-center justify-center transition-all duration-200 ${
                        consent
                          ? "bg-[hsl(258,60%,55%)] border-[hsl(258,60%,55%)]"
                          : "border-foreground/15 bg-foreground/[0.03]"
                      }`}
                    >
                      {consent && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <p className="text-[12px] text-foreground/30 leading-[1.6]">
                      I agree to Manas storing my contact details and using them to respond to this enquiry. We will never share your details with third parties.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={sending || !firstName.trim() || !email.trim() || !message.trim() || !consent}
                    className="w-full inline-flex items-center justify-center gap-2 text-[15px] font-[500] text-white bg-[hsl(258,60%,55%)] rounded-xl px-8 py-4 hover:bg-[hsl(258,60%,48%)] transition-all duration-300 shadow-lg shadow-[hsl(258,60%,55%)]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[hsl(258,60%,55%)]"
                  >
                    {sending ? (
                      <>
                        <span>Sending</span>
                        <span className="animate-spin">&#x27F3;</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

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
