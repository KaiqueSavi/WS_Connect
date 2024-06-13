import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  vite: {
    define: {
      "process.env.SMTP_HASH": JSON.stringify(process.env.SMTP_HASH),
      "process.env.SMTP_CLIENT_EMAIL": JSON.stringify(process.env.SMTP_CLIENT_EMAIL)
    }
  }
});