import type { Metadata } from "next";

import { TransmissionShell } from "@/components/site/TransmissionShell";

export const metadata: Metadata = {
  title: "Stop Skipping Steps | Badmouth Digital",
  description:
    "Everybody wants to jump to ads. Here's why doing things in order is the fastest path to results.",
};

export default function Page() {
  return (
    <TransmissionShell
      title="Stop Skipping Steps"
      description="Everybody wants to jump to ads. Here's why doing things in order is the fastest path to results."
      category="Website Not Working"
      categoryColor="var(--color-brand)"
      date="Jan 25, 2026"
      readTime="4 min"
      wordCount="1,110"
      prevPost={{
        title: "You Don't Have a Marketing Problem",
        slug: "you-dont-have-a-marketing-problem",
      }}
    >
      <div className="post-image">
        <span className="post-image__placeholder">🎯 Article Header Image</span>
      </div>

      <p>
        Every week, someone contacts us and says the same thing:{" "}
        <strong>&ldquo;I need to run Google Ads.&rdquo;</strong>
      </p>

      <p>
        And every week, we ask the same question: &ldquo;What happens when someone
        clicks the ad?&rdquo;
      </p>

      <p>The silence that follows tells us everything we need to know.</p>

      <h2 id="the-skip-ahead">Everyone Wants Step 3</h2>

      <p>Here&apos;s how most service business owners think about marketing:</p>

      <ul>
        <li>Step 1: Build a website ✓ (done, years ago, it&apos;s &ldquo;fine&rdquo;)</li>
        <li>Step 2: SEO (&ldquo;too slow, skip it&rdquo;)</li>
        <li>
          Step 3: Run ads (&ldquo;this is the one that makes money, let&apos;s do
          this&rdquo;)
        </li>
      </ul>

      <p>
        The problem? Each step is built on the one before it. When you skip steps,
        you&apos;re not saving time. You&apos;re wasting money.
      </p>

      <blockquote>
        <p>
          &ldquo;Skipping to Step 3 is like pouring gas on a fire that hasn&apos;t been
          lit yet. You&apos;re just making a mess.&rdquo;
        </p>
      </blockquote>

      <h2 id="step-one">Step 1: Build a Website That Actually Works</h2>

      <p>Not a pretty website. Not an expensive website. A website that does its job:</p>

      <ul>
        <li>Phone number on every page, click-to-call on mobile</li>
        <li>Contact form that&apos;s short and obvious</li>
        <li>Service pages that rank for what you actually do</li>
        <li>Speed, mobile experience, basic SEO</li>
        <li>Connected to a system that follows up instantly</li>
      </ul>

      <p>
        Most service business websites fail on three or more of these. And yet, the
        owner wants to drive more traffic to it. Why? So <em>more</em> people can have a
        bad experience?
      </p>

      <h2 id="step-two">Step 2: Get Found (Without Paying for It)</h2>

      <p>Before you spend a dollar on ads, max out what&apos;s free:</p>

      <ul>
        <li>
          <strong>Google Business Profile.</strong> Fully optimized. Posting weekly.
          Responding to every review.
        </li>
        <li>
          <strong>Reviews.</strong> Get more than your competitors. Systematically.
          Every week.
        </li>
        <li>
          <strong>Service-area pages.</strong> &ldquo;Plumber in [City]&rdquo; pages
          that match what people actually search for.
        </li>
      </ul>

      <p>
        This is the stuff that builds over time. Every review, every optimized page,
        every GBP post — it compounds. And unlike ads, it doesn&apos;t disappear when
        you stop paying.
      </p>

      <div className="callout">
        <p className="callout-title">📈 The Compound Effect</p>
        <p>
          Ads stop the moment you stop paying. SEO and reviews keep working. A business
          with 200 reviews and strong local pages will outperform a business spending
          $5,000/month on ads alone. Every single time.
        </p>
      </div>

      <h2 id="step-three">Step 3: Now Turn It Up</h2>

      <p>
        Once your website converts, your follow-up is automated, and your organic
        presence is solid — <em>now</em> ads make sense.
      </p>

      <p>
        Because now you&apos;re sending paid traffic to a system that works. Every click
        has a chance of becoming a booked job. Your cost-per-acquisition is predictable.
        Your ROI is measurable.
      </p>

      <p>This is the difference between advertising and gambling. Order matters.</p>

      <h2 id="the-impatience-tax">The Impatience Tax</h2>

      <p>Skipping steps isn&apos;t free. There&apos;s a cost:</p>

      <ul>
        <li>Ad spend on a website that doesn&apos;t convert = wasted money</li>
        <li>Traffic to a site with no follow-up system = missed leads</li>
        <li>Leads coming in with no tracking = no idea what&apos;s working</li>
      </ul>

      <p>
        We call this the <strong>impatience tax.</strong> It&apos;s the premium you pay
        for wanting results before you&apos;ve built the infrastructure to support them.
      </p>

      <p>
        The fastest path to results isn&apos;t skipping ahead. It&apos;s doing things in
        the right order, once, correctly. Then everything after that gets easier.
      </p>

      <p>
        <strong>Step 1. Step 2. Step 3. That&apos;s the whole damn system.</strong>
      </p>
    </TransmissionShell>
  );
}
