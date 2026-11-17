import type { Lang } from './attractions';
const t = (km: string, en: string, zh: string): Record<Lang, string> => ({ km, en, zh });
const entry = (stewardship: ReturnType<typeof t>, highlight: ReturnType<typeof t>, route: ReturnType<typeof t>[], photoSpots: ReturnType<typeof t>[], q: ReturnType<typeof t>, a: ReturnType<typeof t>) => ({ stewardship, highlight, route, photoSpots, faq: [{ q, a }] });

export const moreDetails = {
  'wat-phnom': entry(
    t('វត្តភ្នំជាទីសក្ការៈសកម្ម ដែលព្រះសង្ឃនិងអ្នកគ្រប់គ្រងវត្តថែទាំតំបន់ព្រះវិហារ។ កន្លែងបើកចំហជុំវិញទាក់ទងនឹងការគ្រប់គ្រងទីក្រុង។', 'Wat Phnom is an active religious site: the monastic community manages worship areas, while surrounding public grounds involve local civic upkeep.', '塔山寺属于持续使用的宗教场所，佛殿礼仪与出入由僧团和寺务管理；外围公共绿地另涉及地方公共管理。'),
    t('ព្រះវិហារនៅលើកូនភ្នំ និងជណ្ដើររូបនាគជាសញ្ញាសម្គាល់។', 'The naga stairway and hilltop sanctuary make a striking contrast with the flat city grid.', '盘旋阶梯与山顶佛殿形成金边平坦街区中罕见的高差景观。'),
    [t('ចូលពីផ្លូវលេខ ៩៦', 'Approach from Street 96', '从 96 街附近入口靠近山丘'), t('ឡើងជណ្ដើរទៅព្រះវិហារ', 'Climb the decorated stairway', '沿蛇形栏杆阶梯上山'), t('មើលកន្លែងបូជាដោយស្ងៀមស្ងាត់', 'Visit the sanctuary respectfully', '安静观察佛殿与周边祭祀设施')],
    [t('ជណ្ដើររូបនាគ', 'Naga staircase in context', '纳迦阶梯全景'), t('ដំបូលព្រះវិហារពីក្រោម', 'Sanctuary roof from below', '从山脚仰拍佛殿屋顶')],
    t('តើអាចចូលដោយមិនឡើងជណ្ដើរទេ?', 'Can I avoid climbing steps?', '一定要爬楼梯吗？'), t('ការមើលពីក្រោមអាចធ្វើបាន ប៉ុន្តែព្រះវិហារស្ថិតលើកូនភ្នំ។', 'The hill can be viewed from below, but reaching the sanctuary involves an ascent.', '可在山脚观赏外观，但佛殿位于山顶，需要上行。')),
  'post-office': entry(
    t('អគារនេះត្រូវបានប្រើសម្រាប់សេវាប្រៃសណីយ៍។ សេវាខាងក្នុងស្ថិតក្រោមអ្នកប្រតិបត្តិការប្រៃសណីយ៍ ខណៈទីលានជាលំហសាធារណៈ។', 'The building remains linked to postal operations; interior service areas are controlled by postal management and the square is public urban space.', '中央邮局仍与邮政服务相关，室内业务区域由邮政运营方管理；邮政广场为城市公共空间。'),
    t('មុខអគារពណ៌លឿងនិងទីលានជុំវិញ។', 'The building’s balanced façade and the surrounding historic block reward careful observation.', '黄色立面与广场围合出的殖民时期历史街区尺度是主要看点。'),
    [t('ចាប់ផ្តើមពីទីលានប្រៃសណីយ៍', 'Start in Post Office Square', '从邮政广场开始'), t('សង្កេតមុខអគារប្រៃសណីយ៍', 'Study the façade and openings', '观察中央邮局立面细节'), t('ដើរតាមផ្លូវអគារបុរាណ', 'Continue along adjacent historic streets', '沿周围历史街道继续步行')],
    [t('មុខអគារពីទីលាន', 'Full façade across the square', '广场对望邮局正立面'), t('លម្អិតបង្អួច', 'Shaded window details', '门窗与装饰局部')],
    t('តើអាចចូលខាងក្នុងបានទេ?', 'May I enter the building?', '可以进入邮局内部吗？'), t('តំបន់សេវាអាចបើកតាមម៉ោងធ្វើការ។ កុំចូលតំបន់ហាមឃាត់។', 'Only public service areas may be accessible during business hours; respect restricted rooms.', '开放的业务大厅可能可进入，办公与限制区域不可擅入。')),
  'national-library': entry(
    t('បណ្ណាល័យជាតិត្រូវបានគ្រប់គ្រងជាស្ថាប័នវប្បធម៌សាធារណៈ។ ការចូលប្រើសៀវភៅ ឯកសារ និងបន្ទប់អានស្ថិតក្រោមបទបញ្ជារបស់បណ្ណាល័យ។', 'The National Library is a public cultural institution; reading-room access, collections and photography follow library administration rules.', '国家图书馆属于公共文化机构，阅览室、馆藏使用与拍照须遵守馆方管理规定。'),
    t('ជួរឈរនិងមុខអគារផ្លូវការនៃទសវត្សរ៍ ១៩២០។', 'The formal entrance portico and early-twentieth-century plan are architectural highlights.', '二十世纪二十年代的入口柱廊及对称平面布局值得观察。'),
    [t('ទៅច្រកចូលមុខ', 'Begin at the main entrance', '从图书馆主入口开始'), t('មើលជួរឈរនិងទីធ្លា', 'Observe portico and grounds', '观察柱廊与庭院'), t('ពិនិត្យបទបញ្ជាមុនចូលអាន', 'Check reading-room rules before entering', '了解阅览室规定后再入馆')],
    [t('មុខអគារពីច្រក', 'Portico from front approach', '正面柱廊'), t('សួនមុខបណ្ណាល័យ', 'Building framed by its grounds', '院落与建筑整体')],
    t('តើអាចថតរូបក្នុងបណ្ណាល័យទេ?', 'Can I photograph inside?', '馆内可以拍照吗？'), t('សូមសួរបុគ្គលិក ព្រោះឯកសារនិងបន្ទប់អានអាចមានកម្រិត។', 'Ask staff first; collections and reading rooms may have restrictions.', '请先询问工作人员，部分馆藏和阅览室可能限制拍摄。')),
  'night-market': entry(
    t('ផ្សាររាត្រីជាទីធ្លាពាណិជ្ជកម្មពេលល្ងាច។ ការរៀបចំតូប និងសណ្តាប់ធ្នាប់ពាក់ព័ន្ធនឹងអ្នករៀបចំផ្សារ និងអាជ្ញាធរមូលដ្ឋាន។', 'The night market operates as an evening trading space; stall allocation and public order involve market organisers and local authorities.', '金边夜市是晚间交易空间，摊位运营由市场组织方与商户负责，公共秩序涉及地方部门。'),
    t('តូបអាហារនិងលំហអង្គុយជិតមាត់ទន្លេ។', 'Open-air food seating and illuminated stall rows reveal the market’s informal social atmosphere.', '夜间灯光、开放美食区与河滨相邻的市民活动是观察重点。'),
    [t('ទៅពីផ្លូវស៊ីសុវត្ថិ', 'Arrive from Sisowath Quay', '从西索瓦河滨步道进入'), t('ដើរជួរតូបលក់ទំនិញ', 'Browse the merchandise stalls', '沿商品摊位慢行'), t('សម្រាកនៅតំបន់អាហារ', 'Finish at the food and seating area', '在餐食区域休息')],
    [t('ជួរតូបពេលយប់', 'Lit market stalls after dusk', '入夜后的灯光摊位'), t('លំហអាហារបើកចំហ', 'Food court in context', '开放式美食区域')],
    t('តើផ្សារបើករាល់យប់ទេ?', 'Is it open every night?', '夜市每天都开放吗？'), t('ម៉ោងនិងថ្ងៃបើកអាចប្រែប្រួល។ ពិនិត្យមុនចេញដំណើរ។', 'Operating days may change; check current listings before travelling.', '营业日期可能调整，请出发前核实最新安排。')),
  'phsar-chas': entry(
    t('ផ្សារចាស់ប្រមូលផ្តុំតូបឯកជន និងកន្លែងលក់តាមផ្លូវ។ អាជ្ញាធរមូលដ្ឋានពាក់ព័ន្ធនឹងសណ្តាប់ធ្នាប់សាធារណៈ។', 'Old Market consists of privately run stalls and street trade; local authorities oversee public-street order rather than a single museum operator.', '老市场以个体商户和沿街摊位为主，公共街道秩序由地方管理部门协调，并非统一管理的博物馆。'),
    t('ផ្ទះល្វែងចាស់និងទំនិញតាមផ្លូវ។', 'Older shophouses and everyday street commerce show the quarter’s working character.', '老式店屋、密集货摊与商贩日常交易是最有辨识度的场景。'),
    [t('ចូលពីផ្លូវលេខ ១៣', 'Enter via Street 13', '由 13 街靠近老市场'), t('ដើរតាមតូបលក់ទំនិញ', 'Explore the traditional stalls', '沿传统摊位区缓步'), t('បន្តទៅទីលានប្រៃសណីយ៍', 'Continue toward Post Office Square', '继续前往附近邮政广场')],
    [t('ផ្ទះល្វែងនិងតូប', 'Shophouse and stall frontage', '店屋与摊位街景'), t('ផ្លូវផ្សារពេលថ្ងៃ', 'Daytime market lane', '白天市场巷道')],
    t('តើទីនេះជាផ្សារធំថ្មីទេ?', 'Is this Central Market?', '这里是中央市场吗？'), t('ទេ។ ផ្សារចាស់និងផ្សារធំថ្មីជាទីតាំងផ្សេងគ្នា។', 'No, Phsar Chas and Phsar Thmei are different markets.', '不是，老市场 Phsar Chas 与中央市场 Phsar Thmei 是两个不同地点。')),
  'wat-langka': entry(
    t('វត្តលង្កាជាវត្តកំពុងប្រើប្រាស់ ដែលសហគមន៍ព្រះសង្ឃ និងអ្នកគ្រប់គ្រងវត្តរៀបចំពិធីសាសនា។', 'Wat Langka is a living Buddhist monastery; resident monks and temple administrators oversee worship and visitor conduct.', '朗卡寺仍为日常使用的佛教寺院，僧团与寺务管理方负责宗教活动及参观秩序。'),
    t('ដំបូលព្រះវិហារនិងចេតិយជាចំណុចសំខាន់ ជាមួយនឹងភាពស្ងប់ស្ងាត់នៅកណ្ដាលក្រុង។', 'Decorated sanctuary roofs and stupas contrast with the busy streets by Independence Monument.', '重檐佛殿与佛塔同独立纪念碑周边的城市道路形成鲜明对比。'),
    [t('ទៅច្រកវត្ត', 'Approach the monastery gateway', '由寺院入口进入'), t('មើលស្ថាបត្យកម្មពីទីធ្លា', 'View shrines from the courtyard', '在庭院观察殿宇与佛塔'), t('ចេញដោយមិនរំខានពិធី', 'Leave quietly during services', '不打扰宗教活动后离开')],
    [t('ច្រកទ្វារវត្ត', 'Gateway and roofline', '寺院山门与屋顶线条'), t('ចេតិយក្នុងបរិវេណ', 'Stupas within the compound', '院内佛塔群')],
    t('តើអាចចូលពេលមានពិធីទេ?', 'Can I enter during a ceremony?', '举行法会时能进入吗？'), t('អនុវត្តតាមការណែនាំរបស់វត្ត ហើយកុំរំខានអ្នកបួស។', 'Follow posted temple guidance and do not interrupt worship.', '须遵守现场寺院指引，不干扰僧侣与信众。')),
  'tuol-sleng': entry(
    t('សារមន្ទីរប្រល័យពូជសាសន៍ទួលស្លែងជាស្ថាប័នរំលឹកប្រវត្តិសាស្ត្រ។ បុគ្គលិកសារមន្ទីរគ្រប់គ្រងការចូលទស្សនា និងការអភិរក្សភស្តុតាង។', 'Tuol Sleng is a memorial museum; its museum administration manages tickets, preservation and visitor conduct at this sensitive historic site.', '吐斯廉是历史纪念博物馆，门票、史料保护与参观秩序由馆方负责；应尊重其纪念场所性质。'),
    t('បន្ទប់រៀនចាស់និងការតាំងពិព័រណ៍ភស្តុតាងប្រវត្តិសាស្ត្រ។', 'Former classrooms and preserved records make the history tangible and deeply affecting.', '原教室、拘禁空间及文献展示让沉重历史具象可见。'),
    [t('ចាប់ផ្តើមពីច្រកសារមន្ទីរ', 'Begin with the museum introduction', '由入口历史说明开始'), t('មើលបន្ទប់តាមលំដាប់', 'Follow the exhibition sequence', '依展区顺序阅读文献'), t('សម្រាកនិងរំលឹកនៅទីធ្លា', 'Allow a quiet pause in the grounds', '在庭院安静整理所见')],
    [t('មុខអគារសាលារៀន', 'Exterior classroom block where permitted', '许可范围内的教学楼外观'), t('ទីធ្លារំលឹក', 'Memorial courtyard without disturbing others', '尊重参观者的纪念庭院')],
    t('តើសមស្របសម្រាប់កុមារទេ?', 'Is it suitable for young children?', '适合带年幼儿童吗？'), t('ការតាំងពិព័រណ៍មានខ្លឹមសាររឹងមាំអំពីអំពើហិង្សា។ អ្នកមើលថែគួរពិចារណាជាមុន។', 'The exhibitions address torture and violence; caregivers should consider the material beforehand.', '展陈涉及酷刑和暴力，家长应依据儿童年龄与承受能力评估。')),
  'olympic-stadium': entry(
    t('ពហុកីឡដ្ឋានជាទីកន្លែងកីឡាសាធារណៈ។ អ្នកគ្រប់គ្រងទីលាន និងអ្នករៀបចំព្រឹត្តិការណ៍កំណត់តំបន់ចូល និងការប្រើប្រាស់។', 'The stadium is a functioning sports facility; venue managers and event organisers control entry and use of restricted areas.', '奥林匹克体育场仍供体育活动使用，场地管理方和赛事组织者决定可进入区域与使用方式。'),
    t('រចនាសម្ព័ន្ធបេតុងនិងជណ្តើរធំៗនៃស្ថាបត្យកម្មខ្មែរថ្មី។', 'Large concrete terraces and geometric grandstand forms express New Khmer Architecture.', '宏大的混凝土阶梯、看台与几何结构体现“新高棉建筑”风格。'),
    [t('ចាប់ផ្តើមពីច្រកសាធារណៈ', 'Begin at a public entrance', '从公共入口进入'), t('មើលទម្រង់អគារនិងជណ្តើរ', 'Observe terraces and concrete forms', '观察看台与混凝土阶梯'), t('មើលកីឡាបើអនុញ្ញាត', 'Watch activity only from permitted areas', '在允许的区域观看体育活动')],
    [t('ទម្រង់អគារពីខាងក្រៅ', 'Stadium massing from the exterior', '体育场外观与整体体量'), t('ជណ្តើរធំៗ', 'Stepped terraces from permitted paths', '许可区域的阶梯看台')],
    t('តើអាចចូលគ្រប់តំបន់ទេ?', 'Are all areas accessible?', '所有区域都能进入吗？'), t('ទេ។ ពិនិត្យបញ្ជូនរបស់អ្នកគ្រប់គ្រងនិងកម្មវិធី។', 'No. Access varies by event and venue rules.', '不能，开放范围依场馆管理和活动安排变化。')),
} as const;
