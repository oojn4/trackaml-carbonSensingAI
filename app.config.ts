import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "@tanstack/react-start/config";

const app = defineConfig({
  server: {
    preset: "static",
    minify: true,
    static: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    // Ganti dengan nama repository Anda
    base: "/trackaml-carbonSensingAI/",
  },
  vite: {
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
    // Konfigurasi build untuk GitHub Pages
    build: {
      assetsDir: "assets",
      rollupOptions: {
        output: {
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