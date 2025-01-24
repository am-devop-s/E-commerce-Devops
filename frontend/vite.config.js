import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://backend:6000",
			},
		},
		host: "0.0.0.0", // Allows access from any network (for local network access)
		port: 3000, // Optional: specify the port you want Vite to run on
	},
});
