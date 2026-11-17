export type Lang = 'km' | 'en' | 'zh';
import { extraAttractions } from './extraAttractions';
import { moreAttractions } from './moreAttractions';
type Local = Record<Lang, string>;
const tr = (km: string, en: string, zh: string): Local => ({ km, en, zh });

export const nearbyAttractions = [
  {
    slug: 'royal-palace',
    name: tr('ព្រះបរមរាជវាំង', 'Royal Palace of Cambodia', '柬埔寨王宫'),
    address: 'Samdach Sothearos Blvd (3), Daun Penh, Phnom Penh, Cambodia',
    intro: tr('ព្រះបរមរាជវាំងជាទីតាំងរាជពិធីនៅជិតមាត់ទន្លេ។ សួនសាធារណៈនៅខាងក្រៅខុសពីតំបន់ព្រះបរមរាជវាំងដែលមានការគ្រប់គ្រងច្រកចូល។', 'The Royal Palace is a ceremonial royal complex beside Phnom Penh’s riverfront. The public park outside its walls is distinct from the controlled palace visitor area.', '王宫是金边河滨的王室礼仪建筑群。宫墙外的公共公园与须按规定入场的王宫参观区是两个不同空间。'),
    history: tr('ទីតាំងរាជវាំងត្រូវបានរៀបចំបន្ទាប់ពីរាជធានីផ្លាស់មកភ្នំពេញនៅឆ្នាំ ១៨៦៦។ បរិវេណនេះនៅតែប្រើសម្រាប់ពិធីរាជការ។', 'The riverside palace site developed after the capital moved to Phnom Penh in 1866 and continues to serve royal ceremonial functions.', '1866 年迁都金边后，河畔逐渐形成现今王宫建筑群，至今仍承担王室礼仪功能。'),
    architecture: tr('សង្កេតមើលដំបូលបែបខ្មែរ និងប៉មមាសពីទីធ្លាសាធារណៈ។ មិនមែនគ្រប់អគារសុទ្ធតែបើកឱ្យចូលទេ។', 'Look for layered Khmer-style roofs and gilded spires from permitted public viewpoints; not every building is open to visitors.', '从允许拍摄的公共区域观察高耸金色塔尖与层叠高棉式屋顶；并非所有建筑均开放。'),
    visit: tr('ចាប់ផ្ដើមពីឧទ្យានខាងក្រៅ រួចពិនិត្យម៉ោង និងច្រកចូលព្រះបរមរាជវាំងនៅនឹងកន្លែង។', 'Begin with the exterior park, then check the palace entrance and current visitor arrangements on site. Ceremonies may affect access.', '先从外部公园观赏建筑，再到王宫入口核实当日开放安排；官方活动可能影响参观。'),
    source: 'https://tourismcambodia.org/provinces/search/detail/127/royal-palace-1548301051',
  },
  {
    slug: 'silver-pagoda',
    name: tr('វត្តព្រះកែវមរកត', 'Silver Pagoda (Wat Preah Keo Morakot)', '银阁寺（玉佛寺）'),
    address: 'Royal Palace compound, Samdach Sothearos Blvd, Phnom Penh, Cambodia',
    intro: tr('វត្តព្រះកែវមរកតស្ថិតនៅក្នុងបរិវេណព្រះបរមរាជវាំង មិនមែនជាសួនសាធារណៈខាងក្រៅទេ។', 'The Silver Pagoda is within the Royal Palace compound, not in the freely accessible park outside.', '银阁寺位于王宫建筑群内，不属于宫墙外免费开放的公园区域。'),
    history: tr('ព្រះវិហារនេះជាទីតាំងសាសនានិងវត្ថុសិល្បៈសំខាន់ក្នុងបរិវេណរាជវាំង។', 'This royal religious precinct preserves objects associated with Cambodia’s courtly and Buddhist heritage.', '这里是王宫内重要的宗教空间，展示与柬埔寨王室及佛教传统相关的历史文物。'),
    architecture: tr('ឈ្មោះអង់គ្លេសមកពីកម្រាលប្រាក់រាប់ពាន់បន្ទះ។ គោរពតាមការកំណត់ថតរូបនៅនឹងកន្លែង។', 'Its English name refers to thousands of silver floor tiles. Follow any restrictions on interior photography.', '“银阁寺”之名来自寺内数千块银制地砖。室内拍摄须遵守现场规定。'),
    visit: tr('សាកសួរអំពីសំបុត្រនិងម៉ោងចូលនៅច្រកព្រះបរមរាជវាំង។ ស្លៀកពាក់គួរសម។', 'Confirm tickets, opening hours and entry rules at the palace gate, and dress respectfully for a sacred site.', '在王宫售票入口核对门票、开放时间与参观范围，并着装得体。'),
    source: 'https://tourismcambodia.org/provinces/search/detail/127/royal-palace-1548301051',
  },
  {
    slug: 'national-museum',
    name: tr('សារមន្ទីរជាតិកម្ពុជា', 'National Museum of Cambodia', '柬埔寨国家博物馆'),
    address: 'Preah Ang Eng St (13), Daun Penh, Phnom Penh, Cambodia',
    intro: tr('សារមន្ទីរជាតិស្ថិតនៅភាគខាងជើងព្រះបរមរាជវាំង និងបង្ហាញសិល្បៈនិងបុរាណវត្ថុខ្មែរ។', 'Just north of the Royal Palace, the National Museum is a key stop for Khmer art and archaeology.', '国家博物馆位于王宫以北，是了解高棉艺术与考古的重要场馆。'),
    history: tr('សារមន្ទីរនេះបានបើកដំណើរការនៅដើមសតវត្សទី ២០ ដើម្បីថែរក្សាបេតិកភណ្ឌកម្ពុជា។', 'The museum was established in the early twentieth century and became a major centre for safeguarding Cambodian heritage.', '博物馆建于 20 世纪初，是保存与展示柬埔寨文化遗产的重要机构。'),
    architecture: tr('អគារពណ៌ដីក្រហមមានដំបូលបែបខ្មែរ និងទីធ្លាកណ្ដាល។', 'Notice the terracotta-coloured Khmer-inspired roofs and the calm central courtyard.', '红陶色建筑、传统高棉风格屋顶和内庭院本身就值得驻足观察。'),
    visit: tr('ទុកពេលសម្រាប់មើលវត្ថុតាំងពិព័រណ៍ ហើយពិនិត្យសំបុត្រនិងច្បាប់ថតរូបមុនចូល។', 'Allow time for the galleries, and check current admission and photography rules before entering.', '建议预留时间细看展品；入馆前核实票价、开放时间与拍照规则。'),
    source: 'https://mcfa.gov.kh/national-museum-of-cambodia/',
  },
  {
    slug: 'wat-ounalom',
    name: tr('វត្តឧណ្ណាលោម', 'Wat Ounalom', '乌那隆寺'),
    address: 'Samdach Sothearos Blvd (3), Daun Penh, Phnom Penh, Cambodia',
    intro: tr('វត្តឧណ្ណាលោមជាវត្តពុទ្ធសាសនាសំខាន់នៅជិតមាត់ទន្លេ និងសារមន្ទីរជាតិ។', 'Wat Ounalom is a significant Buddhist monastery near the riverside and National Museum.', '乌那隆寺是金边河滨附近重要的佛教寺院，距离国家博物馆不远。'),
    history: tr('ប្រវត្តិវត្តត្រូវបានរាប់ថាចាប់ផ្ដើមនៅឆ្នាំ ១៤៤៣ ហើយមានតួនាទីសំខាន់ក្នុងព្រះពុទ្ធសាសនាកម្ពុជា។', 'Traditionally dated to 1443, the monastery has an important role in Cambodian Buddhist leadership.', '寺院历史传统上可追溯至 1443 年，并在柬埔寨佛教界占有重要地位。'),
    architecture: tr('សង្កេតច្រកចូល ព្រះវិហារ និងសិល្បៈតុបតែង ដោយមិនរំខានអ្នកបួស។', 'Observe temple gateways, shrine buildings and decorative details without disturbing worshippers.', '可以观察山门、佛殿及装饰细节，但请勿干扰僧侣与信众。'),
    visit: tr('ស្លៀកពាក់គួរសម និយាយសំឡេងទាប ហើយសួរមុនថតរូបមនុស្សឬពិធី។', 'Wear modest clothing, keep voices low and ask permission before photographing people or ceremonies.', '穿着端庄、降低音量，拍摄人物或宗教活动前先征得同意。'),
    source: 'https://tourismcambodia.org/provinces/search/detail/172/ounalom-monastery-1549678948',
  },
  {
    slug: 'independence-monument',
    name: tr('វិមានឯករាជ្យ', 'Independence Monument', '独立纪念碑'),
    address: 'Intersection of Norodom Blvd and Sihanouk Blvd, Phnom Penh, Cambodia',
    intro: tr('វិមានឯករាជ្យជាសញ្ញាសម្គាល់កណ្ដាលទីក្រុង ដែលមានលំហសាធារណៈនៅជុំវិញ។', 'Independence Monument stands at a major boulevard junction amid central Phnom Penh’s open spaces.', '独立纪念碑坐落在金边市中心主要大道交汇处，周围分布公共绿地。'),
    history: tr('វិមាននេះត្រូវបានសម្ពោធនៅឆ្នាំ ១៩៥៨ ដើម្បីរំលឹកឯករាជ្យពីបារាំង។', 'Inaugurated in 1958, it commemorates Cambodia’s independence from France in 1953.', '纪念碑于 1958 年落成，纪念柬埔寨于 1953 年摆脱法国统治而独立。'),
    architecture: tr('រាងចេតិយផ្កាឈូកមានឥទ្ធិពលពីស្ថាបត្យកម្មខ្មែរ។', 'Its lotus-shaped stupa form echoes elements of classical Khmer architecture.', '莲花形佛塔轮廓借鉴传统高棉建筑语言，是辨识度很高的城市地标。'),
    visit: tr('មើលពីចិញ្ចើមផ្លូវឬសួនដែលអនុញ្ញាត។ កុំឆ្លងកាត់ចរាចរណ៍មមាញឹកដើម្បីថតរូប។', 'Photograph from safe pavements or parks; do not cross busy traffic lanes for a closer view.', '请在安全的人行道或公园拍摄，不要为了取景穿越繁忙车道。'),
    source: 'https://www.tourismcambodia.com/travelguides/provinces/phnom-penh/what-to-see/21_independence-monument.htm',
  },
  {
    slug: 'sisowath-quay',
    name: tr('មាត់ទន្លេស៊ីសុវត្ថិ', 'Sisowath Quay Riverside', '西索瓦河滨步道'),
    address: 'Preah Sisowath Quay, Daun Penh, Phnom Penh, Cambodia',
    intro: tr('ផ្លូវមាត់ទន្លេនៅជិតរាជវាំងជាកន្លែងដើរលេង និងមើលទេសភាពទន្លេ។', 'This riverside promenade near the royal quarter is a place for strolling and watching life along the water.', '王宫片区附近的河滨步道适合慢行、观赏水景与观察城市日常。'),
    history: tr('មាត់ទន្លេភ្នំពេញជាចំណុចជួបគ្នារវាងការធ្វើដំណើរ ពាណិជ្ជកម្ម និងជីវិតទីក្រុង។', 'Phnom Penh’s waterfront has long connected movement, commerce and public life near the rivers’ meeting point.', '金边的河岸长期连接交通、贸易与城市公共生活，邻近多条河流汇合的区域。'),
    architecture: tr('សង្កេតអាគារតាមដងផ្លូវ សួន និងទេសភាពបើកចំហលើផ្ទៃទឹក។', 'Look at the varied streetfront buildings, planted promenades and open views across the river.', '沿途可观察临街建筑、绿化步道和开阔的河面景观。'),
    visit: tr('ដើរពេលព្រឹកឬរសៀលត្រជាក់ យកទឹកផឹក និងប្រុងប្រយ័ត្នចរាចរណ៍នៅច្រកផ្លូវ។', 'Walk in the cooler morning or late afternoon, carry water and use marked crossings at road junctions.', '适合清晨或傍晚步行；注意补水，在路口使用安全过街设施。'),
    source: 'https://www.tourismcambodia.com/travelguides/provinces/phnom-penh/what-to-see.htm',
  },
  ...extraAttractions,
  ...moreAttractions,
] as const;

export const attractionMap = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ', Phnom Penh, Cambodia')}`;
