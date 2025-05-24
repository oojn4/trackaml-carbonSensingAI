import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";

const app = defineConfig({
  // Add base URL for GitHub Pages (replace 'your-repo-name' with your actual repo name)
  vite: {
    base: process.env.NODE_ENV === 'production' ? '/trackaml-carbonSensingAI/' : '/',
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
  },
  server: {
    // Try cloudflare-pages-static instead of github-pages
    preset: "cloudflare-pages-static",
    // Alternative: try "static" preset
    // preset: "static",
    minify: true,
    static: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  tsr: {
    generatedRouteTree: "./app/route-tree.gen.ts",
  },
  routers: {
    public: {
      dir: "./app/public",
    },
    ssr: {
      entry: "./app/entry-server.ts",
    },
    client: {
      entry: "./app/entry-client.tsx",
    },
  },
});

export default app;