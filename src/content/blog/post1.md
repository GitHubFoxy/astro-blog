---
title: "My first app that was pushed to prod"
description: "klimat22.com - e-commerce website built using nextjs and convex"
pubDate: 2026-02-01
socials:
  github: "https://github.com/GitHubFoxy"
  x: "https://x.com/mishacoding"
  telegram: "https://t.me/beruseruko"
  linkedin: "https://www.linkedin.com/in/mikhail-tretyakov-0abb083ab/"
---

I finished a project i have been working on for a couple months, not full time.

klimat22.com

It s Nextjs project with Convex as backend

It is a simple, e-commerce (which means CRUD for every table, easy as that)

But in practice it was more than basic CRUD. I wanted it to feel stable for real usage, not only for demo screenshots.

What i built:
- product catalog with variants
- category structure and filtering
- admin panel for editing products/content
- auth + role checks for protected routes
- order flow and status updates

Convex was very good for speed. I could move fast with schema/query changes and keep frontend + backend in one mental model.

Most painful part was consistency:
- naming fields the same way across forms and DB
- preventing small schema drifts over time
- handling empty states + bad input without breaking UX

Main lessons from shipping:
- build vertical slices first, infra second
- admin UX matters early in e-commerce
- simple UI is fine, data correctness is not optional

Next steps for this app:
- conversion analytics dashboard
- better image pipeline and optimization
- stronger SEO pages and metadata




