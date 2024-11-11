import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import RadixVueResolver from "radix-vue/resolver"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        RadixVueResolver(),
        // Iconify
        (name) => {
          if (name === "Icon") return { name, from: "@iconify/vue" }
        },
      ],
    }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
})
