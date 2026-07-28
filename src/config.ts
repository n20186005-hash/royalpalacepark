// 站点域名：优先读取环境变量 CURRENT_SITE_DOMAIN（批量部署时注入），
// 回退到本景点占位域名 royalpalacepark.com，避免硬编码导致 Canonical/hreflang/OG 指向错误地址。
// 部署前请替换为正式域名。
function resolveBaseUrl(): string {
  const raw =
    (typeof process !== 'undefined' ? process.env.CURRENT_SITE_DOMAIN : undefined) ||
    (import.meta.env.CURRENT_SITE_DOMAIN as string | undefined) ||
    'royalpalacepark.com';
  const host = String(raw).replace(/^https?:\/\//, '').replace(/\/+$/, '');
  return `https://${host}`;
}

export const siteConfig = {
  name: 'Royal Palace Park',
  baseUrl: resolveBaseUrl(),
  locales: ['km', 'en', 'zh'] as const,
};

export default siteConfig;

export const ogLocale: Record<string, string> = {
  km: 'km_KH',
  en: 'en_US',
  zh: 'zh_CN',
};

// 统一 Google 地图链接（短链接，王宫公园）
export const mapsUrl = 'https://maps.app.goo.gl/FbkFtnh44ZvDLpNi9';

// Google Maps 嵌入 iframe（用户提供的 pb 缩略图嵌入链接）
export const mapsEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8228565811723!2d104.92915676223537!3d11.564553488588853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095149e38648a9%3A0x8612d588e56cdd3b!2z546L5a6r5YWs5Zut!5e0!3m2!1szh-CN!2sus!4v1784863742049!5m2!1szh-CN!2sus';

export const attraction = {
  name: {
    km: 'ឧទ្យានព្រះបរមរាជវាំង',
    en: 'Royal Palace Park',
    zh: '王宫公园',
  },
  rating: '4.5',
  reviews: '5555',
  lat: 11.5615,
  lng: 104.9310,
  address: {
    km: 'មហាវិថីសម្តេចសុធារស, ភ្នំពេញ, កម្ពុជា',
    en: 'Samdach Sothearos Blvd, Phnom Penh, Cambodia',
    zh: '柬埔寨金边 Samdach Sothearos 大道',
  },
};
