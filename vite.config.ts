import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: remplace par le nom exact du repo GitHub
export default defineConfig({
  plugins: [react()],
  base: "/qc-lidar-explorer/",
});
