export interface ArchitectureNote {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
}

/** Public Architect Trilogy + hire-loop artifacts (architect-case-studies repo). */
const CASE_STUDIES_BASE =
  'https://github.com/SHoar/architect-case-studies/blob/main';

const architectureNotes: ArchitectureNote[] = [
  {
    id: 'trilogy-idp',
    title: 'GitOps IDP / Crossplane platform',
    summary:
      'BFF-only portal, propose→PR→Argo→Crossplane intent flow, and why agents never get live apply.',
    tags: ['Platform', 'GitOps', 'OIDC'],
    href: `${CASE_STUDIES_BASE}/case-studies/01-gitops-idp-platform.md`,
  },
  {
    id: 'trilogy-agent-safe',
    title: 'Agent-safe product architecture',
    summary:
      'Human-in-the-loop, policy-over-LLM, httpOnly BFF sessions, and fail-closed execution defaults.',
    tags: ['Agents', 'Security', 'HITL'],
    href: `${CASE_STUDIES_BASE}/case-studies/02-agent-safe-product.md`,
  },
  {
    id: 'trilogy-kdev',
    title: 'Deterministic K8s companion for agents',
    summary:
      'Exit-code contracts, no automatic model calls, workstation-scoped tooling, optional MCP wrap.',
    tags: ['Kubernetes', 'MCP', 'Tooling'],
    href: `${CASE_STUDIES_BASE}/case-studies/03-kdev-companion.md`,
  },
  {
    id: 'rfc-bff-gitops',
    title: 'RFC: BFF-only + GitOps for agents',
    summary:
      'Leadership artifact — alternatives considered and the default mutation path for agent platforms.',
    tags: ['RFC', 'Architecture'],
    href: `${CASE_STUDIES_BASE}/rfc/001-bff-gitops-for-agents.md`,
  },
  {
    id: 'ops-slo',
    title: 'SLOs, failure domains, and cost',
    summary:
      'Ops narrative for IDP + RAG stacks: error budgets, cost-per-task, and degrade paths.',
    tags: ['SRE', 'RAG', 'Cost'],
    href: `${CASE_STUDIES_BASE}/ops/slo-cost-idp-rag.md`,
  },
  {
    id: 'eval-harness',
    title: 'Agent eval harness demo',
    summary:
      'Permission matrix, refusal outcomes, and JSONL traces — run locally in minutes.',
    tags: ['Evals', 'Demo'],
    href: `${CASE_STUDIES_BASE}/demos/agent-eval-harness/README.md`,
  },
];

export default architectureNotes;
