import type { Prompt } from '../types'

export const data: Prompt[] = [
  {
    id: 'data.ctes-over-nesting',
    title: 'CTE chain, not nesting',
    prompt:
      'Write analytics SQL as a chain of named CTEs that each do one thing (import source, filter, join, aggregate) and end with a short final select. Name CTEs by their content (active_users, orders_per_day), never step1 or tmp, and avoid subqueries nested more than one level deep.',
    category: 'data',
  },
  {
    id: 'data.explicit-column-lists',
    title: 'Explicit columns in models',
    prompt:
      'List columns explicitly in every scheduled model and pipeline query instead of SELECT *, so an upstream column addition, reorder, or rename fails loudly at build time instead of silently changing downstream tables and their schemas.',
    category: 'data',
  },
  {
    id: 'data.window-functions',
    title: 'Window functions for dedup',
    prompt:
      'Use window functions (row_number, lag, lead, sum over) for running totals, deduplication, and latest-record-per-group instead of self-joins or correlated subqueries. Deduplicate with row_number() over (partition by key order by updated_at desc, id) = 1 and always state a deterministic tiebreaker.',
    category: 'data',
  },
  {
    id: 'data.sql-style',
    title: 'Analytics SQL style',
    prompt:
      'Lowercase keywords, snake_case identifiers, one column per line, explicit join types with every join condition in the on clause, as for every alias, and every column qualified with a short table alias whenever more than one table is in scope. Match the comma placement the project already uses.',
    category: 'data',
  },
  {
    id: 'data.no-distinct-to-hide-fanout',
    title: 'Never DISTINCT away duplicates',
    prompt:
      'Never add DISTINCT or group by to remove duplicate rows produced by a join. Find the fan-out cause (a non-unique key on the joined side), fix the join or pre-aggregate the joined table to the right grain, and add a uniqueness test so it cannot recur.',
    category: 'data',
  },
  {
    id: 'data.dbt-layering',
    title: 'Staging, intermediate, marts',
    prompt:
      'Structure transformations in layers: staging models (one per source table, prefixed stg_: rename, cast, light cleaning, no joins), intermediate models (int_: joins, pivots, grain changes), and marts (business entities and metrics ready for BI). Marts never read raw sources directly, and only staging models select from sources.',
    category: 'data',
  },
  {
    id: 'data.declare-the-grain',
    title: 'Declare and test the grain',
    prompt:
      'State the grain of every model in its description (one row per order, one row per user per day) and enforce it with a uniqueness test on the grain key. Any CTE or model that changes grain gets its own name and its own test.',
    category: 'data',
  },
  {
    id: 'data.idempotent-incremental',
    title: 'Idempotent incremental runs',
    prompt:
      'Make every pipeline run idempotent: rerunning for the same period produces identical output. Implement incrementals as delete-then-insert or merge on the partition or key, never append-only, and support a full-refresh flag that rebuilds from scratch.',
    category: 'data',
  },
  {
    id: 'data.partition-and-prune',
    title: 'Partition and always prune',
    prompt:
      'Partition large tables by the column most queries filter on (usually event date) and cluster or sort by the most selective join or filter keys. Every query against a partitioned table filters on the partition column with a literal or parameter so the engine can prune.',
    category: 'data',
  },
  {
    id: 'data.quality-tests-every-model',
    title: 'Tests on every model',
    prompt:
      'Add tests to every model: not_null and unique on the primary key, accepted_values on categorical columns, relationships (referential integrity) to dimension tables, and freshness on sources. Fail the run on primary-key test failures and warn on the rest.',
    category: 'data',
  },
  {
    id: 'data.freshness-expectations',
    title: 'Freshness expectations',
    prompt:
      'Define an expected freshness for every source and mart (for example loaded within 2 hours after 00:00 UTC), check it before downstream models run, and surface staleness in the dashboard rather than silently displaying yesterday as today.',
    category: 'data',
  },
  {
    id: 'data.inline-assertions',
    title: 'Assert before writing output',
    prompt:
      'Add inline assertions in pipeline code (row count above zero and within an expected range of the previous run, no future dates, numeric ranges, control totals that match the source) using Great Expectations, pandera, dbt tests, or plain asserts, and fail loudly instead of writing suspicious output.',
    category: 'data',
  },
  {
    id: 'data.schema-contracts',
    title: 'Model schemas are contracts',
    prompt:
      'Declare column names and types for every mart and enforce them at build time. Treat removing, renaming, or retyping a column as a breaking change that requires a versioned model or a deprecation window for consumers, while adding columns is always allowed.',
    category: 'data',
  },
  {
    id: 'data.source-schema-drift',
    title: 'Expect source schema drift',
    prompt:
      'Read new source columns additively and quarantine rows that fail type coercion into a rejects table with the reason and load time, rather than failing the whole load or silently coercing to null. Alert when the rejects table grows.',
    category: 'data',
  },
  {
    id: 'data.late-arriving-data',
    title: 'Handle late-arriving data',
    prompt:
      'Design for late and updated records: reprocess a lookback window (for example the last 3 days) on every run, key on event time rather than load time, and store both event_ts and ingested_at so lag and backfills can be measured.',
    category: 'data',
  },
  {
    id: 'data.backfills-as-code',
    title: 'Backfills through the same code',
    prompt:
      'Run backfills as parameterized, bounded jobs over a partition range using the same code path as the scheduled run, never a one-off script. Compare row counts and key metrics against the previous version before swapping tables or partitions into place.',
    category: 'data',
  },
  {
    id: 'data.utc-and-reporting-timezone',
    title: 'UTC storage, explicit reporting zone',
    prompt:
      'Keep all pipeline timestamps in UTC with timezone-aware types and suffix columns with their meaning (event_ts_utc, event_date_utc). Convert to the reporting timezone with an explicit zone argument only in the final layer, and truncate to day only after that conversion so daily counts do not shift at midnight.',
    category: 'data',
  },
  {
    id: 'data.validate-every-join',
    title: 'Validate every join',
    prompt:
      'After every join, check the row count against expectation (a left join must not increase rows), verify the join key is unique on the dimension side, and check for null keys that silently drop rows in inner joins. Put the check in a test or a notebook assertion, not in your head.',
    category: 'data',
  },
  {
    id: 'data.null-semantics',
    title: 'Deliberate null handling',
    prompt:
      'Handle nulls deliberately: know that count(*) and count(col) differ, that where col != value excludes nulls, and that null = null is not true; use is distinct from for null-safe comparison and coalesce only with a documented default. Never let nulls silently vanish from a filter or aggregate.',
    category: 'data',
  },
  {
    id: 'data.single-metric-definition',
    title: 'One definition per metric',
    prompt:
      'Define each business metric once, in a metrics layer or a single mart, with its formula, filters, grain, and owner documented, and have every dashboard and report read that definition. Two dashboards must never compute active users or revenue differently.',
    category: 'data',
  },
  {
    id: 'data.document-for-lineage',
    title: 'Describe models and columns',
    prompt:
      'Give every model a description and every non-obvious column a description including unit and source, and reference upstream models through ref() or the equivalent so lineage can be generated automatically. Treat undocumented columns in a mart as a failing check.',
    category: 'data',
  },
  {
    id: 'data.restart-and-run-all',
    title: 'Restart kernel and run all',
    prompt:
      'A notebook must run top to bottom after "Restart kernel and run all" before it is shared or committed: no dependence on execution order, deleted cells, or variables that only exist in memory. Strip outputs with a pre-commit hook unless the outputs are the deliverable.',
    category: 'data',
  },
  {
    id: 'data.pin-environment-and-snapshot',
    title: 'Pin environment and data snapshot',
    prompt:
      'Pin the analysis environment (lockfile or environment file plus the Python version) and record the data snapshot date or the exact query and run timestamp in the notebook so the result can be regenerated a year later.',
    category: 'data',
  },
  {
    id: 'data.notebook-logic-to-modules',
    title: 'Reusable code leaves the notebook',
    prompt:
      'Move any function used in more than one cell or more than one notebook into a versioned Python module with tests and import it. Keep notebooks for narrative, exploration, and plots, not for library code.',
    category: 'data',
  },
  {
    id: 'data.explicit-random-seeds',
    title: 'Explicit random seeds',
    prompt:
      'Pass an explicit seed to every sampling, shuffling, train-test split, and simulation call and record it in the output, rather than relying on global random state, so results are reproducible run to run.',
    category: 'data',
  },
  {
    id: 'data.pandas-vectorize',
    title: 'Vectorize, never iterrows',
    prompt:
      'Never loop over rows with iterrows, itertuples, or apply(axis=1) for computation; use vectorized column operations, numpy functions, or groupby with transform or agg. If apply is truly unavoidable, leave a comment saying why vectorization did not work.',
    category: 'data',
  },
  {
    id: 'data.no-chained-indexing',
    title: 'Single .loc, no chained indexing',
    prompt:
      'Select and assign with one .loc[rows, cols] call instead of chained indexing like df[df.a > 1]["b"] = x, which raises SettingWithCopyWarning and may silently not assign. Enable copy-on-write (pd.options.mode.copy_on_write = True) so every derived frame is an independent copy.',
    category: 'data',
  },
  {
    id: 'data.dtype-awareness',
    title: 'Explicit dtypes on load',
    prompt:
      'Set dtypes explicitly when loading (parse_dates, dtype mappings, category for low-cardinality strings, nullable Int64, boolean, and string), then inspect df.dtypes and memory_usage(deep=True). Never let an id column become float because of missing values or a zip code lose its leading zeros.',
    category: 'data',
  },
  {
    id: 'data.method-chaining',
    title: 'Method-chain transformations',
    prompt:
      'Write a dataframe transformation as one method chain inside parentheses with .assign, .query, .rename, .pipe, and .loc, one method per line, so intermediate state is not scattered across df2, df_tmp, and df_final variables and the chain reads top to bottom.',
    category: 'data',
  },
  {
    id: 'data.polars-duckdb-when-large',
    title: 'Polars or DuckDB when large',
    prompt:
      'When a dataset exceeds a few gigabytes or a pandas step takes minutes, switch to Polars (lazy API) or DuckDB reading Parquet directly instead of upsizing the machine. Keep pandas for small-data exploration and plotting.',
    category: 'data',
  },
  {
    id: 'data.parquet-not-csv',
    title: 'Parquet for handoffs',
    prompt:
      'Persist intermediate and shared datasets as Parquet (columnar, typed, compressed, partitionable) rather than CSV. Use CSV only for human export, never as a pipeline handoff, because it loses types, timezones, and nullability.',
    category: 'data',
  },
  {
    id: 'data.develop-on-a-sample',
    title: 'Develop on a sample',
    prompt:
      'Develop and test pipelines and notebooks against a deterministic sample or a single partition (a short date range or hash-mod of the key), and run against the full data once at the end. Never iterate on a full warehouse scan.',
    category: 'data',
  },
  {
    id: 'data.warehouse-cost-awareness',
    title: 'Check bytes scanned first',
    prompt:
      'Before running a warehouse query, check the estimated bytes scanned with a dry run or explain, filter on partition columns, select only needed columns, avoid order by on unbounded results, and materialize CTEs that are reused by several models. State the expected cost of new scheduled models in the pull request.',
    category: 'data',
  },
  {
    id: 'data.pii-out-of-analytics',
    title: 'PII out of analytics layers',
    prompt:
      'Hash or tokenize personal identifiers in staging, drop or mask free-text fields that may contain personal data, aggregate to a minimum group size before sharing results, and tag remaining PII columns in the schema so column-level access policies apply.',
    category: 'data',
  },
  {
    id: 'data.tidy-data',
    title: 'Tidy data shape',
    prompt:
      'Shape data for analysis as tidy tables: one variable per column, one observation per row, one type of observational unit per table. Keep long format through the pipeline and pivot to wide only for the final table or plot.',
    category: 'data',
  },
  {
    id: 'data.transformations-in-git',
    title: 'All transformation logic in git',
    prompt:
      'Every transformation query and pipeline step lives in version control and goes through review. No business logic in BI-tool custom SQL, saved warehouse queries, or spreadsheet formulas that exist only in a UI.',
    category: 'data',
  },
]
