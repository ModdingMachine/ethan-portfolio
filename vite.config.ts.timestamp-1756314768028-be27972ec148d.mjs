// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/coder/OneDrive/Desktop/EthanPortfolio/ethan-ai-forge/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/coder/OneDrive/Desktop/EthanPortfolio/ethan-ai-forge/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\coder\\OneDrive\\Desktop\\EthanPortfolio\\ethan-ai-forge";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASE_PATH || "/",
    // Set base dynamically
    server: {
      host: env.VITE_DEV_SERVER_HOST || "localhost",
      port: parseInt(env.VITE_DEV_SERVER_PORT) || 3e3
    },
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb2RlclxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEV0aGFuUG9ydGZvbGlvXFxcXGV0aGFuLWFpLWZvcmdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb2RlclxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEV0aGFuUG9ydGZvbGlvXFxcXGV0aGFuLWFpLWZvcmdlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jb2Rlci9PbmVEcml2ZS9EZXNrdG9wL0V0aGFuUG9ydGZvbGlvL2V0aGFuLWFpLWZvcmdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiBlbnYuVklURV9CQVNFX1BBVEggfHwgXCIvXCIsIC8vIFNldCBiYXNlIGR5bmFtaWNhbGx5XHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogZW52LlZJVEVfREVWX1NFUlZFUl9IT1NUIHx8IFwibG9jYWxob3N0XCIsXHJcbiAgICAgIHBvcnQ6IHBhcnNlSW50KGVudi5WSVRFX0RFVl9TRVJWRVJfUE9SVCkgfHwgMzAwMCxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHJlYWN0KCksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WCxTQUFTLGNBQWMsZUFBZTtBQUM3WixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUUzQyxTQUFPO0FBQUEsSUFDTCxNQUFNLElBQUksa0JBQWtCO0FBQUE7QUFBQSxJQUM1QixRQUFRO0FBQUEsTUFDTixNQUFNLElBQUksd0JBQXdCO0FBQUEsTUFDbEMsTUFBTSxTQUFTLElBQUksb0JBQW9CLEtBQUs7QUFBQSxJQUM5QztBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
