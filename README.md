# 🎭 Playwright Adblocker (Network Interception)

A tiny Playwright experiment that blocks ads 🚫📢 using **network interception** — no extensions, no magic, just Playwright doing Playwright things.

Built for learning, tinkering, and breaking pages (in a good way).

---

## 🧪 What’s Inside

- 🎯 Playwright Test
- 🕸️ Network-level request interception
- 🚫 Ad & tracker requests aborted before they load
- 🌍 Tested against a real, ad-heavy website
- 🧩 Intentionally basic (by design)

---

## 🧠 How It Works (High Level)

- Intercept **every network request**
- Peek at the request URL 👀
- If it smells like an ad 🦨 → block it
- Otherwise → let it through 🚦

Simple. Effective.

---

## 🧑‍💻 Getting Started

Clone the repo 📦

```bash
git clone <repo-url>
cd <repo-name>
```

Install the dependencies

```bash
npm install
```

Run the tests

```bash 
npx playwright test
```
