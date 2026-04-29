import type { Metadata } from "next";

import { TransmissionShell } from "@/components/site/TransmissionShell";

export const metadata: Metadata = {
  title: "The Agency Burned You. Now What? | Badmouth Digital",
  description:
    "You got ghosted, overcharged, and underwhelmed. Here's how to vet the next one (or just fix it yourself).",
};

export default function Page() {
  return (
    <TransmissionShell
      title="The Agency Burned You. Now What?"
      description="You got ghosted, overcharged, and underwhelmed. Here's how to vet the next one (or just fix it yourself)."
      category="Been Burned Before"
      categoryColor="var(--color-brand)"
      date="Feb 5, 2026"
      readTime="5 min"
      wordCount="1,290"
      prevPost={{
        title: "Ad Spend or Bonfire? You Decide.",
        slug: "ad-spend-or-bonfire",
      }}
      nextPost={{
        title: "You Don't Have a Marketing Problem",
        slug: "you-dont-have-a-marketing-problem",
      }}
    >
      <div className="post-image">
        <span className="post-image__placeholder">🚩 Article Header Image</span>
      </div>

      <p>
        You hired an agency. They talked a big game. Nice office, sharp website, slick
        pitch deck. They promised you leads, visibility, growth.{" "}
        <strong>Then they delivered a monthly PDF and a bunch of excuses.</strong>
      </p>

      <p>
        If this sounds familiar, you&apos;re not alone. It&apos;s the most common story
        we hear.
      </p>

      <h2 id="how-it-usually-goes">How It Usually Goes</h2>

      <p>The pattern is almost always the same:</p>

      <ol>
        <li>
          <strong>The Honeymoon.</strong> They&apos;re responsive. They ask good
          questions. You feel heard. You sign the contract.
        </li>
        <li>
          <strong>The Build.</strong> Something gets built. A website, some ads, maybe a
          social calendar. It takes longer than they said. But it looks okay.
        </li>
        <li>
          <strong>The Ghost.</strong> Communication slows down. Your emails take three
          days to get a response. Your monthly calls get rescheduled. The reports keep
          coming, but nothing changes.
        </li>
        <li>
          <strong>The Breakup.</strong> You cancel. They keep your domain hostage or
          delete your ad accounts. You start over with nothing.
        </li>
      </ol>

      <p>
        Six months later, you&apos;ve spent $10,000 and you&apos;re back at square one.
        Worse, actually — because now you don&apos;t trust anyone.
      </p>

      <blockquote>
        <p>
          &ldquo;The worst part about getting burned by an agency isn&apos;t the money.
          It&apos;s the six months you lost.&rdquo;
        </p>
      </blockquote>

      <h2 id="what-went-wrong">What Actually Went Wrong</h2>

      <p>In most cases, the agency wasn&apos;t evil. They were just wrong for you. Here&apos;s why:</p>

      <ul>
        <li>
          <strong>They don&apos;t specialize in service businesses.</strong> They work
          with restaurants, dentists, e-commerce stores, and you. You&apos;re one of
          twenty clients and they use the same playbook for all of them.
        </li>
        <li>
          <strong>They sold tactics, not a system.</strong> You got a website, or SEO,
          or ads — but not a connected system where everything works together.
        </li>
        <li>
          <strong>They don&apos;t own the results.</strong> They optimize for metrics
          they control (impressions, clicks, traffic) instead of outcomes you care about
          (phone calls, booked jobs, revenue).
        </li>
        <li>
          <strong>They locked you in.</strong> Long-term contracts, proprietary
          platforms, no access to your own accounts. If you leave, you leave with
          nothing.
        </li>
      </ul>

      <h2 id="how-to-vet">How to Vet the Next One</h2>

      <p>
        If you&apos;re going to hire another agency (or any marketing partner), ask
        these questions:
      </p>

      <div className="callout">
        <p className="callout-title">🔍 The Vet List</p>
        <p>
          <strong>1. Do you specialize in service businesses?</strong> If not, move on.
          <br />
          <br />
          <strong>2. Do I own everything you build?</strong> Website, domain, ad
          accounts, phone numbers. All of it. Non-negotiable.
          <br />
          <br />
          <strong>3. How do you track results?</strong> If they can&apos;t explain it in
          plain English, they don&apos;t have a system for it.
          <br />
          <br />
          <strong>4. What happens in the first 30 days?</strong> If they can&apos;t give
          you a specific answer, they&apos;re winging it.
          <br />
          <br />
          <strong>5. Can I leave whenever I want?</strong> Good agencies don&apos;t need
          long-term contracts. Their results keep you.
        </p>
      </div>

      <h2 id="or-do-it-yourself">Or Just Fix Some of It Yourself</h2>

      <p>Here&apos;s what you can do without any agency at all:</p>

      <ul>
        <li>
          <strong>Claim and optimize your Google Business Profile.</strong> Free. Takes
          an hour. Massive impact.
        </li>
        <li>
          <strong>Start asking for reviews systematically.</strong> Text every customer
          a review link after the job is done.
        </li>
        <li>
          <strong>
            Make sure your website has a phone number on every page
          </strong>{" "}
          and that it&apos;s click-to-call on mobile.
        </li>
        <li>
          <strong>Set up a simple CRM</strong> so you actually know who contacted you
          and when.
        </li>
      </ul>

      <p>
        You don&apos;t need a marketing agency to do the basics. You need a marketing
        agency when you want to scale what&apos;s already working. That&apos;s the
        difference.
      </p>

      <p>
        <strong>
          Getting burned once is their fault. Getting burned twice is yours. Do your
          homework this time.
        </strong>
      </p>
    </TransmissionShell>
  );
}
