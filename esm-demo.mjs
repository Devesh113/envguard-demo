import { validateEnv } from "@devesh321/envguard";

// Set sample env vars for demonstration
process.env.APP_NAME = "my-cool-app";
process.env.PORT = "8080";
process.env.VERBOSE = "false";

const config = validateEnv({
  APP_NAME: { type: "string", required: true },
  PORT: { type: "number", required: true },
  VERBOSE: { type: "boolean", default: false },
});

console.log("✅ ESM import works!\n");
console.log("Config:", config);
