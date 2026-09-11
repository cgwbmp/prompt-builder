import type { Prompt } from '../types'

export const security: Prompt[] = [
  {
    id: 'security.threat-model-the-change',
    title: 'Threat model the change',
    prompt:
      'Before implementing, briefly threat model the change: which new inputs, trust boundaries, privileges, and data flows does it introduce, and who could abuse them? State the risks and how the design mitigates each one.',
    category: 'security',
  },
  {
    id: 'security.owasp-top-10-check',
    title: 'Check against OWASP Top 10',
    prompt:
      'Check code you write against the OWASP Top 10 (Broken Access Control, Security Misconfiguration, Software Supply Chain Failures, Injection, Cryptographic Failures, Mishandling of Exceptional Conditions, among others) and name which categories the change touches and how each is addressed.',
    category: 'security',
  },
  {
    id: 'security.server-side-allowlist-validation',
    title: 'Server-side allowlist validation',
    prompt:
      'Validate every input on the server against an allowlist (expected type, length, range, format, enumeration) and reject anything else with a clear error. Client-side validation is a usability aid, never a security control.',
    category: 'security',
  },
  {
    id: 'security.parameterized-queries',
    title: 'Parameterized queries only',
    prompt:
      'Use parameterized queries or prepared statements for every database call. Never build SQL, NoSQL filters, or LDAP queries by string concatenation or interpolation, even for values that look safe.',
    category: 'security',
  },
  {
    id: 'security.no-shell-strings',
    title: 'No shell command strings',
    prompt:
      'Never pass user-influenced strings to a shell. Invoke executables with an argument array and shell interpretation disabled, validate each argument against an allowlist, and avoid the shell entirely when a library call can do the job.',
    category: 'security',
  },
  {
    id: 'security.contextual-output-encoding',
    title: 'Encode output for context',
    prompt:
      "Encode output for the context it lands in (HTML body, attribute, JavaScript, URL, CSS) using the framework's escaping. Avoid raw HTML injection APIs such as innerHTML or dangerouslySetInnerHTML unless the content has been sanitized by a maintained library.",
    category: 'security',
  },
  {
    id: 'security.other-injection-sinks',
    title: 'Other injection sinks',
    prompt:
      'Treat template engines, XPath, header values, email headers, and log lines as injection targets too: use parameterized or escaping APIs, reject CR and LF in header values, and neutralize user input before writing it to logs.',
    category: 'security',
  },
  {
    id: 'security.security-headers-csp',
    title: 'Security headers and CSP',
    prompt:
      'Set security headers by default: a Content-Security-Policy without unsafe-inline or unsafe-eval, Strict-Transport-Security, X-Content-Type-Options nosniff, a restrictive Referrer-Policy, and frame-ancestors to prevent clickjacking.',
    category: 'security',
  },
  {
    id: 'security.csrf-protection',
    title: 'CSRF protection',
    prompt:
      'Protect state-changing requests against CSRF: set SameSite on session cookies and use a synchronizer or double-submit token verified on the server. Never perform mutations in response to GET requests.',
    category: 'security',
  },
  {
    id: 'security.ssrf-guard',
    title: 'Guard against SSRF',
    prompt:
      'Treat any URL fetched on behalf of a user as SSRF-prone: allowlist destination hosts and schemes, resolve DNS and block private, loopback, link-local, and cloud metadata ranges, re-check after every redirect, and enforce timeouts and response size limits.',
    category: 'security',
  },
  {
    id: 'security.path-traversal',
    title: 'Prevent path traversal',
    prompt:
      'When a file path derives from user input, resolve it to a canonical absolute path and verify it is still inside the intended base directory before reading or writing. Reject dot-dot segments, null bytes, and absolute paths outright.',
    category: 'security',
  },
  {
    id: 'security.secrets-from-env-or-vault',
    title: 'Secrets from env or vault',
    prompt:
      'Never hardcode secrets. Read API keys, tokens, and passwords from environment variables or a secrets manager, keep .env files out of version control, and commit a .env.example with placeholder values only.',
    category: 'security',
  },
  {
    id: 'security.never-log-secrets',
    title: 'Never log secrets or PII',
    prompt:
      'Never log secrets, tokens, session ids, passwords, card numbers, or personal data. Redact sensitive fields in structured logs and error reports, and do not dump whole request or config objects.',
    category: 'security',
  },
  {
    id: 'security.password-hashing',
    title: 'Hash passwords with argon2id',
    prompt:
      'Hash passwords with argon2id (preferred) or bcrypt with a cost tuned to roughly a quarter second, never with MD5, SHA-1, SHA-256, or a custom scheme. Rely on the built-in per-user salt and rehash on login when the parameters change.',
    category: 'security',
  },
  {
    id: 'security.constant-time-comparison',
    title: 'Constant-time comparison',
    prompt:
      'Compare secrets, tokens, HMACs, and password hashes with a constant-time comparison function from the standard library, never with == or plain string equality, to prevent timing attacks.',
    category: 'security',
  },
  {
    id: 'security.vetted-crypto-libraries',
    title: 'Use vetted crypto libraries',
    prompt:
      "Do not implement cryptographic primitives or protocols yourself. Use the platform's vetted library with authenticated encryption (AES-GCM or ChaCha20-Poly1305), modern key sizes, and its documented safe defaults.",
    category: 'security',
  },
  {
    id: 'security.secure-randomness',
    title: 'Cryptographic randomness',
    prompt:
      'Generate tokens, session ids, reset codes, and nonces from a cryptographically secure random source with at least 128 bits of entropy. Never use Math.random, random.random, timestamps, or sequential ids for anything security-relevant.',
    category: 'security',
  },
  {
    id: 'security.least-privilege',
    title: 'Least privilege everywhere',
    prompt:
      'Apply least privilege at every layer: database users with only the grants they need, cloud roles scoped to specific resources and actions, file permissions no wider than required, and processes and containers running as non-root.',
    category: 'security',
  },
  {
    id: 'security.authorize-every-object',
    title: 'Authorize every object access',
    prompt:
      'Enforce authorization server-side on every request and every object: verify the caller may act on this specific resource id, deny by default, and never rely on hidden UI, unguessable ids, or client-supplied role fields.',
    category: 'security',
  },
  {
    id: 'security.prevent-mass-assignment',
    title: 'Prevent mass assignment',
    prompt:
      'Bind request bodies to explicit DTOs or allowlists of fields, never directly to ORM models, so a client cannot set fields such as isAdmin, role, price, or ownerId.',
    category: 'security',
  },
  {
    id: 'security.jwt-pitfalls',
    title: 'Avoid JWT pitfalls',
    prompt:
      'When handling JWTs, verify the signature with an explicitly pinned algorithm (reject none and algorithm switching), validate exp, iss, and aud, keep tokens short-lived with a revocable refresh token, and never put secrets or personal data in the payload since it is only base64-encoded.',
    category: 'security',
  },
  {
    id: 'security.session-cookie-hygiene',
    title: 'Session cookie hygiene',
    prompt:
      'Rotate the session identifier on login and on privilege change, invalidate all sessions on password reset, and set session cookies with HttpOnly, Secure, and SameSite attributes.',
    category: 'security',
  },
  {
    id: 'security.rate-limit-abusable-endpoints',
    title: 'Rate limit abusable endpoints',
    prompt:
      'Rate limit login, password reset, OTP verification, signup, and other abusable endpoints per account and per IP, add backoff or temporary lockout after repeated failures, and cap the size and duration of expensive operations.',
    category: 'security',
  },
  {
    id: 'security.dependency-audit',
    title: 'Audit dependencies',
    prompt:
      'Before adding a dependency, check its maintenance status, download volume, known CVEs, and transitive footprint. Run the ecosystem audit tool (npm audit, pip-audit, cargo audit, govulncheck) and fix high or critical findings before merging.',
    category: 'security',
  },
  {
    id: 'security.pin-versions-lockfile',
    title: 'Pin versions with a lockfile',
    prompt:
      'Pin dependency versions through a committed lockfile and install in frozen or CI mode so the resolved tree is reproducible. Upgrade deliberately through reviewed changes rather than floating version ranges.',
    category: 'security',
  },
  {
    id: 'security.verify-supply-chain-artifacts',
    title: 'Verify downloaded artifacts',
    prompt:
      'Treat the software supply chain as attack surface: verify checksums or signatures for downloaded artifacts, pin third-party actions and base images to immutable digests, and never pipe curl output into a shell.',
    category: 'security',
  },
  {
    id: 'security.file-upload-limits',
    title: 'Restrict file uploads',
    prompt:
      'Restrict file uploads: enforce a maximum size, validate the type by content (magic bytes) rather than extension or Content-Type header, generate a new server-side filename, store files outside the web root or in object storage, and serve them with a fixed Content-Type.',
    category: 'security',
  },
  {
    id: 'security.safe-deserialization',
    title: 'Safe deserialization',
    prompt:
      'Never deserialize untrusted data with formats that can instantiate arbitrary types (pickle, Java serialization, YAML load without a safe loader, PHP unserialize). Use JSON with schema validation and cap payload size and nesting depth.',
    category: 'security',
  },
  {
    id: 'security.regex-redos',
    title: 'Avoid ReDoS patterns',
    prompt:
      'Avoid regular expressions with nested quantifiers or overlapping alternations on untrusted input, which enable ReDoS. Anchor patterns, cap input length before matching, and prefer a linear-time engine where available.',
    category: 'security',
  },
  {
    id: 'security.secure-defaults',
    title: 'Secure by default',
    prompt:
      'Choose secure defaults: features off unless enabled, deny-by-default permissions, TLS required, debug and verbose error modes disabled in production, and admin endpoints not exposed publicly. Users should have to opt into less security, never out of it.',
    category: 'security',
  },
  {
    id: 'security.https-only',
    title: 'HTTPS only',
    prompt:
      'Require HTTPS for all traffic: redirect HTTP to HTTPS, enable HSTS, mark cookies Secure, and verify TLS certificates and hostnames on outbound calls. Never disable certificate validation to make a request or test succeed.',
    category: 'security',
  },
  {
    id: 'security.generic-error-responses',
    title: 'Generic errors, detailed logs',
    prompt:
      'Return generic error messages to clients and log the details server-side. Never expose stack traces, SQL, file paths, or internal hostnames in responses, and return identical responses for existing and non-existing accounts to prevent enumeration.',
    category: 'security',
  },
  {
    id: 'security.fail-closed',
    title: 'Fail closed',
    prompt:
      'Fail closed: if an authorization check, signature verification, or call to a security service errors out or times out, deny the operation rather than letting it proceed.',
    category: 'security',
  },
  {
    id: 'security.data-minimization',
    title: 'Minimize personal data',
    prompt:
      'Collect and store only the personal data the feature needs, encrypt sensitive fields at rest, define retention and deletion, and mask or synthesize such data in non-production environments and test fixtures.',
    category: 'security',
  },
  {
    id: 'security.negative-security-tests',
    title: 'Write negative security tests',
    prompt:
      'Add tests for security controls alongside features: an unauthorized user receives 403 on each protected resource, malformed and oversized input is rejected, and injection payloads are rendered inert. Treat a missing negative test as a gap.',
    category: 'security',
  },
  {
    id: 'security.flag-weakening-requests',
    title: 'Flag security weakening',
    prompt:
      'If a request would weaken a security control (disable CSRF checks, allow any CORS origin, skip certificate validation, widen a permission), state the risk explicitly and offer a safer alternative before making the change.',
    category: 'security',
  },
]
