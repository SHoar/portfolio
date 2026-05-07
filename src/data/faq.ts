export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'what-is-readiness-call',
    question: 'What happens on the Workflow Readiness Call?',
    answer:
      "We spend about 30 minutes mapping where your team spends the most time and where time or money might be leaking. I'll ask about your current tools, your biggest pain points, and what 'good' would look like. There's no pitch—just a clear picture. If there's a fit, I'll send a short pilot proposal within 48 hours. No obligation.",
  },
  {
    id: 'no-long-term-contract',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. We start with a free or low-cost readiness check. If we do a pilot, it\'s a fixed-fee engagement with a clear scope and timeline (typically 2–4 weeks). You’re not locked in. Ongoing support is optional and on a monthly retainer only if you want it.',
  },
  {
    id: 'new-logins',
    question: 'Will my team need to learn a bunch of new tools?',
    answer:
      "We aim for 'no new logins unless necessary.' Most of the time we plug AI and automation into the email, calendar, and accounting tools you already use. If we do add something new, it\'s because it clearly pays for itself, and we include training and simple documentation.",
  },
  {
    id: 'replace-people',
    question: "I don't want to replace my people. Is that what this does?",
    answer:
      "No. The goal is to free your team from repetitive busywork—re-entering data, chasing quotes, answering the same questions—so they can spend more time with customers and on work that actually needs a human. AI should assist, not replace.",
  },
  {
    id: 'data-privacy',
    question: 'What about my data? Is it safe?',
    answer:
      'Data stays within secure, mainstream platforms. We don’t spray your information across random tools without your approval. Any solution we design uses services you can vet, and we can walk you through where data lives and who has access.',
  },
  {
    id: 'pricing',
    question: 'How is pricing structured?',
    answer:
      'The Workflow Readiness Check is free or very low cost. Pilots are fixed-fee—you’ll get a clear scope and price before we start, so there are no surprises. If you want ongoing support after a pilot, we discuss a monthly retainer. I’ll spell it all out in plain language before you commit to anything.',
  },
  {
    id: 'what-is-ai',
    question: "What do you mean by 'AI' in this context?",
    answer:
      "Think of it as smart assistance for repetitive decisions—like spell-check for writing, or auto-categorization in accounting software. We use AI to handle things that follow patterns: triaging emails, drafting follow-ups, pulling information into one place. It works in the background; you stay in control of every decision that matters.",
  },
];

export default faqItems;
