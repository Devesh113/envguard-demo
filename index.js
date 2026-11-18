const { validateEnv } = require("@devesh321/envguard");

// Load environment variables from .env file
require("dotenv").config();

// Validate environment variables
const config = validateEnv({
  PORT: { type: "number", required: true },
  DATABASE_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false },
});

console.log("✅ Environment validated successfully!\n");
console.log("Config:", config);
