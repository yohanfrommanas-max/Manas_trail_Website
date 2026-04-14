import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import logoMark from "@assets/edd26aed-3bdc-4289-bdf3-b84ec3bcd1c9_1775147772069.jpeg";
import phoneImage from "@assets/image_1776022449079.png";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const enquiryTypes = [
  { key: "investor", label: "Investor", desc: "SAFE round & funding" },
  { key: "corporate", label: "Corporate Wellness", desc: "Pilots & partnerships" },
  { key: "press", label: "Press & Media", desc: "Coverage & interviews" },
  { key: "product", label: "Product / General", desc: "Beta access & feedback" },
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
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  const showOrgFields = selectedType === "investor" || selectedType === "corporate";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !message.trim() || !consent) return;

    setSending(true);
    setError("");

    const FALLBACK_URL = "https://dwenjizfjoxzilxysqan.supabase.co";
    const FALLBACK_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3ZW5qaXpmam94emlseHlzcWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxODgwMDQsImV4cCI6MjA5MTc2NDAwNH0.iC3HYcRx--ULltMP6e7XoL6xPP1lfxekAizRUbIxGcQ";

    const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || FALLBACK_URL;
    const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) || FALLBACK_ANON_KEY;
    const EDGE_FUNCTION_URL = `${supabaseUrl}/functions/v1/contact-form`;

    let res: Response;

    try {
      res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          enquiry_type: selectedType,
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email: email.trim(),
          organisation: organisation.trim(),
          role,
          source,
          message: message.trim(),
        }),
      });
    } catch {
      setSending(false);
      setError("Unable to reach the server. Please check your connection and try again.");
      return;
    }

    if (!res.ok) {
      let errorMsg = "Something went wrong. Please try again.";
      try {
        const data = await res.json();
        if (data?.error) errorMsg = data.error;
      } catch {}
      setSending(false);
      setError(errorMsg);
      return;
    }

    setSending(false);
    setSubmitted(true);
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
    setError("");
  }

  const inputClass =
    "w-full bg-foreground/[0.03] border border-foreground/[0.12] rounded-xl px-4 py-3.5 text-[15px] font-[400] text-foreground placeholder:text-foreground/35 outline-none transition-all duration-200 focus:border-[hsl(258,60%,55%)] focus:ring-2 focus:ring-[hsl(258,60%,55%)]/10";
  const selectClass =
    "w-full bg-foreground/[0.03] border border-foreground/[0.12] rounded-xl px-4 py-3.5 text-[15px] font-[400] text-foreground outline-none transition-all duration-200 focus:border-[hsl(258,60%,55%)] focus:ring-2 focus:ring-[hsl(258,60%,55%)]/10 appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_14px_center] pr-10";
  const labelClass = "block text-[11px] tracking-[0.12em] uppercase text-foreground/50 mb-2 font-[600]";

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
            className="inline-flex items-center gap-2 text-[13px] text-foreground/50 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fade}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-[13px] tracking-[0.2em] uppercase text-foreground/40 mb-6">
              Get in touch
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-[300] leading-[1.1] tracking-[-0.02em] mb-5 text-foreground/90">
              Let's start a{" "}
              <span className="italic text-foreground/40">conversation.</span>
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.125rem)] leading-[1.75] text-foreground/55 font-[400] max-w-[380px] mb-12">
              Whether you're an investor, a potential partner, a corporate wellness lead, or just curious. We read every message.
            </p>

            <div className="w-full max-w-[320px] lg:max-w-[360px]">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                src={phoneImage}
                alt="Manas app on iPhone home screen"
                className="w-full rounded-2xl shadow-2xl shadow-foreground/[0.08]"
              />
            </div>

            <p className="text-[12px] text-foreground/35 tracking-[0.05em] mt-10">
              We aim to respond within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fade}
            className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-8 md:p-10 relative overflow-hidden"
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
                <h3 className="text-[24px] font-[300] tracking-[-0.02em] text-foreground/90">Message received.</h3>
                <p className="text-[15px] text-foreground/55 leading-[1.65] max-w-[300px]">
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
                <h2 className="text-[22px] font-[400] tracking-[-0.02em] mb-1.5 text-foreground/90">Send us a message</h2>
                <p className="text-[14px] text-foreground/50 mb-8">Tell us who you are and what's on your mind.</p>

                <div className="grid grid-cols-2 gap-2 mb-7">
                  {enquiryTypes.map((type) => (
                    <button
                      key={type.key}
                      onClick={() => setSelectedType(type.key)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                        selectedType === type.key
                          ? "border-[hsl(258,60%,55%)] bg-[hsl(258,60%,55%)]/[0.06]"
                          : "border-foreground/[0.08] bg-foreground/[0.02] hover:border-foreground/[0.15]"
                      }`}
                    >
                      <span className="text-[12px] font-[600] text-foreground/75 block mb-0.5">{type.label}</span>
                      <span className="text-[10px] text-foreground/35">{type.desc}</span>
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
                        placeholder="Your"
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
                        placeholder="Name"
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
                        <label className={labelClass}>Organisation <span className="text-foreground/25 normal-case tracking-normal font-[400]">(optional)</span></label>
                        <input
                          type="text"
                          value={organisation}
                          onChange={(e) => setOrganisation(e.target.value)}
                          placeholder={selectedType === "investor" ? "Fund or firm name" : "Company name"}
                          className={inputClass}
                        />
                      </div>
                      <div className="mb-4">
                        <label className={labelClass}>Your Role <span className="text-foreground/25 normal-case tracking-normal font-[400]">(optional)</span></label>
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

                  <div className="h-px bg-foreground/[0.08] my-6" />

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
                    <div className={`text-right text-[10px] mt-1 font-mono ${message.length > 900 ? (message.length >= 1000 ? "text-red-400" : "text-amber-400") : "text-foreground/30"}`}>
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
                          : "border-foreground/20 bg-foreground/[0.03]"
                      }`}
                    >
                      {consent && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <p className="text-[12px] text-foreground/45 leading-[1.6]">
                      I agree to Manas storing my contact details and using them to respond to this enquiry. We will never share your details with third parties.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 rounded-xl bg-red-50 border border-red-200/60 px-4 py-3 text-[13px] text-red-600 leading-[1.5]">
                      {error}
                    </div>
                  )}

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
