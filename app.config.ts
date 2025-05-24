import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";

const app = defineConfig({
  server: {
    preset: "static",
    minify: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
    // PENTING: Base path harus sesuai dengan nama repository
    base: "/trackaml-carbonSensingAI/",
    build: {
      outDir: "dist",
      assetsDir: "assets",
      emptyOutDir: true,
      // Pastikan semua assets menggunakan relative path
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    },
    // Pastikan public assets juga menggunakan base path yang benar
    publicDir: 'public'
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