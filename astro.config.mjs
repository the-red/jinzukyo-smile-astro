// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";

// NODE_ENVに基づいて出力モードを切り替え
const isDevelopment = process.env.NODE_ENV === 'development';
const output = isDevelopment ? 'server' : 'static';

console.log(`Building in ${process.env.NODE_ENV || 'default'} mode: ${output}`);

// https://astro.build/config
export default defineConfig({
  output,
  adapter: output === 'server' ? vercel() : undefined,
});