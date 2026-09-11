import type { Prompt } from '../types'

export const analysis: Prompt[] = [
  {
    id: 'analysis.frame-the-question',
    title: 'Frame the decision first',
    prompt:
      'Before analyzing, restate the decision to be made in one sentence, name the decision-maker, the deadline, and the constraints that cannot move. If the question as posed is really two decisions, split it and say so.',
    category: 'analysis',
  },
  {
    id: 'analysis.pros-and-cons',
    title: 'Pros and cons per option',
    prompt:
      'For each option, list its pros and cons as separate bullet lists, each point specific enough to be checked. Mark the single most important pro and con per option, and note which points are reversible and which are not.',
    category: 'analysis',
  },
  {
    id: 'analysis.steelman-both-sides',
    title: 'Steelman every position',
    prompt:
      'Before comparing positions, write the strongest honest case for each one as its best advocate would, including the evidence they would cite. Only after every side has been steelmanned should you weigh them.',
    category: 'analysis',
  },
  {
    id: 'analysis.surface-assumptions',
    title: 'Surface the assumptions',
    prompt:
      'List every assumption the analysis or the proposal depends on, mark each as verified, plausible, or untested, and identify the one or two assumptions that, if wrong, would flip the conclusion.',
    category: 'analysis',
  },
  {
    id: 'analysis.weighted-matrix',
    title: 'Weighted comparison matrix',
    prompt:
      'Build a comparison matrix: define four to seven criteria, assign each a weight that sums to 100, score every option on each criterion from 1 to 5 with a one-line justification, and show the weighted totals. Then state whether the ranking changes if the top weight is halved.',
    category: 'analysis',
  },
  {
    id: 'analysis.recommend-with-confidence',
    title: 'Recommend with a confidence level',
    prompt:
      'End with one clear recommendation, a confidence level (low, medium, high, or a percentage), and the single main reason for that confidence. Do not present a menu of options without saying which you would choose.',
    category: 'analysis',
  },
  {
    id: 'analysis.risks-and-mitigations',
    title: 'Risks with mitigations',
    prompt:
      'List the risks of the recommended course as a table: risk, likelihood (low, medium, high), impact (low, medium, high), an early-warning signal, and a concrete mitigation or fallback. Order by likelihood times impact.',
    category: 'analysis',
  },
  {
    id: 'analysis.five-whys',
    title: 'Root cause with 5 Whys',
    prompt:
      'Find the root cause by asking "why" in a chain of at least five steps, writing each answer as a verifiable statement. Stop when you reach a cause that is within the control of a named team or person to change, and distinguish the root cause from contributing factors.',
    category: 'analysis',
  },
  {
    id: 'analysis.consequence-mapping',
    title: 'Map downstream consequences',
    prompt:
      'For each option, map the consequences in three tiers: immediate effects, the reactions those effects trigger in other people and systems, and the effects of those reactions a year out. Highlight any second-tier effect that undoes the first-tier benefit.',
    category: 'analysis',
  },
  {
    id: 'analysis.cost-benefit',
    title: 'Quantified cost-benefit',
    prompt:
      'Produce a cost-benefit analysis with every cost and benefit expressed in the same unit (money or hours) over a stated time horizon, including one-off and recurring items and the cost of doing nothing. Show the net figure and the payback period, and label every estimate as an estimate.',
    category: 'analysis',
  },
  {
    id: 'analysis.base-rates',
    title: 'Start from base rates',
    prompt:
      'Before assessing a specific case, state the base rate: how often this kind of project, launch, or bet succeeds in general, with the source of that figure or an honest guess labeled as such. Then explain what about this case justifies moving above or below the base rate.',
    category: 'analysis',
  },
  {
    id: 'analysis.evidence-vs-opinion',
    title: 'Grade the evidence',
    prompt:
      'Label every input to the analysis by evidence type: measured data, documented fact, expert judgment, anecdote, or opinion. Weight conclusions accordingly and say explicitly which conclusions rest only on opinion or anecdote.',
    category: 'analysis',
  },
  {
    id: 'analysis.decisive-data',
    title: 'Name the decisive data',
    prompt:
      'State which specific piece of information, if obtained, would most change the recommendation, how it could be obtained, and roughly what it would cost in time or money. Say whether it is worth gathering before deciding.',
    category: 'analysis',
  },
  {
    id: 'analysis.devils-advocate',
    title: "Devil's advocate section",
    prompt:
      "Add a section titled Devil's advocate that argues against the recommendation as forcefully as possible: the strongest objection, the scenario in which the recommendation fails, and who would be hurt. Then respond to it rather than deleting it.",
    category: 'analysis',
  },
  {
    id: 'analysis.swot',
    title: 'SWOT analysis',
    prompt:
      'Run a SWOT analysis: internal Strengths and Weaknesses, external Opportunities and Threats, three to five specific items per quadrant. Finish by pairing items across quadrants into at least three strategies (for example, use strength X to capture opportunity Y).',
    category: 'analysis',
  },
  {
    id: 'analysis.pre-mortem-plan',
    title: 'Pre-mortem the plan',
    prompt:
      'Assume the plan under analysis has failed twelve months from now. Write the post-mortem headline, list the five most likely causes of failure in order, and for each give an early-warning signal and a change to the plan that would reduce it.',
    category: 'analysis',
  },
  {
    id: 'analysis.expected-value',
    title: 'Expected value under uncertainty',
    prompt:
      'When outcomes are uncertain, list the plausible outcomes for each option with a probability and a payoff, compute the expected value, and also state the worst credible outcome. Recommend based on both, and flag when a small chance of ruin should override the expected value.',
    category: 'analysis',
  },
  {
    id: 'analysis.scenarios',
    title: 'Best, base, and worst case',
    prompt:
      'Analyze under three scenarios (best, base, worst) with the key driving assumptions stated for each, the outcome of every option in each scenario, and which option is most robust across all three rather than best in one.',
    category: 'analysis',
  },
  {
    id: 'analysis.sensitivity',
    title: 'Sensitivity analysis',
    prompt:
      'Identify the three inputs the conclusion is most sensitive to, vary each by plus or minus 30 percent, and report at what value each one would change the recommendation. Call out any input where the break-even point is close to the current estimate.',
    category: 'analysis',
  },
  {
    id: 'analysis.cite-sources',
    title: 'Cite every external fact',
    prompt:
      'Attach a source to every external fact, statistic, or quotation, with enough detail to find it (publication, title, date, URL if known). Mark anything from memory that you could not verify as unverified rather than presenting it as sourced.',
    category: 'analysis',
  },
  {
    id: 'analysis.source-credibility',
    title: 'Rate source credibility',
    prompt:
      'For each source used, note its type (primary data, peer-reviewed study, official report, journalism, vendor material, blog), its date, and any conflict of interest. Discount claims that rest solely on interested parties and say so.',
    category: 'analysis',
  },
  {
    id: 'analysis.reconcile-conflicting-evidence',
    title: 'Reconcile conflicting evidence',
    prompt:
      'When sources or data points conflict, do not pick one silently. Lay the conflicting claims side by side, propose the most likely reasons for the disagreement (different definitions, periods, samples, incentives), and state which you weight more and why.',
    category: 'analysis',
  },
  {
    id: 'analysis.correlation-vs-causation',
    title: 'Correlation is not causation',
    prompt:
      'Whenever the analysis relies on a relationship between two things, state whether the evidence shows correlation or causation, propose at least one confounder or reverse-causation story, and say what would be needed to establish cause.',
    category: 'analysis',
  },
  {
    id: 'analysis.sample-and-significance',
    title: 'Check sample size and noise',
    prompt:
      'For any figure drawn from data, report the sample size and time window, and say whether the difference observed could plausibly be noise. Do not describe a change as real without a reason to believe it exceeds normal variation.',
    category: 'analysis',
  },
  {
    id: 'analysis.do-nothing-baseline',
    title: 'Include the do-nothing option',
    prompt:
      'Always include the status quo as an explicit option with its own costs, risks, and trajectory over the same horizon as the alternatives. Compare every other option against it, not against an idealized outcome.',
    category: 'analysis',
  },
  {
    id: 'analysis.opportunity-cost',
    title: 'State the opportunity cost',
    prompt:
      'For each option, state what it forecloses: the money, people, time, or attention it consumes and the best alternative use of those resources. Treat the value of the forgone alternative as a cost of the option.',
    category: 'analysis',
  },
  {
    id: 'analysis.fermi-estimate',
    title: 'Fermi estimate with ranges',
    prompt:
      'When a number is needed and no data exists, build a Fermi estimate: break the quantity into three to five factors, estimate each as a range with reasoning, multiply through, and report the result as a range with an order-of-magnitude confidence. Show the working.',
    category: 'analysis',
  },
  {
    id: 'analysis.mece-breakdown',
    title: 'MECE issue tree',
    prompt:
      'Decompose the problem into an issue tree whose branches are mutually exclusive and collectively exhaustive, two to three levels deep, so that every driver of the outcome appears exactly once. Analyze the branches that account for most of the effect first.',
    category: 'analysis',
  },
  {
    id: 'analysis.inversion',
    title: 'Invert the problem',
    prompt:
      'Approach the goal by inversion: list everything that would guarantee failure or make the outcome worse, then check each option against that list. Recommend removing the biggest obstacles before adding new initiatives.',
    category: 'analysis',
  },
  {
    id: 'analysis.stakeholders-and-incentives',
    title: 'Map stakeholders and incentives',
    prompt:
      'List every stakeholder affected by the decision, what each one gains or loses under each option, and how each is likely to react. Flag where the incentives of the people supplying the information differ from those of the decision-maker.',
    category: 'analysis',
  },
  {
    id: 'analysis.kill-criteria',
    title: 'Define kill criteria',
    prompt:
      'For the recommended option, define in advance the measurable conditions and the date at which it should be stopped or reversed, so the decision can be revisited on evidence rather than on sunk cost.',
    category: 'analysis',
  },
  {
    id: 'analysis.total-cost-of-ownership',
    title: 'Total cost of ownership',
    prompt:
      'Include the full lifecycle cost of each option over a stated period: acquisition, implementation, training, maintenance, support, switching costs, and the cost of exiting later. Call out costs that are usually hidden in the headline price.',
    category: 'analysis',
  },
  {
    id: 'analysis.time-horizon',
    title: 'State the time horizon',
    prompt:
      'Declare the time horizon of the analysis up front and note where the recommendation would differ over a shorter or longer one. Do not compare a one-year cost against a five-year benefit without saying so.',
    category: 'analysis',
  },
  {
    id: 'analysis.survivorship-and-selection',
    title: 'Check for selection bias',
    prompt:
      'Before drawing lessons from examples or case studies, ask who is missing from the sample: failures that were never recorded, customers who left, projects that were cancelled. State how survivorship or selection bias could distort the conclusion.',
    category: 'analysis',
  },
  {
    id: 'analysis.recommendation-memo',
    title: 'Recommendation memo format',
    prompt:
      'Deliver the analysis as a recommendation memo with these headings: Recommendation, Context, Options considered, Evaluation, Risks, Open questions, and Next steps. Keep the Recommendation section to three sentences.',
    category: 'analysis',
  },
  {
    id: 'analysis.impact-effort',
    title: 'Impact versus effort',
    prompt:
      'Place each option on an impact-versus-effort grid, scoring both on a 1 to 5 scale with a one-line justification, and identify the quick wins (high impact, low effort) and the items that should be dropped (low impact, high effort).',
    category: 'analysis',
  },
]
