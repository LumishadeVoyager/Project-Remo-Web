/* =========================================================================
   Project Remo — i18n + interaction
   ========================================================================= */

/* ─── I18N Translation Dictionary ──────────────────────────────────── */
const I18N = {
  zh: {
    /* Nav */
    "nav.flow": "工作流",
    "nav.architecture": "架构",
    "nav.acoustic": "声学",
    "nav.color": "影像",
    "nav.compare": "对比",
    "nav.lineup": "产品线",
    "nav.specs": "参数",
    "nav.investors": "投资人",

    /* Hero */
    "hero.meta.issue": "Issue 02 · 2026",
    "hero.meta.status": "POC LIVE · 声学定位已验证",
    "hero.meta.depth": "Underwater · 40 m",
    "hero.meta.phase": "POC → EP → Kickstarter",
    "hero.title": "<span class=\"word\">放开</span><span class=\"word\">双手，</span><span class=\"word\">把镜头</span><span class=\"word\">交给</span><span class=\"word\"><em>水下</em></span><span class=\"word\"><em>智能体</em>。</span>",
    "hero.summary": "Project Remo 是一款无线、掌上起降的水下跟随相机，位于运动相机与传统 ROV 之间的空白地带。入水自动唤醒，声学定位跟随，出水自动归仓。让潜水员专注于潜水本身。",
    "hero.btn.primary": "探索 Remo",
    "hero.btn.secondary": "观看水测实录",
    "hero.ks.1.note": "设计目标深潜",
    "hero.ks.2.note": "推进器 2H+2V+1L",
    "hero.ks.3.note": "声学通信 DYP-C01B",
    "hero.ks.4.note": "巡航续航 · 实测",
    "hero.ks.5.note": "影像方案 · MVP",
    "hero.ks.5.unit": "海思",
    "hero.scroll": "向下滚动",

    /* Showcase (cinematic V01 between Hero and Features) */
    "showcase.meta": "水测实录 · 2026·04",
    "showcase.title": "无线，<em>自由</em>。",

    /* Manifesto */
    "manifesto.eyebrow": "<span class=\"index\">01</span> Manifesto",
    "manifesto.text": "水下摄影的真正门槛，<br>不是设备不够好，<br>而是潜水员的注意力<br><em>已经被太多事情分走了</em>。",
    "manifesto.sig": "Project Remo · 创始团队",

    /* Features (replaces Manifesto in layout) */
    "features.eyebrow": "<span class=\"index\">01</span> Features",
    "features.heading": "三项核心技术，<br>定义<em>水下跟拍</em>。",
    "features.1.eyebrow": "01 / HydroLock",
    "features.1.title": "声学锁定跟随",
    "features.1.desc": "三枚 DYP-C01B 声学模块组网定位。气泡、浑水、低能见度场景下保持稳定追踪，不依赖视觉。",
    "features.1.cta": "了解声学方案 →",
    "features.2.eyebrow": "02 / TrueColor Depth",
    "features.2.title": "深度感知色彩还原",
    "features.2.desc": "GAN 算法结合 MS5837 深度数据，红光与绿光大幅衰减的水下场景一键还原自然色彩。",
    "features.2.cta": "了解影像方案 →",
    "features.3.eyebrow": "03 / CloudSync",
    "features.3.title": "出水即回传，云端自动还原",
    "features.3.desc": "出水后自动连接配套手机应用，原始素材后台静默回传；云端深度学习模型自动还原水下色彩，用户可直接获取成片。",
    "features.3.cta": "了解工作流 →",

    /* Pain */
    "pain.eyebrow": "<span class=\"index\">02</span> The Pain",
    "pain.heading": "潜水拍摄时，<em style=\"font-style:italic;color:var(--accent)\">双手和注意力</em>同时被占用。",
    "pain.1.title": "双手被占用",
    "pain.1.desc": "潜水员在水下需要同时管理浮力、呼吸、深度、构图与跟焦——五件事抢占同一份注意力。结果往往不是没拍到，<em style=\"font-style:normal;color:var(--accent)\">而是拍到了但拍废了，同时安全冗余在下降</em>。",
    "pain.2.title": "ROV 不属于消费者",
    "pain.2.desc": "传统水下 ROV 面向工业巡检设计——脐带缆、地面站、岸上部署流程，不属于休闲潜水场景。7–15 kg 自重、¥15,000+ 起步，\"消费级\"三个字在 ROV 品类中从未成立。",
    "pain.3.title": "视觉会失效",
    "pain.3.desc": "气泡群、悬浮颗粒、逆光、低能见度——任一条件都足以让纯视觉跟踪失效。水下定位必须基于\"水\"的物理特性设计，<em style=\"font-style:normal;color:var(--accent)\">不能把陆地视觉方案直接搬到水下</em>。",

    /* Flow */
    "flow.eyebrow": "<span class=\"index\">03</span> How It Works",
    "flow.heading": "60 秒，<br>看懂<em>一次水下跟拍</em>。",
    "flow.1.title": "下水自动唤醒",
    "flow.1.desc": "设备入水即解锁，无需按键。基于水压与导通双重判定，避免误启动。",
    "flow.2.title": "声学锁定潜水员",
    "flow.2.desc": "潜水员佩戴的声学手环通过 DYP-C01B 建立声学链路，Remo 即使在浑浊水域也能保持稳定定位。",
    "flow.3.title": "智能跟随构图",
    "flow.3.desc": "声学定位提供位置先验，视觉追踪进行精构图。当视觉丢失时，声学权重立即接管。",
    "flow.4.title": "出水无感回传",
    "flow.4.desc": "出水后自动与配套手机应用建立连接，原始素材在后台静默传输；云端深度学习模型对水下色彩进行自动还原，用户在应用中即可查看处理完成的素材。",

    /* Architecture */
    "arch.eyebrow": "<span class=\"index\">04</span> Hardware Architecture",
    "arch.heading": "不追矢量方案，<em>追</em>稳定性。",
    "arch.title": "2 水平 + 2 垂直 + 1 横向。",
    "arch.desc": "Remo 采用 5 推进器固定布局（2 水平 + 2 垂直 + 1 横向），避开矢量推进的复杂调参，选择 ROV 行业成熟验证过的方案——水动力学建模更简单，控制器更易收敛，外壳工程化难度更低。当前并行验证<em style=\"font-style:normal;color:var(--accent)\">两套动力方案</em>：策海科技无刷推进器面向海水可靠性，自研有刷方案面向成本控制；两套方案共用同一飞控、声学与传感平台。",
    "arch.spec.1": "推进器架构",
    "arch.spec.1.val": "2H + 2V + 1L",
    "arch.spec.2": "动力 A · 无刷",
    "arch.spec.2.val": "策海 T60-edu-se",
    "arch.spec.2.sub": "推力 3 kgf · 功率 150 W",
    "arch.spec.3": "动力 B · 有刷",
    "arch.spec.3.val": "自研双向电调",
    "arch.spec.4": "飞控平台",
    "arch.spec.4.val": "FlyingRC H7Wlite",
    "arch.spec.4.sub": "MCU STM32H743VIH6 · 双 IMU + DPS368",
    "arch.spec.5": "固件",
    "arch.spec.5.val": "ArduSub 4.1.2",
    "arch.spec.6": "无刷电调",
    "arch.spec.6.val": "AM32 Mini ESC",
    "arch.spec.7": "深度传感",
    "arch.spec.7.val": "MS5837-30BA",
    "arch.spec.8": "避障声呐",
    "arch.spec.8.val": "DYP-L08",
    "arch.spec.9": "声学模块",
    "arch.spec.9.val": "DYP-C01B ×3",
    "arch.spec.10": "补光系统",
    "arch.spec.10.val": "12V LED · 环境光平衡",
    "arch.spec.11": "防水开关",
    "arch.spec.11.val": "舱外物理通断",
    "arch.spec.12": "漏水检测",
    "arch.spec.12.val": "I2C 传感器",
    "arch.spec.13": "水压辅助密封",
    "arch.spec.13.val": "自研结构",
    "arch.spec.14": "原型工艺",
    "arch.spec.14.val": "Bambu Lab P1S",

    /* Stats */
    "stats.eyebrow": "<span class=\"index\">05</span> By the Numbers",
    "stats.1.label": "设计目标深潜",
    "stats.1.note": "结构设计目标，当前于泳池 / 浅水验证。",
    "stats.2.label": "推进器架构",
    "stats.2.note": "2 水平 + 2 垂直 + 1 横向，稳定优先。",
    "stats.3.label": "声学通信模块",
    "stats.3.note": "DYP-C01B，相机端 2 + 手环端 1，纠偏定位。",
    "stats.4.label": "核心专利布局",
    "stats.4.note": "声学辅助视觉、多模态交互、水压辅助密封。",

    /* Acoustic */
    "acoustic.eyebrow": "<span class=\"index\">06</span> Acoustic Intelligence",
    "acoustic.heading": "水变浑，<em>声学定位</em>不停。",
    "acoustic.title": "水下声学通信模块，<br>非消费级水听器。",
    "acoustic.desc.1": "Remo 系统部署三枚 DYP-C01B 水下声学通信模块——相机端 2 枚、手环端 1 枚。任意两枚入水即可建立低速率声学链路，实现<strong style=\"color:var(--light);font-weight:500\">纠偏定位</strong>。声学定位在气泡、悬浮颗粒等视觉失效场景下保持稳定——这项技术在 ROV 工业领域已成熟应用超过二十年。我们将它缩至掌上尺寸，并与视觉算法进行融合。",
    "acoustic.desc.2": "声学手环通过<strong style=\"color:var(--light);font-weight:500\">敲击</strong>产生超声特征信号，由相机端接收并识别，构成低带宽、高鲁棒的水下指令通道——面向戴面镜、戴手套、无法语音通信的真实潜水环境。",
    "acoustic.badge.1": "DYP-C01B 声学模块 ×3",
    "acoustic.badge.2": "自动巡航 / 避障",
    "acoustic.badge.3": "入水唤醒 / 出水上锁",
    "acoustic.badge.4": "声学纠偏定位",
    "acoustic.badge.5": "敲击超声指令识别",
    "acoustic.badge.6": "声学-视觉融合",
    "acoustic.badge.7": "震动反馈闭环",
    "acoustic.badge.8": "多机声学组网",
    "acoustic.bracelet": "声学手环 · ESP32-S3 · DYP-C01B · IMU 翻腕+敲击",

    /* Color */
    "color.eyebrow": "<span class=\"index\">07</span> Image Pipeline",
    "color.heading": "不只是<em>拍下来</em>，<br>而是直接出片。",
    "color.lead": "水下色彩失真不是滤镜能解决的——红光在 5 m 深度衰减殆尽，绿光在 15 m 大幅衰减，白平衡校正有其物理极限。Remo 采用<strong style=\"color:var(--light);font-weight:500\">生成对抗网络（GAN）</strong>进行水下色彩还原，结合 MS5837 深度计与声学距离数据做物理级色彩校正。工程化后将以云端 AI 剪辑订阅形式提供服务——<em style=\"font-style:normal;color:var(--accent)\">HaaS: Hardware as a Service</em>。",
    "color.tag.left": "RAW · 18.6 M · 浑浊",
    "color.tag.right": "GAN RESTORED · v0.4",
    "color.disclaimer": "本图为算法 v0.4 离线推理结果。工程化版本计划于 EP 阶段验证，于 Kickstarter 阶段开放云端服务。",

    /* Compare */
    "compare.eyebrow": "<span class=\"index\">08</span> vs Traditional",
    "compare.heading": "填补<em>市场空白</em>，<br>不是再造一台运动相机。",
    "compare.col.1": "手持运动相机",
    "compare.col.2": "有线消费 ROV",
    "compare.row.1.axis": "典型重量",
    "compare.row.1.c1": "150–250 g",
    "compare.row.1.c2": "4–8 kg",
    "compare.row.1.c3": "掌上级",
    "compare.row.2.axis": "占用双手",
    "compare.row.2.c1": "完全占用",
    "compare.row.2.c2": "部分（操控杆）",
    "compare.row.2.c3": "0",
    "compare.row.3.axis": "脐带线缆",
    "compare.row.3.c1": "无",
    "compare.row.3.c2": "50–100 m",
    "compare.row.3.c3": "无",
    "compare.row.4.axis": "携带形态",
    "compare.row.4.c1": "装兜",
    "compare.row.4.c2": "大箱",
    "compare.row.4.c3": "掌上",
    "compare.row.5.axis": "典型续航",
    "compare.row.5.c1": "60–120 min",
    "compare.row.5.c2": "2–4 h（带电池组）",
    "compare.row.5.c3": "40–60 min（实测）",
    "compare.row.6.axis": "跟随能力",
    "compare.row.6.c1": "无 / 限于水面",
    "compare.row.6.c2": "手动操控",
    "compare.row.6.c3": "自主声学+视觉",
    "compare.row.7.axis": "目标用户",
    "compare.row.7.c1": "自拍 / 第一人称",
    "compare.row.7.c2": "工业 / 玩家",
    "compare.row.7.c3": "旅行潜 / 自由潜",
    "compare.row.8.axis": "典型价格带",
    "compare.row.8.c1": "¥2–4k",
    "compare.row.8.c2": "¥15–60k",
    "compare.row.8.c3": "消费级目标",
    "compare.row.9.axis": "学习曲线",
    "compare.row.9.c1": "极低",
    "compare.row.9.c2": "高",
    "compare.row.9.c3": "极低（一键投放）",
    "compare.row.10.axis": "失败成本",
    "compare.row.10.c1": "拍废",
    "compare.row.10.c2": "拍废 + 设备风险",
    "compare.row.10.c3": "拍废（自动归仓）",
    "compare.note": "对比数据基于公开消费类产品参数。Remo 数据基于当前 POC 样机实测与结构设计目标。",

    /* Lineup */
    "lineup.eyebrow": "<span class=\"index\">09</span> Product Lineup",
    "lineup.heading": "一台原型，<br><em>两套产品规划</em>。",
    "lineup.lite.tag": "01 · 大众与租赁",
    "lineup.lite.desc": "面向浮潜与自由潜用户，以及潜店租赁场景。轻量化出行、一键拍摄、自动归仓——把操作复杂度降到最低。",
    "lineup.lite.spec.1": "定位",
    "lineup.lite.spec.1.val": "大众消费 · 租赁",
    "lineup.lite.spec.2": "体验",
    "lineup.lite.spec.2.val": "一键投放即拍",
    "lineup.lite.spec.3": "价格策略",
    "lineup.lite.spec.3.val": "消费级入门",
    "lineup.lite.spec.4": "核心场景",
    "lineup.lite.spec.4.val": "旅行潜 · 课程",
    "lineup.lite.when.label": "产品愿景",
    "lineup.lite.when.val": "面向上市",
    "lineup.pro.tag": "02 · 硬核与创作者",
    "lineup.pro.desc": "面向愿意为画质付费的专业用户。定制影像系统、更长续航、更深潜深——服务内容创作者与高级潜点拍摄需求。",
    "lineup.pro.spec.1": "定位",
    "lineup.pro.spec.1.val": "专业创作",
    "lineup.pro.spec.2": "影像",
    "lineup.pro.spec.2.val": "定制影像系统（规划）",
    "lineup.pro.spec.3": "潜域",
    "lineup.pro.spec.3.val": "更深潜深（规划）",
    "lineup.pro.spec.4": "核心场景",
    "lineup.pro.spec.4.val": "内容创作 · 高级潜点",
    "lineup.pro.when.label": "产品愿景",
    "lineup.pro.when.val": "EP 后规划",
    "lineup.note": "Lite / Pro 为未来产品线规划。当前 POC 阶段为单一样机，同步验证有刷与无刷两套动力方案，最终合并为统一产品平台。",

    /* Specs */
    "specs.eyebrow": "<span class=\"index\">10</span> Tech Specs",
    "specs.heading": "看得见的<em>工程细节</em>。",
    "specs.tab.imaging": "影像 IMAGING",
    "specs.tab.underwater": "水下 UNDERWATER",
    "specs.tab.intelligence": "智能 INTELLIGENCE",
    "specs.tab.powertrain": "动力 POWERTRAIN",
    "specs.tab.physical": "物理 PHYSICAL",
    "specs.tab.bracelet": "声学手环 BRACELET",
    "specs.col.item": "项目",
    "specs.col.value": "规格",
    "specs.col.status": "状态",
    "specs.col.value.a": "当前 POC 规格",
    "specs.col.value.b": "动力 A · 无刷",
    "specs.col.value.c": "动力 B · 有刷",
    /* Imaging */
    "specs.img.1": "相机方案",
    "specs.img.1v": "4K 海思（HiSilicon）摄像头 + 主板模组",
    "specs.img.2": "拍摄控制",
    "specs.img.2v": "开机自动拍摄，启停由飞控控制电路通断",
    "specs.img.3": "配套软件",
    "specs.img.3v": "模组自带 Wi-Fi 与记录仪软件，可导入素材",
    "specs.img.4": "监看",
    "specs.img.4v": "水面可简单监看，水下暂不可实时监看",
    "specs.img.5": "激光对焦",
    "specs.img.5v": "摄像头 + 激光对焦模块（原理图集成）",
    "specs.img.6": "补光系统",
    "specs.img.6v": "12 V LED 舱内补光灯 + 环境光传感器自动平衡亮度",
    "specs.img.7": "定制影像系统",
    "specs.img.7v": "传感器选型、码率与色彩管线专项研发",
    "specs.img.8": "GAN 色彩还原",
    "specs.img.8v": "云端水下色彩还原管线",
    /* Underwater */
    "specs.uw.1": "设计目标深度",
    "specs.uw.1v": "40 m（结构目标）",
    "specs.uw.2": "当前验证环境",
    "specs.uw.2v": "泳池 / 浅水，未做专项深水水压测试",
    "specs.uw.3": "推进器布局",
    "specs.uw.3v": "2 水平 + 2 垂直 + 1 横向 · 共 5 个",
    "specs.uw.4": "巡航速度",
    "specs.uw.4v": "约 1.5 m/s",
    "specs.uw.5": "海水稳定运行",
    "specs.uw.5v": "无刷动力方案已验证",
    "specs.uw.6": "密封方案",
    "specs.uw.6v": "O-Ring + 水压辅助密封结构",
    "specs.uw.7": "防水物理开关",
    "specs.uw.7v": "舱外物理开关控制主电源通断",
    "specs.uw.8": "漏水检测",
    "specs.uw.8v": "I2C 通用接口漏水传感器",
    "specs.uw.9": "外壳工艺",
    "specs.uw.9v": "Bambu Lab P1S 高精度打印迭代",
    /* Intelligence */
    "specs.int.1": "声学通信模块",
    "specs.int.1v": "DYP-C01B ×3（相机端 2 + 手环端 1）· 360° · ≤120 m",
    "specs.int.2": "声学纠偏定位",
    "specs.int.2v": "多模块声学解算手环相对位置",
    "specs.int.3": "敲击指令识别",
    "specs.int.3v": "手环敲击超声特征被相机端读取",
    "specs.int.4": "避障声呐",
    "specs.int.4v": "DYP-L08 水下超声波 · 5 cm–8 m",
    "specs.int.5": "自动避障",
    "specs.int.5v": "近障触发推进倒车",
    "specs.int.6": "深度传感",
    "specs.int.6v": "MS5837-30BA · ±0.2 m",
    "specs.int.7": "惯性导航 IMU",
    "specs.int.7v": "ICM-42688-P + ICM-42605（飞控内置双 IMU）",
    "specs.int.8": "气压计",
    "specs.int.8v": "DPS368（飞控内置，IPx8 防护）",
    "specs.int.9": "磁力计",
    "specs.int.9v": "QMC5883L（外接 I2C）",
    "specs.int.10": "入水唤醒 / 出水上锁",
    "specs.int.10v": "水压 + 导通双判定",
    "specs.int.11": "自动巡航",
    "specs.int.11v": "推进器 PWM 自动巡航",
    "specs.int.12": "视觉追踪",
    "specs.int.12v": "视觉精构图 + 声学权重修正",
    /* Powertrain */
    "specs.pt.1": "路线定位",
    "specs.pt.1a": "海水可靠性优先",
    "specs.pt.1b": "成本可控优先",
    "specs.pt.2": "推进器",
    "specs.pt.2a": "策海科技 T60-edu-se · 推力 3 kgf · 功率 150 W",
    "specs.pt.2b": "有刷直流电机",
    "specs.pt.3": "电调",
    "specs.pt.3a": "flyingRC AM32 Mini ESC",
    "specs.pt.3b": "自研双路双向有刷电调 1–3S",
    "specs.pt.4": "海水验证",
    "specs.pt.4a": "已验证稳定可靠",
    "specs.pt.4b": "研发中",
    "specs.pt.5": "电池（共用）",
    "specs.pt.5a": "Boston Power 三元锂 3S 12.4 V · 5300 mAh",
    "specs.pt.5b": "同左",
    "specs.pt.6": "放电能力（共用）",
    "specs.pt.6a": "持续 8 A · 峰值 10 A",
    "specs.pt.6b": "同左",
    "specs.pt.7": "巡航续航",
    "specs.pt.7a": "40–60 min（实测）",
    "specs.pt.7b": "40–60 min（实测）",
    "specs.pt.8": "充电（共用）",
    "specs.pt.8a": "XL2326 充电管理 · 4P 磁吸接触式",
    "specs.pt.8b": "同左",
    "specs.pt.9": "飞控（共用）",
    "specs.pt.9a": "FlyingRC H7Wlite MK1 · ArduSub 4.1.2",
    "specs.pt.9b": "同左",
    /* Physical */
    "specs.ph.1": "形态",
    "specs.ph.1v": "掌上级，5 推进器集成机身",
    "specs.ph.2": "外壳材料",
    "specs.ph.2v": "PC 透明件 + 工程塑料（3D 打印迭代）",
    "specs.ph.3": "整机尺寸",
    "specs.ph.3v": "样机定型中，以实测为准",
    "specs.ph.4": "整机净重",
    "specs.ph.4v": "样机定型中，以实测为准",
    "specs.ph.5": "充电接口",
    "specs.ph.5v": "4P 磁吸数据线 2.5PH，无开放式 USB",
    "specs.ph.6": "防水物理开关",
    "specs.ph.6v": "舱外物理开关控制主电源通断",
    /* Bracelet */
    "specs.br.1": "主控",
    "specs.br.1v": "ESP32-S3-WROOM",
    "specs.br.2": "声学模块",
    "specs.br.2v": "DYP-C01B ×1（与相机端组网）",
    "specs.br.3": "屏幕",
    "specs.br.3v": "1.8 寸 TFT-LCD · 180 × 128 px（后续升级）",
    "specs.br.4": "IMU",
    "specs.br.4v": "QMI8658A（6 轴），翻腕 + 敲击控制",
    "specs.br.5": "按键",
    "specs.br.5v": "无物理按键，IMU 手势 + 震动反馈",
    "specs.br.6": "振动反馈",
    "specs.br.6v": "线性 / 转子马达（MOTOR_PWM 通道）",
    "specs.br.7": "电池",
    "specs.br.7v": "800 mAh 1S 锂电池",
    "specs.br.8": "充电",
    "specs.br.8v": "4P 磁吸数据线 2.5PH",
    "specs.br.9": "外壳",
    "specs.br.9v": "3D 打印迭代，多款表带可选（通用接口）",
    "specs.br.10": "防水",
    "specs.br.10v": "尚未进行防水测试",
    "specs.br.11": "续航 / 待机",
    "specs.br.11v": "实测数据待确认",

    /* Gallery */
    "gallery.eyebrow": "<span class=\"index\">11</span> Prototype Evidence",
    "gallery.heading": "不停留<br>在概念图。",
    "gallery.shot.1.cap": "2026·04 · 实验室装配",
    "gallery.shot.1.title": "实物原型",
    "gallery.shot.1.desc": "掌上级水下相机 · 推进器结构装配",
    "gallery.shot.2.cap": "ID PROPOSAL · v2.1 · 2026·03",
    "gallery.shot.2.title": "工业设计 ID",
    "gallery.shot.2.desc": "表面语言 · 色彩与体量",
    "gallery.shot.3.cap": "HARDWARE · PCB1 · REV 3 · 2026·03·17",
    "gallery.shot.3.title": "PCB · 主控板",
    "gallery.shot.3.desc": "相机端硬件 · 第 3 轮迭代",
    "gallery.shot.4.cap": "WATCH SCH · 2026·03",
    "gallery.shot.4.title": "原理图 · 声学手环",
    "gallery.shot.4.desc": "水下多模态交互入口",
    "gallery.shot.5.cap": "WATER TEST · 2026·04·28 · NO CUT · 11 段连续记录",
    "gallery.shot.5.title": "场景表达",
    "gallery.shot.5.desc": "自由潜拍 · 面向消费者的产品想象",

    /* Business */
    "business.eyebrow": "<span class=\"index\">12</span> Business Model",
    "business.heading": "硬件获客，<em>HaaS</em> 创造长期价值。",
    "business.1.title": "消费硬件",
    "business.1.desc": "以无线跟随、掌上起降、一键成片建立差异化优势。不靠堆相机参数竞争，让产品定义与整机体验成为第一层壁垒。",
    "business.2.title": "潜店租赁",
    "business.2.desc": "面向潜店与旅行场景的低门槛入口。对潜店：提高设备周转率与内容产出；对用户：出行前不必购买水下相机。租赁本身是最有效的消费者教育。",
    "business.3.title": "云端 AI 订阅",
    "business.3.desc": "GAN 色彩还原、智能剪辑、潜水日志、成片模板——所有依赖算力与素材库的功能部署在云端，形成持续订阅收入。硬件 ASP 波动，HaaS 提供稳定的经常性收入。",

    /* Roadmap */
    "roadmap.eyebrow": "<span class=\"index\">13</span> Milestones",
    "roadmap.heading": "三步走，<br>到达 Kickstarter。",
    "roadmap.1.when": "Now · 2026",
    "roadmap.1.title": "POC 原理样机",
    "roadmap.1.desc": "声学定位 + 自动巡航 + 避障状态机已跑通；PCB 第 3 轮迭代；正在补齐核心团队。",
    "roadmap.2.when": "Next · 2026 Q4",
    "roadmap.2.title": "EP 工程验证",
    "roadmap.2.desc": "重点验证稳定跟随、水压辅助密封一致性、可靠起降、续航与可维护性。",
    "roadmap.3.when": "Launch · 2027 夏",
    "roadmap.3.title": "Kickstarter 爆发",
    "roadmap.3.desc": "用真实水测素材、可量化指标与双产品线叙事启动全球早期用户转化。",

    /* Moat */
    "moat.kicker": "14 · IP &amp; Patent Defense",
    "moat.heading": "专利防御<em>正在构筑</em>。",
    "moat.desc": "围绕产品最难复现的技术节点，进行严密的 FTO 与专利布局，为 EP 与 Kickstarter 阶段建立竞争壁垒。",
    "moat.note": "专利交底书已起草 · FTO 检索 · IN-DEV",
    "moat.1.title": "声学辅助视觉跟随算法",
    "moat.1.desc": "气泡 / 浑浊场景下，声学信号平滑修正视觉 ROI 权重，保持稳定锁定与跟随。",
    "moat.2.title": "水下多模态交互控制",
    "moat.2.desc": "声学手环敲击编码 + 震动反馈，构成水下与设备之间的低带宽、高鲁棒交互通道。",
    "moat.3.title": "水压辅助密封结构",
    "moat.3.desc": "利用环境水压增强密封贴合度的机械结构设计，专为消费级潜深与维护性优化。",

    /* Investors */
    "investors.eyebrow": "<span class=\"index\">15</span> For Investors",
    "investors.heading": "已验证的，<em>分层呈现</em>。",
    "investors.lead": "我们对外仅承诺已通过实测验证的能力，路线图项目以\"进行中 / 规划中\"清晰标注。以下为面向天使轮投资人的关键信息。完整 Deck 与 Tech Snapshot 请联系创始团队。",
    "investors.1.num": "— 01 · 阶段",
    "investors.1.title": "POC · 原理样机已跑通",
    "investors.1.desc": "机械、PCB、控制脚本、用户访谈、水测视频均已沉淀。可演示链路：入水自动解锁 → 自动巡航 → 近障避让 → 出水自动上锁。",
    "investors.2.num": "— 02 · 即将",
    "investors.2.title": "2026 Q4 进入 EP · 工程验证",
    "investors.2.desc": "聚焦稳定跟随闭环、水压辅助密封一致性、连续运行可靠性、续航与可维护性。每一项都有可量化的目标指标。",
    "investors.3.num": "— 03 · 用途",
    "investors.3.title": "天使轮资金分配",
    "investors.3.desc": "核心团队补位（嵌入式 / 控制算法 / 结构）、EP 阶段供应链与小批量水测、Kickstarter 视频与传播。每一笔资金对应一个可验证的里程碑。",
    "investors.btn.1": "索取 Tech Snapshot",
    "investors.btn.2": "查看 90 秒实证素材",

    /* Outro */
    "outro.heading": "放开双手，<br><em>把镜头交给 Remo</em>。",
    "outro.btn.1": "与创始团队对话",
    "outro.btn.2": "回到顶部",
    "outro.meta.1.label": "阶段",
    "outro.meta.1.val": "POC · 原理样机",
    "outro.meta.2.label": "下一站",
    "outro.meta.2.val": "EP · 工程验证 · 2026 Q4",
    "outro.meta.3.label": "面市",
    "outro.meta.3.val": "Lite · 2027 夏",

    /* Sticky */
    "sticky.specs": "5 推进器 · 声学纠偏定位 · 巡航 40–60 min · 4K 海思",
    "sticky.cta": "加入 Kickstarter 早鸟",

    /* Footer */
    "footer.tagline": "Wireless Underwater Follow-Cam · POC 2026",
    "footer.copyright": "© Project Remo · All rights reserved",

    /* Misc */
    "meta.title": "Project Remo — 水下智能跟随相机",
    "meta.desc": "Project Remo 是一款无线、掌上起降的水下跟随相机。入水唤醒，声学定位跟随，出水归仓。让潜水员专注于潜水本身。",
    "hero.product.alt": "Project Remo 水下智能跟随相机",
    "acoustic.img.alt": "声学链路水下场景 · 潜水员与 Remo 声学通信",
    "compare.img.alt": "对比：运动相机 · 有线 ROV · Project Remo",
    "bracelet.img.alt": "Project Remo 声学手环 · DYP-C01B + ESP32-S3",
  },

  /* ─── ENGLISH ─────────────────────────────────────────────────────── */
  en: {
    "nav.flow": "How It Works",
    "nav.architecture": "Architecture",
    "nav.acoustic": "Acoustic",
    "nav.color": "Imaging",
    "nav.compare": "Compare",
    "nav.lineup": "Lineup",
    "nav.specs": "Specs",
    "nav.investors": "Investors",

    "hero.meta.issue": "Issue 02 · 2026",
    "hero.meta.status": "POC LIVE · Acoustic Positioning Verified",
    "hero.meta.depth": "Underwater · 40 m",
    "hero.meta.phase": "POC → EP → Kickstarter",
    "hero.title": "<span class=\"word\">Let Go</span><span class=\"word\">of Your</span><span class=\"word\">Hands.</span><span class=\"word\">Hand the</span><span class=\"word\">Shot to an</span><span class=\"word\"><em>Underwater</em></span><span class=\"word\"><em>Agent</em>.</span>",
    "hero.summary": "Project Remo is a wireless, palm-deployable underwater follow-cam that sits between action cameras and tethered ROVs. Auto-wake on entry, acoustic positioning, auto-dock on surfacing. It handles the shot so the diver doesn't have to.",
    "hero.btn.primary": "Explore Remo",
    "hero.btn.secondary": "Watch Water Tests",
    "hero.ks.1.note": "Target Depth Rating",
    "hero.ks.2.note": "Thrusters 2H+2V+1L",
    "hero.ks.3.note": "Acoustic Link DYP-C01B",
    "hero.ks.4.note": "Cruise Endurance · Measured",
    "hero.ks.5.note": "Imaging · MVP",
    "hero.ks.5.unit": "HiSilicon",
    "hero.scroll": "Scroll Down",

    "showcase.meta": "Water Test · Apr 2026",
    "showcase.title": "Wireless.<br><em>Free</em>.",

    "manifesto.eyebrow": "<span class=\"index\">01</span> Manifesto",
    "manifesto.text": "The real bottleneck in underwater photography<br>isn't the gear —<br>it's that the diver's attention<br><em>is already split across too many tasks</em>.",
    "manifesto.sig": "Project Remo · Founding Team",

    "features.eyebrow": "<span class=\"index\">01</span> Features",
    "features.heading": "Three core technologies<br>that define <em>underwater follow-cam</em>.",
    "features.1.eyebrow": "01 / HydroLock",
    "features.1.title": "Acoustic Lock & Track",
    "features.1.desc": "Three DYP-C01B acoustic modules form a positioning mesh. Stable tracking through bubbles, turbidity, and low visibility — no vision required.",
    "features.1.cta": "Explore Acoustics →",
    "features.2.eyebrow": "02 / TrueColor Depth",
    "features.2.title": "Depth-Aware Color Restoration",
    "features.2.desc": "GAN algorithm fused with MS5837 depth data. One-tap natural color recovery for scenes where red and green wavelengths have heavily attenuated.",
    "features.2.cta": "Explore Imaging →",
    "features.3.eyebrow": "03 / CloudSync",
    "features.3.title": "Auto-Sync on Surfacing, Restored in the Cloud",
    "features.3.desc": "On surfacing, the unit pairs with the companion mobile app and uploads raw footage in the background. A cloud deep-learning model restores underwater color automatically; users retrieve a finished result directly from the app.",
    "features.3.cta": "Explore Workflow →",

    "pain.eyebrow": "<span class=\"index\">02</span> The Pain",
    "pain.heading": "When you dive with a camera, <em style=\"font-style:italic;color:var(--accent)\">both hands and attention</em> are tied up.",
    "pain.1.title": "Both Hands Occupied",
    "pain.1.desc": "A diver underwater manages buoyancy, breathing, depth, composition, and focus — five tasks competing for one attention budget. The outcome is rarely \"didn't get the shot.\" <em style=\"font-style:normal;color:var(--accent)\">It's \"got the shot but it's unusable, and safety margins are shrinking.\"</em>",
    "pain.2.title": "ROVs Aren't for Consumers",
    "pain.2.desc": "Traditional ROVs are built for industrial inspection — tethers, ground control stations, shore-deployment workflows. They were never designed for recreational diving. At 7–15 kg and ¥15,000+ entry price, \"consumer-grade\" has never described this category.",
    "pain.3.title": "Vision Fails Underwater",
    "pain.3.desc": "Bubbles, suspended particles, backlight, low visibility — any one of these breaks a pure visual tracking system. Underwater positioning must be designed for the physics of water, <em style=\"font-style:normal;color:var(--accent)\">not adapted from land-based vision assumptions</em>.",

    "flow.eyebrow": "<span class=\"index\">03</span> How It Works",
    "flow.heading": "60 seconds to<br>understand an <em>underwater follow-shot</em>.",
    "flow.1.title": "Auto-Wake on Entry",
    "flow.1.desc": "The device unlocks the moment it enters the water. No buttons needed. Dual water-pressure and conductivity detection prevents false triggers.",
    "flow.2.title": "Acoustic Diver Lock",
    "flow.2.desc": "The diver's acoustic bracelet establishes an acoustic link via DYP-C01B, allowing Remo to maintain stable positioning even in murky water.",
    "flow.3.title": "Intelligent Follow-Framing",
    "flow.3.desc": "Acoustic positioning provides positional priors; visual tracking handles fine composition. When vision drops, acoustic weighting takes over instantly.",
    "flow.4.title": "Seamless Post-Dive Upload",
    "flow.4.desc": "On surfacing, the unit pairs with the companion mobile app and uploads raw footage in the background. A cloud deep-learning model automatically restores underwater color; users retrieve the processed result directly within the app.",

    "arch.eyebrow": "<span class=\"index\">04</span> Hardware Architecture",
    "arch.heading": "Not chasing vectored thrust.<br><em>Chasing</em> stability.",
    "arch.title": "2 Horizontal + 2 Vertical + 1 Lateral.",
    "arch.desc": "Remo uses a fixed 5-thruster layout (2H + 2V + 1L), avoiding the tuning complexity of vectored thrust in favor of an ROV-industry-validated approach — simpler hydrodynamic modeling, easier controller convergence, lower packaging complexity. Two powertrain routes are being validated in parallel: Cehai Technology brushless thrusters for seawater reliability, and an in-house brushed solution for cost control. Both share the same flight controller, acoustics, and sensor platform.",
    "arch.spec.1": "Thruster Layout",
    "arch.spec.1.val": "2H + 2V + 1L",
    "arch.spec.2": "Route A · Brushless",
    "arch.spec.2.val": "Cehai T60-edu-se",
    "arch.spec.2.sub": "Thrust 3 kgf · Power 150 W",
    "arch.spec.3": "Route B · Brushed",
    "arch.spec.3.val": "In-House Bi-Dir ESC",
    "arch.spec.4": "Flight Controller",
    "arch.spec.4.val": "FlyingRC H7Wlite",
    "arch.spec.4.sub": "MCU STM32H743VIH6 · Dual IMU + DPS368",
    "arch.spec.5": "Firmware",
    "arch.spec.5.val": "ArduSub 4.1.2",
    "arch.spec.6": "BLDC ESC",
    "arch.spec.6.val": "AM32 Mini ESC",
    "arch.spec.7": "Depth Sensor",
    "arch.spec.7.val": "MS5837-30BA",
    "arch.spec.8": "Obstacle Sonar",
    "arch.spec.8.val": "DYP-L08",
    "arch.spec.9": "Acoustic Module",
    "arch.spec.9.val": "DYP-C01B ×3",
    "arch.spec.10": "Fill Light",
    "arch.spec.10.val": "12V LED · Ambient-Light Balanced",
    "arch.spec.11": "Waterproof Switch",
    "arch.spec.11.val": "External Physical Cutoff",
    "arch.spec.12": "Leak Detection",
    "arch.spec.12.val": "I2C Sensor",
    "arch.spec.13": "Hydrostatic Seal",
    "arch.spec.13.val": "In-House Structure",
    "arch.spec.14": "Prototyping",
    "arch.spec.14.val": "Bambu Lab P1S",

    "stats.eyebrow": "<span class=\"index\">05</span> By the Numbers",
    "stats.1.label": "Target Depth Rating",
    "stats.1.note": "Structural design target. Currently validated in pool / shallow water only.",
    "stats.2.label": "Thruster Layout",
    "stats.2.note": "2 horizontal + 2 vertical + 1 lateral. Stability-first philosophy.",
    "stats.3.label": "Acoustic Comms Modules",
    "stats.3.note": "DYP-C01B ×3: 2 on camera + 1 on bracelet. Relative-position correction.",
    "stats.4.label": "Core Patent Portfolio",
    "stats.4.note": "Acoustic-assisted vision, multimodal interaction, hydrostatic seal.",

    "acoustic.eyebrow": "<span class=\"index\">06</span> Acoustic Intelligence",
    "acoustic.heading": "When visibility drops,<br><em>acoustic positioning</em> holds.",
    "acoustic.title": "Underwater acoustic communication —<br>not a consumer-grade hydrophone.",
    "acoustic.desc.1": "Remo deploys three DYP-C01B underwater acoustic communication modules — two on the camera, one on the bracelet. Any two submerged modules establish a low-rate acoustic link for <strong style=\"color:var(--light);font-weight:500\">corrective positioning</strong>. The acoustic link remains stable when vision fails due to bubbles or suspended particles — technology proven over two decades in the ROV industry, now shrunk to palm size and fused with vision algorithms.",
    "acoustic.desc.2": "The acoustic bracelet generates ultrasonic signatures via <strong style=\"color:var(--light);font-weight:500\">tapping</strong>, received and decoded by the camera — a low-bandwidth, high-robustness underwater command channel designed for real dive conditions: mask on, gloves on, no voice comms.",
    "acoustic.badge.1": "DYP-C01B Module ×3",
    "acoustic.badge.2": "Auto-Cruise / Obstacle Avoid",
    "acoustic.badge.3": "Immersion Wake / Surface Lock",
    "acoustic.badge.4": "Acoustic Correction Positioning",
    "acoustic.badge.5": "Tap Ultrasonic Recognition",
    "acoustic.badge.6": "Acoustic-Visual Fusion",
    "acoustic.badge.7": "Haptic Feedback Loop",
    "acoustic.badge.8": "Multi-Unit Acoustic Mesh",
    "acoustic.bracelet": "Acoustic Bracelet · ESP32-S3 · DYP-C01B · IMU Gesture + Tap",

    "color.eyebrow": "<span class=\"index\">07</span> Image Pipeline",
    "color.heading": "Not just <em>recording</em> —<br>delivering a finished shot.",
    "color.lead": "Underwater color distortion can't be fixed with filters — red light is effectively gone at 5 m, green heavily attenuated at 15 m, and white balance has physical limits. Remo uses a <strong style=\"color:var(--light);font-weight:500\">Generative Adversarial Network (GAN)</strong> for underwater color restoration, combining MS5837 depth sensor and acoustic distance data for physics-level correction. The engineered version will ship as a cloud AI editing subscription — <em style=\"font-style:normal;color:var(--accent)\">HaaS: Hardware as a Service</em>.",
    "color.tag.left": "RAW · 18.6 M · Murky",
    "color.tag.right": "GAN RESTORED · v0.4",
    "color.disclaimer": "This image is an offline inference result from algorithm v0.4. The engineered version is planned for EP-stage validation and cloud service launch at Kickstarter.",

    "compare.eyebrow": "<span class=\"index\">08</span> vs Traditional",
    "compare.heading": "Filling a <em>market gap</em> —<br>not building another action cam.",
    "compare.col.1": "Handheld Action Cam",
    "compare.col.2": "Tethered Consumer ROV",
    "compare.row.1.axis": "Typical Weight",
    "compare.row.1.c1": "150–250 g",
    "compare.row.1.c2": "4–8 kg",
    "compare.row.1.c3": "Palm-Sized",
    "compare.row.2.axis": "Hands Occupied",
    "compare.row.2.c1": "Fully Occupied",
    "compare.row.2.c2": "Partial (Joystick)",
    "compare.row.2.c3": "0",
    "compare.row.3.axis": "Tether Cable",
    "compare.row.3.c1": "None",
    "compare.row.3.c2": "50–100 m",
    "compare.row.3.c3": "None",
    "compare.row.4.axis": "Carry Form",
    "compare.row.4.c1": "Pocket",
    "compare.row.4.c2": "Large Case",
    "compare.row.4.c3": "Palm",
    "compare.row.5.axis": "Typical Endurance",
    "compare.row.5.c1": "60–120 min",
    "compare.row.5.c2": "2–4 h (w/ Battery Pack)",
    "compare.row.5.c3": "40–60 min (Measured)",
    "compare.row.6.axis": "Follow Capability",
    "compare.row.6.c1": "None / Surface Only",
    "compare.row.6.c2": "Manual Control",
    "compare.row.6.c3": "Autonomous Acoustic+Visual",
    "compare.row.7.axis": "Target User",
    "compare.row.7.c1": "Selfie / 1st-Person",
    "compare.row.7.c2": "Industrial / Hobbyist",
    "compare.row.7.c3": "Travel Dive / Freedive",
    "compare.row.8.axis": "Typical Price Range",
    "compare.row.8.c1": "$300–600",
    "compare.row.8.c2": "$2,000–8,000",
    "compare.row.8.c3": "Consumer Target",
    "compare.row.9.axis": "Learning Curve",
    "compare.row.9.c1": "Minimal",
    "compare.row.9.c2": "Steep",
    "compare.row.9.c3": "Minimal (One-Tap Deploy)",
    "compare.row.10.axis": "Failure Cost",
    "compare.row.10.c1": "Lost Shot",
    "compare.row.10.c2": "Lost Shot + Gear Risk",
    "compare.row.10.c3": "Lost Shot (Auto-Return)",
    "compare.note": "Comparison data based on publicly available consumer product specs. Remo data based on current POC prototype measurements and structural design targets.",

    "lineup.eyebrow": "<span class=\"index\">09</span> Product Lineup",
    "lineup.heading": "One prototype,<br><em>two product roadmaps</em>.",
    "lineup.lite.tag": "01 · Mass Market & Rental",
    "lineup.lite.desc": "For snorkelers, freedivers, and dive shop rentals. Lightweight travel, one-tap shooting, auto-dock recovery — minimal operational complexity.",
    "lineup.lite.spec.1": "Positioning",
    "lineup.lite.spec.1.val": "Consumer · Rental",
    "lineup.lite.spec.2": "Experience",
    "lineup.lite.spec.2.val": "One-Tap Deploy & Shoot",
    "lineup.lite.spec.3": "Price Strategy",
    "lineup.lite.spec.3.val": "Entry Consumer",
    "lineup.lite.spec.4": "Core Scenario",
    "lineup.lite.spec.4.val": "Travel Dive · Courses",
    "lineup.lite.when.label": "Vision",
    "lineup.lite.when.val": "Toward Launch",
    "lineup.pro.tag": "02 · Enthusiast & Creator",
    "lineup.pro.desc": "For professionals willing to pay for image quality. Custom imaging system, extended endurance, deeper depth rating — built for content creators and advanced dive sites.",
    "lineup.pro.spec.1": "Positioning",
    "lineup.pro.spec.1.val": "Professional Creation",
    "lineup.pro.spec.2": "Imaging",
    "lineup.pro.spec.2.val": "Custom Imaging System (Planned)",
    "lineup.pro.spec.3": "Depth Rating",
    "lineup.pro.spec.3.val": "Deeper Rating (Planned)",
    "lineup.pro.spec.4": "Core Scenario",
    "lineup.pro.spec.4.val": "Content Creation · Advanced Sites",
    "lineup.pro.when.label": "Vision",
    "lineup.pro.when.val": "Post-EP Planning",
    "lineup.note": "Lite / Pro are future product-line plans. The current POC stage uses a single prototype to validate both brushed and brushless powertrain routes in parallel, converging into one unified product platform.",

    "specs.eyebrow": "<span class=\"index\">10</span> Tech Specs",
    "specs.heading": "Engineering details<br>you can <em>actually see</em>.",
    "specs.tab.imaging": "成像 IMAGING",
    "specs.tab.underwater": "水下 UNDERWATER",
    "specs.tab.intelligence": "智能 INTELLIGENCE",
    "specs.tab.powertrain": "动力 POWERTRAIN",
    "specs.tab.physical": "物理 PHYSICAL",
    "specs.tab.bracelet": "声学手环 BRACELET",
    "specs.col.item": "Item",
    "specs.col.value": "Spec",
    "specs.col.status": "Status",
    "specs.col.value.a": "Current POC Spec",
    "specs.col.value.b": "Route A · Brushless",
    "specs.col.value.c": "Route B · Brushed",
    "specs.img.1": "Camera Solution",
    "specs.img.1v": "4K HiSilicon camera + mainboard module",
    "specs.img.2": "Capture Control",
    "specs.img.2v": "Auto-start on power; start/stop controlled by FC via circuit relay",
    "specs.img.3": "Companion Software",
    "specs.img.3v": "Module has built-in Wi‑Fi & DVR software for footage import",
    "specs.img.4": "Monitoring",
    "specs.img.4v": "Basic surface monitoring available; no real-time underwater monitoring yet",
    "specs.img.5": "Laser AF",
    "specs.img.5v": "Camera + laser autofocus module (on schematic)",
    "specs.img.6": "Fill Light System",
    "specs.img.6v": "12 V LED internal fill light + ambient-light sensor auto-balance",
    "specs.img.7": "Custom Imaging System",
    "specs.img.7v": "Sensor selection, bitrate & color pipeline R&D",
    "specs.img.8": "GAN Color Restoration",
    "specs.img.8v": "Cloud-based underwater color restoration pipeline",
    "specs.uw.1": "Target Depth Rating",
    "specs.uw.1v": "40 m (structural target)",
    "specs.uw.2": "Current Validation Env.",
    "specs.uw.2v": "Pool / shallow water; no dedicated deep-water pressure test yet",
    "specs.uw.3": "Thruster Layout",
    "specs.uw.3v": "2 horizontal + 2 vertical + 1 lateral · 5 total",
    "specs.uw.4": "Cruise Speed",
    "specs.uw.4v": "~1.5 m/s",
    "specs.uw.5": "Seawater Operation",
    "specs.uw.5v": "Verified stable on brushless route",
    "specs.uw.6": "Sealing Solution",
    "specs.uw.6v": "O-Ring + hydrostatic pressure-assisted seal structure",
    "specs.uw.7": "Waterproof Switch",
    "specs.uw.7v": "External physical switch for master power cutoff",
    "specs.uw.8": "Leak Detection",
    "specs.uw.8v": "I2C general-purpose leak sensor",
    "specs.uw.9": "Enclosure Process",
    "specs.uw.9v": "Bambu Lab P1S high-precision print iteration",
    "specs.int.1": "Acoustic Comms Module",
    "specs.int.1v": "DYP-C01B ×3 (2 on camera + 1 on bracelet) · 360° · ≤120 m",
    "specs.int.2": "Acoustic Correction Pos.",
    "specs.int.2v": "Multi-module acoustic solving for bracelet relative position",
    "specs.int.3": "Tap Command Recognition",
    "specs.int.3v": "Bracelet tap ultrasonic signatures read by camera",
    "specs.int.4": "Obstacle-Avoid Sonar",
    "specs.int.4v": "DYP-L08 underwater ultrasonic · 5 cm–8 m",
    "specs.int.5": "Auto Obstacle Avoid",
    "specs.int.5v": "Proximity triggers reverse-thrust avoidance",
    "specs.int.6": "Depth Sensor",
    "specs.int.6v": "MS5837-30BA · ±0.2 m",
    "specs.int.7": "Inertial Nav IMU",
    "specs.int.7v": "ICM-42688-P + ICM-42605 (FC built-in dual IMU)",
    "specs.int.8": "Barometer",
    "specs.int.8v": "DPS368 (FC built-in, IPx8 rated)",
    "specs.int.9": "Magnetometer",
    "specs.int.9v": "QMC5883L (external I2C)",
    "specs.int.10": "Immersion Wake / Surface Lock",
    "specs.int.10v": "Dual water-pressure + conductivity detection",
    "specs.int.11": "Auto Cruise",
    "specs.int.11v": "Thruster PWM auto-cruise",
    "specs.int.12": "Visual Tracking",
    "specs.int.12v": "Visual fine-composition + acoustic weight correction",
    "specs.pt.1": "Route Positioning",
    "specs.pt.1a": "Seawater reliability priority",
    "specs.pt.1b": "Cost control priority",
    "specs.pt.2": "Thrusters",
    "specs.pt.2a": "Cehai Technology T60-edu-se · 3 kgf thrust · 150 W",
    "specs.pt.2b": "Brushed DC motor",
    "specs.pt.3": "ESC",
    "specs.pt.3a": "flyingRC AM32 Mini ESC",
    "specs.pt.3b": "In-house dual bi-directional brushed ESC 1–3S",
    "specs.pt.4": "Seawater Validation",
    "specs.pt.4a": "Verified stable & reliable",
    "specs.pt.4b": "In Development",
    "specs.pt.5": "Battery (Shared)",
    "specs.pt.5a": "Boston Power Li(NiCo)O₂ 3S 12.4 V · 5300 mAh",
    "specs.pt.5b": "Same",
    "specs.pt.6": "Discharge (Shared)",
    "specs.pt.6a": "Continuous 8 A · Peak 10 A",
    "specs.pt.6b": "Same",
    "specs.pt.7": "Cruise Endurance",
    "specs.pt.7a": "40–60 min (measured)",
    "specs.pt.7b": "40–60 min (measured)",
    "specs.pt.8": "Charging (Shared)",
    "specs.pt.8a": "XL2326 charge management · 4P magnetic contact",
    "specs.pt.8b": "Same",
    "specs.pt.9": "FC (Shared)",
    "specs.pt.9a": "FlyingRC H7Wlite MK1 · ArduSub 4.1.2",
    "specs.pt.9b": "Same",
    "specs.ph.1": "Form Factor",
    "specs.ph.1v": "Palm-sized, 5-thruster integrated body",
    "specs.ph.2": "Enclosure Material",
    "specs.ph.2v": "PC transparent + engineering plastic (3D-printed iteration)",
    "specs.ph.3": "Dimensions",
    "specs.ph.3v": "Prototype finalizing; measured values TBD",
    "specs.ph.4": "Net Weight",
    "specs.ph.4v": "Prototype finalizing; measured values TBD",
    "specs.ph.5": "Charging Port",
    "specs.ph.5v": "4P magnetic data cable 2.5PH — no open USB port",
    "specs.ph.6": "Waterproof Switch",
    "specs.ph.6v": "External physical switch for master power cutoff",
    "specs.br.1": "MCU",
    "specs.br.1v": "ESP32-S3-WROOM",
    "specs.br.2": "Acoustic Module",
    "specs.br.2v": "DYP-C01B ×1 (networked with camera units)",
    "specs.br.3": "Display",
    "specs.br.3v": "1.8\" TFT-LCD · 180 × 128 px (upgrade planned)",
    "specs.br.4": "IMU",
    "specs.br.4v": "QMI8658A (6-axis), wrist-flick + tap control",
    "specs.br.5": "Buttons",
    "specs.br.5v": "No physical buttons; IMU gesture + haptic feedback",
    "specs.br.6": "Haptic Feedback",
    "specs.br.6v": "Linear / rotor motor (MOTOR_PWM channel)",
    "specs.br.7": "Battery",
    "specs.br.7v": "800 mAh 1S LiPo",
    "specs.br.8": "Charging",
    "specs.br.8v": "4P magnetic data cable 2.5PH",
    "specs.br.9": "Enclosure",
    "specs.br.9v": "3D-printed iteration, multiple strap options (universal lug interface)",
    "specs.br.10": "Waterproofing",
    "specs.br.10v": "Not yet tested",
    "specs.br.11": "Battery Life / Standby",
    "specs.br.11v": "Measured data TBD",

    "gallery.eyebrow": "<span class=\"index\">11</span> Prototype Evidence",
    "gallery.heading": "We don't stop<br>at concept art.",
    "gallery.shot.1.cap": "2026·04 · Lab Assembly",
    "gallery.shot.1.title": "Physical Prototype",
    "gallery.shot.1.desc": "Palm-sized underwater camera · thruster structure assembly",
    "gallery.shot.2.cap": "ID PROPOSAL · v2.1 · 2026·03",
    "gallery.shot.2.title": "Industrial Design ID",
    "gallery.shot.2.desc": "Surface language · color & volume study",
    "gallery.shot.3.cap": "HARDWARE · PCB1 · REV 3 · 2026·03·17",
    "gallery.shot.3.title": "PCB · Main Control Board",
    "gallery.shot.3.desc": "Camera-side hardware · 3rd iteration",
    "gallery.shot.4.cap": "WATCH SCH · 2026·03",
    "gallery.shot.4.title": "Schematic · Acoustic Bracelet",
    "gallery.shot.4.desc": "Underwater multimodal interaction gateway",
    "gallery.shot.5.cap": "WATER TEST · 2026·04·28 · NO CUT · 11 consecutive logs",
    "gallery.shot.5.title": "Scene Expression",
    "gallery.shot.5.desc": "Freedive photography · consumer-facing product imagination",

    "business.eyebrow": "<span class=\"index\">12</span> Business Model",
    "business.heading": "Hardware acquires users.<br><em>HaaS</em> builds long-term value.",
    "business.1.title": "Consumer Hardware",
    "business.1.desc": "Differentiate on wireless following, palm deployment, and one-tap editing — not on camera specs. Product definition and end-to-end experience form the first competitive layer.",
    "business.2.title": "Dive Shop Rental",
    "business.2.desc": "Low-barrier entry for dive shops and travel. For shops: higher gear turnover and content output. For divers: no need to buy an underwater camera before the trip. Rental is the most effective form of consumer education.",
    "business.3.title": "Cloud AI Subscription",
    "business.3.desc": "GAN color restoration, smart editing, dive logs, production templates — everything requiring compute and asset libraries lives in the cloud, generating recurring subscription revenue. Hardware ASP fluctuates; HaaS delivers steady recurring revenue.",

    "roadmap.eyebrow": "<span class=\"index\">13</span> Milestones",
    "roadmap.heading": "Three steps<br>to Kickstarter.",
    "roadmap.1.when": "Now · 2026",
    "roadmap.1.title": "POC · Proof of Concept",
    "roadmap.1.desc": "Acoustic positioning + auto-cruise + obstacle-avoid state machine proven; PCB iteration 3; actively recruiting core team members.",
    "roadmap.2.when": "Next · 2026 Q4",
    "roadmap.2.title": "EP · Engineering Validation",
    "roadmap.2.desc": "Focused on verifying stable follow-loop, hydrostatic seal consistency, reliable launch/recovery, endurance, and serviceability.",
    "roadmap.3.when": "Launch · Summer 2027",
    "roadmap.3.title": "Kickstarter Launch",
    "roadmap.3.desc": "Launch global early-adopter conversion with real water-test footage, quantifiable metrics, and a dual-product-line narrative.",

    "moat.kicker": "14 · IP &amp; Patent Defense",
    "moat.heading": "Patent defense<br><em>under construction</em>.",
    "moat.desc": "Rigorous FTO and patent portfolio construction around the product's hardest-to-replicate technical nodes — building competitive barriers for EP and Kickstarter phases.",
    "moat.note": "Patent disclosure drafted · FTO search · IN-DEV",
    "moat.1.title": "Acoustic-Assisted Visual Tracking Algorithm",
    "moat.1.desc": "In bubble / turbidity scenarios, acoustic signals smoothly correct visual ROI weights — maintaining stable lock and follow.",
    "moat.2.title": "Underwater Multimodal Interaction Control",
    "moat.2.desc": "Acoustic bracelet tap encoding + haptic feedback, forming a low-bandwidth, high-robustness interaction channel between diver and device.",
    "moat.3.title": "Hydrostatic Pressure-Assisted Seal Structure",
    "moat.3.desc": "Mechanical design that leverages ambient water pressure to enhance seal conformity — optimized for consumer depth ratings and field serviceability.",

    "investors.eyebrow": "<span class=\"index\">15</span> For Investors",
    "investors.heading": "Verified claims,<br><em>clearly layered</em>.",
    "investors.lead": "We only claim what has been verified through testing. Roadmap items are clearly marked \"in development\" or \"planned.\" Below is key information for angel-stage investors. For the full Deck and Tech Snapshot, contact the founding team.",
    "investors.1.num": "— 01 · Stage",
    "investors.1.title": "POC · Working Prototype Proven",
    "investors.1.desc": "Mechanical, PCB, control scripts, user interviews, and water-test footage are all archived. Demonstrable pipeline: immersion auto-unlock → auto-cruise → proximity obstacle avoidance → surface auto-lock.",
    "investors.2.num": "— 02 · Next",
    "investors.2.title": "2026 Q4 Entering EP · Engineering Validation",
    "investors.2.desc": "Focused on stable follow-loop, hydrostatic seal consistency, continuous-run reliability, endurance, and serviceability — each with quantifiable target metrics.",
    "investors.3.num": "— 03 · Use of Funds",
    "investors.3.title": "Angel Round Allocation",
    "investors.3.desc": "Core team hires (embedded / control algorithms / mechanical), EP-stage supply chain & small-batch water testing, Kickstarter video & marketing. Every dollar maps to a verifiable milestone.",
    "investors.btn.1": "Request Tech Snapshot",
    "investors.btn.2": "View 90s Evidence Reel",

    "outro.heading": "Let go,<br><em>let Remo take the shot</em>.",
    "outro.btn.1": "Talk to the Founding Team",
    "outro.btn.2": "Back to Top",
    "outro.meta.1.label": "Stage",
    "outro.meta.1.val": "POC · Working Prototype",
    "outro.meta.2.label": "Next Stop",
    "outro.meta.2.val": "EP · Engineering Validation · 2026 Q4",
    "outro.meta.3.label": "Launch",
    "outro.meta.3.val": "Lite · Summer 2027",

    "sticky.specs": "5 Thrusters · Acoustic Positioning · Cruise 40–60 min · 4K HiSilicon",
    "sticky.cta": "Join Kickstarter Early Bird",

    "footer.tagline": "Wireless Underwater Follow-Cam · POC 2026",
    "footer.copyright": "© Project Remo · All rights reserved",

    "meta.title": "Project Remo — Wireless Underwater Follow-Cam",
    "meta.desc": "Project Remo is a wireless, palm-deployable underwater follow-cam. Auto-wake on entry, acoustic positioning, auto-dock on surfacing. It handles the shot so the diver doesn't have to.",
    "hero.product.alt": "Project Remo Underwater Intelligent Follow-Camera",
    "acoustic.img.alt": "Acoustic Link Underwater Scene · Diver and Remo Acoustic Communication",
    "compare.img.alt": "Comparison: Action Cam · Tethered ROV · Project Remo",
    "bracelet.img.alt": "Project Remo Acoustic Bracelet · DYP-C01B + ESP32-S3",
  }
};

/* ─── I18N Engine ───────────────────────────────────────────────────── */
const I18N_ATTR = "data-i18n";
const I18N_HTML_ATTR = "data-i18n-html";
const I18N_ALT_ATTR = "data-i18n-alt";

function getLang() {
  try { return localStorage.getItem("remo-lang") || "zh"; }
  catch (e) { return "zh"; }
}

function setLang(lang) {
  const dict = I18N[lang] || I18N["zh"];
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  // Text content
  document.querySelectorAll(`[${I18N_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_ATTR);
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // HTML content
  document.querySelectorAll(`[${I18N_HTML_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_HTML_ATTR);
    if (dict[key] !== undefined) el.innerHTML = dict[key];

    // Re-trigger hero title animation if it's the title
    if (el.id === "hero-title") {
      requestAnimationFrame(() => {
        el.classList.remove("in");
        requestAnimationFrame(() => {
          window.setTimeout(() => el.classList.add("in"), 50);
        });
      });
    }
  });

  // Alt attributes
  document.querySelectorAll(`[${I18N_ALT_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_ALT_ATTR);
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  // Meta
  if (dict["meta.title"]) document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

  // Update lang toggle UI
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "ZH · EN" : "ZH · EN";
    langBtn.classList.toggle("is-en", lang === "en");
  }

  try { localStorage.setItem("remo-lang", lang); } catch (e) {}
}

function toggleLang() {
  setLang(getLang() === "zh" ? "en" : "zh");
}

/* ─── Init ─────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.addEventListener("click", toggleLang);
});

/* =========================================================================
   Interaction behaviours (unchanged)
   ========================================================================= */

(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── 1. Topbar scroll state ───────────────────────────────────────── */
  const topbar = document.getElementById("topbar");
  if (topbar) {
    const onScroll = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ─── 2. Reveal observer ───────────────────────────────────────────── */
  const reveals = document.querySelectorAll(".reveal, .eyebrow");
  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("in-view"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in-view"));
  }

  /* ─── 3. Hero title word-by-word entrance ──────────────────────────── */
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    requestAnimationFrame(() => {
      window.setTimeout(() => heroTitle.classList.add("in"), 200);
    });
  }

  /* ─── 4. Counter numbers ───────────────────────────────────────────── */
  const counterEls = document.querySelectorAll("[data-count]");
  if (counterEls.length && "IntersectionObserver" in window && !prefersReduced) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      if (Number.isNaN(target)) return;
      const span = el.querySelector(".num-val");
      if (!span) return;

      const duration = target > 1000 ? 1600 : 1100;
      const startTime = performance.now();
      const startVal = 0;

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(startVal + (target - startVal) * eased);
        span.textContent = v;
        if (t < 1) requestAnimationFrame(tick);
        else span.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach((el) => counterIO.observe(el));
  }

  /* ─── 5. GAN before/after slider ───────────────────────────────────── */
  const slider = document.getElementById("color-slider");
  const restored = document.getElementById("color-restored");
  const handle = document.getElementById("color-handle");

  const updateColorCompare = (value) => {
    const v = Math.max(0, Math.min(100, Number(value)));
    if (restored) restored.style.clipPath = `inset(0 0 0 ${v}%)`;
    if (handle) handle.style.left = `${v}%`;
  };

  if (slider) {
    updateColorCompare(slider.value);
    slider.addEventListener("input", (e) => updateColorCompare(e.target.value));
  }

  /* ─── Smooth scroll for anchor links ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  /* ─── Hero product subtle parallax on scroll ───────────────────────── */
  const heroProduct = document.querySelector(".hero-product");
  if (heroProduct && !prefersReduced) {
    let scrollY = 0;
    let ticking = false;
    const update = () => {
      const y = scrollY * 0.18;
      const rot = -6 + scrollY * 0.012;
      const img = heroProduct.querySelector("img");
      if (img) img.style.transform = `rotate(${rot}deg) translateY(${-y}px)`;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── 6. Tech specs tab switcher ───────────────────────────────────── */
  const tabs = document.querySelectorAll(".specs-tabs .tab");
  const panels = document.querySelectorAll(".specs-panel");
  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach((p) => {
          p.classList.toggle("active", p.dataset.panel === target);
        });
      });
    });
  }

  /* ─── 6.5 Lazy-attach flow videos when available ─────────────────────
     For flow steps that have a `data-video-slot="VNN"` attribute, attempt
     to load the video. Tries local repo path first (works on GitHub Pages
     same-origin, no CDN), then jsDelivr CDN as fallback. WeChat browsers
     are unreliable with jsDelivr in mainland China, so local is primary. */
  const CDN_BASE = "https://cdn.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main";
  document.querySelectorAll(".flow-step[data-video-slot]").forEach((step) => {
    const slot = step.getAttribute("data-video-slot");
    if (!slot) return;
    const localUrl = `./Video/${slot}.mp4`;
    const cdnUrl = `${CDN_BASE}/Video/${slot}.mp4`;
    const probe = document.createElement("video");
    probe.preload = "metadata";
    probe.muted = true;
    probe.playsInline = true;
    let triedCdn = false;
    const onSuccess = (workingUrl) => {
      const media = step.querySelector(".flow-media");
      if (!media) return;
      // Tag any existing icon as fallback so it gets hidden by .has-video rule.
      media.querySelectorAll(".flow-icon").forEach((el) => el.classList.add("fallback"));
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "auto";
      video.className = "flow-video";
      // WeChat / X5 compatibility — without these, Android WeChat hijacks
      // the <video> into a fullscreen player and iOS WeChat refuses inline.
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("x5-playsinline", "true");
      video.setAttribute("x5-video-player-type", "h5");
      video.setAttribute("x5-video-player-fullscreen", "false");
      // Use the URL that actually worked in the probe.
      video.src = workingUrl;
      // If even this URL fails on the real <video>, swap to the other one.
      const otherUrl = workingUrl === localUrl ? cdnUrl : localUrl;
      let swapped = false;
      video.addEventListener("error", () => {
        if (!swapped) { swapped = true; video.src = otherUrl; video.load(); }
      });
      media.insertBefore(video, media.firstChild);
      step.classList.add("has-video");
    };
    probe.onloadedmetadata = () => onSuccess(probe.src);
    probe.onerror = () => {
      if (!triedCdn) { triedCdn = true; probe.src = cdnUrl; }
      /* else: keep SVG fallback */
    };
    probe.src = localUrl;
  });

  /* ─── 7. Sticky pre-order bar (appear after hero) ──────────────────── */
  const stickyBar = document.getElementById("sticky-bar");
  const hero = document.querySelector(".hero");
  if (stickyBar && hero) {
    const onScrollSticky = () => {
      const heroHeight = hero.offsetHeight;
      const docHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      const scrolled = window.scrollY;
      const passedHero = scrolled > heroHeight * 0.7;
      const nearBottom = scrolled + viewport > docHeight - 240;
      stickyBar.classList.toggle("show", passedHero && !nearBottom);
      stickyBar.setAttribute("aria-hidden", (passedHero && !nearBottom) ? "false" : "true");
    };
    window.addEventListener("scroll", onScrollSticky, { passive: true });
    window.addEventListener("resize", onScrollSticky);
    onScrollSticky();
  }

  /* ─── 8. Universal video autoplay handler ──────────────────────────────
     Tested working in: Chrome (desktop+mobile), Safari (desktop+iOS),
     WeChat X5 (Android) and WKWebView (iOS), Quark, UC, QQ, Firefox, Edge.

     Strategy (defense in depth — no single tactic works everywhere):
       1. Force muted state on every video via JS (some browsers ignore the
          HTML `muted` attribute, especially Quark and older WeChat).
       2. IntersectionObserver: when a video enters viewport, call play().
          This is the most reliable cross-browser autoplay path.
       3. Persistent interaction listeners (not `once`): every touch/click/
          scroll re-attempts play() on any paused video. Cheap and
          extremely robust against browsers that pause on tab-switch.
       4. Per-video error -> fallback URL swap (jsDelivr backup).
       5. Click the video itself = play it (final user-facing fallback).
       6. WeChat-specific: WeixinJSBridgeReady + visibilitychange retries.
     */
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

  // Force muted at the property level — some browsers (Quark, older WeChat)
  // ignore the HTML `muted` attribute but respect the JS property.
  const ensureMuted = (v) => {
    v.muted = true;
    v.setAttribute("muted", "");
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");
  };

  const tryPlay = (v) => {
    if (!v || !v.paused) return;
    ensureMuted(v);
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const tryPlayAll = () => {
    document.querySelectorAll("video").forEach(tryPlay);
  };

  // Per-video fallback: if the in-document source fails, swap in the
  // data-video-fallback URL once.
  document.querySelectorAll("video[data-video-fallback]").forEach((v) => {
    let swapped = false;
    const onErr = () => {
      if (swapped) return;
      swapped = true;
      const url = v.getAttribute("data-video-fallback");
      if (!url) return;
      v.querySelectorAll("source").forEach((s) => s.remove());
      v.src = url;
      v.load();
      tryPlay(v);
    };
    v.addEventListener("error", onErr, true);
    v.querySelectorAll("source").forEach((s) => s.addEventListener("error", onErr));
  });

  // Setup applies to every video (current and future).
  const setupVideo = (v) => {
    ensureMuted(v);
    // Click on the video itself = manual play (final fallback for users).
    v.addEventListener("click", () => tryPlay(v));
    // When the video can play, kick it off.
    v.addEventListener("loadeddata", () => tryPlay(v));
    v.addEventListener("canplay", () => tryPlay(v));
    // Force a load attempt — WeChat sometimes ignores preload entirely.
    try { v.load(); } catch (_) {}
  };
  document.querySelectorAll("video").forEach(setupVideo);

  // IntersectionObserver — primary autoplay trigger. play() called inside
  // an intersection callback counts as a "user-adjacent gesture" in many
  // browsers and is the most reliable autoplay path on mobile.
  if (typeof IntersectionObserver !== "undefined") {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tryPlay(entry.target);
        } else {
          // Pause off-screen videos to save bandwidth (WeChat is sensitive
          // to concurrent video downloads).
          if (!entry.target.paused) {
            try { entry.target.pause(); } catch (_) {}
          }
        }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll("video").forEach((v) => io.observe(v));
  }

  // Watch for videos added later by JS (flow steps).
  if (typeof MutationObserver !== "undefined") {
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.tagName === "VIDEO") setupVideo(node);
          node.querySelectorAll && node.querySelectorAll("video").forEach(setupVideo);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // Persistent interaction listeners — fires every time, not `once`. Cheap
  // because tryPlayAll skips already-playing videos.
  ["touchstart", "touchend", "click", "scroll"].forEach((evt) =>
    document.addEventListener(evt, tryPlayAll, { passive: true, capture: true })
  );

  // WeChat-specific: WeixinJSBridge + visibility change.
  // The invoke() call establishes a trusted bridge session; in some
  // WeChat versions this enables video.play() to succeed.
  if (isWeChat) {
    const wechatReady = () => {
      try { WeixinJSBridge && WeixinJSBridge.invoke("getNetworkType", {}, () => tryPlayAll()); } catch (_) {}
      tryPlayAll();
    };
    document.addEventListener("WeixinJSBridgeReady", wechatReady);
    // WeChat may fire WeixinJSBridgeReady before our listener is registered.
    if (typeof WeixinJSBridge !== "undefined") wechatReady();
    setTimeout(wechatReady, 600);
    setTimeout(wechatReady, 1500);
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlayAll();
  });

  // Final kick after window load (all resources, including videos, ready).
  window.addEventListener("load", tryPlayAll);
})();
