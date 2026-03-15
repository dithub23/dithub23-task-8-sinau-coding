import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Jika sedang build untuk GitHub Pages (biasanya mode production dengan gh-pages)
  // Vercel secara default tidak menggunakan variabel GH_PAGES, jadi akan ke "/"
  const isGitHubPages =
    process.env.NODE_ENV === "production" && !process.env.VERCEL;

  return {
    plugins: [react()],
    base: isGitHubPages ? "/task-8-sinau-coding/" : "/",
  };
});
