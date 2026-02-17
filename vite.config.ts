import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/qc-lidar-explorer/", // IMPORTANT: nom exact du repo + slash final
});
