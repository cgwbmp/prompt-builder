import type { Prompt } from '../types'

export const database: Prompt[] = [
  {
    id: 'database.normalize-by-default',
    title: 'Normalize by default',
    prompt:
      'Design schemas to third normal form by default: one fact in one place, no repeating groups, no columns that depend on non-key columns. Denormalize only for a measured read-path problem, and document the invariant that keeps the copies in sync.',
    category: 'database',
  },
  {
    id: 'database.snake-case-lowercase',
    title: 'Lowercase snake_case names',
    prompt:
      'Name all tables, columns, indexes, and constraints in lowercase snake_case so identifiers never need quoting. Never use SQL reserved words like `user`, `order`, or `group` as object names.',
    category: 'database',
  },
  {
    id: 'database.naming-scheme',
    title: 'Consistent naming scheme',
    prompt:
      'Use plural table names, singular column names, `<table_singular>_id` for foreign keys, `<table>_<column>_idx` for indexes, and `<table>_<column>_fkey` / `_key` / `_check` for constraints. Follow whatever the existing schema already does if it differs; never mix schemes in one database.',
    category: 'database',
  },
  {
    id: 'database.every-table-primary-key',
    title: 'Primary key on every table',
    prompt:
      'Give every table an explicit primary key, including join tables (use a composite key over the two foreign keys). Never create a heap table with no key.',
    category: 'database',
  },
  {
    id: 'database.pk-choice',
    title: 'Choose the key type deliberately',
    prompt:
      'Use `bigint` identity columns for primary keys unless ids must be generated client-side or must not reveal row counts, in which case use UUIDv7 (time-ordered) rather than random UUIDv4 to avoid index fragmentation. Never use `int` for a key that could plausibly exceed two billion rows.',
    category: 'database',
  },
  {
    id: 'database.identity-not-serial',
    title: 'Identity columns over serial',
    prompt:
      'On PostgreSQL 10+, declare auto-increment keys as `bigint GENERATED ALWAYS AS IDENTITY` instead of `serial`; identity columns are standard SQL and avoid the separate sequence-ownership and permission problems of `serial`.',
    category: 'database',
  },
  {
    id: 'database.timestamptz',
    title: 'timestamptz, never timestamp',
    prompt:
      'Store every point in time as `timestamptz`, never `timestamp without time zone`, and never rely on a convention that a plain timestamp is UTC. Use `date` for calendar dates and avoid `timetz` entirely.',
    category: 'database',
  },
  {
    id: 'database.text-not-varchar-n',
    title: 'text over varchar(n) and char(n)',
    prompt:
      'Use `text` for string columns instead of `varchar(n)` or `char(n)`; arbitrary length limits become production errors later and `char(n)` silently pads with spaces. When a length limit is a real business rule, enforce it with a CHECK constraint so it is explicit and changeable.',
    category: 'database',
  },
  {
    id: 'database.numeric-for-money',
    title: 'numeric for money',
    prompt:
      'Store monetary and other exact decimal values as `numeric(precision, scale)` or as integer minor units (cents). Never use `float`, `real`, `double precision`, or the `money` type for amounts.',
    category: 'database',
  },
  {
    id: 'database.audit-timestamps',
    title: 'created_at and updated_at',
    prompt:
      'Add `created_at timestamptz NOT NULL DEFAULT now()` and `updated_at timestamptz NOT NULL DEFAULT now()` to every business table, and keep `updated_at` current via a trigger or the ORM hook rather than trusting each caller to set it.',
    category: 'database',
  },
  {
    id: 'database.not-null-default',
    title: 'NOT NULL by default',
    prompt:
      'Declare columns NOT NULL unless absence is a meaningful state you intend to query for. Every nullable column should have a comment or name that says what NULL means.',
    category: 'database',
  },
  {
    id: 'database.constraints-in-db',
    title: 'Enforce constraints in the database',
    prompt:
      'Put integrity rules in the schema, not only in application code: foreign keys with explicit ON DELETE behavior, UNIQUE constraints for natural keys, CHECK constraints for enumerations and ranges. Application validation is a UX layer; the database is the last line of defense against concurrent writers and other clients.',
    category: 'database',
  },
  {
    id: 'database.on-delete-explicit',
    title: 'Explicit ON DELETE behavior',
    prompt:
      'Specify ON DELETE for every foreign key explicitly (RESTRICT, CASCADE, or SET NULL) and justify CASCADE in a comment; a cascade that silently wipes child rows is a common data-loss bug.',
    category: 'database',
  },
  {
    id: 'database.enums-as-check-or-lookup',
    title: 'Enums via CHECK or lookup',
    prompt:
      'Model closed sets of values as a `text` column with a CHECK constraint or as a small lookup table with a foreign key, not as a native ENUM type; native enums are painful to reorder or remove values from in a migration.',
    category: 'database',
  },
  {
    id: 'database.no-eav',
    title: 'No entity-attribute-value tables',
    prompt:
      'Do not model flexible attributes as key/value rows (entity-attribute-value). Use real columns for known attributes and a single `jsonb` column with a documented shape for truly dynamic data, and index its queried keys with a GIN or expression index.',
    category: 'database',
  },
  {
    id: 'database.index-for-query-patterns',
    title: 'Index for actual query patterns',
    prompt:
      'Add indexes based on the WHERE, JOIN, and ORDER BY clauses of real queries, not speculatively. Put equality columns first and range or sort columns last in composite indexes, and remember a composite index on (a, b) already covers queries on a alone.',
    category: 'database',
  },
  {
    id: 'database.index-foreign-keys',
    title: 'Index every foreign key',
    prompt:
      'Create an index on every foreign key column; without one, joins to the parent and cascading deletes from the parent degrade to sequential scans of the child table.',
    category: 'database',
  },
  {
    id: 'database.partial-covering-indexes',
    title: 'Partial and covering indexes',
    prompt:
      "When a query always filters on a fixed predicate (such as `WHERE deleted_at IS NULL` or `status = 'pending'`), use a partial index on that predicate, and add INCLUDE columns so hot read paths can be served from the index alone.",
    category: 'database',
  },
  {
    id: 'database.explain-before-optimizing',
    title: 'EXPLAIN ANALYZE before optimizing',
    prompt:
      'Run `EXPLAIN (ANALYZE, BUFFERS)` on the actual query with production-like data before changing it or adding an index, and quote the plan nodes that show the problem (sequential scan, nested loop on large rows, row estimate far from actual). Re-run after the change to confirm the plan improved.',
    category: 'database',
  },
  {
    id: 'database.avoid-n-plus-one',
    title: 'Avoid N+1 queries',
    prompt:
      'Never issue one query per row of a parent result. Load related rows with a JOIN, a single `WHERE id IN (...)` batch, or the ORM eager-loading facility (`include`, `select_related`, `prefetch_related`, `joinedload`), and check the query log to verify the request executes a constant number of queries.',
    category: 'database',
  },
  {
    id: 'database.select-explicit-columns',
    title: 'Select explicit columns',
    prompt:
      'List the columns a query needs instead of `SELECT *`, so that added columns do not silently widen result sets, break positional mappings, or prevent index-only scans.',
    category: 'database',
  },
  {
    id: 'database.not-exists-over-not-in',
    title: 'NOT EXISTS over NOT IN',
    prompt:
      'Write anti-joins with `NOT EXISTS (SELECT 1 ...)` rather than `NOT IN (SELECT ...)`; a single NULL in the subquery makes `NOT IN` return no rows, and the planner optimizes NOT EXISTS far better.',
    category: 'database',
  },
  {
    id: 'database.half-open-ranges',
    title: 'Half-open time ranges',
    prompt:
      'Filter timestamps with `>= start AND < end` rather than BETWEEN, which includes both endpoints and double-counts rows on the boundary.',
    category: 'database',
  },
  {
    id: 'database.sargable-predicates',
    title: 'Keep predicates index-friendly',
    prompt:
      'Do not wrap indexed columns in functions or casts in WHERE clauses (`WHERE lower(email) = ...`, `WHERE created_at::date = ...`); rewrite the predicate against the raw column or create a matching expression index.',
    category: 'database',
  },
  {
    id: 'database.parameterized-queries',
    title: 'Bind values, whitelist identifiers',
    prompt:
      'Pass every user-supplied value as a bound parameter; never interpolate values into SQL strings, including in ORDER BY or LIMIT. If an identifier must be dynamic, whitelist it against a fixed list of allowed names.',
    category: 'database',
  },
  {
    id: 'database.transaction-scope',
    title: 'Keep transactions short',
    prompt:
      'Open a transaction as late as possible and commit as early as possible. Never hold a transaction open across network calls, user input, or long computations, and never begin one without a clear path to commit or rollback on every branch including exceptions.',
    category: 'database',
  },
  {
    id: 'database.consistent-lock-order',
    title: 'Consistent lock ordering',
    prompt:
      'When a transaction updates multiple rows or tables, acquire them in a fixed, documented order (for example ascending primary key) so concurrent transactions cannot deadlock. Use `SELECT ... FOR UPDATE` or `FOR UPDATE SKIP LOCKED` explicitly for work-queue patterns.',
    category: 'database',
  },
  {
    id: 'database.upsert-and-conflicts',
    title: 'Handle races with constraints',
    prompt:
      'Never implement check-then-insert in application code; use `INSERT ... ON CONFLICT` or rely on a UNIQUE constraint and handle the violation, because two concurrent requests will both pass the check.',
    category: 'database',
  },
  {
    id: 'database.migrations-small-reversible',
    title: 'Small, reversible migrations',
    prompt:
      'Write one schema change per migration with an explicit `down` step, and keep it independent of application code that has not shipped yet. A migration that adds a column and backfills millions of rows and adds an index is three migrations.',
    category: 'database',
  },
  {
    id: 'database.expand-contract',
    title: 'Three-deploy schema changes',
    prompt:
      'Make breaking schema changes in three deploys: add the new column or table (expand), dual-write and backfill while both old and new code work, then drop the old structure (contract) only after the code reading it is gone. Never rename or drop a column in the same deploy that stops using it.',
    category: 'database',
  },
  {
    id: 'database.no-destructive-without-plan',
    title: 'Destructive migrations need a plan',
    prompt:
      'Do not write a migration that drops a table or column, truncates data, or changes a type lossily unless the request includes a backfill and rollback plan. Flag the migration as destructive in its name and comment, and confirm a recent backup exists.',
    category: 'database',
  },
  {
    id: 'database.zero-downtime-ddl',
    title: 'Non-blocking DDL',
    prompt:
      'Build indexes with `CREATE INDEX CONCURRENTLY`, add CHECK and foreign key constraints as `NOT VALID` first and `VALIDATE CONSTRAINT` in a second step (use a validated `CHECK (col IS NOT NULL)` before `SET NOT NULL` so PostgreSQL 12+ skips the full scan), and add new columns without a volatile default so large tables are not rewritten or locked during deploy. Set a `lock_timeout` in migrations so they fail fast instead of queueing behind long transactions.',
    category: 'database',
  },
  {
    id: 'database.backfill-in-batches',
    title: 'Backfill in batches',
    prompt:
      'Backfill or bulk-update large tables in batches of a few thousand rows keyed by primary key, committing between batches and pausing on replication lag, instead of one UPDATE that locks the table and bloats the WAL.',
    category: 'database',
  },
  {
    id: 'database.soft-delete-tradeoffs',
    title: 'Soft deletes deliberately',
    prompt:
      'If soft deletes are used (`deleted_at timestamptz NULL`), apply the `deleted_at IS NULL` filter through a single view, default scope, or query helper rather than in every query, make UNIQUE constraints partial on live rows, and state whether foreign keys to a soft-deleted row are allowed. Prefer hard deletes with an audit table when no one needs to undelete.',
    category: 'database',
  },
  {
    id: 'database.connection-pooling',
    title: 'Pool connections',
    prompt:
      'Use a connection pool sized to the database, not the number of app instances (a good starting point is `2 * cpu_cores` on the database server, shared across all clients). Never open a connection per request, and always return connections in a finally block.',
    category: 'database',
  },
  {
    id: 'database.orm-vs-raw-sql',
    title: 'ORM for CRUD, SQL beyond',
    prompt:
      'Use the ORM for straightforward CRUD and relationships, and drop to hand-written parameterized SQL for reporting, aggregations, window functions, bulk operations, and any query where you need to control the plan. Always inspect the SQL an ORM generates for a hot path.',
    category: 'database',
  },
  {
    id: 'database.no-business-logic-in-db',
    title: 'Minimal logic in the database',
    prompt:
      'Keep business logic in application code; use triggers and stored procedures only for integrity tasks that must hold for every client (maintaining `updated_at`, audit rows, denormalized counters). Do not use PostgreSQL RULES or table inheritance at all.',
    category: 'database',
  },
  {
    id: 'database.jsonb-restraint',
    title: 'jsonb with restraint',
    prompt:
      'Use a `jsonb` column only for genuinely schemaless or externally-defined data. Any key that is filtered, joined, or required belongs in a real column with a type and constraint.',
    category: 'database',
  },
]
