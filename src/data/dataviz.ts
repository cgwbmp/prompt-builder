import type { Prompt } from '../types'

export const dataviz: Prompt[] = [
  {
    id: 'dataviz.chart-by-question',
    title: 'Chart type by question',
    prompt:
      'Choose the chart from the question being answered, following the Financial Times Visual Vocabulary: bars for comparing categories, lines for change over time, histograms or box plots for distribution, stacked bars or treemaps for part-to-whole, scatter plots for relationships. State the question before choosing.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.horizontal-bars-for-categories',
    title: 'Horizontal bars for categories',
    prompt:
      'Use horizontal bars when comparing named categories, especially with long labels or more than about seven items, so labels read left to right without rotation. Never draw categories as a line chart.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.lines-for-time',
    title: 'Lines for continuous time',
    prompt:
      'Use a line for continuous time series and bars only for discrete periods where each total matters. Do not connect across missing data; leave a visible gap and note it.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.limit-pie-charts',
    title: 'Pies for three slices max',
    prompt:
      'Use a pie or donut only for a part-to-whole with two or three clearly different slices. Beyond that, or when slices are close in size, use a sorted bar chart instead.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.no-3d-effects',
    title: 'No 3D or decoration',
    prompt:
      'Never use 3D perspective, shadows, bevels, gradients, or exploded segments on charts; they distort perceived values and add no information.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.avoid-dual-axes',
    title: 'Avoid dual y-axes',
    prompt:
      'Do not plot two series on separate y-axes; the crossing point is arbitrary and implies a relationship. Use two stacked panels with a shared x-axis, or index both series to 100 at the start. If a dual axis is unavoidable, color each axis to match its series and say so in the subtitle.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.zero-baseline-bars',
    title: 'Bars start at zero',
    prompt:
      'Start the value axis of every bar and area chart at zero because length encodes the value. Lines may use a non-zero baseline when the variation matters, but then label the axis clearly and never hide the fact.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.honest-axes',
    title: 'Honest axes and windows',
    prompt:
      'Do not break axes, use uneven tick intervals, cherry-pick a time window, or scale two comparable charts differently. When a non-zero baseline, log scale, or shortened range is used, add a note on the chart explaining it.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.sort-bars-by-value',
    title: 'Sort bars by value',
    prompt:
      'Sort categorical bars by value, largest first, unless the categories have an inherent order such as time, age bands, or a Likert scale. Alphabetical order is almost never the right default.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.direct-labels',
    title: 'Direct labels over legends',
    prompt:
      'Label series directly at the end of each line or next to each bar instead of a separate legend. If a legend is unavoidable, order it to match the visual order of the series and place it close to the data.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.small-multiples',
    title: 'Small multiples over spaghetti',
    prompt:
      'When more than four or five series share a chart, split them into small multiples with identical scales and one panel per series instead of a tangled multi-line chart. Optionally show the other series in faint gray in each panel for context.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.annotate-takeaway',
    title: 'Annotate the takeaway',
    prompt:
      'Place an annotation on the chart at the point that matters (a launch date, a peak, an outlier) with a short note explaining it, so the reader sees the insight without hunting for it.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.title-states-insight',
    title: 'Title states the insight',
    prompt:
      'Write the chart title as the finding in one sentence ("Churn halved after the onboarding redesign") and put the neutral description of the data ("Monthly churn rate, Jan to Dec 2025") in the subtitle.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.units-and-source',
    title: 'Units and source always',
    prompt:
      'Show units on the axis title or the first tick label (%, USD, ms, per 1,000) and put the data source and as-of date in a caption under the chart.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.consistent-series-colors',
    title: 'Same entity, same color',
    prompt:
      'Assign each entity or category a fixed color and reuse it in every chart of the report or dashboard. Never let the library assign colors by series order, which changes when data changes.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.categorical-palette-limit',
    title: 'Cap categorical colors at 8',
    prompt:
      'Limit categorical color to six to eight distinguishable hues. Group the long tail into Other, or switch to small multiples or direct labels, rather than adding more colors.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.sequential-for-ordered',
    title: 'Sequential scale for ordered data',
    prompt:
      'Encode ordered or quantitative data with a perceptually uniform sequential palette (Viridis, cividis, or a single-hue ColorBrewer ramp). Never use rainbow or jet scales, which invent boundaries and are unreadable to color-blind viewers.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.diverging-with-midpoint',
    title: 'Diverging only around a midpoint',
    prompt:
      'Use a diverging palette only when the data has a meaningful midpoint such as zero, a target, or the average, center the scale exactly on it, and keep both extents symmetric so equal distances read as equal.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.colorblind-safe',
    title: 'Color-blind safe encoding',
    prompt:
      'Use a color-blind safe palette (Okabe-Ito, Paul Tol, Viridis) and never rely on red versus green alone. Double-encode meaning with shape, line style, pattern, or direct labels, and check the chart in a deuteranopia simulator.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.gray-context-one-focus',
    title: 'Gray context, one focus color',
    prompt:
      'Draw context series, comparison groups, and benchmarks in gray and reserve a single saturated color for the series or bar that the chart is about.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.light-gridlines',
    title: 'Light gridlines, few ticks',
    prompt:
      'Use thin light-gray gridlines only where they help read values, remove the top and right axis lines and the chart border, keep four to six ticks per axis, and drop tick marks when labels alone suffice.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.remove-chart-junk',
    title: 'Remove chart junk',
    prompt:
      'Maximize the data-ink ratio: remove backgrounds, borders, redundant legends, decorative icons, heavy axis lines, and value labels on every point when the axis already gives the value. Anything that does not carry data should be lighter or gone.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.tables-for-exact-values',
    title: 'Tables for exact values',
    prompt:
      'Use a table when readers need exact values or to look up individual rows, and a chart when the pattern matters. Do not do both at once by labeling every bar with its value and also drawing a value axis.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.number-formatting',
    title: 'Round and abbreviate numbers',
    prompt:
      'Round displayed numbers to the precision the decision needs, usually two or three significant figures, abbreviate large values (1.2M, 34k), format with the locale, and right-align and decimal-align numeric columns in tables.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.log-scale-labeled',
    title: 'Log scales are labeled',
    prompt:
      'Use a log scale only for multiplicative growth or data spanning several orders of magnitude, label the axis "log scale", and place ticks at powers of ten or a 1-2-5 sequence so readers can still read values.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.show-uncertainty',
    title: 'Show uncertainty explicitly',
    prompt:
      'When estimates carry uncertainty, show it with error bars, confidence bands, or ranges and state what they represent (95% CI, min to max, plus or minus one SD). Do not present forecasts or samples as exact lines.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.no-smoothing',
    title: 'Do not smooth data lines',
    prompt:
      'Draw lines with straight segments between actual data points. Do not apply spline smoothing or curve interpolation, which invents values between measurements, unless the data is genuinely continuous and densely sampled.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.aspect-ratio-slopes',
    title: 'Aspect ratio for slopes',
    prompt:
      'Size line charts so the typical slope is near 45 degrees (banking to 45); tall narrow charts exaggerate change and wide flat ones hide it. Keep the same aspect ratio for charts meant to be compared.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.stacked-bar-rules',
    title: 'Stacked bars with care',
    prompt:
      'Use stacked bars only for part-to-whole with a few segments, put the most important segment on the baseline where it can be read accurately, use 100% stacking to compare shares, and switch to grouped bars or small multiples when individual segments must be compared.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.scatter-rules',
    title: 'Scatter plot conventions',
    prompt:
      'For relationships use a scatter plot with the explanatory variable on x, add a trend line only when the relationship is roughly linear and say what it is, label notable outliers, and encode any third variable through bubble area (not radius) or color, never both.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.time-axis-conventions',
    title: 'Time axis conventions',
    prompt:
      'Keep time intervals evenly spaced and consistent, label with the smallest unit needed (years only, or month and year), align data to period boundaries, and shade or mark a partial current period so it is not read as a drop.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.maps-for-rates',
    title: 'Maps only for rates',
    prompt:
      'Use a choropleth map only for rates or densities, never raw counts, which just mirror population. If geography is not central to the insight, use a sorted bar chart instead of a map.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.responsive-charts',
    title: 'Responsive, not shrunken',
    prompt:
      'Adapt charts to viewport width: fewer ticks, shorter or wrapped labels, horizontal bars instead of vertical, and legends moving below the plot. Never scale a desktop chart down as an image on mobile.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.accessible-charts',
    title: 'Accessible charts',
    prompt:
      'Give every chart a text alternative that states the takeaway and the key numbers, offer the underlying data as a table or download, ensure at least 3:1 contrast between adjacent data colors and the background, and make interactive points reachable by keyboard.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.tooltip-precision',
    title: 'Full precision in tooltips',
    prompt:
      'Round on axes and labels but show full precision with units in tooltips, along with the series name and the exact category or date. On multi-series charts, show all series for the hovered x value in one tooltip.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.sparklines-for-dashboards',
    title: 'Sparklines beside numbers',
    prompt:
      'On dashboards place a small axis-free sparkline next to each key number to show its recent trend, marking only the last point and optionally the min and max. Do not add gridlines, labels, or legends to a sparkline.',
    category: 'dataviz',
  },
  {
    id: 'dataviz.kpi-tiles',
    title: 'KPI tiles with comparison',
    prompt:
      'Design each KPI tile to show the current value, the period it covers, and a comparison with direction and delta against the previous period or target. Color the delta by whether the change is good or bad for the business, not by whether it is positive or negative.',
    category: 'dataviz',
  },
]
