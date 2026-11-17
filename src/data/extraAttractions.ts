import type { Lang } from './attractions';
type Local = Record<Lang, string>;
const t = (km: string, en: string, zh: string): Local => ({ km, en, zh });

export const extraAttractions = [
  {
    slug: 'wat-botum', name: t('វត្តបទុមវតី', 'Wat Botum Vatey', '波东寺'), address: 'Oknha Suor Srun St (7), Daun Penh, Phnom Penh, Cambodia',
    intro: t('វត្តបទុមវតីជាវត្តពុទ្ធសាសនាប្រវត្តិសាស្ត្រនៅខាងត្បូងព្រះបរមរាជវាំង។', 'Wat Botum Vatey is a historic Buddhist monastery just south of the Royal Palace.', '波东寺位于王宫南侧，是金边历史悠久、仍有宗教活动的佛教寺院。'),
    history: t('ប្រវត្តិវត្តត្រូវបានភ្ជាប់នឹងរាជកាលព្រះបាទពញាយ៉ាតនៅសតវត្សទី ១៥។', 'Its tradition reaches back to the fifteenth-century reign of Ponhea Yat, connecting the monastery to early Phnom Penh.', '寺院传统可追溯至十五世纪波涅亚国王时期，见证金边早期宗教历史。'),
    architecture: t('មើលដំបូលព្រះវិហារតុបតែង និងចេតិយក្នុងបរិវេណវត្ត។', 'Look for decorated Khmer temple roofs, shrines and stupas within the compound.', '留意高棉式重檐佛殿、佛塔和细致的寺院装饰。'),
    visit: t('ស្លៀកពាក់គួរសម និងរក្សាស្ងៀមពេលមានពិធី។', 'Dress modestly and keep the worship spaces quiet; ask before photographing ceremonies.', '适合和王宫南侧步行路线结合，进入佛殿请着装得体、保持安静。'),
    source: 'https://www.cambodiamuseum.info/en_information_visitors/streetscapes.html',
  },
  {
    slug: 'wat-botum-park', name: t('សួនវត្តបទុម', 'Wat Botum Park', '波东寺公园'), address: 'Wat Botum Park, Sothearos Blvd, Daun Penh, Phnom Penh, Cambodia',
    intro: t('សួនសាធារណៈនៅភាគខាងត្បូងរាជវាំងជាទីកន្លែងដើរលេង និងសម្រាក។', 'Wat Botum Park is an open public green space south of the royal quarter, suited to short walks and breaks.', '波东寺公园是王宫南侧的城市公共绿地，适合散步、休息和串联纪念地标。'),
    history: t('សួននេះជាផ្នែកនៃលំហសាធារណៈទីក្រុងនៅជុំវិញវត្តបទុម និងវិមានមិត្តភាព។', 'The park forms part of Phnom Penh’s civic open-space network around Wat Botum and the Friendship Monument.', '公园与波东寺、柬越友谊纪念碑共同构成王宫南侧的公共景观。'),
    architecture: t('មើលផ្លូវដើរ ដើមឈើ និងទិដ្ឋភាពវិមាននៅជុំវិញ។', 'Observe the tree-lined paths, open lawns and monument sightlines rather than expecting a single enclosed attraction.', '可观察树荫步道、草坪及纪念碑景观轴线，这是一片开放区域而非收费景区。'),
    visit: t('ដើរពេលព្រឹក ឬល្ងាច ហើយប្រុងប្រយ័ត្នការឆ្លងផ្លូវ។', 'Visit in the cooler morning or late afternoon and use safe road crossings.', '推荐清晨或傍晚步行，注意公园边缘车流。'),
    source: 'https://visitcambodia.info/places/cambodia-vietnam-friendship-monument/',
  },
  {
    slug: 'friendship-monument', name: t('វិមានមិត្តភាពកម្ពុជា-វៀតណាម', 'Cambodia–Vietnam Friendship Monument', '柬越友谊纪念碑'), address: 'Wat Botum Park, Sothearos Blvd, Phnom Penh, Cambodia',
    intro: t('វិមាននៅក្នុងសួនវត្តបទុមរំលឹកទំនាក់ទំនងប្រវត្តិសាស្ត្ររវាងកម្ពុជា និងវៀតណាម។', 'This monument stands in Wat Botum Park and commemorates historical relations between Cambodia and Vietnam.', '柬越友谊纪念碑位于波东寺公园内，是与两国历史关系有关的公共纪念地标。'),
    history: t('វិមាននេះពាក់ព័ន្ធនឹងការចងចាំនយោបាយ និងប្រវត្តិសាស្ត្រសម័យទំនើបរបស់កម្ពុជា។', 'The memorial reflects a politically sensitive chapter of Cambodia’s modern history; interpret it in its historical context.', '纪念碑承载柬埔寨现代历史与政治记忆，参观时宜结合不同历史背景理解其意义。'),
    architecture: t('មើលក្រុមរូបចម្លាក់ បេតុង និងលំហសួនជុំវិញ។', 'Look at the sculptural group and its formal relationship with the surrounding landscaped plaza.', '观察人物雕塑组合、基座与周边广场的纪念性构图。'),
    visit: t('ថតរូបពីផ្លូវសាធារណៈ និងគោរពសកម្មភាពរំលឹក។', 'Photograph from public paths and respect any commemorative activity or temporary access controls.', '可从公共步道拍摄全景，遇纪念活动请遵守现场管理。'),
    source: 'https://visitcambodia.info/places/cambodia-vietnam-friendship-monument/',
  },
  {
    slug: 'sihanouk-memorial', name: t('ព្រះបរមរូបព្រះបាទនរោត្តម សីហនុ', 'King Father Norodom Sihanouk Memorial', '西哈努克太皇纪念碑'), address: 'Norodom Sihanouk Memorial Park, Phnom Penh, Cambodia',
    intro: t('ព្រះបរមរូបស្ថិតនៅសួនខាងកើតវិមានឯករាជ្យ ដើម្បីរំលឹកព្រះបាទនរោត្តម សីហនុ។', 'The King Father memorial stands in a park east of Independence Monument, honouring Norodom Sihanouk.', '西哈努克太皇纪念碑位于独立纪念碑东侧公园，纪念柬埔寨历史上的重要君主。'),
    history: t('ទីតាំងនេះជាកន្លែងចងចាំព្រះរាជតួនាទីរបស់ព្រះបាទនរោត្តម សីហនុ។', 'The memorial interprets the historical role of King Father Norodom Sihanouk in modern Cambodia.', '这处纪念空间连接西哈努克太皇的王室身份与柬埔寨现代国家历史。'),
    architecture: t('រូបចម្លាក់សំរិទ្ធស្ថិតនៅក្រោមសំណង់ខ្ពស់បែបខ្មែរ។', 'A bronze figure is framed by a tall Khmer-style ceremonial canopy, creating a clear vertical focal point.', '青铜雕像置于高耸的高棉式纪念亭下，形成明显的垂直视觉焦点。'),
    visit: t('មើលពីសួនជុំវិញ និងរក្សាការគោរពនៅកន្លែងរំលឹក។', 'Walk around the public park for different views and behave respectfully at the memorial.', '适合与独立纪念碑串联，建议从公园步道观察正面及侧面。'),
    source: 'https://tourismcambodia.org/public/provinces/search/detail/1590/norodom-sihanouk-memorial',
  },
  {
    slug: 'chaktomuk-hall', name: t('សាលសន្និសីទចតុមុខ', 'Chaktomuk Conference Hall', '四臂湾会议厅'), address: 'Preah Sisowath Quay, Daun Penh, Phnom Penh, Cambodia',
    intro: t('សាលចតុមុខជាអគារវប្បធម៌សម័យទំនើបនៅតាមមាត់ទន្លេជិតព្រះបរមរាជវាំង។', 'Chaktomuk Conference Hall is a distinctive modern-era cultural venue on the riverfront near the Royal Palace.', '四臂湾会议厅位于王宫附近河滨，是金边现代建筑与文化活动的重要地标。'),
    history: t('អគារនេះមានប្រវត្តិពីឆ្នាំ ១៩៦១ ក្នុងសម័យស្ថាបត្យកម្មខ្មែរថ្មី។', 'Dating to 1961, the venue belongs to the era of Cambodia’s New Khmer Architecture.', '建筑建于 1961 年，属于柬埔寨“新高棉建筑”发展的时代背景。'),
    architecture: t('សង្កេតដំបូលកោងនិងរូបរាងអគារដែលឆ្លើយតបនឹងមាត់ទន្លេ។', 'Notice the distinctive sweeping roof form and how the building addresses the riverfront.', '弧形屋顶、横向舒展的建筑体量及朝向河滨的布局是主要观察重点。'),
    visit: t('មើលខាងក្រៅពីផ្លូវសាធារណៈ; ការចូលខាងក្នុងអាស្រ័យលើកម្មវិធី។', 'Enjoy the exterior from public space; interior access depends on scheduled events.', '建议先参观外观，内部是否开放取决于当日活动安排。'),
    source: 'https://www.cambodiamuseum.info/en_information_visitors/streetscapes.html',
  },
  {
    slug: 'central-market', name: t('ផ្សារធំថ្មី', 'Central Market (Phsar Thmei)', '金边中央市场'), address: 'Central Market, Street 128, Daun Penh, Phnom Penh, Cambodia',
    intro: t('ផ្សារធំថ្មីជាផ្សារធំកណ្ដាលភ្នំពេញ ដែលមានអគារដំបូលមូលបែប Art Deco។', 'Central Market is a landmark Phnom Penh market, known for its Art Deco dome and lively trade.', '中央市场是金边著名的装饰艺术风格市场，兼具建筑观赏与本地购物体验。'),
    history: t('ផ្សារនេះជាផ្នែកនៃការអភិវឌ្ឍទីក្រុងភ្នំពេញនៅសតវត្សទី ២០។', 'The market reflects the city’s twentieth-century urban growth and remains part of everyday commercial life.', '市场见证了金边二十世纪的城市建设，至今仍是日常商业活动空间。'),
    architecture: t('ដំបូលមូលកណ្ដាល និងស្លាបអគារបួនទិសជាលក្ខណៈសំខាន់។', 'Look for the central dome and radiating wings that organise stalls and circulation.', '中央大穹顶与向四周展开的市场廊翼，体现了装饰艺术建筑的几何秩序。'),
    visit: t('ទៅពេលព្រឹក និងរក្សាសម្ភារៈផ្ទាល់ខ្លួននៅតំបន់មនុស្សច្រើន។', 'Visit during active market hours, keep valuables secure and ask before photographing vendors.', '建议白天前往；拍摄摊贩先征询同意，并留意人流与个人物品。'),
    source: 'https://www.tourismcambodia.com/travelguides/provinces/phnom-penh/what-to-see.htm',
  },
] as const;
