import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";

const app = defineConfig({
  server: {
    preset: "github-pages",
    minify: true,
    static: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
    // Set base path untuk GitHub Pages
    base: process.env.NODE_ENV === 'production' ? '/trackaml-carbonSensingAI/' : '/',
    build: {
      // Pastikan assets menggunakan relative paths
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          // Pastikan chunk names konsisten
          manualChunks: undefined,
        },
      },
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