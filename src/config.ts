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

/**
 * 单景点 SEO 实体绑定数据（对应需求中的变量表）
 * - DOMAIN_NAME            -> baseUrl
 * - ATTRACTION_FULL_NAME   -> fullName
 * - ATTRACTION_SHORT_NAME  -> shortName
 * - CITY_NAME              -> city
 * - STATE_PROVINCE         -> region
 * - COUNTRY_NAME           -> country / COUNTRY_CODE_2LETTER -> countryCode
 * - POSTAL_CODE            -> postalCode
 * - LATITUDE / LONGITUDE   -> attraction.lat / attraction.lng
 * - NEARBY_LANDMARK_1/2    -> landmarks
 * - GOVT_TOURISM_URL       -> officialLinks / govtTourismUrl
 */
export const siteConfig = {
  name: 'Royal Palace Park',
  fullName: 'Royal Palace Park',
  shortName: 'Royal Palace Park',
  baseUrl: resolveBaseUrl(),
  locales: ['km', 'en', 'zh'] as const,

  // 地理归属层级（JSON-LD / TDK / 面包屑共用）
  streetAddress: 'HW8J+3VX, Samdach Sothearos Blvd (3)',
  city: 'Phnom Penh',
  region: 'Phnom Penh',
  country: 'Cambodia',
  countryCode: 'KH',
  postalCode: '12207',
  plusCode: 'HW8J+3VX',

  // 主题色 / PWA
  themeColor: '#274C30',
  backgroundColor: '#FBF7EF',
  manifestPath: '/manifest.webmanifest',

  // GA4 衡量 ID
  ga4Id: 'G-HXM22WWPKP',

  // 评分与评价数来源（Google 地图用户评价）
  reviewsSourceName: 'Google Maps',
  reviewsSyncMonth: '2026-09',
  reviewsSyncLabel: 'September 2026',
};

export default siteConfig;

export const ogLocale: Record<string, string> = {
  km: 'km_KH',
  en: 'en_US',
  zh: 'zh_CN',
};

// 统一 Google 地图链接（短链接，王宫公园）
export const mapsUrl = 'https://maps.app.goo.gl/FbkFtnh44ZvDLpNi9';

// Google 地图「全部评价」入口：与地图短链一致，保留所有 Google 外部链接
export const mapsReviewsUrl = mapsUrl;

// Google Maps 嵌入 iframe（用户提供的 pb 缩略图嵌入链接）
export const mapsEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8228565811723!2d104.92915676223537!3d11.564553488588853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095149e38648a9%3A0x8612d588e56cdd3b!2z546L5a6r5YWs5Zut!5e0!3m2!1szh-CN!2sus!4v1784863742049!5m2!1szh-CN!2sus';

// 当地政府 / 官方旅游局链接（.gov / .org 权威外链）
export const govtTourismUrl = 'https://www.mot.gov.kh';
export const officialLinks = [
  { label: 'Tourism Cambodia', url: 'https://www.tourismcambodia.org' },
  { label: 'Phnom Penh Municipality', url: 'https://www.phnompenh.gov.kh' },
  { label: 'Ministry of Tourism of Cambodia', url: 'https://www.mot.gov.kh' },
  { label: 'Ministry of Culture and Fine Arts', url: 'https://www.mcfa.gov.kh' },
];

// 周边核心地标（正文语义集群 + 结构化数据）
export const landmarks = [
  {
    name: {
      km: 'សារមន្ទីជាតិកម្ពុជា',
      en: 'National Museum of Cambodia',
      zh: '柬埔寨国家博物馆',
    },
  },
  {
    name: {
      km: 'វិមានឯករាជ្យ',
      en: 'Independence Monument',
      zh: '独立纪念碑',
    },
  },
];

// 取周边核心地标本地化名称（NEARBY_LANDMARK_1 / NEARBY_LANDMARK_2）
export function landmarkNames(lang: string): string[] {
  return landmarks.map((l) => (l.name as Record<string, string>)[lang] ?? l.name.en);
}

export const attraction = {
  name: {
    km: 'ឧទ្យានព្រះបរមរាជវាំង',
    en: 'Royal Palace Park',
    zh: '王宫公园',
  },
  // 谷歌地图（Google Maps）用户评价最新数据：4.5 / 5,599
  rating: '4.5',
  reviews: '5599',
  reviewsCount: '5,599',
  lat: 11.5615,
  lng: 104.9310,
  address: {
    km: 'មហាវិថីសម្តេចសុធារស, ភ្នំពេញ, កម្ពុជា',
    en: 'Samdach Sothearos Blvd, Phnom Penh, Cambodia',
    zh: '柬埔寨金边 Samdach Sothearos 大道',
  },
};
