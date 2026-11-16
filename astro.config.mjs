import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { siteConfig } from './src/config';

const hasSite = !!siteConfig.baseUrl;

// https://astro.build/config
// Hybrid 模式：页面默认 prerender（静态生成），只有需要服务器数据的页面（例如 Weather）
// 或 export const prerender = false 的页面才在 Cloudflare Workers 上按需渲染。
// 这样兼顾静态性能 + SSR 能力。
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    mode: 'directory',
  }),
  ...(hasSite ? { site: siteConfig.baseUrl } : {}),
  trailingSlash: 'ignore',
  integrations: hasSite ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // 使用 Astro 内置的图片压缩 + Cloudflare 图片优化，提高加载速度
    remotePatterns: [{ protocol: 'https' }],
  },
});
