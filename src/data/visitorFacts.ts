import type { Lang } from './attractions';
type Local = Record<Lang, string>;
const t = (km: string, en: string, zh: string): Local => ({ km, en, zh });

export const visitorFacts: Record<string, {
  category: Local;
  time: Local;
  admission: Local;
  duration: Local;
  walk: Local;
  vehicle: Local;
  etiquette: Local;
  experience: Local;
  source?: string;
}> = {
  'royal-palace': {
    category: t('ព្រះបរមរាជវាំង និងបេតិកភណ្ឌ', 'Working royal palace and cultural heritage', '王室建筑群／历史文化遗产'),
    time: t('ការចូលទស្សនាត្រូវតាមម៉ោងដែលព្រះបរមរាជវាំងប្រកាស។ អាចបិទពេលមានព្រះរាជពិធី។', 'Palace visitor sessions follow published gate arrangements; official ceremonies can cause closures. Check the entrance before visiting.', '宫内按照现场公布的参观时段开放；王室仪式可能临时关闭。出发前或到入口现场核实。'),
    admission: t('ការទស្សនាតំបន់ក្នុងព្រះបរមរាជវាំងត្រូវការសំបុត្រ។ សួនសាធារណៈខាងក្រៅឥតគិតថ្លៃ។ សូមពិនិត្យតម្លៃនៅច្រក។', 'Palace visitor areas are ticketed; the park outside the walls is free. Confirm the current palace price at the entrance.', '王宫内部参观区需购票；宫墙外公共公园免费。请在入口核实最新票价。'),
    duration: t('ប្រហែល ១.៥–២ ម៉ោងសម្រាប់តំបន់ដែលបើកទស្សនា', 'Allow around 1.5–2 hours for the public visitor precinct', '建议为开放的宫内参观区预留约 1.5–2 小时'),
    walk: t('ពីសួនព្រះបរមរាជវាំង ដើរតាមមហាវិថីសម្តេចសុធារសទៅច្រកភ្ញៀវ។', 'From the exterior park, follow Sothearos Boulevard to the designated visitor gate rather than approaching a private entrance.', '从王宫公园沿 Sothearos 大道步行至指定游客入口，不要进入王室私人通道。'),
    vehicle: t('ប្រាប់អ្នកបើកតុកតុកឱ្យចុះនៅច្រកភ្ញៀវព្រះបរមរាជវាំង។', 'Ask a tuk-tuk or taxi to drop you at the Royal Palace visitor entrance on Sothearos Boulevard.', '乘嘟嘟车或出租车时说明目的地为 Sothearos 大道王宫游客入口。'),
    etiquette: t('ស្លៀកពាក់បិទស្មា និងជង្គង់; កុំចូលតំបន់ហាមឃាត់។', 'Dress respectfully, covering shoulders and knees; keep to publicly opened paths and observe photography signs.', '遮盖肩膝、遵守拍照规定，不进入不对游客开放的王室区域。'),
    experience: t('មើលដំបូលមាស និងសាលាពិធី រៀនពីទំនាក់ទំនងរវាងព្រះរាជវាំងនិងទីក្រុង។', 'Compare the palace’s formal ceremonial spaces with the relaxed exterior park, then follow the roofline and courtyards to understand royal architecture.', '从宫墙外的公共生活场景进入有序的王宫礼仪空间，比较金色屋顶、宫殿庭院与城市景观。'),
  },
  'silver-pagoda': {
    category: t('ព្រះវិហារពុទ្ធសាសនាក្នុងបរិវេណរាជវាំង', 'Royal Buddhist temple within palace compound', '王宫内皇家佛教寺院'),
    time: t('អនុវត្តតាមម៉ោងចូលទស្សនាព្រះបរមរាជវាំង។ ពិធីអាចកែប្រែម៉ោង។', 'Visitor access follows the Royal Palace compound schedule and can change for ceremonies.', '通常随王宫参观区安排开放，仪式期间可能调整。'),
    admission: t('ពិនិត្យសំបុត្ររួមព្រះបរមរាជវាំងនៅច្រក; មិនមែនសួនឥតគិតថ្លៃទេ។', 'Check at the Royal Palace ticket office whether current admission includes the Silver Pagoda; it is not part of the free public park.', '请在王宫售票处核实是否包含银阁寺；这里不属于免费公共公园。'),
    duration: t('ប្រហែល ៣០–៦០ នាទី បន្ថែមលើការទស្សនារាជវាំង', 'Allow roughly 30–60 minutes within a palace visit', '可在王宫行程中另预留约 30–60 分钟'),
    walk: t('ចូលតាមច្រកព្រះបរមរាជវាំង រួចធ្វើតាមសញ្ញាទៅវត្តព្រះកែវមរកត។', 'Use the Royal Palace visitor entrance and follow the signed route within the compound.', '先从王宫游客入口入内，再沿现场标识前往银阁寺。'),
    vehicle: t('ប្រើច្រកភ្ញៀវព្រះបរមរាជវាំងជាគោលដៅចុះពីរថយន្ត។', 'Use the Royal Palace visitor entrance as the taxi or tuk-tuk drop-off point.', '嘟嘟车或出租车目的地设为王宫游客入口。'),
    etiquette: t('គោរពទីសក្ការៈ និងកុំថតរូបនៅតំបន់ដែលហាម។', 'Respect worship areas; avoid flash or interior photography where prohibited.', '尊重宗教空间，遵守室内摄影与闪光灯限制。'),
    experience: t('សង្កេតកម្រាលប្រាក់ និងវត្ថុព្រះពុទ្ធសាសនាដែលមានតម្លៃប្រវត្តិសាស្ត្រ។', 'Focus on the stories behind the silver tiles and royal Buddhist objects, not just the building’s exterior.', '重点了解银砖地面、佛像与王室佛教供奉传统，而不只是拍摄建筑外观。'),
  },
  'national-museum': {
    category: t('សារមន្ទីរសិល្បៈ និងបុរាណវត្ថុជាតិ', 'National art and archaeology museum', '国家艺术与考古博物馆'),
    time: t('រៀងរាល់ថ្ងៃ ០៨:០០–១៧:០០; លក់សំបុត្រចុងក្រោយ ១៦:៣០ (គេហទំព័រសារមន្ទីរ)', 'Daily 08:00–17:00; last ticket at 16:30 (museum visitor information).', '官方公布每天 08:00–17:00，最晚售票 16:30。'),
    admission: t('ភ្ញៀវបរទេសអាយុ ១៨+ $10; អាយុ ១០–១៧ $5; ជនជាតិខ្មែរ ៥០០ រៀល; កុមារ និងក្រុមសិស្សឥតគិតថ្លៃ។', 'Museum-listed prices: foreign adults 18+ US$10; foreigners 10–17 US$5; Cambodian visitors 500 riels; children and school groups free.', '官网票价：外国成人（18 岁以上）10 美元、10–17 岁 5 美元；柬埔寨游客 500 瑞尔；儿童及学校团体免费。'),
    duration: t('ប្រហែល ១–២ ម៉ោងសម្រាប់បន្ទប់តាំងពិព័រណ៍ និងទីធ្លា', 'Allow roughly 1–2 hours for galleries and the courtyard', '建议预留约 1–2 小时参观展厅及内庭院'),
    walk: t('ពីព្រះបរមរាជវាំង ដើរទៅខាងជើងតាមផ្លូវទី ១៣; ច្រកភ្ញៀវនៅជ្រុងផ្លូវទី ១៣ និង ១៧៨។', 'Walk north from the palace area to Street 13; the museum visitor entrance is at Streets 13 and 178.', '从王宫区域往北步行至 13 号街，游客入口位于 13 号街与 178 号街交角。'),
    vehicle: t('ស្នើអ្នកបើកឱ្យទៅជ្រុងផ្លូវទី ១៣ និង ១៧៨ ជិតសារមន្ទីរជាតិ។', 'For tuk-tuk or taxi, specify the National Museum entrance at Streets 13 and 178.', '乘车请定位国家博物馆 13 号街与 178 号街入口。'),
    etiquette: t('ហាមថតរូបក្នុងសាលតាំងពិព័រណ៍; អាចថតនៅខាងក្រៅ និងទីធ្លា។', 'Photography is not permitted in galleries; the exterior and courtyard may be photographed under museum rules.', '官方规定展厅内不得拍照，但可拍摄建筑外部与庭院；请遵守馆内标识。'),
    experience: t('ប្រៀបធៀបរូបចម្លាក់សម័យមុនអង្គរ និងសម័យអង្គរ ដើម្បីស្គាល់ការផ្លាស់ប្ដូរសិល្បៈខ្មែរ។', 'Trace changing Khmer artistic styles across pre-Angkorian and Angkorian works, then pause in the traditional central courtyard.', '通过前吴哥与吴哥时期雕塑比较造像风格的演变，再在庭院观察高棉传统建筑。'),
    source: 'https://nmc.gov.kh/index.php/pages/museum-admission',
  },
  'wat-ounalom': {
    category: t('វត្តពុទ្ធសាសនាកំពុងប្រើប្រាស់', 'Active Buddhist monastery', '仍在使用的佛教寺院'),
    time: t('ជាទូទៅអាចទស្សនាពេលថ្ងៃ; ពិធីសាសនាអាចកំណត់តំបន់ចូល។', 'Visit during daylight and follow temple guidance; ceremonies may restrict particular areas.', '宜在白天参观；仪式期间部分殿宇可能限制入内。'),
    admission: t('ការចូលតំបន់សាធារណៈជាទូទៅឥតគិតថ្លៃ; សូមពិនិត្យនៅនឹងកន្លែង។', 'General temple access is usually free; check local guidance and distinguish donations from tickets.', '寺院公共区域一般免费，捐赠与门票不同；请现场核实。'),
    duration: t('ប្រហែល ៣០–៦០ នាទី', 'Allow around 30–60 minutes', '建议预留约 30–60 分钟'),
    walk: t('ពីសារមន្ទីរជាតិ ដើរទៅទិសមាត់ទន្លេតាមផ្លូវសាធារណៈ។', 'Walk from the National Museum toward the riverfront, using public streets and temple entrances.', '可从国家博物馆沿公共街道往河滨方向步行至寺门。'),
    vehicle: t('ស្នើអ្នកបើកឱ្យចុះនៅច្រកវត្តឧណ្ណាលោម មិនមែនច្រករាជវាំង។', 'Ask for Wat Ounalom’s own temple entrance, not the Royal Palace gate.', '乘车请定位乌那隆寺寺门，不要使用王宫公园定位。'),
    etiquette: t('ស្លៀកពាក់សមរម្យ ដោះស្បែកជើងបើតម្រូវ និងកុំរំខានព្រះសង្ឃ។', 'Cover shoulders and knees, remove shoes where required and avoid disturbing monks or worshippers.', '遮盖肩膝，按要求脱鞋，避免打扰僧侣与信众。'),
    experience: t('សង្កេតព្រះវិហារ ចេតិយ និងការរស់នៅសាសនាដោយគោរពភាពស្ងប់។', 'Observe the layered shrines and stupas as a living centre of Buddhist practice, rather than treating ceremonies as performances.', '在不打扰仪式的前提下观察佛殿、佛塔与僧团日常，理解这里的活态宗教意义。'),
  },
  'independence-monument': {
    category: t('វិមានអនុស្សាវរីយ៍ជាតិ និងទីធ្លាសាធារណៈ', 'National memorial in a public roundabout', '国家纪念碑／公共环岛景观'),
    time: t('អាចមើលពីខាងក្រៅពេលថ្ងៃឬយប់; ពិធីជាតិអាចកំណត់ផ្លូវ។', 'Exterior visible day and night; special ceremonies may affect surrounding roads and access.', '外观通常全天可见；国家纪念活动可能实施道路管制。'),
    admission: t('មើលពីតំបន់សាធារណៈឥតគិតថ្លៃ; កុំឆ្លងចូលរង្វង់មូល។', 'Free to view from safe public areas; the traffic island is not a visitor entrance.', '从安全公共区域观赏免费；交通环岛中心并非游客入口。'),
    duration: t('ប្រហែល ២០–៤០ នាទី', 'Allow about 20–40 minutes', '建议预留约 20–40 分钟'),
    walk: t('ពីតំបន់ព្រះបរមរាជវាំងទៅខាងត្បូងតាមផ្លូវសាធារណៈ ហើយឈប់នៅសួនជិតវិមាន។', 'Walk south from the palace district along public sidewalks and stop in a neighbouring park for views.', '从王宫区沿人行道向南走，在纪念碑周边公园寻找安全观景点。'),
    vehicle: t('ស្នើអ្នកបើកឱ្យចុះនៅសួនជិតប្រសព្វមហាវិថីនរោត្តម និងព្រះសីហនុ។', 'Request a drop-off beside the park near Norodom and Sihanouk Boulevards, not on the roundabout.', '请在诺罗敦大道与西哈努克大道交汇处附近公园下车，不要在环岛车道停车。'),
    etiquette: t('គោរពពិធីរំលឹក និងសុវត្ថិភាពចរាចរណ៍។', 'Respect memorial ceremonies and road restrictions; never step into active traffic for photographs.', '尊重纪念仪式与交通管制，勿为拍照进入车流。'),
    experience: t('ប្រៀបធៀបរូបរាងចេតិយផ្កាឈូកនឹងសួនទីក្រុងជុំវិញ។', 'Study the lotus-stupa silhouette, its Khmer decorative rhythm and its relationship to the boulevard axis.', '观察莲花塔形、传统纹饰与城市大道轴线的关系。'),
  },
  'sisowath-quay': {
    category: t('ផ្លូវដើរសាធារណៈមាត់ទន្លេ', 'Public riverfront promenade', '开放式城市河滨步道'),
    time: t('ផ្លូវដើរសាធារណៈមិនមានម៉ោងលក់សំបុត្រ; គួរដើរពេលព្រឹក ឬល្ងាច។', 'Open public promenade without ticket-gate hours; mornings and late afternoons are more comfortable.', '开放式公共步道没有统一售票时间；清晨、傍晚较适合散步。'),
    admission: t('ដើរលេងឥតគិតថ្លៃ; កប៉ាល់ទេសចរណ៍ និងសេវាផ្សេងគិតថ្លៃដាច់ដោយឡែក។', 'Walking the public promenade is free; cruises and private services charge separately.', '公共步道免费，游船与私人服务另行收费。'),
    duration: t('ប្រហែល ៤៥–៩០ នាទី សម្រាប់ផ្នែកជិតរាជវាំង', 'Allow around 45–90 minutes for a relaxed central section walk', '王宫附近一段建议预留约 45–90 分钟'),
    walk: t('ចាប់ពីមុខព្រះបរមរាជវាំង ដើរតាមមាត់ទន្លេទៅទិសខាងជើងឆ្ពោះទៅវត្តឧណ្ណាលោម។', 'Begin by the palace-facing waterfront and walk north toward the Wat Ounalom stretch.', '从王宫前的河滨区域出发，沿公共步道向北往乌那隆寺方向慢行。'),
    vehicle: t('ប្រាប់អ្នកបើកឱ្យចុះនៅក្បែរព្រះបរមរាជវាំង ឬវត្តឧណ្ណាលោមតាមផ្លូវស៊ីសុវត្ថិ។', 'Use a named drop-off such as the palace riverfront or Wat Ounalom along Sisowath Quay.', '可选择西索瓦河滨的王宫前或乌那隆寺附近作为下车点。'),
    etiquette: t('មិនចោលសំរាម ប្រយ័ត្នផ្លូវ និងកុំទៅជិតគែមទឹកពេលយប់។', 'Use marked crossings, avoid littering and take care near the river edge after dark.', '走正规过街设施、不乱丢垃圾，夜间注意河岸边缘安全。'),
    experience: t('មើលទូកចេញចូល ពន្លឺលើទឹក និងសកម្មភាពប្រចាំថ្ងៃរបស់អ្នកភ្នំពេញ។', 'Watch boats and riverside activity, then contrast the open waterfront with the royal quarter’s formal architecture.', '观察河上船只、黄昏光线与本地生活，再对比王宫建筑的庄重空间。'),
  },
};
