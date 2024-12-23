import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-lingering-night-a5ek595y.us-east-2.aws.neon.tech",
    database: "Expenses-Tracker",
    user: "Expenses-Tracker_owner",
    password: "dK1Hr8sUVDzB",
    ssl: true, // Ensure SSL is enabled if required by your provider
  },
});
