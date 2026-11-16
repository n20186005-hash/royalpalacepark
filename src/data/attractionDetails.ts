import type { Lang } from './attractions';

type Local = Record<Lang, string>;
const t = (km: string, en: string, zh: string): Local => ({ km, en, zh });

// Location-specific descriptions; governance wording distinguishes public spaces,
// palace access, museums and religious sites without inventing an operator.
export const details: Record<string, {
  stewardship: Local;
  highlight: Local;
  route: Local[];
  photoSpots: Local[];
  faq: { q: Local; a: Local }[];
}> = {
  'royal-palace': {
    stewardship: t('ព្រះបរមរាជវាំងជាទីប្រថាប់និងទីតាំងព្រះរាជពិធីរបស់ព្រះមហាក្សត្រ។ ការចូលទស្សនាតំបន់ខាងក្នុងស្ថិតក្រោមការរៀបចំរបស់អាជ្ញាធរព្រះបរមរាជវាំង។ សួនសាធារណៈខាងក្រៅមិនមែនជាតំបន់ចូលទស្សនាខាងក្នុងទេ។', 'The Royal Palace is an active royal residence and ceremonial complex. Access to the palace grounds is administered through royal-palace visitor arrangements; the exterior public park is a separate public space. Respect closures during state ceremonies.', '柬埔寨王宫是仍在使用的王室居所与礼仪建筑群，宫内参观依王宫管理方公布的入场安排执行。宫墙外的王宫公园则是不同的公共空间，官方仪式期间可能临时调整开放范围。'),
    highlight: t('អគាររាជពិធី ដំបូលបែបខ្មែរ និងសួនផ្នែកខាងក្នុងបង្ហាញពីទំនៀមទម្លាប់រាជវាំង។', 'The royal precinct brings together ceremonial halls, Khmer-style rooflines and formal courtyards. The gilded skyline visible above the perimeter walls is also part of Phnom Penh’s cityscape.', '礼仪殿堂、金色塔尖、高棉式屋顶与庭院共同构成王宫景观。尤其值得区分从公共公园可见的外部轮廓与需要购票进入的宫内区域。'),
    route: [t('ពីសួនខាងមុខមើលទិដ្ឋភាពដំបូលរាជវាំង', 'Begin at the exterior park for a wide palace-roof panorama', '从王宫公园观察宫殿屋顶全景'), t('ទៅរកច្រកចូលសម្រាប់ភ្ញៀវ និងពិនិត្យការបើក', 'Locate the designated visitor gate and confirm access', '沿街前往指定游客入口并确认开放安排'), t('បន្តទៅវត្តព្រះកែវមរកត ប្រសិនបើអនុញ្ញាត', 'Continue to the Silver Pagoda if the visiting area is open', '若当天开放，继续参观宫内银阁寺')],
    photoSpots: [t('ពីសួនខាងមុខថតដំបូលមាស', 'Palace skyline from the public park', '公园前方的金色屋顶远景'), t('ពីចិញ្ចើមផ្លូវសុវត្ថិភាពថតជញ្ជាំងនិងទ្វារ', 'Wall and gateway details from the pavement', '从安全人行道拍摄宫墙与门楼')],
    faq: [{ q: t('តើសួននិងព្រះបរមរាជវាំងដូចគ្នាឬ?', 'Is the park the same as palace admission?', '公园和王宫参观区是同一处吗？'), a: t('មិនដូចគ្នាទេ។ សួនខាងក្រៅជាទីសាធារណៈ រីឯការចូលព្រះបរមរាជវាំងត្រូវគោរពលក្ខខណ្ឌផ្សេង។', 'No. The exterior park and the ticketed or controlled palace areas have different access arrangements.', '不是。外部公园可独立游览；王宫内部实行另外的入场管理。') }],
  },
  'silver-pagoda': {
    stewardship: t('វត្តព្រះកែវមរកតស្ថិតនៅក្នុងបរិវេណព្រះបរមរាជវាំង។ ការចូលទស្សនា និងការអនុញ្ញាតថតរូបគឺអាស្រ័យលើការគ្រប់គ្រងរបស់បរិវេណព្រះបរមរាជវាំង។', 'Wat Preah Keo Morakot forms part of the Royal Palace compound. Access, preservation and photography conditions are governed by the palace precinct’s visitor arrangements, not the outside park.', '银阁寺位于王宫围墙内，属于王宫礼仪与宗教空间。入场、文物保护及摄影规定遵循王宫参观管理安排，而非外围公共公园规则。'),
    highlight: t('កម្រាលប្រាក់ និងសិល្បៈព្រះពុទ្ធសាសនាជាចំណុចសំខាន់។', 'The site’s identity is linked to its silver floor tiles and Buddhist objects; examine the relationship between shrine design, ornament and royal devotion.', '地面银砖、佛教造像与王室宗教艺术是观察重点；请留意室内可能限制拍摄。'),
    route: [t('ចូលតាមច្រកភ្ញៀវព្រះបរមរាជវាំង', 'Enter through the designated Royal Palace visitor gate', '由王宫指定游客入口进入'), t('ទៅកាន់តំបន់វត្តព្រះកែវមរកតតាមសញ្ញា', 'Follow site signs toward the Silver Pagoda precinct', '按现场动线前往银阁寺区域'), t('មើលសិល្បៈ និងចេញតាមផ្លូវកំណត់', 'Study the decorative details and exit along marked paths', '观察装饰与文物后沿规定路线离开')],
    photoSpots: [t('រូបរាងព្រះវិហារពីទីធ្លាដែលអនុញ្ញាត', 'Pagoda exterior from permitted courtyards', '从允许拍摄的庭院拍摄寺院外观'), t('លម្អជញ្ជាំងខាងក្រៅតាមការអនុញ្ញាត', 'Permitted exterior wall and roof details', '遵守规定拍摄檐口与外墙细节')],
    faq: [{ q: t('តើសួនព្រះបរមរាជវាំងអាចចូលវត្តនេះដោយសេរីទេ?', 'Can I walk in directly from the public park?', '能从王宫公园直接免费走进银阁寺吗？'), a: t('មិនបានទេ។ ត្រូវពិនិត្យច្រកចូល និងសំបុត្រព្រះបរមរាជវាំង។', 'No. Check Royal Palace visitor entry and ticket requirements.', '不能。应先确认王宫参观入口及当日票务规定。') }],
  },
  'national-museum': {
    stewardship: t('សារមន្ទីរជាតិកម្ពុជាជាស្ថាប័នវប្បធម៌ជាតិ ដែលស្ថិតក្រោមក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈកម្ពុជា។ ការថែរក្សាវត្ថុតាំងពិព័រណ៍ និងការរៀបចំទស្សនាស្ថិតក្រោមការគ្រប់គ្រងសារមន្ទីរ។', 'The National Museum of Cambodia is a national cultural institution under Cambodia’s Ministry of Culture and Fine Arts. The museum manages its collection, conservation and on-site visitor rules.', '柬埔寨国家博物馆是隶属于柬埔寨文化艺术部的国家文化机构，馆方负责藏品保管、展览保护及现场参观安排。它并非王宫公园的附属展馆。'),
    highlight: t('សិល្បៈខ្មែរពីសម័យផ្សេងៗ និងទីធ្លាកណ្តាលពណ៌ដីក្រហម។', 'The museum connects sculptures from different periods of Khmer history with a terracotta-coloured building and shaded courtyard.', '可从不同年代的高棉雕塑理解宗教造像的演变，再观察红陶色展馆、屋檐与内庭院如何呼应传统建筑。'),
    route: [t('ចូលពីផ្លូវលេខ ១៣', 'Approach the museum entrance from Street 13', '从 13 号街侧前往博物馆入口'), t('ទស្សនាបន្ទប់តាំងពិព័រណ៍តាមលំដាប់', 'Follow the gallery sequence through Khmer art collections', '按照展厅动线欣赏高棉艺术藏品'), t('សម្រាកនៅទីធ្លាកណ្ដាលមុនចេញ', 'Pause at the courtyard before leaving', '离馆前在内庭院观察建筑细节')],
    photoSpots: [t('មុខអាគារពណ៌ដីក្រហម', 'Terracotta-red main façade', '红陶色正立面'), t('ទីធ្លាកណ្ដាល និងដំបូលបែបខ្មែរ', 'Central courtyard and roofline', '中央庭院与高棉式屋顶')],
    faq: [{ q: t('តើអាចថតរូបក្នុងសារមន្ទីរបានទេ?', 'Is photography allowed in the galleries?', '展厅内可以拍照吗？'), a: t('ច្បាប់អាចខុសគ្នាតាមតំបន់។ សូមពិនិត្យស្លាកនៅនឹងកន្លែង។', 'Rules can differ between galleries; follow posted signs and staff guidance.', '不同展厅规定可能不同，请以现场标识和工作人员说明为准。') }],
  },
  'wat-ounalom': {
    stewardship: t('វត្តឧណ្ណាលោមជាវត្តពុទ្ធសាសនាដែលប្រើប្រាស់សម្រាប់ជីវិតសាសនាប្រចាំថ្ងៃ។ គណៈសង្ឃ និងអ្នកទទួលខុសត្រូវវត្តរៀបចំពិធី និងការចូលទស្សនាក្នុងបរិវេណវត្ត។', 'Wat Ounalom is an active Buddhist monastery rather than a municipal park. The resident monastic community and temple authorities oversee religious activity and access to worship spaces.', '乌那隆寺是持续开展宗教活动的佛教寺院，并非市政公园。寺院僧团与寺务管理人员负责宗教活动和殿宇参观秩序，游客应尊重正在进行的修行。'),
    highlight: t('ទ្វារវត្ត ព្រះវិហារ និងលំនាំតុបតែងបែបខ្មែរ។', 'Its layered temple compounds, shrines and gates illustrate a living tradition rather than a static monument.', '寺门、佛殿、佛塔和精细的高棉装饰可帮助理解寺院作为活态宗教场所的特征。'),
    route: [t('ចូលពីមហាវិថីសម្តេចសុធារស', 'Approach from Samdach Sothearos Boulevard', '从 Samdach Sothearos 大道侧接近寺院'), t('សង្កេតទ្វារវត្ត និងព្រះវិហារពីផ្លូវទស្សនា', 'View gateway and shrine exteriors from visitor areas', '在允许通行处观察山门及佛殿'), t('ចេញឆ្ពោះទៅមាត់ទន្លេ ឬសារមន្ទីរ', 'Continue toward the riverfront or National Museum', '可继续步行至河滨或国家博物馆')],
    photoSpots: [t('ខ្លោងទ្វារវត្ត', 'Temple gateway details', '寺院山门'), t('ដំបូលព្រះវិហារពីទីធ្លាសាធារណៈ', 'Shrine rooftops from a public courtyard', '从公共庭院拍摄佛殿屋顶')],
    faq: [{ q: t('តើត្រូវធ្វើអ្វីពេលមានពិធីបុណ្យ?', 'What if a religious ceremony is in progress?', '遇到宗教仪式应如何参观？'), a: t('រក្សាភាពស្ងៀមស្ងាត់ និងសួរអ្នកទទួលខុសត្រូវមុនថតរូប។', 'Keep quiet, give worshippers space and ask before photographing ceremonies.', '保持安静，为信众留出空间，拍摄仪式前先征询同意。') }],
  },
  'independence-monument': {
    stewardship: t('វិមានឯករាជ្យជាវិមានសាធារណៈក្នុងទីក្រុងភ្នំពេញ។ បរិវេណផ្លូវ និងលំហសាធារណៈជុំវិញស្ថិតក្រោមការរៀបចំរដ្ឋបាលទីក្រុង និងអាជ្ញាធរពាក់ព័ន្ធ ជាពិសេសពេលមានពិធីជាតិ។', 'Independence Monument is a national commemorative landmark within Phnom Penh’s public road and park network. The municipal authorities and relevant state bodies coordinate surrounding public-space arrangements, particularly for national ceremonies.', '独立纪念碑是金边公共城市空间中的国家纪念性地标。周边道路与绿地由市政及相关国家部门协调管理，国家纪念活动期间可能有临时交通与参观限制。'),
    highlight: t('រាងចេតិយផ្កាឈូក និងរចនាបថសិល្បៈខ្មែរ។', 'The multi-tiered lotus-stupa silhouette and decorative motifs make a clear visual link to classical Khmer design.', '多层莲花塔身及高棉传统纹样具有鲜明的象征意义；环岛与道路结构也值得观察。'),
    route: [t('ចាប់ផ្ដើមពីសួនដែលអនុញ្ញាត', 'Start from a permitted neighbouring park', '从允许进入的周边公园出发'), t('ជ្រើសរើសទីតាំងថតរូបដោយមិនឆ្លងផ្លូវគ្រោះថ្នាក់', 'Frame the monument from a safe pavement', '在安全人行道选择全景角度'), t('បន្តទៅសួនរូបសំណាកព្រះបរមរតនកោដ្ឋ', 'Continue toward the nearby King Father memorial park', '继续前往附近的西哈努克太皇纪念公园')],
    photoSpots: [t('រូបរាងវិមានពីសួនខាងត្បូង', 'Monument silhouette from nearby parkland', '附近公园视角的纪念碑全景'), t('លម្អកំពូលវិមានពីចម្ងាយ', 'Lotus-stupa detail with a longer lens', '长焦拍摄莲花塔尖的纹样')],
    faq: [{ q: t('តើអាចដើរចូលទៅកណ្ដាលរង្វង់មូលបានទេ?', 'Should I walk into the traffic island?', '能直接走到环岛中央拍照吗？'), a: t('កុំឆ្លងកាត់ផ្លូវចរាចរណ៍មមាញឹក។ ប្រើតំបន់ទស្សនាដែលមានសុវត្ថិភាព។', 'Do not cross busy lanes for photographs; use designated pedestrian areas.', '不要为拍照横穿繁忙车道；请选择安全的公共观景区域。') }],
  },
  'sisowath-quay': {
    stewardship: t('ផ្លូវមាត់ទន្លេស៊ីសុវត្ថិជាលំហសាធារណៈកណ្ដាលរាជធានីភ្នំពេញ។ ការសម្អាត ផ្លូវថ្នល់ និងការរៀបចំសកម្មភាពសាធារណៈពាក់ព័ន្ធនឹងរដ្ឋបាលរាជធានី និងអាជ្ញាធរមូលដ្ឋាន។', 'Sisowath Quay is an urban waterfront public space, not a single gated attraction. Phnom Penh municipal and local authorities are responsible for public-realm matters such as roads, cleanliness and event arrangements along the promenade.', '西索瓦河滨是沿城市街道延伸的开放公共空间，并非单一收费景区。金边市政及地方相关部门负责沿线道路、公共环境维护和活动秩序。'),
    highlight: t('មើលទូក ទេសភាពទន្លេ និងជីវិតប្រចាំថ្ងៃតាមមាត់ទឹក។', 'The distinctive experience is the relationship between river traffic, waterfront promenades and everyday street life.', '这里的重点是河流、游船、滨水步道与街区活动的交织，黄昏时可观察河面光线变化。'),
    route: [t('ចាប់ផ្ដើមពីផ្លូវជិតព្រះបរមរាជវាំង', 'Begin by the riverside near the Royal Palace', '从王宫附近的河滨起步'), t('ដើរតាមមាត់ទឹកទៅទិសខាងជើង', 'Stroll north along the public promenade', '沿公共滨水步道向北慢行'), t('បន្តទៅតំបន់វត្តឧណ្ណាលោម', 'Continue toward the Wat Ounalom area', '可继续前往乌那隆寺周边')],
    photoSpots: [t('ទេសភាពទន្លេពីផ្លូវដើរសាធារណៈ', 'Open river view from the public promenade', '公共步道上的开阔河景'), t('ទូក និងពន្លឺល្ងាចលើទឹក', 'Boats in late-afternoon light', '傍晚河面与船只剪影')],
    faq: [{ q: t('តើផ្លូវមាត់ទន្លេមានសំបុត្រទេ?', 'Does the public promenade require a ticket?', '河滨步道需要门票吗？'), a: t('ផ្លូវដើរសាធារណៈជាទូទៅមិនលក់សំបុត្រទេ។ សេវាដំណើរទូកផ្សេងៗអាចមានថ្លៃ។', 'The public promenade is generally free; private cruises and other services may charge separately.', '公共步道通常无需门票，但私人游船等服务可能单独收费。') }],
  },
};
