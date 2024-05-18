import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid"
import UnoCSS from "unocss/vite"
import {join} from "@std/path"

const r = (value:string) => {return join(import.meta.dirname,value)}

export default defineConfig({
  plugins: [solidPlugin(),UnoCSS()],
});