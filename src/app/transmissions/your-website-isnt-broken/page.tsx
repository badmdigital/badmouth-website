import type { Metadata } from "next";

import { TransmissionShell } from "@/components/site/TransmissionShell";

export const metadata: Metadata = {
  title: "Your Website Isn't Broken. Your System Is. | Badmouth Digital",
  description:
    "That pretty site cost you five grand and books zero jobs. Here's what's actually missing behind the scenes.",
};

export default function Page() {
  return (
    <TransmissionShell
      title="Your Website Isn't Broken. Your System Is."
      description="That pretty site cost you five grand and books zero jobs. Here's what's actually missing behind the scenes."
      category="Website Not Working"
      categoryColor="var(--color-brand)"
      date="Feb 15, 2026"
      readTime="5 min"
      wordCount="1,356"
      prevPost={{
        title: "Why Your SEO Strategy Is Garbage",
        slug: "seo-strategy-is-garbage",
      }}
      nextPost={{
        title: "Ad Spend or Bonfire? You Decide.",
        slug: "ad-spend-or-bonfire",
      }}
    >
      <div className="post-image">
        <span className="post-image__placeholder">🖥️ Article Header Image</span>
      </div>

      <p>
        You paid for a website. It looks good. Maybe great. It&apos;s got your logo,
        your services, a contact form, some stock photos of guys in hard hats.{" "}
        <strong>And it books absolutely zero jobs.</strong>
      </p>

      <p>
        Here&apos;s the part nobody told you: a website isn&apos;t the system. It&apos;s
        one piece of the system. And if the rest of the system doesn&apos;t exist, your
        website is just an expensive business card that lives on the internet.
      </p>

      <h2 id="the-brochure-problem">The Brochure Problem</h2>

      <p>
        Most service business websites are brochures. They tell people what you do. They
        show some photos. Maybe they&apos;ve got a &ldquo;Request a Quote&rdquo; button
        buried on page three.
      </p>

      <p>But here&apos;s what they don&apos;t do:</p>

      <ul>
        <li>They don&apos;t follow up when someone fills out a form</li>
        <li>They don&apos;t text back when someone calls and you miss it</li>
        <li>They don&apos;t ask for reviews after you finish a job</li>
        <li>They don&apos;t tell you where your leads are coming from</li>
        <li>They don&apos;t do anything after someone visits</li>
      </ul>

      <p>
        Your website sits there. Someone visits. They either call or they don&apos;t. If
        they don&apos;t, they&apos;re gone forever. If they do and you miss the call,
        they&apos;re gone forever. Either way, you have no idea it happened.
      </p>

      <blockquote>
        <p>
          &ldquo;A website without a system behind it is just a digital flyer you paid
          $5,000 for.&rdquo;
        </p>
      </blockquote>

      <h2 id="what-a-system-looks-like">What a System Actually Looks Like</h2>

      <p>
        A real marketing system for a service business has these pieces working
        together:
      </p>

      <ol>
        <li>
          <strong>The website catches the lead.</strong> Clear calls to action. Phone
          number visible everywhere. Form that&apos;s short and obvious. Click-to-call
          on mobile.
        </li>
        <li>
          <strong>Missed call text-back.</strong> Someone calls and you don&apos;t
          answer? They get an automatic text within 30 seconds: &ldquo;Hey, sorry we
          missed you. How can we help?&rdquo;
        </li>
        <li>
          <strong>Automated follow-up.</strong> Someone fills out a form? They get a
          confirmation text and email immediately. Not tomorrow. Not when you check your
          inbox. Now.
        </li>
        <li>
          <strong>Review requests.</strong> You finish a job? The system sends a text
          asking for a review. With a link. One tap. Done.
        </li>
        <li>
          <strong>Source tracking.</strong> You know exactly which leads came from
          Google, which came from ads, which came from referrals. Every one. Every time.
        </li>
      </ol>

      <div className="callout">
        <p className="callout-title">⚙ System Check</p>
        <p>
          If you can&apos;t tell me how many leads your website generated last month,
          where they came from, and how many turned into booked jobs — your website
          isn&apos;t working. It exists. That&apos;s not the same thing.
        </p>
      </div>

      <h2 id="the-follow-up-gap">The Follow-Up Gap</h2>

      <p>
        Here&apos;s a stat that should scare you:{" "}
        <strong>78% of customers buy from the company that responds first.</strong> Not
        the best company. Not the cheapest. The first one to pick up the phone.
      </p>

      <p>
        If someone requests a quote on your website at 8pm and you don&apos;t see it
        until 7am, that lead is already gone. They&apos;ve already called your
        competitor. They&apos;ve already booked.
      </p>

      <p>
        The system fixes this. Not with magic. With automation. A form gets submitted, a
        text goes out, a notification hits your phone — all within seconds. The lead
        feels taken care of. You feel in control.
      </p>

      <h2 id="what-you-can-do">What You Can Do Right Now</h2>

      <p>
        Before you spend another dollar on a website redesign, ask yourself these
        questions:
      </p>

      <ul>
        <li>
          Is my phone number on every page, and is it click-to-call on mobile?
        </li>
        <li>
          When someone fills out my contact form, what happens next? (If the answer is
          &ldquo;I check my email later,&rdquo; that&apos;s a problem.)
        </li>
        <li>Do I know how many leads my website generated last month?</li>
        <li>Am I systematically asking every customer for a review?</li>
        <li>
          When I miss a call, does the customer hear from me within 60 seconds?
        </li>
      </ul>

      <p>
        If you answered &ldquo;no&rdquo; to more than two of those,{" "}
        <strong>your website isn&apos;t the problem. Your system is.</strong> And no
        amount of redesigning is going to fix a system that doesn&apos;t exist.
      </p>

      <p>Build the system first. Then make it pretty.</p>
    </TransmissionShell>
  );
}
