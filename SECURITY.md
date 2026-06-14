# Security policy

## Reporting a vulnerability

This project is a static informational website with no authentication, database,
or server-side secrets. Security issues are unlikely to involve credential leaks
in this repository.

If you find a security concern anyway (e.g. dependency vulnerability, misleading
link, or content that could cause harm):

1. Open a [GitHub issue](https://github.com/Villsty/european-ai-freedom/issues)
   with the **Security** label if available, or
2. Email the repository owner via GitHub profile contact options.

Please do not post live exploit details publicly before a fix is available.

## Scope

| In scope | Out of scope |
|----------|----------------|
| Dependency vulnerabilities in this repo | Third-party services listed on the site |
| XSS or injection in site code | Accuracy of vendor marketing claims |
| Secrets accidentally committed | Security of external products we link to |

## Response

Expect an initial response within 7 days for valid reports. Fixes are prioritized
by severity and exploitability.

## Supported versions

Only the latest `main` branch deployment is supported.
