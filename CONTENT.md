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
**ZH：** Project Remo 是一款无线、掌上起降的水下跟随相机，位于运动相机与传统 ROV 之间的空白地带。入水自动唤醒，声学定位跟随，出水无感回传，云端自动还原色彩。让潜水员专注于潜水本身。

**EN：** Project Remo is a wireless, palm-deployable underwater follow-cam that sits between action cameras and tethered ROVs. Auto-wake on entry, acoustic positioning underwater, seamless upload on surfacing, automatic color restoration in the cloud. It handles the shot so the diver doesn't have to.

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
- **ZH：** 水下摄影的真正门槛，<br>不是设备不够好，<br>而是潜水员的注意力<br>*已经被太多事情分走了*。
- **EN：** The real bottleneck in underwater photography<br>isn't the gear —<br>it's that the diver's attention<br>*is already split across too many tasks*.

**签名：** 
- ZH：Project Remo · 创始团队
- EN：Project Remo · Founding Team

---

## 02 The Pain

**排版：** 左侧 Eyebrow + 大标题。下方三条横向痛点条目（号码 + 标题 + 描述），每条用横线分割。

**Eyebrow：** `02 The Pain`

**大标题：**
- ZH：潜水拍摄时，* hands 和注意力*同时被占用。
- EN：When you dive with a camera, *both hands and attention* are tied up.

### 痛点 01
- **ZH 标题：** 双手被占用
- **EN 标题：** Both Hands Occupied
- **ZH 描述（HTML）：** 潜水员在水下需要同时管理浮力、呼吸、深度、构图与跟焦——五件事抢占同一份注意力。结果往往不是没拍到，*而是拍到了但拍废了，同时安全冗余在下降*。
- **EN 描述：** A diver underwater manages buoyancy, breathing, depth, composition, and focus — five tasks competing for one attention budget. The outcome is rarely "didn't get the shot." *It's "got the shot but it's unusable, and safety margins are shrinking."*

### 痛点 02
- **ZH 标题：** ROV 不属于消费者
- **EN 标题：** ROVs Aren't for Consumers
- **ZH 描述：** 传统水下 ROV 面向工业巡检设计——脐带缆、地面站、岸上部署流程，不属于休闲潜水场景。7–15 kg 自重、¥15,000+ 起步，"消费级"三个字在 ROV 品类中从未成立。
- **EN 描述：** Traditional ROVs are built for industrial inspection — tethers, ground control stations, shore-deployment workflows. They were never designed for recreational diving. At 7–15 kg and ¥15,000+ entry price, "consumer-grade" has never described this category.

### 痛点 03
- **ZH 标题：** 视觉会失效
- **EN 标题：** Vision Fails Underwater
- **ZH 描述：** 气泡群、悬浮颗粒、逆光、低能见度——任一条件都足以让纯视觉跟踪失效。水下定位必须基于"水"的物理特性设计，*不能把陆地视觉方案直接搬到水下*。
- **EN 描述：** Bubbles, suspended particles, backlight, low visibility — any one of these breaks a pure visual tracking system. Underwater positioning must be designed for the physics of water, *not adapted from land-based vision assumptions*.

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

### 步骤 4（IN-DEV）
- **编号：** 04 · TRANSFER
- **图标：** 手机轮廓 + 上方云朵（无感回传 + 云端处理）
- **ZH：** 出水无感回传 / 出水后自动与配套手机应用建立连接，原始素材在后台静默传输；云端深度学习模型对水下色彩进行自动还原，用户在应用中即可查看处理完成的素材。
- **EN：** Seamless Post-Dive Upload / On surfacing, the unit pairs with the companion mobile app and uploads raw footage in the background. A cloud deep-learning model automatically restores underwater color; users retrieve the processed result directly within the app.

---

## 04 Hardware Architecture（架构）

**排版：** 左侧文案区（Eyebrow + 大标题 + 副标题 + 长段描述 + 5 自由度三柱说明）；右侧动力架构布局示意图（`Image/动力架构布局示意图.png`）。

> **2026-05-29 调整**：原右侧的 14 项硬件选型列表（动力 A/B、飞控、声学模块、传感器、补光、密封等）已从公开站点移除。**原因**：详细的硬件选型属于供应链与 BD 谈判维度的信息，对外公开会过早暴露 Bill of Materials；面向消费者只需呈现"5 推进器布局 + 双动力路线"的工程哲学即可。具体选型保留在 BD/投资人材料里。

**Eyebrow：** `04 Hardware Architecture`

**大标题：**
- ZH：不追矢量方案，*追*稳定性。
- EN：Not chasing vectored thrust.<br>*Chasing* stability.

**副标题（H3）：**
- ZH：2 水平 + 2 垂直 + 1 横向。
- EN：2 Horizontal + 2 Vertical + 1 Lateral.

**主段落：**
- **ZH：** Remo 采用 5 推进器固定布局（2 水平 + 2 垂直 + 1 横向），避开矢量推进的复杂调参，选择 ROV 行业成熟验证过的方案——水动力学建模更简单，控制器更易收敛，外壳工程化难度更低。当前并行验证*两套动力方案*：策海科技无刷推进器面向海水可靠性，自研有刷方案面向成本控制；两套方案共用同一飞控、声学与传感平台。
- **EN：** Remo uses a fixed 5-thruster layout (2H + 2V + 1L), avoiding the tuning complexity of vectored thrust in favor of an ROV-industry-validated approach — simpler hydrodynamic modeling, easier controller convergence, lower packaging complexity. Two powertrain routes are being validated in parallel: Cehai Technology brushless thrusters for seawater reliability, and an in-house brushed solution for cost control. Both share the same flight controller, acoustics, and sensor platform.

**5 自由度三柱（替代规格列表的新文案）：**
- **ZH：** **水平 × 2** 提供巡航与转向 · **垂直 × 2** 提供升沉与俯仰 · **横向 × 1** 提供平移构图——精确解耦的 5 自由度控制基底。
- **EN：** **2 horizontal** for cruise & yaw · **2 vertical** for heave & pitch · **1 lateral** for sway framing — a cleanly decoupled 5-DoF control basis.

**示意图：** `Image/动力架构布局示意图.png`（替换了原 SVG 推进器布局示意）

### ~~规格列表（14 项）~~（**已隐藏**）

> 原 14 项硬件选型清单（动力 A/B、飞控、固件、电调、深度传感、避障声呐、声学模块、补光、防水开关、漏水检测、水压密封、原型工艺）已从公开站点移除。具体选型保留在 BD 材料里。

---

## ~~05 By the Numbers~~（**已删除**）

> **2026-05-28 第 3 轮调整**：整段 "By the Numbers" 4 个数字卡片已删除。
> 原因：40 m / 5× / 3× / 3+ 这种数字脱离上下文之后没有传达价值——Hero 顶部已有 `hero-keyspecs` 5 个数字（40 m / 5× / 3× / 40–60 min / 4K），具体硬件数字也在 04 Architecture 与 10 Tech Specs 中以 LIVE/IN-DEV 状态写明，重复呈现反而稀释了 Specs section 的权威感。

---

## 06 Acoustic Intelligence（声学）

**排版：** 左边大场景图（声学链路水下场景）；右侧文案区，含大标题 + H3 副标题 + 两段主文 + 8 个能力 badge + 声学手环图片+说明。

**素材：** `Image/声学链路水下场景图.png`、`Image/声学手环产品图.png`

**Eyebrow：** `06 Acoustic Intelligence`

**大标题：**
- ZH：水变浑，*声学定位*不停。
- EN：When visibility drops,<br>*acoustic positioning* holds.

**副标题：**
- ZH：水下声学通信模块，<br>非消费级水听器。
- EN：Underwater acoustic communication —<br>not a consumer-grade hydrophone.

**段落 1（HTML）：**
- ZH：Remo 系统部署三枚 DYP-C01B 水下声学通信模块——相机端 2 枚、手环端 1 枚。任意两枚入水即可建立低速率声学链路，实现**纠偏定位**。声学定位在气泡、悬浮颗粒等视觉失效场景下保持稳定——这项技术在 ROV 工业领域已成熟应用超过二十年。我们将它缩至掌上尺寸，并与视觉算法进行融合。
- EN：Remo deploys three DYP-C01B underwater acoustic communication modules — two on the camera, one on the bracelet. Any two submerged modules establish a low-rate acoustic link for **corrective positioning**. The acoustic link remains stable when vision fails due to bubbles or suspended particles — technology proven over two decades in the ROV industry, now shrunk to palm size and fused with vision algorithms.

**段落 2：**
- ZH：声学手环通过**敲击**产生超声特征信号，由相机端接收并识别，构成低带宽、高鲁棒的水下指令通道——面向戴面镜、戴手套、无法语音通信的真实潜水环境。
- EN：The acoustic bracelet generates ultrasonic signatures via **tapping**, received and decoded by the camera — a low-bandwidth, high-robustness underwater command channel designed for real dive conditions: mask on, gloves on, no voice comms.

### 能力 badge（8 项 · 含三种状态：LIVE / IN-DEV / PLANNED）

| ZH | EN | 状态 |
|---|---|---|
| DYP-C01B 声学模块 ×3 | DYP-C01B Module ×3 | LIVE |
| 自动巡航 / 避障 | Auto-Cruise / Obstacle Avoid | LIVE |
| 入水唤醒 / 出水无感回传 | Immersion Wake / Seamless Upload | LIVE |
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
- ZH：不只是*拍下来*，<br>而是直接出片。
- EN：Not just *recording* —<br>delivering a finished shot.

**Lead 文案：**
- ZH：水下色彩失真不是滤镜能解决的——红光在 5 m 深度衰减殆尽，绿光在 15 m 大幅衰减，白平衡校正有其物理极限。Remo 采用**生成对抗网络（GAN）**进行水下色彩还原，结合 MS5837 深度计与声学距离数据做物理级色彩校正。工程化后将以云端 AI 剪辑订阅形式提供服务——*HaaS: Hardware as a Service*。
- EN：Underwater color distortion can't be fixed with filters — red light is effectively gone at 5 m, green heavily attenuated at 15 m, and white balance has physical limits. Remo uses a **Generative Adversarial Network (GAN)** for underwater color restoration, combining MS5837 depth sensor and acoustic distance data for physics-level correction. The engineered version will ship as a cloud AI editing subscription — *HaaS: Hardware as a Service*.

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
| 失败成本 / Failure Cost | 拍废 / Lost Shot | 拍废 + 设备风险 / Lost Shot + Gear Risk | 拍废（原片云端可恢复）/ Lost Shot (Cloud Backup Recoverable) |

**免责声明：**
- ZH：对比数据基于公开消费类产品参数。Remo 数据基于当前 POC 样机实测与结构设计目标。
- EN：Comparison data based on publicly available consumer product specs. Remo data based on current POC prototype measurements and structural design targets.

---

## 09 Product Lineup（产品线）

**排版：** 大标题在上。下方两张产品卡（Lite 在左 / Pro 在右），每卡含 tag + 大名字 + 描述 + 4 项 spec + when 标签。底部一段说明。

**Eyebrow：** `09 Product Lineup`

**大标题：**
- ZH：一台原型，<br>*两套产品规划*。
- EN：One prototype,<br>*two product roadmaps*.

### Lite 卡片
- **Tag：** `01 · 大众与租赁` / `01 · Mass Market & Rental` + `VISION`
- **名字：** Remo *Lite*
- **描述：**
  - ZH：面向浮潜与自由潜用户，以及潜店租赁场景。轻量化出行、一键拍摄、出水无感回传——把操作复杂度降到最低。
  - EN：For snorkelers, freedivers, and dive shop rentals. Lightweight travel, one-tap shooting, seamless post-dive upload — minimal operational complexity.
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
  - ZH：面向愿意为画质付费的专业用户。定制影像系统、更长续航、更深潜深——服务内容创作者与高级潜点拍摄需求。
  - EN：For professionals willing to pay for image quality. Custom imaging system, extended endurance, deeper depth rating — built for content creators and advanced dive sites.
- **4 项规格：**
  | ZH | EN |
  |---|---|
  | 定位 / 专业创作 | Positioning / Professional Creation |
  | 影像 / 定制影像系统（规划） | Imaging / Custom Imaging System (Planned) |
  | 潜域 / 更深潜深（规划） | Depth Rating / Deeper Rating (Planned) |
  | 核心场景 / 内容创作 · 高级潜点 | Core Scenario / Content Creation · Advanced Sites |
- **When：** 产品愿景 / EP 后规划　|　Vision / Post-EP Planning

**底部说明：**
- ZH：Lite / Pro 为未来产品线规划。当前 POC 阶段为单一样机，同步验证有刷与无刷两套动力方案，最终合并为统一产品平台。
- EN：Lite / Pro are future product-line plans. The current POC stage uses a single prototype to validate both brushed and brushless powertrain routes in parallel, converging into one unified product platform.

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
- ZH：硬件获客，*HaaS* 创造长期价值。
- EN：Hardware acquires users.<br>*HaaS* builds long-term value.

### 三个卡片
1. **消费硬件 / Consumer Hardware**
   - ZH：以无线跟随、掌上起降、一键成片建立差异化优势。不靠堆相机参数竞争，让产品定义与整机体验成为第一层壁垒。
   - EN：Differentiate on wireless following, palm deployment, and one-tap editing — not on camera specs. Product definition and end-to-end experience form the first competitive layer.
2. **潜店租赁 / Dive Shop Rental**
   - ZH：面向潜店与旅行场景的低门槛入口。对潜店：提高设备周转率与内容产出；对用户：出行前不必购买水下相机。租赁本身是最有效的消费者教育。
   - EN：Low-barrier entry for dive shops and travel. For shops: higher gear turnover and content output. For divers: no need to buy an underwater camera before the trip. Rental is the most effective form of consumer education.
3. **云端 AI 订阅 / Cloud AI Subscription**
   - ZH：GAN 色彩还原、智能剪辑、潜水日志、成片模板——所有依赖算力与素材库的功能部署在云端，形成持续订阅收入。硬件 ASP 波动，HaaS 提供稳定的经常性收入。
   - EN：GAN color restoration, smart editing, dive logs, production templates — everything requiring compute and asset libraries lives in the cloud, generating recurring subscription revenue. Hardware ASP fluctuates; HaaS delivers steady recurring revenue.

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

**排版：** 左侧文案（kicker + 大标题 + 描述 + 状态说明）；右侧 4 项专利列表（编号 + 标题 + 描述含申请号 + 申请日 + 权项数）。

**Kicker：** `14 · IP & Patent Defense`

**大标题：**
- ZH：专利护城河*已落地*。
- EN：Patent moat<br>*filed and accepted*.

**描述：**
- ZH：围绕产品最难复现的技术节点，已向国家知识产权局完成 4 项专利布局：声学+视觉融合定位、GAN 水下色彩还原、双核控制架构、潜水电脑表交互——构成 EP 与 Kickstarter 阶段的核心壁垒。
- EN：Four patents covering the product's hardest-to-replicate technical nodes have been filed with the China National Intellectual Property Administration: acoustic-visual fusion positioning, GAN underwater color restoration, dual-core control architecture, and dive-computer interaction — the core competitive barriers for EP and Kickstarter phases.

**状态：** 3 项已受理 · 1 项撰写中 · 申请人 / 发明人 杨文俊 / 3 accepted · 1 in submission · Applicant / Inventor: Yang Wenjun

### 4 项专利
1. **声学与视觉融合的水下自动定位拍摄系统及控制方法 / Underwater Acoustic-Visual Fusion Positioning & Capture System**
   - 类型：发明专利 · 国家知识产权局已受理
   - 申请号：`202610208723.3`
   - 申请日：2026-02-13
   - 权利要求：10 项
   - 申请人/发明人：杨文俊
2. **基于物理环境元数据约束的水下图像生成式色彩还原方法及系统 / Generative Underwater Color Restoration with Physical Environmental Metadata Constraints**
   - 类型：发明专利 · 国家知识产权局已受理
   - 申请号：`202610208686.6`
   - 申请日：2026-02-12
   - 权利要求：18 项
   - 申请人/发明人：杨文俊
3. **基于视控解耦双核架构的微型水下航行器电子系统 / Vision-Control Decoupled Dual-Core Electronics Architecture for Micro AUV**
   - 类型：实用新型专利 · 国家知识产权局已受理
   - 申请号：`202620215579.1`
   - 申请日：2026-02-13
   - 权利要求：10 项
   - 申请人/发明人：杨文俊
4. **集成轻量化水声模组及震动反馈机制的潜水电脑表 / Dive Computer Watch with Lightweight Acoustic Module & Haptic Feedback**
   - 类型：实用新型专利 · 交底书已完成，正在提交流程中
   - 涵盖：手环端 DYP-C01B 集成 · IMU 翻腕+敲击识别 · 震动反馈闭环结构
   - 申请人/发明人：杨文俊

---

## 15 Founding Team（创始团队）

**排版：** 左上：lead 段（团队来源、双重背书叙事）。下方左侧：创始人 founder-card（角色 + 大名 + 学校信息 + 4 项工具栈）。右侧：5 条获奖时间轴（年份 + 奖项 + 描述 + 高亮 tag）。底部 team-note 收尾。**不展开个人实习经历与在研项目**——这些与 Project Remo 无关，留作冠军班底的整体包装即可。

**素材：** 暂无人像图。可选放在 `Image/founders/` 目录后再补充。

**Eyebrow：** `15 Founding Team`

**大标题：**
- ZH：国家级冠军团队，<br>从*赛场*走向*产品*。
- EN：Champion team —<br>from *competition arena* to *shipping product*.

**Lead：**
- ZH：Remo 的核心团队来自 **北京信息科技大学 G_Robot 水下机器人社团**——一支同时拿过 *挑战杯全国大学生一等奖*与 *RoboCup 中国赛水下机器人冠军*的水下机器人专项团队。竞赛舞台上反复验证过的工程能力，正是 Project Remo 的底座。
- EN：Remo's core team comes from **G_Robot, the underwater-robotics society at Beijing Information Science & Technology University** — a specialist team that holds both a *Challenge Cup national first prize* and the *RoboCup China underwater-robotics champion title*. Engineering capability proven repeatedly on the competition floor is the bedrock of Project Remo.

### 创始人 Founder Card
- **角色 / Role：** 创始人 · 项目负责人 · 技术总监 / Founder · Project Lead · CTO
- **大名 / Name：** 杨*文俊* / Yang *Wenjun*
- **抬头 / Title：** 北京信息科技大学 · 自动化（卓越工程师计划）· G_Robot 社团社长 · ROV / ARV 整机研发

### 工具栈（4 行）
| 标签 ZH | 内容 |
|---|---|
| 软件 / Software | Python · C · ROS · YOLOv8 · PyTorch |
| 硬件 / Hardware | Altium Designer · 嘉立创 EDA |
| 机械 / Mechanical | SolidWorks · AutoCAD |
| 学术 / Academia | EI 会议论文 1 篇 · Sensors 期刊论文 1 篇 |

### 3 项核心获奖（按含金量排序）
1. **2025 · 第十九届"挑战杯"全国大学生课外学术科技作品竞赛 · 人工智能+应用赛 · 国家级一等奖**
   - 参赛作品："深智鲨"——基于嵌入式 AI 的小型无人潜航器自主控制系统设计
   - 担任角色：项目负责人 · 技术总监 · 路演主讲
2. **2025 · 中国机器人大赛暨 RoboCup 机器人世界杯中国赛 · 水下机器人专项赛 · 国家级一等奖（冠军）**
   - 水中作业项目冠军；同期总决赛 国家级一等奖（亚军）+ 水中巡游 国家级二等奖
3. **2024 · 第十七届国际先进机器人及仿真技术大赛 · 智慧海洋赛道**
   - 水下作业赛 国家级一等奖（冠军）· 水下目标抓取赛 国家级一等奖（冠军）· 水下对抗赛 国家级一等奖

> **2026-05-29 第 4 轮纠错**：第 3 轮误删了挑战杯**全国**一等奖（"深智鲨"）。事实上挑战杯全国一等奖含金量在大学生科技赛事中最高，应该作为首位。本次回滚补回，与 RoboCup 中国赛冠军、国际先进机器人 3×国家级一等奖共同构成 3 项核心叙事。
>
> **保持已删的 2 项**：挑战杯首都大学生（省级特等 · 含金量低于全国级）+ 中国国际海洋水下机器人大赛（国家级二等 · 低于一等）。

### 底部 team-note
- ZH：这些奖项背后是同一支班底——从声学、视觉、控制、结构到嵌入式 AI 的*完整水下机器人工程能力*。Project Remo 是这支团队把赛场上反复打磨过的技术栈，工程化为消费级产品的第一站。
- EN：Behind every trophy is the same crew — covering acoustics, vision, control, mechanical structure and embedded AI as a *complete underwater-robotics engineering stack*. Project Remo is the first commercial product built on the technology stack this team has stress-tested on the competition floor.

> **不上墙的内容**：个人实习经历（青岛策海 / 海默新宸）、在研项目（深智鲨 / 海底飞侠 / 深蓝净）等与 Remo 直接关联弱的简历条目已从公开站点中移除。这些信息留在 BD/投资人材料里，不在面向消费者的产品页展示。

---

## 16 For Investors（投资人）

**排版：** 「米色（paper）」反转背景——和其他深色 section 形成视觉对比。大标题在上。一段 lead 文案。下方 3 列投资信息卡。底部两个 CTA 按钮。

**Eyebrow：** `16 For Investors`

**大标题：**
- ZH：已验证的，*分层呈现*。
- EN：Verified claims,<br>*clearly layered*.

**Lead：**
- ZH：我们对外仅承诺已通过实测验证的能力，路线图项目以"进行中 / 规划中"清晰标注。以下为面向天使轮投资人的关键信息。完整 Deck 与 Tech Snapshot 请联系创始团队。
- EN：We only claim what has been verified through testing. Roadmap items are clearly marked "in development" or "planned." Below is key information for angel-stage investors. For the full Deck and Tech Snapshot, contact the founding team.

### 3 列卡片

| 编号 | 标题 | 描述 |
|---|---|---|
| 01 · 阶段 / Stage | POC · 原理样机已跑通 / POC · Working Prototype Proven | 机械、PCB、控制脚本、用户访谈、水测视频均已沉淀。可演示链路：入水自动解锁 → 自动巡航 → 近障避让 → 出水无感回传 → 云端色彩还原。/ Mechanical, PCB, control scripts, user interviews, and water-test footage are all archived. Demonstrable pipeline: immersion auto-unlock → auto-cruise → proximity obstacle avoidance → seamless post-dive upload → cloud color restoration. |
| 02 · 即将 / Next | 2026 Q4 进入 EP · 工程验证 / 2026 Q4 Entering EP · Engineering Validation | 聚焦稳定跟随闭环、水压辅助密封一致性、连续运行可靠性、续航与可维护性。每一项都有可量化的目标指标。/ Focused on stable follow-loop, hydrostatic seal consistency, continuous-run reliability, endurance, and serviceability — each with quantifiable target metrics. |
| 03 · 用途 / Use of Funds | 天使轮资金分配 / Angel Round Allocation | 核心团队补位（嵌入式 / 控制算法 / 结构）、EP 阶段供应链与小批量水测、Kickstarter 视频与传播。每一笔资金对应一个可验证的里程碑。/ Core team hires (embedded / control algorithms / mechanical), EP-stage supply chain & small-batch water testing, Kickstarter video & marketing. Every dollar maps to a verifiable milestone. |

### CTA 按钮
- primary（实心）：索取 Tech Snapshot / Request Tech Snapshot → `mailto:founders@projectremo.io`
- ghost：查看 90 秒实证素材 / View 90s Evidence Reel → `#evidence`

---

## OUTRO（尾页 · 大字告别）

**排版：** 大字号居中标题。下方两个按钮。底部 3 项 meta 信息。

**主标题：**
- ZH：放开双手，<br>*把镜头交给 Remo*。
- EN：Let go,<br>*let Remo take the shot*.

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
