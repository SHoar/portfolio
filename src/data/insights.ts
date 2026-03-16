export interface Insight {
  id: string;
  title: string;
  description: string;
  href: string;
}

const insights: Insight[] = [
  {
    id: 'recruiting-funnel',
    title: 'How I\'d Automate a Recruiting Funnel with Agents + RAG',
    description: 'A practical playbook: map resume intake and screening to an agent that pulls from your ATS, scores with RAG-backed criteria, and surfaces shortlists so recruiters focus on outreach.',
    href: '#',
  },
  {
    id: 'support-triage',
    title: 'Support Triage That Actually Saves 15+ Hours/Week',
    description: 'Turn ticket routing and first-response drafting into a single workflow: classify with an LLM, retrieve similar past resolutions with RAG, and suggest replies — with human-in-the-loop before send.',
    href: '#',
  },
  {
    id: 'internal-knowledge',
    title: 'Internal Knowledge Copilots Without the Mess',
    description: 'Why “just RAG our docs” often fails, and how to scope a small, high-value copilot (e.g. for one team or one process) with clear success metrics and minimal scope creep.',
    href: '#',
  },
];

export default insights;
