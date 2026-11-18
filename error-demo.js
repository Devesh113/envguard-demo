const { validateEnv, EnvValidationError } = require("@devesh321/envguard");

// Intentionally NOT setting API_KEY or SECRET to trigger validation errors

try {
  const config = validateEnv({
    API_KEY: { type: "string", required: true },
    SECRET: { type: "string", required: true },
    PORT: { type: "number", required: true },
  });

  console.log(config);
} catch (error) {
  if (error instanceof EnvValidationError) {
    console.error("❌ Environment validation failed!\n");
    console.error("Errors:");
    error.errors.forEach((err) => console.error(`  • ${err}`));
  } else {
    throw error;
  }
}
