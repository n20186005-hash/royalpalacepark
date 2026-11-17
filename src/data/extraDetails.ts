import type { Lang } from './attractions';
type Local = Record<Lang, string>;
const t = (km: string, en: string, zh: string): Local => ({ km, en, zh });
const faq = (q: Local, a: Local) => [{ q, a }];

export const extraDetails = {
  'wat-botum': {
    stewardship: t('វត្តបទុមវតីជាវត្តពុទ្ធសាសនាកំពុងប្រើប្រាស់។ ព្រះសង្ឃនិងគណៈគ្រប់គ្រងវត្តរៀបចំពិធី និងការចូលទស្សនា។', 'Wat Botum is an active Buddhist monastery, with worship and access to shrines overseen by its resident monastic community and temple administrators.', '波东寺是仍在使用的佛教寺院，宗教活动与殿宇出入由寺院僧团及寺务人员管理，而非按普通城市公园管理。'),
    highlight: t('ព្រះវិហារបែបខ្មែរ និងចេតិយនៅក្នុងបរិវេណវត្ត។', 'The ornate roofs, shrine halls and stupas offer a close view of Khmer Buddhist craftsmanship.', '金色檐口、重层屋顶与佛塔展现高棉佛教艺术，仍是本地宗教生活的一部分。'),
    route: [t('ពីព្រះបរមរាជវាំងដើរទៅខាងត្បូង', 'Walk south from the palace area', '从王宫区沿公共道路向南步行'), t('ចូលតាមទ្វារវត្តដែលបើកសម្រាប់ភ្ញៀវ', 'Use a public temple entrance', '经开放的寺门进入'), t('បន្តទៅសួនវត្តបទុម', 'Continue to Wat Botum Park', '参观后前往波东寺公园')],
    photoSpots: [t('ទ្វារវត្ត និងដំបូលព្រះវិហារ', 'Temple gate and shrine roofline', '寺门与佛殿檐口'), t('ចេតិយពីទីធ្លាដែលអនុញ្ញាត', 'Stupas from permitted courtyards', '从允许进入的庭院拍摄佛塔')],
    faq: faq(t('តើអាចថតរូបពេលមានពិធីឬ?', 'Can I photograph ceremonies?', '可以拍摄宗教仪式吗？'), t('សូមសួរអ្នកទទួលខុសត្រូវជាមុន និងកុំរំខានអ្នកបួស។', 'Ask permission first and never interrupt worship.', '请事先征询管理人员同意，勿打扰信众。')),
  },
  'wat-botum-park': {
    stewardship: t('សួនវត្តបទុមជាលំហសាធារណៈរបស់ទីក្រុង។ ការថែទាំផ្លូវដើរ និងសួនច្បារពាក់ព័ន្ធនឹងអាជ្ញាធររាជធានីភ្នំពេញ និងអាជ្ញាធរមូលដ្ឋាន។', 'Wat Botum Park is a public urban green space. Municipal and local authorities coordinate upkeep of paths, landscaping and event use.', '波东寺公园是金边市区公共绿地，道路、绿化与公共活动秩序由市政及地方相关部门协调维护。'),
    highlight: t('ផ្លូវដើរមានដើមឈើ និងទេសភាពវិមានមិត្តភាព។', 'Tree-shaded paths and views toward the Friendship Monument make this a relaxed royal-quarter stop.', '树荫步道与友谊纪念碑景观组合，适合观察金边的公园生活。'),
    route: [t('ចាប់ផ្ដើមពីសួនខាងជើង', 'Begin at the northern park edge', '从公园北侧进入'), t('ដើរតាមផ្លូវសាធារណៈក្នុងសួន', 'Walk the public park paths', '沿公共步道穿过树荫区'), t('បន្តទៅវិមានមិត្តភាព', 'Continue to the Friendship Monument', '继续到柬越友谊纪念碑')],
    photoSpots: [t('ផ្លូវដើរនិងដើមឈើ', 'Tree-lined park paths', '林荫步道'), t('ទិដ្ឋភាពវិមានពីចម្ងាយ', 'Distant monument framing', '纪念碑远景')],
    faq: faq(t('តើសួននេះគិតថ្លៃទេ?', 'Is there a park admission fee?', '公园需要门票吗？'), t('តំបន់សាធារណៈអាចដើរលេងដោយឥតគិតថ្លៃ។', 'The public park grounds are free to walk through.', '公共公园区域可免费步行游览。')),
  },
  'friendship-monument': {
    stewardship: t('វិមាននេះជាកន្លែងរំលឹកក្នុងសួនសាធារណៈ។ អាជ្ញាធររាជធានី និងស្ថាប័នពាក់ព័ន្ធរៀបចំការថែទាំ និងពិធីរំលឹក។', 'This state commemorative monument sits in a public park; relevant public authorities coordinate its upkeep and ceremonial use.', '柬越友谊纪念碑位于公共公园内，纪念设施维护及官方纪念活动由相关公共机构协调。'),
    highlight: t('ក្រុមរូបចម្លាក់និងទីលានបើកចំហជាចំណុចសំខាន់។', 'Its figurative sculpture and formal plinth are best interpreted together with the open plaza and surrounding trees.', '人物雕塑组合、厚重基座和周围开放广场构成明显的纪念性空间。'),
    route: [t('ចូលសួនវត្តបទុមតាមផ្លូវសាធារណៈ', 'Enter Wat Botum Park via public paths', '从波东寺公园公共入口进入'), t('មើលវិមានពីមុខ', 'View the monument from the front', '在正面观察雕塑与基座'), t('ដើរជុំវិញសួនដោយគោរពពិធី', 'Walk the surrounding park respectfully', '沿公园步道观察不同角度')],
    photoSpots: [t('មុខវិមានពីទីលាន', 'Front elevation from the plaza', '广场正面全景'), t('រូបចម្លាក់និងដើមឈើ', 'Sculpture framed by park trees', '以树木衬托雕塑主体')],
    faq: faq(t('តើវិមានឯករាជ្យនៅទីនេះឬ?', 'Is this the Independence Monument?', '这就是独立纪念碑吗？'), t('មិនមែនទេ។ នេះជាវិមានផ្សេងគ្នានៅសួនវត្តបទុម។', 'No. This is a different memorial in Wat Botum Park.', '不是，这是波东寺公园内另一处独立的纪念碑。')),
  },
  'sihanouk-memorial': {
    stewardship: t('ព្រះបរមរូបជាវិមានរំលឹកជាតិក្នុងសួនសាធារណៈ។ ការថែទាំ និងពិធីរំលឹកពាក់ព័ន្ធនឹងអាជ្ញាធរសាធារណៈ។', 'The King Father memorial is a national commemorative site set within a public park; public authorities oversee the memorial space and ceremonies.', '西哈努克太皇纪念碑是公共公园中的国家纪念场所，纪念设施与官方仪式由相关公共机构管理。'),
    highlight: t('រូបសំរិទ្ធនិងសំណង់ខ្ពស់បែបខ្មែរ។', 'A bronze statue beneath a Khmer-style ceremonial structure is the key visual feature.', '青铜像与高耸的高棉式纪念亭相互呼应，是核心建筑看点。'),
    route: [t('មើលវិមានឯករាជ្យជាមុន', 'Start at Independence Monument', '先参观独立纪念碑'), t('ដើរទៅសួនខាងកើតដោយប្រុងប្រយ័ត្ន', 'Cross safely to the eastern memorial park', '安全过街前往东侧公园'), t('មើលព្រះបរមរូបពីខាងមុខនិងចំហៀង', 'View the memorial from front and side', '从正面与侧面观察纪念亭')],
    photoSpots: [t('រូបសំណាកនៅកណ្ដាលសំណង់', 'Statue beneath the canopy', '亭下青铜雕像'), t('ទិដ្ឋភាពសំណង់ទាំងមូលពីសួន', 'Full memorial from the park path', '公园步道上的建筑整体')],
    faq: faq(t('តើអាចរួមដំណើរជាមួយវិមានឯករាជ្យទេ?', 'Can I combine it with Independence Monument?', '可与独立纪念碑一起参观吗？'), t('បាន ព្រោះសួនរំលឹកស្ថិតនៅខាងកើតវិមានឯករាជ្យ។', 'Yes. The memorial park is east of Independence Monument.', '可以，两处距离较近，可组成步行纪念地标路线。')),
  },
  'chaktomuk-hall': {
    stewardship: t('សាលចតុមុខជាទីតាំងសន្និសីទនិងការសម្ដែងវប្បធម៌។ ការចូលអគារត្រូវតាមអ្នករៀបចំកម្មវិធី និងអ្នកគ្រប់គ្រងទីតាំង។', 'Chaktomuk Conference Hall is an event and cultural venue; access to its interior follows the venue operator’s and event organisers’ arrangements.', '四臂湾会议厅是文化演出与会议场所，内部开放依场馆运营方和活动主办单位安排，外观与内部参观应加以区分。'),
    highlight: t('ដំបូលរាងកោងនិងទំនាក់ទំនងជាមួយមាត់ទន្លេ។', 'Its sweeping curved roof and broad frontage express Cambodia’s modern architectural experimentation.', '弧线屋顶、开阔正面与河岸环境之间的关系，是理解新高棉建筑的重要切入点。'),
    route: [t('ចាប់ផ្ដើមពីមាត់ទន្លេជិតព្រះបរមរាជវាំង', 'Begin along the palace riverfront', '从王宫附近河滨开始'), t('ដើរទៅសាលចតុមុខ', 'Walk toward Chaktomuk Hall', '沿公共步道前往会议厅'), t('មើលខាងក្រៅដោយមិនរំខានកម្មវិធី', 'Study the exterior without disrupting events', '从公共区域观察外观，不干扰活动')],
    photoSpots: [t('ដំបូលកោងពីចិញ្ចើមផ្លូវ', 'Curving roof from the pavement', '人行道上的弧形屋顶'), t('អគារនិងមាត់ទន្លេពីចម្ងាយ', 'Riverfront setting from a wider view', '建筑与河滨的宽幅构图')],
    faq: faq(t('តើអាចចូលមើលខាងក្នុងគ្រប់ពេលឬ?', 'Can visitors enter at any time?', '可以随时进入内部吗？'), t('ទេ ការចូលអាស្រ័យលើកម្មវិធី និងសេចក្ដីជូនដំណឹង។', 'No. Interior access depends on the event schedule and venue notices.', '不可以，内部开放取决于活动安排及场馆公告。')),
  },
  'central-market': {
    stewardship: t('ផ្សារធំថ្មីជាផ្សារសាធារណៈដែលមានការគ្រប់គ្រងផ្នែកពាណិជ្ជកម្ម និងអាជ្ញាធរមូលដ្ឋាន។ តូបនីមួយៗដំណើរការដោយអាជីវករ។', 'Central Market operates as a commercial public market under market management and local administrative oversight; individual stalls are run by traders.', '中央市场是商业性公共市场，由市场运营管理方及地方相关机构协调秩序，具体摊位由各商户经营。'),
    highlight: t('ដំបូលមូលកណ្ដាលនិងអាគារលាតសន្ធឹងបួនទិស។', 'The geometric Art Deco central dome and radiating halls organise the lively market circulation.', '装饰艺术风格的中央穹顶与四向市场廊翼，将几何建筑语言与热闹的交易空间结合。'),
    route: [t('ចូលពីច្រកសាធារណៈ', 'Enter through a public market gate', '从开放的市场入口进入'), t('មើលដំបូលមូលកណ្ដាល', 'Study the central dome', '先观察中央穹顶及采光结构'), t('ដើរតាមស្លាបផ្សារដោយគោរពអ្នកលក់', 'Explore a radiating market wing respectfully', '再走一条侧翼市场廊道，尊重商户')],
    photoSpots: [t('អគារខាងក្រៅនិងដំបូលមូល', 'Dome from the exterior square', '广场外侧穹顶全景'), t('លំនាំធរណីមាត្រនៅសាលកណ្ដាល', 'Geometric interior ceiling where permitted', '在允许拍摄处观察内部几何屋顶')],
    faq: faq(t('តើត្រូវទិញសំបុត្រចូលផ្សារទេ?', 'Is there an entry ticket?', '进入中央市场要门票吗？'), t('ការចូលផ្សារជាទូទៅឥតគិតថ្លៃ; ការទិញទំនិញគិតថ្លៃដោយឡែក។', 'Market entry is generally free; purchases are priced by individual traders.', '通常可免费进入市场；购物费用由各商户自行收取。')),
  },
} as const;
