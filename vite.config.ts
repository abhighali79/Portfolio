import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// We wrap everything in an async config to allow top-level awaits safely
export default defineConfig(async () => {
  let replitPlugins = [];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const cartographer = (await import("@replit/vite-plugin-cartographer")).cartographer();
    const devBanner = (await import("@replit/vite-plugin-dev-banner")).devBanner();
    replitPlugins = [cartographer, devBanner];
  }

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
      sourcemap: false,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'wouter'],
            ui: ['@radix-ui/react-slot', 'lucide-react', 'react-icons'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      host: "0.0.0.0",
      port: 5000,

      allowedHosts: true,

      fs: {
        strict: false,
        allow: [".."],
      },
    },
  };
});
