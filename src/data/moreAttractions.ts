import type { Lang } from './attractions';
const t = (km: string, en: string, zh: string): Record<Lang, string> => ({ km, en, zh });

export const moreAttractions = [
  {
    slug: 'wat-phnom', name: t('វត្តភ្នំ', 'Wat Phnom', '塔山寺'), address: 'Wat Phnom, Street 96, Daun Penh, Phnom Penh, Cambodia',
    intro: t('វត្តភ្នំស្ថិតលើកូនភ្នំដែលទាក់ទងនឹងរឿងកំណើតទីក្រុងភ្នំពេញ។', 'A hilltop Buddhist temple closely associated with Phnom Penh’s founding legend.', '塔山寺位于金边市中心的小山丘上，与城市命名传说密切相关。'),
    history: t('រឿងព្រេងដូនពេញនិងព្រះពុទ្ធរូបជាផ្នែកនៃអត្តសញ្ញាណទីក្រុង។', 'The legend of Lady Penh finding Buddha statues links the hill to the city’s origins.', '相传奔夫人发现佛像后建祠供奉，逐渐形成与“金边”名称有关的城市记忆。'),
    architecture: t('មើលជណ្ដើរមានរូបនាគ ព្រះវិហារ និងចេតិយលើកំពូល។', 'Look for naga-flanked stairways, the hilltop sanctuary and religious shrines.', '重点观察纳迦蛇栏杆阶梯、山顶佛殿及周围佛塔。'),
    visit: t('ឡើងតាមជណ្ដើរ និងរក្សាភាពស្ងប់ស្ងាត់នៅកន្លែងបូជា។', 'Climb the steps slowly and respect active worship; ask about visitor charges at the entrance.', '建议沿阶梯缓步登高；进入祭拜区域保持安静，外籍游客票务现场核实。'),
    source: 'https://www.tourismcambodia.org/provinces/44/phnom-penh-capital-city',
  },
  {
    slug: 'post-office', name: t('ប្រៃសណីយ៍កណ្ដាលភ្នំពេញ', 'Phnom Penh Central Post Office', '金边中央邮局'), address: 'Phnom Penh Post Office, Street 13, Daun Penh, Phnom Penh, Cambodia',
    intro: t('អគារប្រៃសណីយ៍ជាចំណុចសំខាន់នៃសង្កាត់ស្ថាបត្យកម្មសម័យអាណានិគម។', 'The historic Post Office anchors a square lined with French-colonial-era buildings.', '中央邮局是金边法殖民时期街区的重要建筑，周边广场保留历史城市尺度。'),
    history: t('អគារប្រៃសណីយ៍មានប្រភពនៅចុងសតវត្សទី ១៩។', 'The Post Office dates to the late nineteenth century and reflects the city’s administrative expansion.', '邮局建筑始于十九世纪末，见证金边近代行政和通信网络的发展。'),
    architecture: t('មើលមុខអគារស៊ីមេទ្រី បង្អួច និងទីលានខាងមុខ។', 'Study the symmetrical façade, shaded openings and relationship to Post Office Square.', '观察对称立面、拱窗与建筑面向邮政广场的城市空间关系。'),
    visit: t('ថតរូបពីទីលានសាធារណៈ មិនរំខានសេវាប្រៃសណីយ៍។', 'View the exterior from the public square; do not obstruct postal operations.', '主要从公共广场欣赏外观，不要妨碍正常邮政业务。'),
    source: 'https://cambodiamuseum.info/en_information_visitors/streetscapes.html',
  },
  {
    slug: 'national-library', name: t('បណ្ណាល័យជាតិកម្ពុជា', 'National Library of Cambodia', '柬埔寨国家图书馆'), address: 'National Library of Cambodia, Street 92, Daun Penh, Phnom Penh, Cambodia',
    intro: t('បណ្ណាល័យជាតិជាស្ថាប័នថែរក្សាសៀវភៅនិងឯកសារប្រវត្តិសាស្ត្រ។', 'A national research and reading institution housed in a notable historic building.', '国家图书馆收藏文献与历史资料，其建筑也是金边近代城市文化地标。'),
    history: t('បណ្ណាល័យបានបង្កើតឡើងនៅឆ្នាំ ១៩២៤។', 'Founded in 1924, the library documents Cambodia’s literary and institutional history.', '国家图书馆创立于 1924 年，反映柬埔寨现代公共文化机构的发展。'),
    architecture: t('មើលជួរឈរ មុខអគារ និងបរិវេណស្ងប់ស្ងាត់។', 'Notice the entrance colonnade, balanced façade and formal grounds.', '可观察入口柱廊、规整立面和相对安静的院落环境。'),
    visit: t('ពិនិត្យម៉ោងបើក និងច្បាប់អានឯកសារមុនចូល។', 'Check current admission, reading-room access and photography rules before entering.', '馆内可能有读者登记与拍摄限制，出发前查看当日开放安排。'),
    source: 'https://cambodiamuseum.info/en_information_visitors/streetscapes.html',
  },
  {
    slug: 'night-market', name: t('ផ្សាររាត្រីភ្នំពេញ', 'Phnom Penh Night Market', '金边夜市'), address: 'Phnom Penh Night Market, Preah Sisowath Quay, Daun Penh, Phnom Penh, Cambodia',
    intro: t('ផ្សាររាត្រីនៅជិតមាត់ទន្លេជាទីកន្លែងដើរលេងពេលល្ងាច។', 'An evening market near the riverside with food, stalls and local social life.', '金边夜市位于西索瓦河滨附近，适合体验傍晚摊位、美食与城市生活。'),
    history: t('ផ្សាររាត្រីជាផ្នែកនៃការប្រើប្រាស់លំហសាធារណៈសម្រាប់ពាណិជ្ជកម្មពេលល្ងាច។', 'The market represents the waterfront’s newer role as an evening gathering and trading place.', '夜市体现了河滨地区从日间交通商业空间向夜间休闲消费空间的延伸。'),
    architecture: t('សង្កេតប្លង់តូបបណ្តោះអាសន្ន និងទំនាក់ទំនងជាមួយមាត់ទន្លេ។', 'Observe temporary stall layouts, open-air dining zones and the adjacent promenade.', '这里以开放式摊位与临时商业布置为特色，并非历史封闭建筑。'),
    visit: t('ពិនិត្យថ្ងៃបើកផ្សារ ហើយរក្សារបស់មានតម្លៃ។', 'Check operating nights before heading out; keep valuables close in crowds.', '建议晚间前往，但须先核实实际营业日；人多时看管物品。'),
    source: 'https://www.tourismcambodia.org/provinces/44/phnom-penh-capital-city',
  },
  {
    slug: 'phsar-chas', name: t('ផ្សារចាស់', 'Phsar Chas (Old Market)', '金边老市场'), address: 'Phsar Chas, Street 13 and Street 110, Daun Penh, Phnom Penh, Cambodia',
    intro: t('ផ្សារចាស់ជាផ្សារប្រពៃណីក្នុងតំបន់ពាណិជ្ជកម្មចាស់។', 'A traditional trading area in the older commercial streets of central Phnom Penh.', '金边老市场位于老城区传统商业街道间，适合观察日常商品交易。'),
    history: t('សកម្មភាពផ្សារឆ្លុះបញ្ចាំងប្រវត្តិពាណិជ្ជកម្មក្នុងកណ្ដាលក្រុង។', 'The market illustrates long-standing small-scale commerce in the capital’s older quarter.', '老市场延续了金边老城区以街巷摊位、地方交易为中心的商业传统。'),
    architecture: t('មើលផ្លូវតូចៗ ផ្ទះល្វែង និងតូបក្បែរផ្លូវ។', 'Observe narrow streets, shophouse frontages and tightly packed stalls.', '主要看点是沿街骑楼与店屋、市场摊位和密集的街道生活。'),
    visit: t('ដើរពេលថ្ងៃ ហើយសួរមុនថតរូបអ្នកលក់។', 'Explore in daylight and ask permission before photographing vendors.', '建议白天慢走，不要妨碍商户通行或未经允许拍摄人物。'),
    source: 'https://www.tourismcambodia.org/provinces/44/phnom-penh-capital-city',
  },
  {
    slug: 'wat-langka', name: t('វត្តលង្កា', 'Wat Langka', '朗卡寺'), address: 'Wat Langka, Samdach Louis Em Street (282), Phnom Penh, Cambodia',
    intro: t('វត្តលង្កាជាវត្តព្រះពុទ្ធសាសនាប្រវត្តិសាស្ត្រនៅជិតវិមានឯករាជ្យ។', 'An active Buddhist monastery near Independence Monument and central boulevards.', '朗卡寺位于独立纪念碑附近，是金边重要的历史佛教寺院。'),
    history: t('វត្តនេះជាប់ទាក់ទងនឹងប្រពៃណីសិក្សាព្រះពុទ្ធសាសនានិងស្រីលង្កា។', 'The monastery is linked to long-standing Buddhist learning and Sri Lankan religious traditions.', '寺院与佛教经学交流及斯里兰卡佛教传统有所关联。'),
    architecture: t('សង្កេតដំបូលព្រះវិហារ និងចេតិយក្នុងបរិវេណ។', 'See ornate sanctuary roofs, stupas and ceremonial courtyards.', '重点欣赏高棉式佛殿屋顶、佛塔与寺院庭院的空间组合。'),
    visit: t('គោរពអ្នកបួស និងកុំរំខានការធ្វើសមាធិ។', 'Dress respectfully; do not disrupt religious activity or meditation sessions.', '入寺需穿着端庄，冥想或法会期间不要打扰参与者。'),
    source: 'https://www.tourismcambodia.org/provinces/44/phnom-penh-capital-city',
  },
  {
    slug: 'tuol-sleng', name: t('សារមន្ទីរប្រល័យពូជសាសន៍ទួលស្លែង', 'Tuol Sleng Genocide Museum', '吐斯廉屠杀博物馆'), address: 'Tuol Sleng Genocide Museum, Street 113, Boeung Keng Kang, Phnom Penh, Cambodia',
    intro: t('សារមន្ទីរនេះជាទីរំលឹកអំពីឧក្រិដ្ឋកម្មនៃរបបខ្មែរក្រហម។', 'A memorial museum preserving evidence of Khmer Rouge-era atrocities.', '吐斯廉博物馆保存红色高棉时期的历史证据，是需要肃穆参观的纪念场所。'),
    history: t('អតីតសាលារៀនត្រូវបានប្រើប្រាស់ជាមន្ទីរឃុំឃាំង S-21។', 'A former school was converted into the S-21 detention and interrogation centre.', '原学校在红色高棉时期被改为 S-21 拘禁和审讯中心。'),
    architecture: t('មើលអាគារសាលារៀននិងបន្ទប់ដែលត្រូវបានរក្សាទុកជាភស្តុតាង។', 'The school buildings and preserved rooms reveal the site’s traumatic transformation.', '校园楼体、教室与保存的历史遗存共同呈现建筑用途的悲剧性转变。'),
    visit: t('ទស្សនាដោយស្ងៀមស្ងាត់ និងគោរពជនរងគ្រោះ។', 'Allow time for sensitive exhibits; follow photography rules and respect victims.', '建议预留充足时间阅读史料，尊重遇难者与参观者感受。'),
    source: 'https://www.tourismcambodia.org/provinces/44/phnom-penh-capital-city',
  },
  {
    slug: 'olympic-stadium', name: t('ពហុកីឡដ្ឋានជាតិអូឡាំពិក', 'Olympic National Stadium', '金边奥林匹克体育场'), address: 'Olympic National Stadium, Charles de Gaulle Boulevard, Phnom Penh, Cambodia',
    intro: t('ពហុកីឡដ្ឋានជាស្នាដៃស្ថាបត្យកម្មខ្មែរថ្មីក្នុងសម័យទំនើប។', 'A landmark sports complex associated with Cambodia’s New Khmer Architecture.', '奥林匹克体育场是柬埔寨“新高棉建筑”代表性现代公共建筑之一。'),
    history: t('ពហុកីឡដ្ឋានកើតឡើងក្នុងទសវត្សរ៍ ១៩៦០។', 'Built in the 1960s, the complex belongs to the post-independence period of civic building.', '体育场兴建于二十世纪六十年代，体现独立后公共建设与体育文化的发展。'),
    architecture: t('សង្កេតទម្រង់បេតុងធំ ទីធ្លាបើក និងកន្លែងអង្គុយជាន់ៗ។', 'Observe the monumental concrete structure, stepped seating and broad public approaches.', '混凝土看台、阶梯式观众席与大型公共场地展现现代主义空间设计。'),
    visit: t('ពិនិត្យព្រឹត្តិការណ៍និងតំបន់ដែលអនុញ្ញាតឱ្យចូល។', 'Check sports schedules and public-entry arrangements; do not enter restricted areas.', '场内能否参观取决于赛事与场馆管理安排，拍摄时请遵守限制。'),
    source: 'https://cambodiamuseum.info/en_information_visitors/streetscapes.html',
  },
] as const;
