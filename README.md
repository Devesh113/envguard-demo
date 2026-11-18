# EnvGuard Demo

A simple demonstration of [EnvGuard](https://www.npmjs.com/package/@devesh321/envguard), a lightweight environment variable validation library for Node.js.

## Setup

```bash
git clone https://github.com/Devesh113/envguard-demo.git
cd envguard-demo
npm install
cp .env.example .env
```

## Run the demos

### ✅ Basic validation (loads `.env` via dotenv)

```bash
npm start
```

**Expected output:**

```
✅ Environment validated successfully!

Config: { PORT: 3000, DATABASE_URL: 'postgresql://localhost:5432/myapp', DEBUG: true }
```

### ❌ Error handling (missing required variables)

```bash
npm run demo:error
```

**Expected output:**

```
❌ Environment validation failed!

Errors:
  • API_KEY is required
  • SECRET is required
  • PORT is required
```

### 📦 ESM import

```bash
npm run demo:esm
```

**Expected output:**

```
✅ ESM import works!

Config: { APP_NAME: 'my-cool-app', PORT: 8080, VERBOSE: false }
```

## Usage

```js
const { validateEnv } = require("@devesh321/envguard");

const config = validateEnv({
  PORT: { type: "number", required: true },
  DATABASE_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false },
});

console.log(config);
```

## Handling Missing Environment Variables

EnvGuard detects missing required variables and throws an `EnvValidationError`:

```js
const { validateEnv, EnvValidationError } = require("@devesh321/envguard");

try {
  const config = validateEnv({
    API_KEY: { type: "string", required: true },
  });

  console.log(config);
} catch (error) {
  if (error instanceof EnvValidationError) {
    console.error("Validation failed:", error.errors);
  }
}
```

## Main Package

- **npm:** https://www.npmjs.com/package/@devesh321/envguard
- **Source:** https://github.com/Devesh113/envguard
