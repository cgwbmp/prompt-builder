# Security Policy

## Supported versions

The latest commit on `main`, which is what https://cgwbmp.github.io/prompt-builder/
serves. Older tags receive no fixes.

## Reporting a vulnerability

Report privately through GitHub: open the repository's **Security** tab and
choose **Report a vulnerability**. That keeps the report out of public issues
until a fix ships.

Expect an acknowledgement within seven days.

## Scope

The app is a static page with no backend, no accounts, and no network calls.
Prompt selection lives in the URL and favorites live in `localStorage`, so the
realistic reports are cross-site scripting through catalog text and anything
that lets a crafted `?p=` link run code. Dependency advisories are handled by
Dependabot and do not need a private report.
