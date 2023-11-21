import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugIn } from "./src/manifestForPlugIn";

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  base: "/boycott-them/",
});
