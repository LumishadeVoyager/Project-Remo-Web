# Project Remo 网站文案与排版指南

> 这是网站当前线上版本（commit `5baae14`）的完整文案+结构清单。
> **使用方式：** 在本文档里直接修改文字/排版/结构。修改完后告诉 Claude "依据 CONTENT.md 重新生成网页"，Claude 会据此重写 `index.html` / `site.js` 的 i18n 词典 / `site.css`。
> **不要直接改 i18n 键名（key），改右侧的文案值即可。**

---

## 全局设置

| 项目 | 配置 |
|---|---|
| 主背景色 | 深海黑蓝 `#050a14` |
| 高亮色（accent） | 电青 `#00d9ff` |
| 显示字体（display） | Fraunces 衬线（细变体） |
| 正文字体 | Inter / 思源黑体 |
| 等宽字体（mono） | JetBrains Mono |
| 语言切换 | 右上角 `ZH · EN`，点击切换，偏好保存到 localStorage |
| 文档 lang 属性 | `zh-CN` / `en` 自动切换 |

**全局视觉元素：**
- 全屏柔和电影颗粒（film grain）叠加
- 大型径向光晕（atmospheric depth）
- 所有 section 间有细线分隔
- 鼠标选中文字时高亮变青色

---

## 顶栏 TOPBAR
**排版：** 固定顶部，三列布局（品牌 / 导航 / 语言）。滚动 40px 后变成半透明毛玻璃。

**品牌：** `· Remo/02`（青色点 + 衬线字 + 灰色斜体 /02）

**导航链接（8 项）：**
| 锚点 | ZH | EN |
|---|---|---|
| #flow | 工作流 | How It Works |
| #architecture | 架构 | Architecture |
| #acoustic | 声学 | Acoustic |
| #color | 影像 | Imaging |
| #compare | 对比 | Compare |
| #lineup | 产品线 | Lineup |
| #specs | 参数 | Specs |
| #investors | 投资人 | Investors |

**语言切换按钮：** `ZH · EN`（点击切换，激活时变青色）

---

## HERO 首页

**排版：** 全屏首屏。顶部一行元信息 → 中间左大标题 + 右产品主图（绝对定位漂浮）→ 底部一段概要 + 两个按钮 → 底部 5 个关键参数横条 → 右下"向下滚动"提示。

**素材：** `Image/Hero主体图.png`（产品主图，已抠图透明）

### 元信息行（4 项）
| ZH | EN |
|---|---|
| Issue 02 · 2026 | Issue 02 · 2026 |
| POC LIVE · 声学定位已验证（带脉动点） | POC LIVE · Acoustic Positioning Verified |
| Underwater · 40 m | Underwater · 40 m |
| POC → EP → Kickstarter | POC → EP → Kickstarter |

### 大标题（保留不变 ⚠️）
**ZH（每个 `<span class="word">` 是一个单词，逐字进入）：**
```
放开 / 双手， / 把镜头 / 交给 / <em>水下</em> / <em>智能体</em>。
```
**EN：**
```
Let Go / of Your / Hands. / Hand the / Shot to an / <em>Underwater</em> / <em>Agent</em>.
```

### 概要段落
**ZH：** Project Remo 是一款**无线、掌上起降**的水下智能跟随相机。它填补了消费级运动相机与传统有线 ROV 之间的市场空白——让每一位潜水员重新拥有自由的双手与完整的注意力。

**EN：** Project Remo is a **wireless, palm-sized underwater follow-cam**. It fills the gap between consumer action cameras and tethered ROVs — freeing every diver's hands and full attention for the dive itself.

### 主要按钮（2 个）
| 类型 | ZH | EN | 链接 |
|---|---|---|---|
| primary（实心） | 探索 Remo | Explore Remo | `#flow` |
| ghost（描边） | 观看水测实录 | Watch Water Tests | `#evidence` |

### 关键参数横条（5 项 · 大数字 + 单位 + 注释）
| 数字 | 单位 | ZH 注释 | EN 注释 |
|---|---|---|---|
| 40 | m | 设计目标深潜 | Target Depth Rating |
| 5 | × | 推进器 2H+2V+1L | Thrusters 2H+2V+1L |
| 3 | × | 声学通信 DYP-C01B | Acoustic Link DYP-C01B |
| 40–60 | min | 巡航续航 · 实测 | Cruise Endurance · Measured |
| 4K | 海思 / HiSilicon | 影像方案 · MVP | Imaging · MVP |

### 滚动提示
**ZH：** 向下滚动　**EN：** Scroll Down

---

## 01 Manifesto

**排版：** 大段诗意文字，居中偏左。三段缩进。底部签名带细线。

**Eyebrow：** `01 Manifesto`

**主文案（HTML，含 `<br>` 和 `<em>`）：**
- **ZH：** 水下摄影的难点，<br>不是"能不能拍"，<br>而是潜水员，<br>*是否还有余力拍好*。
- **EN：** The hard part of underwater photography<br>isn't "can you shoot it?" —<br>it's whether the diver<br>*still has the bandwidth to shoot it well*.

**签名：** 
- ZH：Project Remo · 创始团队
- EN：Project Remo · Founding Team

---

## 02 The Pain

**排版：** 左侧 Eyebrow + 大标题。下方三条横向痛点条目（号码 + 标题 + 描述），每条用横线分割。

**Eyebrow：** `02 The Pain`

**大标题：**
- ZH：三条*水下摄影者*必须独自承担的负担。
- EN：Three burdens every *underwater photographer* carries alone.

### 痛点 01
- **ZH 标题：** 双手被占用
- **EN 标题：** Both Hands Occupied
- **ZH 描述（HTML）：** 水下摄影者必须同时管理浮力、呼吸节奏、深度计、构图与跟焦——注意力的"工作记忆"被瓜分到 5 件事以上。最终结果通常不是没拍到，而是*拍废与隐患同时发生*。
- **EN 描述：** Underwater photographers juggle buoyancy, breathing rhythm, depth gauge, composition, and focus tracking — working memory split across 5+ tasks. The result is usually *not "didn't shoot" — it's "ruined the shot while compromising safety"*.

### 痛点 02
- **ZH 标题：** ROV 不属于消费者
- **EN 标题：** ROVs Aren't for Consumers
- **ZH 描述：** 传统水下 ROV 是工业巡检工具——脐带线缆、地面控制器、上岸部署流程，让它从未真正属于一次说走就走的旅行潜。重 7–15 kg、起步价 ¥15,000+，"自由"和"ROV"在产品语言上从未相遇。
- **EN 描述：** Traditional underwater ROVs are industrial inspection tools — tethers, ground controllers, and shore-deployment workflows mean they've never belonged in a spontaneous dive trip. At 7–15 kg and ¥15,000+ starting price, "freedom" and "ROV" have never met in product language.

### 痛点 03
- **ZH 标题：** 视觉会失效
- **EN 标题：** Vision Fails Underwater
- **ZH 描述：** 气泡群、悬浮颗粒、逆光、低照度——任何一种都足以让单纯视觉跟踪丢失目标。水下交互必须尊重"水"这件事本身，*而不是把陆地上的视觉假设原样搬下水*。
- **EN 描述：** Bubble clouds, suspended particles, backlight, low visibility — any one is enough to break a pure visual tracker. Underwater interaction must respect the water itself, *not blindly transplant land-based vision assumptions beneath the surface*.

---

## 03 How It Works（工作流）

**排版：** 大标题在上。四个步骤卡片横向排列（桌面四列 / 平板两列 / 手机单列），每个卡片含编号 + 图标 + 标题 + 描述 + 状态标签。

**Eyebrow：** `03 How It Works`

**大标题：**
- ZH：60 秒，<br>看懂*一次水下跟拍*。
- EN：60 seconds to<br>understand an *underwater follow-shot*.

### 步骤 1（LIVE）
- **编号：** 01 · WAKE
- **图标：** 同心圆 + 上下指示线（觉醒）
- **ZH：** 下水自动唤醒 / 设备入水即解锁，无需按键。基于水压与导通双重判定，避免误启动。
- **EN：** Auto-Wake on Entry / The device unlocks the moment it enters the water. No buttons needed. Dual water-pressure and conductivity detection prevents false triggers.

### 步骤 2（LIVE）
- **编号：** 02 · ACOUSTIC LOCK
- **图标：** 两圆 + 曲线（声学链路）
- **ZH：** 声学锁定潜水员 / 潜水员佩戴的声学手环通过 DYP-C01B 建立声学链路，Remo 即使在浑浊水域也能保持稳定定位。
- **EN：** Acoustic Diver Lock / The diver's acoustic bracelet establishes an acoustic link via DYP-C01B, allowing Remo to maintain stable positioning even in murky water.

### 步骤 3（IN-DEV）
- **编号：** 03 · FOLLOW
- **图标：** 取景器三角形 + 圆点（跟拍）
- **ZH：** 智能跟随构图 / 声学定位提供位置先验，视觉追踪进行精构图。当视觉丢失时，声学权重立即接管。
- **EN：** Intelligent Follow-Framing / Acoustic positioning provides positional priors; visual tracking handles fine composition. When vision drops, acoustic weighting takes over instantly.

### 步骤 4（LIVE）
- **编号：** 04 · DOCK
- **图标：** 方框 + 上方插头（归仓）
- **ZH：** 上水自动归仓 / 出水自动上锁，磁吸接触式充电，无 USB 接口意味着无密封风险。
- **EN：** Auto-Dock on Surfacing / Auto-locks upon surfacing. Magnetic contact charging — no USB port means no sealing risk.

---

## 04 Hardware Architecture（架构）

**排版：** 左侧文案区（Eyebrow + 大标题 + 副标题 + 长段描述）；右侧 14 项规格列表（2列网格）。

**Eyebrow：** `04 Hardware Architecture`

**大标题：**
- ZH：不追求矢量，*追求*稳定。
- EN：Not chasing vectored thrust.<br>*Chasing* stability.

**副标题（H3）：**
- ZH：2 水平 + 2 垂直 + 1 横向。
- EN：2 Horizontal + 2 Vertical + 1 Lateral.

**主段落：**
- **ZH：** Remo 摒弃矢量推进（vectored thruster）方案的复杂调参，采用经过 ROV 工业验证的 5 推进器布局——更易于水动力学建模、控制器收敛与外壳工程化。我们并行验证*两套动力路线*：策海科技无刷推进器主打海水可靠性，自研有刷方案主打成本可控；二者共享同一套飞控、声学与传感平台。
- **EN：** Remo rejects the complex tuning of vectored-thruster approaches, adopting an industry-validated 5-thruster layout from the ROV world — easier to model hydrodynamically, more convergent for the controller, and simpler to package. We validate *two parallel powertrain routes*: Cehai Technology brushless thrusters for seawater reliability, and an in-house brushed solution for cost control — both sharing the same flight controller, acoustics, and sensor platform.

### 规格列表（14 项 · 项目 · 值 · 状态）

| # | ZH 项 | EN 项 | ZH 值 | EN 值 | 状态 |
|---|---|---|---|---|---|
| 1 | 推进器架构 | Thruster Layout | 2H + 2V + 1L | 2H + 2V + 1L | LIVE |
| 2 | 动力 A · 无刷 | Route A · Brushless | 策海 T60-edu-se | Cehai T60-edu-se | LIVE |
| 2-sub | 推力 3 kgf · 功率 150 W | Thrust 3 kgf · Power 150 W |  |  |  |
| 3 | 动力 B · 有刷 | Route B · Brushed | 自研双向电调 | In-House Bi-Dir ESC | IN-DEV |
| 4 | 飞控平台 | Flight Controller | FlyingRC H7Wlite | FlyingRC H7Wlite | LIVE |
| 4-sub | MCU STM32H743VIH6 · 双 IMU + DPS368 | MCU STM32H743VIH6 · Dual IMU + DPS368 |  |  |  |
| 5 | 固件 | Firmware | ArduSub 4.1.2 | ArduSub 4.1.2 | LIVE |
| 6 | 无刷电调 | BLDC ESC | AM32 Mini ESC | AM32 Mini ESC | LIVE |
| 7 | 深度传感 | Depth Sensor | MS5837-30BA | MS5837-30BA | LIVE |
| 8 | 避障声呐 | Obstacle Sonar | DYP-L08 | DYP-L08 | LIVE |
| 9 | 声学模块 | Acoustic Module | DYP-C01B ×3 | DYP-C01B ×3 | LIVE |
| 10 | 补光系统 | Fill Light | 12V LED · 环境光平衡 | 12V LED · Ambient-Light Balanced | LIVE |
| 11 | 防水开关 | Waterproof Switch | 舱外物理通断 | External Physical Cutoff | LIVE |
| 12 | 漏水检测 | Leak Detection | I2C 传感器 | I2C Sensor | PLANNED |
| 13 | 水压辅助密封 | Hydrostatic Seal | 自研结构 | In-House Structure | IN-DEV |
| 14 | 原型工艺 | Prototyping | Bambu Lab P1S | Bambu Lab P1S | LIVE |

---

## 05 By the Numbers（关键数字）

**排版：** 大标题在上。下方四个大数字卡片横排（带计数动画）。

**Eyebrow：** `05 By the Numbers`

| 数字 + 单位 | ZH 标签 | EN 标签 | ZH 注释 | EN 注释 |
|---|---|---|---|---|
| 40 m | 设计目标深潜 | Target Depth Rating | 结构设计目标，当前于泳池 / 浅水验证。 | Structural design target. Currently validated in pool / shallow water only. |
| 5 × | 推进器架构 | Thruster Layout | 2 水平 + 2 垂直 + 1 横向，稳定优先。 | 2 horizontal + 2 vertical + 1 lateral. Stability-first philosophy. |
| 3 × | 声学通信模块 | Acoustic Comms Modules | DYP-C01B，相机端 2 + 手环端 1，纠偏定位。 | DYP-C01B ×3: 2 on camera + 1 on bracelet. Relative-position correction. |
| 3 + | 核心专利布局 | Core Patent Portfolio | 声学辅助视觉、多模态交互、水压辅助密封。 | Acoustic-assisted vision, multimodal interaction, hydrostatic seal. |

---

## 06 Acoustic Intelligence（声学）

**排版：** 左边大场景图（声学链路水下场景）；右侧文案区，含大标题 + H3 副标题 + 两段主文 + 8 个能力 badge + 声学手环图片+说明。

**素材：** `Image/声学链路水下场景图.png`、`Image/声学手环产品图.png`

**Eyebrow：** `06 Acoustic Intelligence`

**大标题：**
- ZH：当水变浑浊，*声*不会。
- EN：When the water turns murky,<br>*sound* doesn't.

**副标题：**
- ZH：专业声学通信，<br>不是简单水听器。
- EN：Professional acoustic comms —<br>not a simple hydrophone.

**段落 1（HTML）：**
- ZH：Remo 摒弃简单水听器（hydrophone），采用 DYP-C01B 水下声学通信模块——系统部署三个模块，相机端 2 个、潜水员手环端 1 个，两个及以上模块同时在水下即可建立低速率声学链路，进行**纠偏定位**。当视觉被气泡或悬浮颗粒遮蔽时，声学链路仍然稳定——这是 ROV 工业领域成熟二十年的技术，我们做的，是把它装进掌心，并让它和视觉算法手拉手。
- EN：Remo replaces simple hydrophones with DYP-C01B underwater acoustic communication modules — three modules deployed system-wide: two on the camera and one on the diver's bracelet. Any two modules submerged can establish a low-rate acoustic link for **corrective positioning**. When vision is obscured by bubbles or suspended particles, the acoustic link stays stable — this is technology proven over two decades in the ROV industry. What we've done is shrink it to palm-size and make it work hand-in-hand with vision algorithms.

**段落 2：**
- ZH：潜水员佩戴的声学手环通过**敲击**产生特定超声特征，被相机端读取识别，构成低带宽、高鲁棒的指令通道——专为"戴着面镜、戴着手套、说不出话"的环境而生。
- EN：The diver's acoustic bracelet generates distinct ultrasonic signatures via **tapping**, which the camera reads and interprets — forming a low-bandwidth, high-robustness command channel purpose-built for an environment where you're "wearing a mask, wearing gloves, and can't speak."

### 能力 badge（8 项 · 含三种状态：LIVE / IN-DEV / PLANNED）

| ZH | EN | 状态 |
|---|---|---|
| DYP-C01B 声学模块 ×3 | DYP-C01B Module ×3 | LIVE |
| 自动巡航 / 避障 | Auto-Cruise / Obstacle Avoid | LIVE |
| 入水唤醒 / 出水上锁 | Immersion Wake / Surface Lock | LIVE |
| 声学纠偏定位 | Acoustic Correction Positioning | IN-DEV |
| 敲击超声指令识别 | Tap Ultrasonic Recognition | IN-DEV |
| 声学-视觉融合 | Acoustic-Visual Fusion | IN-DEV |
| 震动反馈闭环 | Haptic Feedback Loop | PLANNED |
| 多机声学组网 | Multi-Unit Acoustic Mesh | PLANNED |

### 声学手环图片说明
- ZH：声学手环 · ESP32-S3 · DYP-C01B · IMU 翻腕+敲击
- EN：Acoustic Bracelet · ESP32-S3 · DYP-C01B · IMU Gesture + Tap

---

## 07 Image Pipeline（影像/色彩）

**排版：** 大标题在上。下方一段长 lead 文案。再下方是 RAW / RESTORED 滑动对比图（拖动滑块切换）。底部 disclaimer 带 IN-DEV 标签。

**素材：** `Image/GAN色彩还原RAW.png`、`Image/GAN色彩还原RESTORED.png`

**Eyebrow：** `07 Image Pipeline`

**大标题：**
- ZH：不只是*拍到*，<br>而是变成可分享的成片。
- EN：Not just *capturing* —<br>turning it into shareable footage.

**Lead 文案：**
- ZH：水下色彩失真不是滤镜问题——红光在 5 m 几乎完全衰减，绿光在 15 m 大幅衰减，传统白平衡无能为力。Remo 引入基于**生成对抗网络（GAN）**的水下色彩还原算法，结合 MS5837 深度计与声学距离数据，进行物理级别的色彩校正，并通过云端 AI 剪辑订阅形成持续服务能力——*HaaS: Hardware as a Service*。
- EN：Underwater color distortion isn't a filter problem — red light is nearly gone at 5 m, green heavily attenuated at 15 m, and traditional white balance can't compensate. Remo introduces a **Generative Adversarial Network (GAN)** underwater color restoration algorithm, combining the MS5837 depth sensor with acoustic distance data for physics-level color correction — and wrapping it into a cloud AI editing subscription for ongoing service: *HaaS: Hardware as a Service*.

**对比图标签：**
- 左：RAW · 18.6 M · 浑浊　/　RAW · 18.6 M · Murky
- 右：GAN RESTORED · v0.4　/　GAN RESTORED · v0.4

**Disclaimer（IN-DEV）：**
- ZH：本图为算法 v0.4 离线推理结果。工程化版本计划于 EP 阶段验证，于 Kickstarter 阶段开放云端服务。
- EN：This image is an offline inference result from algorithm v0.4. The engineered version is planned for EP-stage validation and cloud service launch at Kickstarter.

---

## 08 vs Traditional（对比）

**排版：** 大标题在上。下方一张三机对比图（运动相机 / ROV / Remo）。再下方是 10 行 × 4 列对比表（属性 + 运动相机 + ROV + Remo·高亮列）。最底部一段免责声明。

**素材：** `Image/三机对比.png`

**Eyebrow：** `08 vs Traditional`

**大标题：**
- ZH：填补*市场空白*，<br>不是再造一台运动相机。
- EN：Filling a *market gap* —<br>not building another action cam.

**列标题：** 运动相机 / Action Cam | 有线 ROV / Tethered ROV | Project Remo（hero 高亮）

### 对比表（10 行）

| 维度 (ZH/EN) | 运动相机 | 有线 ROV | Remo |
|---|---|---|---|
| 典型重量 / Typical Weight | 150–250 g | 4–8 kg | 掌上级 / Palm-Sized |
| 占用双手 / Hands Occupied | 完全占用 / Fully Occupied | 部分（操控杆）/ Partial (Joystick) | 0 |
| 脐带线缆 / Tether Cable | 无 / None | 50–100 m | 无 / None |
| 携带形态 / Carry Form | 装兜 / Pocket | 大箱 / Large Case | 掌上 / Palm |
| 典型续航 / Typical Endurance | 60–120 min | 2–4 h（带电池组）/ 2–4 h (w/ Battery Pack) | 40–60 min（实测）/ 40–60 min (Measured) |
| 跟随能力 / Follow Capability | 无 / None / Surface Only | 手动操控 / Manual Control | 自主声学+视觉 / Autonomous Acoustic+Visual |
| 目标用户 / Target User | 自拍 / Selfie / 1st-Person | 工业 / Industrial / Hobbyist | 旅行潜 / Travel Dive |
| 典型价格带 / Price | ¥2–4k / $300–600 | ¥15–60k / $2,000–8,000 | 消费级目标 / Consumer Target |
| 学习曲线 / Learning Curve | 极低 / Minimal | 高 / Steep | 极低（一键投放）/ Minimal (One-Tap Deploy) |
| 失败成本 / Failure Cost | 拍废 / Lost Shot | 拍废 + 设备风险 / Lost Shot + Gear Risk | 拍废（自动归仓）/ Lost Shot (Auto-Return) |

**免责声明：**
- ZH：对比数据基于公开消费类产品参数。Remo 数据基于当前 POC 样机实测与结构设计目标。
- EN：Comparison data based on publicly available consumer product specs. Remo data based on current POC prototype measurements and structural design targets.

---

## 09 Product Lineup（产品线）

**排版：** 大标题在上。下方两张产品卡（Lite 在左 / Pro 在右），每卡含 tag + 大名字 + 描述 + 4 项 spec + when 标签。底部一段说明。

**Eyebrow：** `09 Product Lineup`

**大标题：**
- ZH：一台样机，<br>*两个市场愿景*。
- EN：One prototype,<br>*two market visions*.

### Lite 卡片
- **Tag：** `01 · 大众与租赁` / `01 · Mass Market & Rental` + `VISION`
- **名字：** Remo *Lite*
- **描述：**
  - ZH：为每一位会浮潜、会自由潜的人而生。更轻的出行负担、更简单的拍摄流程，让"从潜店借一台 Remo"成为标准动作。
  - EN：Built for everyone who snorkels or freedives. Lighter travel footprint, simpler shooting workflow — making "grab a Remo from the dive shop" the standard move.
- **4 项规格：**
  | ZH | EN |
  |---|---|
  | 定位 / 大众消费 · 租赁 | Positioning / Consumer · Rental |
  | 体验 / 一键投放即拍 | Experience / One-Tap Deploy & Shoot |
  | 价格策略 / 消费级入门 | Price Strategy / Entry Consumer |
  | 核心场景 / 旅行潜 · 课程 | Core Scenario / Travel Dive · Courses |
- **When：** 产品愿景 / 面向上市　|　Vision / Toward Launch

### Pro 卡片
- **Tag：** `02 · 硬核与创作者` / `02 · Enthusiast & Creator` + `VISION`
- **名字：** Remo *Pro*
- **描述：**
  - ZH：给愿意为画质付费的人准备的水下创作工具。围绕定制影像系统、更长续航与更深潜域，服务专业拍摄与高级潜点。
  - EN：A creative tool for people willing to pay for image quality. Built around a custom imaging system, extended endurance, and deeper depth rating — serving professional shoots and advanced dive sites.
- **4 项规格：**
  | ZH | EN |
  |---|---|
  | 定位 / 专业创作 | Positioning / Professional Creation |
  | 影像 / 定制影像系统（规划） | Imaging / Custom Imaging System (Planned) |
  | 潜域 / 更深潜深（规划） | Depth Rating / Deeper Rating (Planned) |
  | 核心场景 / 内容创作 · 高级潜点 | Core Scenario / Content Creation · Advanced Sites |
- **When：** 产品愿景 / EP 后规划　|　Vision / Post-EP Planning

**底部说明：**
- ZH：Lite / Pro 为未来产品线愿景。当前 POC 阶段为单一样机，并行验证有刷与无刷两套动力路线，最终归并为统一产品形态。
- EN：Lite / Pro are future product-line visions. The current POC stage is a single prototype validating both brushed and brushless powertrain routes in parallel, ultimately converging into a unified product form.

---

## 10 Tech Specs（参数 · 6 tab 切换）

**排版：** 大标题。6 个 tab 横向切换（手机端横向滚动）。每个 tab 是一张表格（项目 / 规格 / 状态）。

**Eyebrow：** `10 Tech Specs`

**大标题：**
- ZH：看得见的*工程细节*。
- EN：Engineering details<br>you can *actually see*.

**6 个 Tab：**
1. 影像 IMAGING
2. 水下 UNDERWATER
3. 智能 INTELLIGENCE
4. 动力 POWERTRAIN
5. 物理 PHYSICAL
6. 声学手环 BRACELET

**表头：** 项目 / Item | 规格 / Spec | 状态 / Status

### 10.1 IMAGING（8 行）
| 项目 | 规格 | 状态 |
|---|---|---|
| 相机方案 / Camera Solution | 4K 海思摄像头 + 主板模组 / 4K HiSilicon camera + mainboard module | LIVE |
| 拍摄控制 / Capture Control | 开机自动拍摄，启停由飞控控制电路通断 / Auto-start on power; start/stop controlled by FC via circuit relay | LIVE |
| 配套软件 / Companion Software | 模组自带 Wi-Fi 与记录仪软件 / Module has built-in Wi-Fi & DVR software | LIVE |
| 监看 / Monitoring | 水面可简单监看，水下暂不可实时监看 / Surface monitoring; no real-time underwater monitoring yet | LIVE |
| 激光对焦 / Laser AF | 摄像头 + 激光对焦模块 / Camera + laser autofocus module | LIVE |
| 补光系统 / Fill Light System | 12V LED + 环境光传感器自动平衡 / 12V LED + ambient-light sensor auto-balance | LIVE |
| 定制影像系统 / Custom Imaging System | 传感器选型、码率与色彩管线专项研发 / Sensor selection, bitrate & color pipeline R&D | PLANNED |
| GAN 色彩还原 / GAN Color Restoration | 云端水下色彩还原管线 / Cloud-based underwater color restoration pipeline | IN-DEV |

### 10.2 UNDERWATER（9 行）
| 项目 | 规格 | 状态 |
|---|---|---|
| 设计目标深度 / Target Depth Rating | 40 m（结构目标）/ 40 m (structural target) | IN-DEV |
| 当前验证环境 / Current Validation | 泳池 / 浅水 / Pool / shallow water | LIVE |
| 推进器布局 / Thruster Layout | 2 水平 + 2 垂直 + 1 横向 · 共 5 个 | LIVE |
| 巡航速度 / Cruise Speed | 约 1.5 m/s | LIVE |
| 海水稳定运行 / Seawater Operation | 无刷动力方案已验证 | LIVE |
| 密封方案 / Sealing Solution | O-Ring + 水压辅助密封结构 | IN-DEV |
| 防水物理开关 / Waterproof Switch | 舱外物理开关 | LIVE |
| 漏水检测 / Leak Detection | I2C 通用接口漏水传感器 | PLANNED |
| 外壳工艺 / Enclosure Process | Bambu Lab P1S 高精度打印 | LIVE |

### 10.3 INTELLIGENCE（12 行）
| 项目 | 规格 | 状态 |
|---|---|---|
| 声学通信模块 | DYP-C01B ×3 · 360° · ≤120 m | LIVE |
| 声学纠偏定位 | 多模块声学解算 | IN-DEV |
| 敲击指令识别 | 手环敲击超声特征 | IN-DEV |
| 避障声呐 | DYP-L08 · 5 cm–8 m | LIVE |
| 自动避障 | 近障触发推进倒车 | LIVE |
| 深度传感 | MS5837-30BA · ±0.2 m | LIVE |
| 惯性导航 IMU | ICM-42688-P + ICM-42605 | LIVE |
| 气压计 | DPS368 | LIVE |
| 磁力计 | QMC5883L | LIVE |
| 入水/出水检测 | 水压 + 导通双判定 | LIVE |
| 自动巡航 | 推进器 PWM 自动巡航 | LIVE |
| 视觉追踪 | 视觉精构图 + 声学权重修正 | IN-DEV |

### 10.4 POWERTRAIN（动力 A·无刷 / 动力 B·有刷 双列对比 · 9 行）
| 项目 | 动力 A · 无刷 | 动力 B · 有刷 |
|---|---|---|
| 路线定位 | 海水可靠性优先 | 成本可控优先 |
| 推进器 | 策海 T60-edu-se · 3 kgf · 150 W | 有刷直流电机 |
| 电调 | flyingRC AM32 Mini ESC | 自研双路双向有刷电调 1–3S |
| 海水验证 | 已验证稳定可靠 | 研发中 |
| 电池（共用）| Boston Power 3S 12.4 V · 5300 mAh | 同左 |
| 放电（共用）| 持续 8 A · 峰值 10 A | 同左 |
| 巡航续航 | 40–60 min（实测）| 40–60 min（实测）|
| 充电（共用）| XL2326 · 4P 磁吸接触式 | 同左 |
| 飞控（共用）| FlyingRC H7Wlite MK1 · ArduSub 4.1.2 | 同左 |

### 10.5 PHYSICAL（6 行）
| 项目 | 规格 | 状态 |
|---|---|---|
| 形态 | 掌上级，5 推进器集成机身 | LIVE |
| 外壳材料 | PC 透明件 + 工程塑料（3D 打印）| LIVE |
| 整机尺寸 | 样机定型中，以实测为准 | IN-DEV |
| 整机净重 | 样机定型中，以实测为准 | IN-DEV |
| 充电接口 | 4P 磁吸数据线 2.5PH，无开放式 USB | LIVE |
| 防水物理开关 | 舱外物理开关 | LIVE |

### 10.6 BRACELET（声学手环 · 11 行）
| 项目 | 规格 | 状态 |
|---|---|---|
| 主控 | ESP32-S3-WROOM | LIVE |
| 声学模块 | DYP-C01B ×1 | LIVE |
| 屏幕 | 1.8" TFT-LCD · 180×128 px | LIVE |
| IMU | QMI8658A（6 轴）翻腕+敲击 | LIVE |
| 按键 | 无物理按键，IMU 手势 | LIVE |
| 振动反馈 | 线性/转子马达 | IN-DEV |
| 电池 | 800 mAh 1S 锂电池 | LIVE |
| 充电 | 4P 磁吸数据线 2.5PH | LIVE |
| 外壳 | 3D 打印迭代，多款表带 | LIVE |
| 防水 | 尚未进行防水测试 | LIVE |
| 续航/待机 | 实测数据待确认 | IN-DEV |

---

## 11 Prototype Evidence（实物证据 · 画廊）

**排版：** 大标题在上。下方 5 张图不规则铺开（编辑性 magazine 风格：1 张超大主图 + 1 高竖图 + 1 宽图 + 1 方图 + 1 横长图）。每张图带 caption（小型 mono 标签 + 加粗标题 + 副描述）。

**Eyebrow：** `11 Prototype Evidence`

**大标题：**
- ZH：不停留<br>在概念图。
- EN：We don't stop<br>at concept art.

### 5 张图

| # | 路径 | ZH cap | ZH 标题 | ZH 描述 |
|---|---|---|---|---|
| 1（hero）| `../Post/微信图片_20260423153643_132_69.jpg` | 2026·04 · 实验室装配 | 实物原型 | 掌上级水下相机 · 推进器结构装配 |
| 2（tall）| `../Post/a5fdc9ea-1c57-4520-a5b4-4aca7c8ab66f.png` | ID PROPOSAL · v2.1 · 2026·03 | 工业设计 ID | 表面语言 · 色彩与体量 |
| 3（wide）| `../Hardware/2D_PCB1_2026-03-17.png` | HARDWARE · PCB1 · REV 3 · 2026·03·17 | PCB · 主控板 | 相机端硬件 · 第 3 轮迭代 |
| 4（square）| `../Hardware/Project Remo Watch Schematic.png` | WATCH SCH · 2026·03 | 原理图 · 声学手环 | 水下多模态交互入口 |
| 5（wide-2）| `../Post/4e7458e7-0011-4901-8a9e-3571501af9af.png` | WATER TEST · 2026·04·28 · NO CUT · 11 段连续记录 | 场景表达 | 自由潜拍 · 面向消费者的产品想象 |

**英文 caption 自行对照 site.js 的 i18n 词典。**

---

## 12 Business Model（商业模式）

**排版：** 大标题在上。下方三个商业模式卡横排。

**Eyebrow：** `12 Business Model`

**大标题：**
- ZH：硬件是入口，*HaaS* 是长期价值。
- EN：Hardware is the entry point.<br>*HaaS* is the long-term value.

### 三个卡片
1. **消费硬件 / Consumer Hardware**
   - ZH：以掌上起降、无线跟随和一键成片建立差异化，而不是单纯拼相机参数。让设计与体验成为护城河的第一层。
   - EN：Differentiate on palm-sized deployment, wireless following, and one-tap edit — not on raw camera specs alone. Let design and experience be the first layer of the moat.
2. **潜店租赁 / Dive Shop Rental**
   - ZH：面向潜店和旅行场景的更低门槛体验入口。对潜店而言，Remo 提高设备周转率与内容转化率；对用户而言，"出国前不必先买相机"。租赁是消费者教育的最佳渠道。
   - EN：A lower-barrier entry point for dive shops and travel scenarios. For dive shops, Remo improves gear turnover and content conversion rates. For users, "you don't need to buy a camera before your trip." Rental is the best consumer education channel.
3. **云端 AI 订阅 / Cloud AI Subscription**
   - ZH：GAN 色彩还原、智能剪辑、潜水日志、成片模板——所有需要算力与素材库的部分都放在云端，形成持续订阅收入。硬件单价波动，HaaS 收入稳定。
   - EN：GAN color restoration, smart editing, dive logs, production templates — everything requiring compute power and asset libraries lives in the cloud, generating recurring subscription revenue. Hardware ASP fluctuates; HaaS revenue is steady.

---

## 13 Milestones（路线图）

**排版：** 大标题。下方三个里程碑横向时间轴。当前阶段（Now）有 `now` 高亮态。

**Eyebrow：** `13 Milestones`

**大标题：**
- ZH：三步走，<br>到达 Kickstarter。
- EN：Three steps<br>to Kickstarter.

| When | 标题 | 描述 |
|---|---|---|
| Now · 2026 | POC 原理样机 / POC · Proof of Concept | 声学定位 + 自动巡航 + 避障状态机已跑通；PCB 第 3 轮迭代；正在补齐核心团队。/ Acoustic positioning + auto-cruise + obstacle-avoid state machine proven; PCB iteration 3; actively recruiting core team members. |
| Next · 2026 Q4 | EP 工程验证 / EP · Engineering Validation | 重点验证稳定跟随、水压辅助密封一致性、可靠起降、续航与可维护性。/ Focused on verifying stable follow-loop, hydrostatic seal consistency, reliable launch/recovery, endurance, and serviceability. |
| Launch · 2027 夏 / Summer 2027 | Kickstarter 爆发 / Kickstarter Launch | 用真实水测素材、可量化指标与双产品线叙事启动全球早期用户转化。/ Launch global early-adopter conversion with real water-test footage, quantifiable metrics, and a dual-product-line narrative. |

---

## 14 IP & Patent Defense（专利护城河）

**排版：** 左侧文案（kicker + 大标题 + 描述 + 状态说明）；右侧 3 项专利列表（编号 + 标题 + 描述）。

**Kicker：** `14 · IP & Patent Defense`

**大标题：**
- ZH：专利防御*正在构筑*。
- EN：Patent defense<br>*under construction*.

**描述：**
- ZH：围绕产品最难复现的技术节点，进行严密的 FTO 与专利布局，为 EP 与 Kickstarter 阶段建立竞争壁垒。
- EN：Rigorous FTO and patent portfolio construction around the product's hardest-to-replicate technical nodes — building competitive barriers for EP and Kickstarter phases.

**状态：** 专利交底书已起草 · FTO 检索 · IN-DEV / Patent disclosure drafted · FTO search · IN-DEV

### 3 项专利
1. **声学辅助视觉跟随算法 / Acoustic-Assisted Visual Tracking Algorithm**
   - ZH：气泡 / 浑浊场景下，声学信号平滑修正视觉 ROI 权重，保持稳定锁定与跟随。
   - EN：In bubble / turbidity scenarios, acoustic signals smoothly correct visual ROI weights — maintaining stable lock and follow.
2. **水下多模态交互控制 / Underwater Multimodal Interaction Control**
   - ZH：声学手环敲击编码 + 震动反馈，构成水下与设备之间的低带宽、高鲁棒交互通道。
   - EN：Acoustic bracelet tap encoding + haptic feedback, forming a low-bandwidth, high-robustness interaction channel between diver and device.
3. **水压辅助密封结构 / Hydrostatic Pressure-Assisted Seal Structure**
   - ZH：利用环境水压增强密封贴合度的机械结构设计，专为消费级潜深与维护性优化。
   - EN：Mechanical design that leverages ambient water pressure to enhance seal conformity — optimized for consumer depth ratings and field serviceability.

---

## 15 For Investors（投资人）

**排版：** 「米色（paper）」反转背景——和其他深色 section 形成视觉对比。大标题在上。一段 lead 文案。下方 3 列投资信息卡。底部两个 CTA 按钮。

**Eyebrow：** `15 For Investors`

**大标题：**
- ZH：实物证据，*分层表达*。
- EN：Physical evidence,<br>*layered communication*.

**Lead：**
- ZH：我们对外只承诺"已验证"，路线则用"进行中 / 规划中"分层标注。以下是面向天使阶段投资人的核心信息。完整 Deck 与 Tech Snapshot 请联系创始团队。
- EN：We only claim what's been "verified" externally, and mark roadmap items as "in development" or "planned" with clear layering. Below is the core information for angel-stage investors. For the full Deck and Tech Snapshot, please contact the founding team.

### 3 列卡片

| 编号 | 标题 | 描述 |
|---|---|---|
| 01 · 阶段 / Stage | POC · 原理样机已跑通 / POC · Working Prototype Proven | 机械、PCB、控制脚本、用户访谈、水测视频均已沉淀。可演示链路：入水自动解锁 → 自动巡航 → 近障避让 → 出水自动上锁。/ Mechanical, PCB, control scripts, user interviews, and water-test footage are all archived. Demonstrable pipeline: immersion auto-unlock → auto-cruise → proximity obstacle avoidance → surface auto-lock. |
| 02 · 即将 / Next | 2026 Q4 进入 EP · 工程验证 / 2026 Q4 Entering EP · Engineering Validation | 聚焦稳定跟随闭环、水压辅助密封一致性、连续运行可靠性、续航与可维护性。每一项都有可量化的目标指标。/ Focused on stable follow-loop, hydrostatic seal consistency, continuous-run reliability, endurance, and serviceability — each with quantifiable target metrics. |
| 03 · 用途 / Use of Funds | 天使轮资金分配 / Angel Round Allocation | 核心团队补位（嵌入式 / 控制算法 / 结构）、EP 阶段供应链与小批量水测、Kickstarter 视频与传播。每一笔资金对应一个可验证的里程碑。/ Core team hires (embedded / control algorithms / mechanical), EP-stage supply chain & small-batch water testing, Kickstarter video & marketing. Every dollar maps to a verifiable milestone. |

### CTA 按钮
- primary（实心）：索取 Tech Snapshot / Request Tech Snapshot → `mailto:founders@projectremo.io`
- ghost：查看 90 秒实证素材 / View 90s Evidence Reel → `#evidence`

---

## OUTRO（尾页 · 大字告别）

**排版：** 大字号居中标题。下方两个按钮。底部 3 项 meta 信息。

**主标题：**
- ZH：让*水下*，<br>只剩下*呼吸*。
- EN：*Under* the water,<br>nothing left<br>but *your breath*.

**按钮：**
- primary：与创始团队对话 / Talk to the Founding Team
- ghost：回到顶部 / Back to Top

**底部 3 项 meta：**
| ZH | EN |
|---|---|
| 阶段 / POC · 原理样机 | Stage / POC · Working Prototype |
| 下一站 / EP · 工程验证 · 2026 Q4 | Next Stop / EP · Engineering Validation · 2026 Q4 |
| 面市 / Lite · 2027 夏 | Launch / Lite · Summer 2027 |

---

## STICKY BAR（贴底浮动条 · 滚过 Hero 后出现）

**排版：** 滚动超过 Hero 70% 后出现在底部中央。三栏：品牌 / 简介 / CTA。接近页脚时自动隐藏。

| ZH | EN |
|---|---|
| Project Remo | Project Remo |
| 5 推进器 · 声学纠偏定位 · 巡航 40–60 min · 4K 海思 | 5 Thrusters · Acoustic Positioning · Cruise 40–60 min · 4K HiSilicon |
| 加入 Kickstarter 早鸟 → | Join Kickstarter Early Bird → |

---

## FOOTER（页脚）

**排版：** 三列：品牌 / 中间 tagline / 版权。

| 品牌 | tagline | 版权 |
|---|---|---|
| · Remo/02 | Wireless Underwater Follow-Cam · POC 2026 | © Project Remo · All rights reserved |

---

## 修改使用提示

1. **改文案：** 直接在表格里改 ZH/EN 单元格的文字
2. **改顺序：** 在标题前加 `[移动到 X 节]` 注释，比如 `## 02 The Pain [移动到第 6 节]`
3. **删除节：** 在标题前加 `[DELETE]`，比如 `## 04 Hardware Architecture [DELETE]`
4. **新增节：** 复制一个现有节的结构，前缀加 `## NEW`，写好你想要的标题、排版描述和文案
5. **换图：** 在「素材」字段直接写新图片路径
6. **调字号/排版：** 在"排版"字段写文字描述，比如「改为居中布局，标题字号更大」

**保存后告诉 Claude：** "依据 CONTENT.md 重新生成网页"
