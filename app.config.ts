import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";

const app = defineConfig({
  server: {
    preset: "github-pages",
    minify: true,
    static: true,
    prerender: {
      routes: ["/trackaml-carbonSensingAI/"],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths() as never, tailwindcss() as never],
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
