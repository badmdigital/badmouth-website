"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/* ── Types ────────────────────────────────────────── */

interface StepProps {
  data: FormData;
  update: (fields: Partial<FormData>) => void;
}

interface SectionFeedback {
  soundsLikeYou: "" | "yes" | "almost" | "not-quite";
  factualIssues: string;
  changes: string;
}

interface FormData {
  brandName: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  stagingUrl: string;
  address: string;
  phone: string;
  businessEmail: string;
  websiteUrl: string;
  businessHours: string;
  services: string;
  pricing: string;
  serviceArea: string;
  idealClient: string;
  problemSolved: string;
  differentiator: string;
  toneOptions: string[];
  wordsToUse: string;
  wordsToAvoid: string;
  toneNotes: string;
  sections: Record<string, SectionFeedback>;
  overallStatus: "" | "ready" | "needs-revision" | "lets-talk";
  additionalNotes: string;
}

const DEFAULT_SECTIONS = ["Homepage", "About", "Services", "Contact"];

const TONE_OPTIONS = [
  "Professional",
  "Casual",
  "Friendly",
  "Bold",
  "Technical",
  "Warm",
  "Authoritative",
  "Playful",
];

const STEPS = [
  "Let's Get Started",
  "The Business",
  "What You Do",
  "Who You Serve",
  "Voice & Personality",
  "Copy Review",
  "Final Call",
];

const STEP_NUMBERS = ["01", "02", "03", "04", "05", "06", "07"];

/* ── Reusable Components ──────────────────────────── */

function Input({
  label,
  hint,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  hint?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="mb-6 group">
      <label className="block text-sm text-bad-white mb-1.5 group-focus-within:text-white transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
        {label}
        {required && <span className="text-bad-red ml-1">*</span>}
      </label>
      {hint && (
        <p className="text-xs text-bad-white/50 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
          {hint}
        </p>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-bad-gray/30 border-2 border-bad-gray/50 text-white px-4 py-3.5 text-sm placeholder:text-bad-white/20 transition-all duration-300 focus:border-bad-red/60 hover:border-bad-gray/80"
        style={{ fontFamily: "var(--font-mono)" }}
      />
    </div>
  );
}

function Textarea({
  label,
  hint,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="mb-6 group">
      <label className="block text-sm text-bad-white mb-1.5 group-focus-within:text-white transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
        {label}
      </label>
      {hint && (
        <p className="text-xs text-bad-white/50 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
          {hint}
        </p>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full bg-bad-gray/30 border-2 border-bad-gray/50 text-white px-4 py-3.5 text-sm placeholder:text-bad-white/20 transition-all duration-300 focus:border-bad-red/60 hover:border-bad-gray/80 resize-y"
        style={{ fontFamily: "var(--font-mono)" }}
      />
    </div>
  );
}

/* ── Step Components ──────────────────────────────── */

function Step1({ data, update }: StepProps) {
  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        Before we dial in your copy, we need to know who we&apos;re building for.<span className="blink-cursor" />
      </p>
      <Input label="Brand / Business Name" hint="What's the business called?" value={data.brandName} onChange={(v) => update({ brandName: v })} required />
      <Input label="Your Name" value={data.contactName} onChange={(v) => update({ contactName: v })} required />
      <Input label="Your Role" hint="Owner, partner, marketing lead. Whatever fits." value={data.contactRole} onChange={(v) => update({ contactRole: v })} />
      <Input label="Email" hint="Where we send the final version" type="email" value={data.contactEmail} onChange={(v) => update({ contactEmail: v })} required />
      <Input label="Staging Site URL" hint="The link to the site you're reviewing" type="url" value={data.stagingUrl} onChange={(v) => update({ stagingUrl: v })} />
    </div>
  );
}

function Step2({ data, update }: StepProps) {
  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        We built your first round from your brand guidelines. Now give us the details so round two hits harder.<span className="blink-cursor" />
      </p>
      <Input label="Business Address" hint="Where are you located? (Or 'remote/online' if no physical location)" value={data.address} onChange={(v) => update({ address: v })} />
      <Input label="Phone Number" type="tel" value={data.phone} onChange={(v) => update({ phone: v })} />
      <Input label="Business Email" hint="The one clients see" type="email" value={data.businessEmail} onChange={(v) => update({ businessEmail: v })} />
      <Input label="Website URL" hint="Your current live site, if you have one" type="url" value={data.websiteUrl} onChange={(v) => update({ websiteUrl: v })} />
      <Input label="Business Hours" hint="When are you open? (e.g. Mon–Fri 8am–5pm)" value={data.businessHours} onChange={(v) => update({ businessHours: v })} />
    </div>
  );
}

function Step3({ data, update }: StepProps) {
  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        We need to talk like you know your business. Because you do.<span className="blink-cursor" />
      </p>
      <Textarea label="Services / Products" hint="List what you offer. Be specific. 'HVAC repair' instead of 'services.'" value={data.services} onChange={(v) => update({ services: v })} rows={4} />
      <Textarea label="Pricing Overview" hint="Starting prices, ranges, packages. Whatever you're comfortable sharing. We won't publish anything you don't approve." value={data.pricing} onChange={(v) => update({ pricing: v })} rows={3} />
      <Textarea label="Service Area" hint="Where do you serve? Cities, radius, nationwide?" value={data.serviceArea} onChange={(v) => update({ serviceArea: v })} />
    </div>
  );
}

function Step4({ data, update }: StepProps) {
  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        The better we understand your buyer, the harder the copy lands.<span className="blink-cursor" />
      </p>
      <Textarea label="Who's your ideal client?" hint="Describe them. Age, income, industry, pain points. The more specific, the better." value={data.idealClient} onChange={(v) => update({ idealClient: v })} rows={4} />
      <Textarea label="What problem do you solve for them?" hint="Not what you sell. What changes for them after they hire you?" value={data.problemSolved} onChange={(v) => update({ problemSolved: v })} rows={3} />
      <Textarea label="Why do they pick you over the competition?" hint="Be honest. What actually makes you different?" value={data.differentiator} onChange={(v) => update({ differentiator: v })} rows={3} />
    </div>
  );
}

function Step5({ data, update }: StepProps) {
  const toggleTone = (tone: string) => {
    const current = data.toneOptions;
    if (current.includes(tone)) {
      update({ toneOptions: current.filter((t) => t !== tone) });
    } else {
      update({ toneOptions: [...current, tone] });
    }
  };

  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        This is how we make the copy sound like you, not like a marketing agency.<span className="blink-cursor" />
      </p>
      <div className="mb-8">
        <label className="block text-sm text-bad-white mb-4" style={{ fontFamily: "var(--font-mono)" }}>
          How do you want to sound?
        </label>
        <div className="flex flex-wrap gap-2.5">
          {TONE_OPTIONS.map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => toggleTone(tone)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider border-2 transition-all duration-300 ${
                data.toneOptions.includes(tone)
                  ? "bg-bad-red/20 border-bad-red text-bad-white tone-chip-active"
                  : "bg-transparent border-bad-gray/50 text-bad-white/50 hover:border-bad-white/30 hover:text-bad-white/70"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>
      <Textarea label="Any words or phrases you always use?" hint="Industry terms, brand language, things your clients hear you say" value={data.wordsToUse} onChange={(v) => update({ wordsToUse: v })} />
      <Textarea label="Any words or phrases to avoid?" hint="Things that don't sound like you or don't fit your brand" value={data.wordsToAvoid} onChange={(v) => update({ wordsToAvoid: v })} />
      <Textarea label="Anything else about your tone?" value={data.toneNotes} onChange={(v) => update({ toneNotes: v })} />
    </div>
  );
}

function Step6({ data, update }: StepProps) {
  const sectionNames = Object.keys(data.sections);

  const updateSection = (section: string, fields: Partial<SectionFeedback>) => {
    update({
      sections: {
        ...data.sections,
        [section]: { ...data.sections[section], ...fields },
      },
    });
  };

  const statusOptions: { value: SectionFeedback["soundsLikeYou"]; label: string; activeClass: string }[] = [
    { value: "yes", label: "Yes", activeClass: "border-bad-teal text-bad-teal bg-bad-teal/10 status-glow-teal" },
    { value: "almost", label: "Almost", activeClass: "border-warning-yellow text-warning-yellow bg-warning-yellow/10 status-glow-yellow" },
    { value: "not-quite", label: "Not quite", activeClass: "border-bad-red text-bad-red bg-bad-red/10 status-glow-red" },
  ];

  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-4 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        Now let&apos;s look at what we built. Open your staging site and go page by page.<span className="blink-cursor" />
      </p>
      {data.stagingUrl && (
        <a
          href={data.stagingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-bad-red text-sm mb-10 px-5 py-3 border-2 border-bad-red/30 hover:border-bad-red/60 transition-all duration-300 hover:bg-bad-red/5"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bad-red opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bad-red" />
          </span>
          Open staging site
          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>
      )}

      {sectionNames.map((section, idx) => (
        <div key={section} className="review-card mb-8 border-2 border-bad-gray/30 p-6 sm:p-8 relative">
          {/* Section number accent */}
          <div className="absolute -top-3 -left-px px-3 bg-[#0a0a0a]">
            <span className="text-bad-red/40 text-xs tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>

          <h3
            className="text-xl uppercase tracking-wider text-bad-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {section}
          </h3>

          <div className="mb-6">
            <label className="block text-sm text-bad-white mb-3" style={{ fontFamily: "var(--font-mono)" }}>
              Does this sound like you?
            </label>
            <div className="flex gap-2.5">
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => updateSection(section, { soundsLikeYou: opt.value })}
                  className={`px-5 py-2.5 text-xs uppercase tracking-wider border-2 transition-all duration-300 ${
                    data.sections[section].soundsLikeYou === opt.value
                      ? opt.activeClass
                      : "bg-transparent border-bad-gray/50 text-bad-white/40 hover:border-bad-white/30"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <Textarea
            label="Anything factually wrong?"
            hint="Wrong name, wrong service, wrong number. Flag it here."
            value={data.sections[section].factualIssues}
            onChange={(v) => updateSection(section, { factualIssues: v })}
            rows={2}
          />
          <Textarea
            label="What would you change?"
            hint="Specific is better than 'I don't like it.' Tell us what feels off and we'll fix it."
            value={data.sections[section].changes}
            onChange={(v) => updateSection(section, { changes: v })}
            rows={2}
          />
        </div>
      ))}
    </div>
  );
}

function Step7({ data, update }: StepProps) {
  const options: { value: FormData["overallStatus"]; label: string; desc: string }[] = [
    { value: "ready", label: "Ready to go", desc: "Minor tweaks at most. Let's launch." },
    { value: "needs-revision", label: "Needs another round", desc: "Good direction, but some things need work." },
    { value: "lets-talk", label: "Let's talk", desc: "I'd rather walk through this together." },
  ];

  return (
    <div>
      <p className="text-bad-white/70 text-sm mb-8 leading-relaxed step-intro" style={{ fontFamily: "var(--font-mono)" }}>
        One last thing before we get to work.<span className="blink-cursor" />
      </p>

      <div className="mb-8">
        <label className="block text-sm text-bad-white mb-4" style={{ fontFamily: "var(--font-mono)" }}>
          Overall, where are we?
        </label>
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => update({ overallStatus: opt.value })}
              className={`text-left px-6 py-5 border-2 transition-all duration-300 ${
                data.overallStatus === opt.value
                  ? "border-bad-red bg-bad-red/10 status-glow-red"
                  : "border-bad-gray/50 hover:border-bad-white/30 hover:bg-bad-gray/10"
              }`}
            >
              <div className="text-sm text-bad-white font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
                {opt.label}
              </div>
              <div className="text-xs text-bad-white/40 mt-1.5" style={{ fontFamily: "var(--font-mono)" }}>
                {opt.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Textarea
        label="Anything else we should know?"
        hint="Last chance. Anything we missed, anything on your mind."
        value={data.additionalNotes}
        onChange={(v) => update({ additionalNotes: v })}
        rows={4}
      />
    </div>
  );
}

/* ── Submitted State ──────────────────────────────── */

function SubmittedScreen() {
  return (
    <div className="text-center py-20 step-enter">
      {/* Decorative accents */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px w-12 bg-bad-red/30" />
        <div className="h-2 w-2 bg-bad-red success-pulse" />
        <div className="h-px w-12 bg-bad-red/30" />
      </div>

      <h2
        className="glitch-text text-4xl sm:text-5xl uppercase tracking-tighter text-bad-white mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        We got it.
      </h2>
      <p className="text-bad-white/70 text-sm max-w-md mx-auto leading-relaxed mb-3" style={{ fontFamily: "var(--font-mono)" }}>
        Your feedback is locked in. We&apos;re on it.
      </p>
      <p className="text-bad-white/70 text-sm max-w-md mx-auto leading-relaxed mb-8" style={{ fontFamily: "var(--font-mono)" }}>
        Expect round two with everything dialed in.
      </p>
      <div className="h-px w-24 bg-bad-gray/30 mx-auto" />
    </div>
  );
}

/* ── Main Form ────────────────────────────────────── */

function CopyReviewForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const sectionParam = searchParams.get("sections");
  const sectionNames = sectionParam
    ? sectionParam.split(",").map((s) => s.trim().replace(/^\w/, (c) => c.toUpperCase()))
    : DEFAULT_SECTIONS;

  const initialSections: Record<string, SectionFeedback> = {};
  sectionNames.forEach((s) => {
    initialSections[s] = { soundsLikeYou: "", factualIssues: "", changes: "" };
  });

  const [data, setData] = useState<FormData>({
    brandName: searchParams.get("brand") || "",
    contactName: "",
    contactRole: "",
    contactEmail: "",
    stagingUrl: searchParams.get("url") || "",
    address: "",
    phone: "",
    businessEmail: "",
    websiteUrl: "",
    businessHours: "",
    services: "",
    pricing: "",
    serviceArea: "",
    idealClient: "",
    problemSolved: "",
    differentiator: "",
    toneOptions: [],
    wordsToUse: "",
    wordsToAvoid: "",
    toneNotes: "",
    sections: initialSections,
    overallStatus: "",
    additionalNotes: "",
  });

  const update = useCallback((fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  }, []);

  const goToStep = (newStep: number) => {
    setStep(newStep);
    setAnimKey((k) => k + 1);
  };

  const stepComponents = [
    <Step1 key={0} data={data} update={update} />,
    <Step2 key={1} data={data} update={update} />,
    <Step3 key={2} data={data} update={update} />,
    <Step4 key={3} data={data} update={update} />,
    <Step5 key={4} data={data} update={update} />,
    <Step6 key={5} data={data} update={update} />,
    <Step7 key={6} data={data} update={update} />,
  ];

  const isLastStep = step === STEPS.length - 1;

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/review/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "copy", ...data }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  if (submitted) {
    return (
      <div className="scanlines noise crt-vignette min-h-screen flex flex-col relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating accent dots */}
        <div className="float-dot" style={{ top: "25%", left: "10%" }} />
        <div className="float-dot" style={{ top: "33%", right: "15%", animationDelay: "2s", width: 6, height: 6 }} />
        <div className="float-dot" style={{ bottom: "33%", left: "20%", animationDelay: "4s" }} />
        <div className="relative z-10 flex flex-1 items-center justify-center px-6">
          <SubmittedScreen />
        </div>
      </div>
    );
  }

  return (
    <div className="scanlines noise crt-vignette min-h-screen flex flex-col relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent dots */}
      <div className="float-dot" style={{ top: "20%", left: "5%" }} />
      <div className="float-dot" style={{ top: "55%", right: "6%", animationDelay: "3s", width: 6, height: 6 }} />
      <div className="float-dot" style={{ top: "75%", left: "10%", animationDelay: "1.5s" }} />
      <div className="float-dot" style={{ top: "35%", right: "12%", animationDelay: "4.5s", width: 3, height: 3 }} />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 pt-6 pb-4 border-b border-bad-gray/20">
        <div className="flicker">
          <Image
            src="/images/badmouth-logo.webp"
            alt="Badmouth Digital"
            width={140}
            height={40}
            className="w-[100px] sm:w-[140px]"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bad-red opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-bad-red/60" />
          </span>
          <span className="text-xs text-bad-white/30 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
            Copy Review
          </span>
        </div>
      </header>

      {/* Progress section */}
      <div className="relative z-10 px-6 sm:px-10 pt-6 pb-2">
        {/* Step indicators */}
        <div className="flex items-center gap-1.5 mb-3">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 transition-all duration-700 ease-out ${
                i < step ? "bg-bad-red/60" : i === step ? "bg-bad-red progress-segment-active" : "bg-bad-gray/30"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between items-baseline">
          <div className="flex items-center gap-3">
            <span
              className="text-bad-red/60 text-2xl font-bold count-pop"
              key={`step-${step}`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {STEP_NUMBERS[step]}
            </span>
            <span className="text-xs text-bad-white/25 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
              of {STEP_NUMBERS[STEPS.length - 1]}
            </span>
          </div>
          <span className="text-xs text-bad-white/15" style={{ fontFamily: "var(--font-mono)" }}>
            {Math.round(((step + 1) / STEPS.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Step content */}
      <main className="relative z-10 flex-1 px-6 sm:px-10 py-8 max-w-2xl mx-auto w-full">
        <div className="step-enter" key={animKey}>
          <h2
            className="glitch-text text-3xl sm:text-4xl uppercase tracking-tighter text-bad-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {STEPS[step]}
          </h2>
          <div className="h-px bg-bad-red/50 mb-10 line-draw" />

          {stepComponents[step]}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-bad-gray/15">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => goToStep(step - 1)}
              className="group flex items-center gap-2 text-sm text-bad-white/30 hover:text-bad-white/60 transition-all duration-300 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
              Back
            </button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="pulse-hover bg-bad-red text-bad-white px-10 py-3.5 text-sm font-bold uppercase tracking-wider border-2 border-bad-red transition-all duration-300 hover:bg-bad-red/90 disabled:opacity-50"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {submitting ? "Sending..." : "Submit Review"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => goToStep(step + 1)}
              className="group pulse-hover bg-bad-red text-bad-white px-10 py-3.5 text-sm font-bold uppercase tracking-wider border-2 border-bad-red transition-all duration-300 hover:bg-bad-red/90 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Continue
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 sm:px-10 py-6 border-t border-bad-gray/20">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/images/badmouth-logo.webp"
            alt="Badmouth Digital"
            width={100}
            height={30}
            className="w-[80px] opacity-40"
          />
          <p className="text-xs text-bad-white/40 tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
            &copy; 2026 Badmouth Digital LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── Page Export with Suspense ────────────────────── */

export default function CopyReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="scanlines noise crt-vignette min-h-screen flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bad-red opacity-50" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bad-red" />
            </div>
            <p className="text-bad-white/30 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Loading
            </p>
          </div>
        </div>
      }
    >
      <CopyReviewForm />
    </Suspense>
  );
}
