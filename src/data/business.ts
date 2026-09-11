import type { Prompt } from '../types'

export const business: Prompt[] = [
  {
    id: 'business.answer-first',
    title: 'Answer first',
    prompt:
      'Lead every business document with the conclusion or recommendation in the first sentence, then give supporting reasons in descending order of importance (Minto pyramid). Never make the reader wait for the point.',
    category: 'business',
  },
  {
    id: 'business.executive-summary',
    title: 'Executive summary on top',
    prompt:
      'Open any document longer than a page with an executive summary of at most five sentences that a reader could act on without reading further: situation, recommendation, cost, and next step.',
    category: 'business',
  },
  {
    id: 'business.narrative-memo',
    title: 'Narrative memo, not slides',
    prompt:
      'Write strategy documents and proposals as full-sentence narrative prose in the style of an Amazon six-pager rather than as bullet-point slides. Use bullets only for lists of parallel items such as goals or tenets.',
    category: 'business',
  },
  {
    id: 'business.problem-before-solution',
    title: 'Problem before solution',
    prompt:
      'Do not propose a solution until the problem is stated with who has it, how often, what it costs them, and how you know. If the evidence is thin, say so and propose how to get it.',
    category: 'business',
  },
  {
    id: 'business.meeting-agenda',
    title: 'Meeting agenda structure',
    prompt:
      'When writing a meeting agenda, state the purpose in one line, list the decisions that must be made, timebox each item with an owner, and name any required pre-reads. If there is no decision to make, suggest replacing the meeting with a written update.',
    category: 'business',
  },
  {
    id: 'business.decision-memo',
    title: 'Decision memo format',
    prompt:
      'When writing a decision memo, use these sections: decision needed and by when, recommendation, context, options considered with pros and cons (including "do nothing"), risks, and what happens if no decision is made. Keep it to one page.',
    category: 'business',
  },
  {
    id: 'business.one-pager',
    title: 'One-pager format',
    prompt:
      'When asked for a one-pager, fit the problem, proposed solution, expected impact with numbers, cost, timeline, and open questions on a single page under headed sections. Move supporting detail to an appendix.',
    category: 'business',
  },
  {
    id: 'business.business-case',
    title: 'Business case structure',
    prompt:
      'Structure a business case as: problem and cost of inaction, proposed solution, quantified benefits, costs and resources, risks, alternatives considered, and recommendation. Show the payback period or ROI calculation with its assumptions.',
    category: 'business',
  },
  {
    id: 'business.smart-goals',
    title: 'SMART goals',
    prompt:
      'Write every goal in SMART form: specific, measurable, achievable, relevant, and time-bound. Rewrite vague goals such as "improve onboarding" into the form "raise day-7 activation from 32% to 40% by the end of Q3".',
    category: 'business',
  },
  {
    id: 'business.okrs',
    title: 'OKR drafting',
    prompt:
      'When drafting OKRs, write one qualitative, ambitious objective and three to five key results that are measurable outcomes rather than tasks or deliverables. Include the current baseline next to each key result.',
    category: 'business',
  },
  {
    id: 'business.success-metrics-first',
    title: 'Define success metrics first',
    prompt:
      'Define success metrics before proposing solutions: one primary metric, two or three guardrail metrics that must not get worse, and the baseline and target for each.',
    category: 'business',
  },
  {
    id: 'business.raci',
    title: 'RACI for shared work',
    prompt:
      'When a plan involves several people, add a RACI table with exactly one Accountable per deliverable and clearly separated Responsible, Consulted, and Informed roles. Flag any deliverable with zero or two Accountable owners.',
    category: 'business',
  },
  {
    id: 'business.delegate-clearly',
    title: 'Delegate with owner and deadline',
    prompt:
      'When delegating, name a single owner, define what done looks like, set a deadline, state what decisions the owner may make alone, and specify when to check in. Never assign a task to a group.',
    category: 'business',
  },
  {
    id: 'business.action-item-format',
    title: 'Action item format',
    prompt:
      'Write every action item as verb, object, owner, and due date (for example "Draft pricing page copy - Maria - Fri 14 Jun"). Reject or flag any action item with no owner or no date.',
    category: 'business',
  },
  {
    id: 'business.stakeholder-update',
    title: 'Stakeholder update structure',
    prompt:
      'Structure stakeholder updates as: overall status (green, amber, or red with a one-line reason), what changed since the last update, risks and asks, and the next milestone with its date. Put asks in their own section; never bury a request for help.',
    category: 'business',
  },
  {
    id: 'business.status-report',
    title: 'Status report format',
    prompt:
      'Write status reports as: accomplishments this period, plans for next period, blockers, and metrics against target. Use past tense for completed items and be explicit about anything that slipped and why.',
    category: 'business',
  },
  {
    id: 'business.escalation-note',
    title: 'Escalation note',
    prompt:
      'When escalating an issue, state in the first two lines what the problem is, what decision or help is needed, and by when. Then give the minimum context, what has already been tried, and the consequence of no action.',
    category: 'business',
  },
  {
    id: 'business.risk-register',
    title: 'Risk register',
    prompt:
      'Track risks as a register: each with a description, likelihood (1-5), impact (1-5), owner, mitigation, and the trigger that would escalate it. Sort by likelihood times impact.',
    category: 'business',
  },
  {
    id: 'business.rice-prioritization',
    title: 'RICE scoring',
    prompt:
      'When prioritizing a list of initiatives, score each with RICE: Reach (people affected per period), Impact (0.25 to 3), Confidence (percentage), and Effort (person-weeks), then rank by Reach x Impact x Confidence / Effort. Show the inputs, not just the final score.',
    category: 'business',
  },
  {
    id: 'business.moscow-scoping',
    title: 'MoSCoW scoping',
    prompt:
      "When scoping a release or project, sort requirements into Must have, Should have, Could have, and Won't have this time. Limit Must haves to items whose absence would make the release pointless, and list the Won't haves explicitly.",
    category: 'business',
  },
  {
    id: 'business.user-story-format',
    title: 'User story format',
    prompt:
      'Write requirements as user stories: "As a [role], I want [capability] so that [outcome]", followed by acceptance criteria in Given/When/Then form. Each story should be small enough to deliver independently.',
    category: 'business',
  },
  {
    id: 'business.jobs-to-be-done',
    title: 'Jobs-to-be-done framing',
    prompt:
      'Describe customer needs in Jobs-to-be-Done form: "When [situation], I want to [motivation], so I can [outcome]". Focus on the progress the customer is trying to make, not on the feature.',
    category: 'business',
  },
  {
    id: 'business.prd-outline',
    title: 'PRD outline',
    prompt:
      'When drafting a product requirements document, use: problem statement, goals and non-goals, target users, success metrics, prioritized requirements, user flows, open questions, and launch plan. State non-goals as clearly as goals.',
    category: 'business',
  },
  {
    id: 'business.roadmap-now-next-later',
    title: 'Now, next, later roadmap',
    prompt:
      'Present roadmaps as Now, Next, and Later columns organized by themes and outcomes rather than as dated feature lists. Give dates only for committed items in the Now column.',
    category: 'business',
  },
  {
    id: 'business.project-kickoff-doc',
    title: 'Project kickoff document',
    prompt:
      'When starting a project, produce a kickoff document covering: why now, scope and explicit out-of-scope, team and roles, milestones, definition of done, communication cadence, and known risks.',
    category: 'business',
  },
  {
    id: 'business.retrospective-format',
    title: 'Retrospective format',
    prompt:
      'Structure a retrospective as: what went well, what did not, what we learned, and what we will change. Convert the last section into at most three action items, each with an owner and a date.',
    category: 'business',
  },
  {
    id: 'business.weekly-plan',
    title: 'Weekly plan',
    prompt:
      'When planning a week, list at most three priority outcomes, then the tasks that serve each one, and leave visible unallocated time for interruptions. Mark anything that does not serve a priority as optional.',
    category: 'business',
  },
  {
    id: 'business.cost-estimate-ranges',
    title: 'Cost ranges with assumptions',
    prompt:
      'Give every cost or time estimate as a range with stated assumptions (for example "6-9 weeks assuming two people and no scope changes"). Never give a single point estimate without a confidence level.',
    category: 'business',
  },
  {
    id: 'business.opportunity-cost',
    title: 'Name the opportunity cost',
    prompt:
      'When recommending an initiative, state what will not get done as a result and who is affected. Every yes is a no to something else, so make the trade explicit.',
    category: 'business',
  },
  {
    id: 'business.reversible-vs-irreversible',
    title: 'Reversible vs irreversible decisions',
    prompt:
      'Classify each decision as reversible (a two-way door) or irreversible (a one-way door). Recommend deciding quickly with roughly 70% of the desired information for reversible ones and reserve deeper analysis for irreversible ones.',
    category: 'business',
  },
  {
    id: 'business.decision-log',
    title: 'Keep a decision log',
    prompt:
      'Record decisions in a log with the date, the decision, who made it, the options rejected, and the reasoning. Write each entry so someone joining in six months understands why without asking.',
    category: 'business',
  },
  {
    id: 'business.disagree-and-commit',
    title: 'Disagree and commit',
    prompt:
      'Once a decision has been made, note remaining disagreements once, clearly and briefly, then write the plan as if fully committed. Do not relitigate settled decisions in later documents.',
    category: 'business',
  },
  {
    id: 'business.tenets',
    title: 'Write tenets',
    prompt:
      'When writing a plan or strategy, include three to five tenets: principles that resolve future trade-offs without another meeting (for example "when reliability and new features conflict, reliability wins").',
    category: 'business',
  },
  {
    id: 'business.stakeholder-map',
    title: 'Map stakeholders first',
    prompt:
      'Before writing a proposal, map the stakeholders by influence and interest, note what each one cares about and their likely objection, and tailor the ask and the evidence to each.',
    category: 'business',
  },
  {
    id: 'business.assumptions-and-open-questions',
    title: 'Assumptions and open questions',
    prompt:
      'End every plan with two lists: the assumptions the plan depends on, and the open questions, each with an owner and a date for resolving it.',
    category: 'business',
  },
  {
    id: 'business.next-steps-block',
    title: 'Close with next steps',
    prompt:
      'Close every document with a "Next steps" block stating who does what by when, and what decision or input is needed from the reader.',
    category: 'business',
  },
]
