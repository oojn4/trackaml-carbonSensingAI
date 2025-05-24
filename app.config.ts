import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";

const app = defineConfig({
  server: {
    // Gunakan preset node-server untuk compatibility yang lebih baik
    preset: "node-server",
    minify: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    // Tambahkan konfigurasi untuk static generation
    static: true,
  },
  vite: {
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
    base: "/trackaml-carbonSensingAI/",
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // Disable manual chunking untuk static builds
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