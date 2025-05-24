var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// app.config.ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";
var app = defineConfig({
  server: {
    preset: "github-pages",
    minify: true,
    static: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true
    }
  },
  vite: {
    plugins: [tsconfigPaths(), tailwindcss()],
    // Add css configuration to avoid lightningcss
    css: {
      postcss: {
        plugins: [
          __require("tailwindcss"),
          __require("autoprefixer")
        ]
      },
      // Disable advanced CSS optimizations
      devSourcemap: true,
      preprocessorOptions: {
        // Add any preprocessor options here
      }
    },
    // Avoid optimization that might use lightningcss
    build: {
      cssMinify: "cssnano",
      rollupOptions: {
        output: {
          manualChunks: void 0
        }
      }
    }
  },
  tsr: {
    generatedRouteTree: "./app/route-tree.gen.ts"
  },
  routers: {
    public: {
      dir: "./app/public"
    },
    ssr: {
      entry: "./app/entry-server.ts"
    },
    client: {
      entry: "./app/entry-client.tsx"
    }
  }
});
var app_config_default = app;
export {
  app_config_default as default
};
