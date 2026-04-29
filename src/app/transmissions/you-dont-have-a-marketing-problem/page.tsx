import type { Metadata } from "next";

import { TransmissionShell } from "@/components/site/TransmissionShell";

export const metadata: Metadata = {
  title: "You Don't Have a Marketing Problem | Badmouth Digital",
  description:
    "You have a 'what the hell is working' problem. Here's how to figure out what's actually driving your business.",
};

export default function Page() {
  return (
    <TransmissionShell
      title="You Don't Have a Marketing Problem"
      description="You have a 'what the hell is working' problem. Here's how to figure out what's actually driving your business."
      category="Don't Know What's Working"
      categoryColor="var(--color-text-muted)"
      date="Jan 30, 2026"
      readTime="6 min"
      wordCount="1,475"
      prevPost={{
        title: "The Agency Burned You. Now What?",
        slug: "agency-burned-you",
      }}
      nextPost={{
        title: "Stop Skipping Steps",
        slug: "stop-skipping-steps",
      }}
    >
      <div className="post-image">
        <span className="post-image__placeholder">🔧 Article Header Image</span>
      </div>

      <p>
        You&apos;re busy. Phones ring sometimes. Jobs come in somehow.{" "}
        <strong>
          But if someone put a gun to your head and asked where your last ten customers
          came from, you couldn&apos;t answer.
        </strong>
      </p>

      <p>
        That&apos;s not a marketing problem. That&apos;s a visibility problem. Not
        visibility to customers — visibility into your own business.
      </p>

      <h2 id="the-black-box">The Black Box Problem</h2>

      <p>For most service business owners, their marketing looks like this:</p>

      <p>
        Money goes in. Leads come out. Sometimes. And you have no idea which part is
        working and which part is broken.
      </p>

      <ul>
        <li>Did that customer find you on Google or did someone refer them?</li>
        <li>Did they click an ad or did they drive past your truck?</li>
        <li>Is your website generating leads or just sitting there?</li>
        <li>Are your Google reviews helping? How would you even know?</li>
      </ul>

      <p>
        Without answers to these questions, every marketing decision you make is a
        guess. You might double down on something that isn&apos;t working. You might cut
        something that is.
      </p>

      <blockquote>
        <p>
          &ldquo;You can&apos;t fix what you can&apos;t measure. And you can&apos;t
          measure what you don&apos;t track.&rdquo;
        </p>
      </blockquote>

      <h2 id="what-to-track">What You Should Actually Be Tracking</h2>

      <p>You don&apos;t need a fancy dashboard. You need answers to five questions:</p>

      <ol>
        <li>
          <strong>How many leads did I get this month?</strong> (Form submissions +
          phone calls + texts)
        </li>
        <li>
          <strong>Where did they come from?</strong> (Google organic, Google Ads, Maps,
          referral, social, direct)
        </li>
        <li>
          <strong>How many turned into booked jobs?</strong>
        </li>
        <li>
          <strong>What was the average job value?</strong>
        </li>
        <li>
          <strong>What did I spend to get them?</strong> (Ad spend + agency fees + tool
          costs)
        </li>
      </ol>

      <p>
        With those five numbers, you can calculate your cost per lead, your cost per
        booked job, and your return on investment. That&apos;s it. That&apos;s the whole
        game.
      </p>

      <div className="callout">
        <p className="callout-title">📊 Quick Math</p>
        <p>
          If you spent $1,500 on marketing last month and booked 6 jobs averaging $2,500
          each, you made $15,000 from $1,500. Your cost per job was $250. That&apos;s a
          10x return. <strong>Now you know what&apos;s working.</strong>
        </p>
      </div>

      <h2 id="simple-tracking">The Simplest Tracking System That Works</h2>

      <p>
        You don&apos;t need enterprise software. Here&apos;s a system you can set up in
        an afternoon:
      </p>

      <ul>
        <li>
          <strong>Call tracking number.</strong> Use a tracked phone number on your
          website so you know which calls come from online vs. offline. Services like
          CallRail make this easy.
        </li>
        <li>
          <strong>UTM parameters.</strong> Tag your ad links so Google Analytics can
          tell you exactly which campaign generated which lead.
        </li>
        <li>
          <strong>&ldquo;How did you hear about us?&rdquo;</strong> Add this question to
          your contact form. It&apos;s embarrassingly simple and incredibly useful.
        </li>
        <li>
          <strong>A simple spreadsheet.</strong> Log every lead: date, source, service
          requested, outcome. Do this for 90 days and patterns will scream at you.
        </li>
      </ul>

      <h2 id="common-myths">Common Myths About Marketing That Keep You Stuck</h2>

      <p>
        <strong>&ldquo;I need to be on social media.&rdquo;</strong> Maybe. But if your
        Google Business Profile is a mess, that matters 100x more than your Instagram.
      </p>

      <p>
        <strong>&ldquo;I need a new website.&rdquo;</strong> Maybe. But if your current
        site has a phone number on every page and a working contact form, a redesign
        won&apos;t change your lead flow.
      </p>

      <p>
        <strong>&ldquo;SEO takes too long.&rdquo;</strong> Some of it does. But
        optimizing your Google Business Profile can change your Maps ranking in weeks,
        not months.
      </p>

      <p>
        <strong>&ldquo;I just need more leads.&rdquo;</strong> No, you need to convert
        the leads you&apos;re already getting. If you&apos;re missing calls and not
        following up, more leads just means more missed opportunities.
      </p>

      <h2 id="the-order">The Order of Operations</h2>

      <p>
        If I were starting from scratch with a service business, here&apos;s the exact
        order I&apos;d do things:
      </p>

      <ol>
        <li>Set up tracking so you can see what&apos;s happening</li>
        <li>Fix your follow-up so you don&apos;t lose the leads you already get</li>
        <li>Optimize your Google Business Profile</li>
        <li>Fix your website (if needed)</li>
        <li>Build your review engine</li>
        <li>Then — and only then — consider paid ads</li>
      </ol>

      <p>
        Notice how &ldquo;run ads&rdquo; is last? That&apos;s not an accident.{" "}
        <strong>
          Ads amplify what&apos;s already working. If nothing is working, ads just
          amplify the mess.
        </strong>
      </p>
    </TransmissionShell>
  );
}
