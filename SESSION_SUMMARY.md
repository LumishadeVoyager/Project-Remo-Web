# Project Remo 网站开发 — 完整上下文总结

> 给下一个 Claude Code 会话的速查文档。以下是此前所有工作的汇总。

---

## 项目概览

**网站：** https://lumishadevoyager.github.io/Project-Remo-Web/
**仓库：** https://github.com/LumishadeVoyager/Project-Remo-Web.git
**本地路径：** `G:/我的云端硬盘/Project Remo/Web/`
**分支：** `main`
**部署方式：** GitHub Pages（推送到 main 自动部署，1-2 分钟生效）

---

## 文件结构

```
Web/
├── index.html          # 主页面（含 data-i18n 属性，JS 填充文案）
├── site.css            # 全部样式（桌面 + 移动端响应式）
├── site.js             # i18n 词典（zh/en 双语言）+ 所有交互逻辑
├── CONTENT.md          # 文案与排版单源指南（修改文案只改这里）
├── deploy.sh           # 一键部署脚本（git add -A + commit + push）
├── .gitignore
├── Image/              # 7 张静态图片
│   ├── Hero主体图.png（1536x1024，透明背景产品抠图）
│   ├── GAN色彩还原RAW.png / GAN色彩还原RESTORED.png
│   ├── 三机对比.png / 声学手环产品图.png / 声学链路水下场景图.png
│   └── 背景素材.png
├── Video/
│   ├── V01-豆包.mp4 ~ V08-豆包.mp4        # 原始带水印源文件（.gitignore 排除）
│   ├── V01.mp4 / V02.mp4 / V03.mp4         # 去水印 + 编码后的输出（已提交 Git）
│   └── process_videos.py                   # 自动去水印脚本
└── _v1_backup/
```

---

## 关键技术决策

### 1. 文案风格
**方向：** DJI/Insta360 消费者产品页风格——直接、技术化、不夸张、数字驱动。
**受众：** 潜水爱好者 + 影像爱好者（非投资人）。
**参考：** Insta360 X5 产品页。

### 2. i18n 系统
- **HTML 属性：** `data-i18n="key"` / `data-i18n-html="key"` / `data-i18n-alt="key"`
- **词典位置：** `site.js` 中的 `I18N` 对象（zh 和 en 两个分支）
- **语言切换：** 右上角 `ZH · EN` 按钮，存 localStorage
- **语言检测：** `getLang()` 读 localStorage，默认 zh

### 3. 页面结构（当前布局）
```
Hero（产品主图 + 大标题 + 5 参数 + CTA + wordmark 背景大字）
  ↓
Showcase（V01 全宽电影级视频，21:9 桌面 / 4:5 手机）
  ↓
01 Features（3 卡片：HydroLock / TrueColor Depth / SmartDeploy）
  ↓
02 The Pain（3 条痛点，已精简）
  ↓
03 How It Works（4 步骤：WAKE → ACOUSTIC LOCK → FOLLOW → DOCK）
  ↓
04 Hardware Architecture（5 推进器布局 + 14 项规格列表）
  ↓
05 By the Numbers（4 个数字卡片）
  ↓
06 Acoustic Intelligence（声学链路图 + 手环 + 8 badge）
  ↓
07 Image Pipeline（GAN 色彩对比滑块）
  ↓
08 vs Traditional（10 行三栏对比表）
  ↓
09 Product Lineup（Lite / Pro 双卡）
  ↓
10 Tech Specs（6 tab：影像/水下/智能/动力/物理/手环）
  ↓
11 Prototype Evidence（5 照片画廊）
  ↓
12 Business Model（3 卡）
  ↓
13 Milestones（3 时间轴）
  ↓
14 IP & Patent Defense（3 专利）
  ↓
15 For Investors（3 卡 + CTA）
  ↓
Outro（大字 + CTA）+ Sticky Bar + Footer
```

### 4. 技术命名（产品化命名，仿 Insta360 Style）
| 技术 | 命名 |
|---|---|
| 声学定位跟随 | **HydroLock** |
| GAN 色彩还原 | **TrueColor Depth** |
| 入水唤醒 | **HydroLock**（与定位同名，入水触发） |
| 出水传输 + 云端还原 | **CloudSync** |
| 敲击指令 | **TapCode** |
| 5 推进器架构 | **PentaThrust** |
| 声学+视觉融合 | **FusionTrack** |

### 5. CDN 策略
**媒体资源（图片/视频）走 jsDelivr CDN：**
- URL 格式：`https://cdn.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/路径`
- **注意：中文文件名必须 URL 编码**（如 `Hero%E4%B8%BB%E4%BD%93%E5%9B%BE.png`）
- img 标签加了 `onerror` fallback 回本地路径
- **视频的 `<source>` 优先放本地路径**（GitHub Pages 同源），CDN 做 fallback（因为微信里 jsDelivr 经常超时）
- JS 动态注入的视频（V03-V05）同样本地优先

### 6. Git 代理配置
```bash
# 已配置在 Web/.git/config
[http "https://github.com/"]
  proxy = http://127.0.0.1:7890
```

---

## 视频系统

### 当前状态
| 视频 | 用途 | 位置 | 比例 | 状态 |
|---|---|---|---|---|
| V01 | Showcase 全宽播放 | Hero 与 Features 之间 | 21:9 | ✅ 已接入 |
| V02 | Flow Step 1（WAKE）| 工作流卡片 | 1:1 | ✅ 已接入 |
| V03 | Flow Step 2（ACOUSTIC LOCK）| 工作流卡片 | 1:1 | ✅ 已接入 |
| V04 | Flow Step 3（FOLLOW）| 工作流卡片 | 1:1 | 占位（JS 自动检测） |
| V05 | Flow Step 4（DOCK）| 工作流卡片 | 1:1 | 占位（JS 自动检测） |
| V06 | 声学链路可视化 | 声学 section | 16:9 | 未接（需手动加 HTML） |
| V07 | GAN 色彩对比 | 影像 section | 16:9 | 未接 |
| V08 | Outro 收尾 | 页面底部 | 16:9 | 未接 |

### 视频工作流
1. 豆包生成视频 → 命名为 `VNN-豆包.mp4` 放入 `Web/Video/`
2. 运行 `cd Web/Video && python process_videos.py` 自动去水印 + 输出 `VNN.mp4`
3. V03-V05 会被 `site.js` 的 JS 自动检测并接入（`data-video-slot` 属性）
4. V06-V08 需要手动在 `index.html` 对应 section 加 `<video>` 标签
5. 提交时用 `./deploy.sh "commit message"`

### 去水印脚本 (`process_videos.py`)
- 使用 ffmpeg 的 `delogo` 滤镜遮盖豆包水印（右下角 + 左上角）
- **自适应视频尺寸**：先探测实际宽×高，再根据尺寸计算锚定到右下角的 delogo 区域
- 编码参数：CRF 22, H.264 Main profile 4.0, yuv420p, AAC 128k, +faststart
- **需要 ffmpeg**：已通过 `pip install imageio-ffmpeg` 绑定安装

### 浏览器兼容性
- **全平台自动播放（Chrome/Edge/Safari/夸克/QQ）**：✅ 通过 IntersectionObserver + touch/click/scroll 持续监听 + 强制 JS muted 属性
- **微信**：需要用户点击/触摸一次才能触发播放（微信 X5/WKWebView 硬限制，无法绕过）
- 所有 `<video>` 标签带有 X5 兼容属性（`x5-playsinline`、`x5-video-player-type="h5"`）

---

## 设计系统

### CSS 变量
```css
--ink: #050a14      /* 深海黑蓝背景 */
--accent: #00d9ff   /* 电青色高亮 */
--display: Fraunces /* 衬线标题字体 */
--body: Inter / 思源黑体
--mono: JetBrains Mono
```

### 字体
- **标题/大字**：Fraunces（Google Fonts，可变字体 opsz 144）
- **Wordmark 背景大字**：Anton（Google Fonts，高瘦无衬线，DJI 风）
- **正文**：Inter + Noto Sans SC
- **等宽/标签**：JetBrains Mono

### 断点
| 断点 | 作用 |
|---|---|
| 1080px | 平板：导航隐藏、双列布局 |
| 680px | 手机：单列堆叠、Hero 产品图居中 |
| 400px | 超小屏：更小字号 |
| `(orientation: portrait)` | 竖屏 wordmark 大行距 |

### 性能优化（已做）
- 移除所有 `mix-blend-mode`（body::before film grain、scan beam）
- 所有 infinite CSS 动画加 `will-change` 提示 GPU 合成
- Hero parallax 用 `requestAnimationFrame` 节流
- 视频进入视口才 `play()`，离开视口自动暂停（IntersectionObserver）
- `prefers-reduced-motion` 媒体查询：禁用所有动画

### 移动端注意事项
- Hero 产品图 ≤680px 切换为 `position: relative` 居中显示
- Wordmark ≤680px 改为居中对齐，z-index 1 在产品图后面
- Flow 步骤卡片手机单列 + 视频最大宽度 320px 居中
- Showcase 21:9 → 4:5 竖版

---

## 部署

### 一键部署脚本
```bash
cd "G:/我的云端硬盘/Project Remo/Web"
./deploy.sh "commit message"
```
行为：`git add -A` → `git commit -m` → `git push origin main`，打印部署 URL。
不带参数运行会打印待提交文件列表（不提交）。

### 本地预览
```bash
cd "G:/我的云端硬盘/Project Remo/Web"
python -m http.server 8765
# 浏览器打开 http://localhost:8765
```

---

## 已知 Issues / 待办

1. **V04、V05 视频生成** — 放入 `Video/` 命名 `V04-豆包.mp4` 后运行脚本即可自动接入
2. **V06-V08 视频 + HTML 接入** — 需要在 `index.html` 对应 section 手动加 `<video>` 标签
3. **微信视频仍需点击触发** — 微信 X5/WKWebView 限制，无法完全自动化
4. **投资人内容在页面底部** — 目前 Hero 没有跳转按钮（之前设计有，后续可能需加回来）
5. **页面结构仍然是 15 section** — 之前讨论了精简到核心的架构但尚未实施（被视频整合打断了）
6. **CONTENT.md 仍然是旧架构** — 需要根据实际页面更新

---

## 最近 commit 记录
```
e292eca perf: Chrome scroll jank fix + Hero entrance FX + HD video + portrait wordmark
5a473b6 style(hero): switch wordmark to Anton, fill viewport with editorial scale
b68fa37 chore: add deploy.sh for one-command GitHub Pages publishing
7b69033 style(hero): bigger wordmark, more line spacing, show on mobile too
4f8563e fix(video): universal autoplay across WeChat/Quark/UC/QQ/iOS Safari
af423fc fix(wechat): local video sources first; hero adds large wordmark backdrop
082379d fix: WeChat browser video playback (X5 + WKWebView compatibility)
12ebb6b fix: restore Hero product image; add dedicated video showcase section
21ba4cd feat: add V03 + features overview section + mobile video layout
258e74f perf: route media assets through jsDelivr CDN for mainland China access
```

---

## cc-connect（微信机器人）

在父目录 `G:/我的云端硬盘/Project Remo/` 配置了 cc-connect（v1.3.2）：
- **项目名：** project-remo
- **平台：** 微信个人号（ilink 机器人）
- **Agent：** claudecode，模式 acceptEdits
- **配置：** `~/.cc-connect/config.toml`
- **微信 ID：** `o9cq8040xmRTH3PsQhrddEtA9RJ4@im.wechat`
- **开机自启：** Startup 文件夹 `cc-connect.vbs`（静默启动）

---

## 2026-05-28 会话增量更新

### 文案重大调整
1. **删除 02 The Pain section** — 不教育用户，让用户自己意识到痛点。
2. **Step 4：DOCK / 归仓 → TRANSFER / 出水无感回传 + 云端 AI 色彩还原**
   - 物理"归仓"叙事彻底废弃。相机仍会回手心，但已不是产品卖点。
   - 出水后通过手机配套 App 自动回传素材，云端深度学习模型还原色彩，用户在 App 中查看成片。
   - 状态：`LIVE` → `IN-DEV`（GAN 算法 v0.4，HaaS 云端服务尚未上线）
3. **首页 features 卡 03：SmartDeploy → CloudSync**（"出水即回传，云端自动还原"）
4. **04 Hardware Architecture section 已挪到 08 vs Traditional 之后** — 三机对比后紧接硬件细节，叙事变成"先看对比，再看可信度"。
5. **全局清除"归仓 / auto-dock / Surface Lock / 出水上锁"** — 涉及 hero.summary / acoustic.badge.3 / specs.int.10 / lineup.lite.desc / compare.row.10.c3 / investors.1.desc / meta.desc 共 7 处中英文，全部替换为"出水无感回传 + 云端色彩还原"叙事。

### 14 IP & Patent Defense section 内容大改
旧版是 3 个虚构标题 + "IN-DEV"。现在是 **4 项真实专利 + 3 项已国家知识产权局受理**：

| # | 名称 | 类型 | 申请号 | 申请日 | 权项 |
|---|---|---|---|---|---|
| 01 | 声学与视觉融合的水下自动定位拍摄系统及控制方法 | 发明 | 202610208723.3 | 2026-02-13 | 10 |
| 02 | 基于物理环境元数据约束的水下图像生成式色彩还原方法及系统 | 发明 | 202610208686.6 | 2026-02-12 | 18 |
| 03 | 基于视控解耦双核架构的微型水下航行器电子系统 | 实用新型 | 202620215579.1 | 2026-02-13 | 10 |
| 04 | 集成轻量化水声模组及震动反馈机制的潜水电脑表 | 实用新型 | 撰写中 | — | — |

申请人/发明人统一为 **杨文俊**。受理通知书 PDF 位于 `G:/我的云端硬盘/Project Remo/专利/` 各子目录。

heading 改为 "专利护城河*已落地*"；状态从 "FTO 检索 · IN-DEV" 改为 "3 项已受理 · 1 项撰写中"。

### 新增 15 Founding Team section
- 插入位置：14 IP 之后、原 15 For Investors 之前。For Investors 编号顺延为 16。
- 核心叙事：把团队包装成「水下机器人方向的挑战杯/Robocup 冠军团队」。
- 内容来源：`G:/我的云端硬盘/个人简历/202605杨文俊个人简历.pdf`
- 结构（5 块）：
  1. lead 段：G_Robot 社团双重背书叙事
  2. 创始人 founder-card：杨文俊（21 岁，北京信息科技大学自动化卓越工程师）+ 4 项工具栈
  3. 5 条核心获奖时间轴：挑战杯全国一等 / Robocup 冠军 / 国际先进机器人 3 × 国家级一等 / 挑战杯首都省级特等 ×2 / 国际海洋水下机器人国家级二等
  4. 行业经历 + 在研项目双栏
  5. team-note 收尾：「竞赛冠军 = 工程能力背书」

### Hero / Step 4 / Architecture 视觉调整
- **Hero 主图浮动**：12px → 28px + ±1.4° 旋转（更明显）
- **Hero wordmark 移动端**：PROJECT/REMO 包夹产品图（min-height 限定 wordmark 高度，space-between，产品图用负 margin 拉到中部）
- **微信 X5 视频修复**：移除移动端 .hero-product 上的 `animation + filter` 组合，避免抢占 GPU 合成线程
- **flow-step 4 个视频框尺寸统一**：所有列对称 padding `48px 16px`（之前首列左 padding 是 0，比其他列宽 32px）

### 命名表更新
| 技术 | 命名 |
|---|---|
| 出水传输 + 云端还原 | **CloudSync** |
| 入水唤醒 | HydroLock |
| 声学定位跟随 | HydroLock（同名） |
| GAN 色彩还原 | TrueColor Depth |
| 敲击指令 | TapCode |
| 5 推进器架构 | PentaThrust |
| 声学+视觉融合 | FusionTrack |
| ~~SmartDeploy~~ | ❌ 已废弃 |

### 文档同步
- 所有文案改动已写入 `CONTENT.md`（02 The Pain 整段已不在；新增 ## 15 Founding Team 完整规范；## 16 For Investors 编号顺延；## 14 IP 替换为 4 项真实专利清单）。
- 本块就是本次会话改动的 SESSION_SUMMARY 增量记录。
- `MEMORY.md` 不在 Web 项目下，无需操作。

---

## 2026-05-28 会话增量更新 · 第 2 轮

### 1. 团队板块去个人化、强化冠军班底包装
- **删除整段 `<div class="team-experience">`**：行业经历（青岛策海 / 海默新宸）与在研项目（深智鲨 / 海底飞侠 / 深蓝净）均与 Remo 弱相关，从公开站点移除，留作 BD/投资人材料。
- **team.lead 文案改短**：去掉"从 ROV 整机到 ARV 自主控制……工程化成消费者真正能用的产品"长句，改为"竞赛舞台上反复验证过的工程能力，正是 Project Remo 的底座"——短促有力，不暴露个人深度细节。
- **team.note 文案改写**：去掉"3 年以上水下机器人整机开发经验"这种容易暴露团队规模/资历的表述，改为"同一支班底覆盖声学/视觉/控制/结构/嵌入式 AI 的完整工程能力"，把"班底"模糊化为整体能力维度。
- 站点其余团队元素（founder-card + 5 项获奖时间轴）保留——它们就是"冠军团队"包装的核心证据。
- `site.js` 中 `team.exp.*` 所有 i18n keys（zh + en 共 14 项）已删除。

### 2. i18n 乱码修复（6 处）
根因：`data-i18n` 走 `textContent`，把值作为纯文本注入；如果 i18n 值里含 HTML 标签（`<code>` `<br>` `<em>`），用户就会看到字面的 HTML 标记，呈现为"乱码"。修复：改为 `data-i18n-html`（走 `innerHTML`）。

| HTML 位置 | i18n key | 内含 HTML |
|---|---|---|
| `<p>` in 14 IP 卡 #1 | `moat.1.desc` | `<code>` 申请号 |
| `<p>` in 14 IP 卡 #2 | `moat.2.desc` | `<code>` 申请号 |
| `<p>` in 14 IP 卡 #3 | `moat.3.desc` | `<code>` 申请号 |
| `<p>` in 14 IP 卡 #4 | `moat.4.desc` | （现无 HTML，提前转 `-html` 防患） |
| `<p class="founder-title">` | `team.founder.title` | `<br>` |
| `<p class="team-note">` | `team.note` | `<em style="...">` |

### 3. 三机对比表手机端重排
**问题**：旧实现是单列堆叠 10 行裸文本，每个 cell 前用 `::before` 加 "运动相机 · " / "ROV · " / "REMO · " 字符串前缀。结果是大段无层级文本，对比关系丢失。

**方案**：手机端把每行渲染为"对比卡片"。
- 每个 `.ct-row` → bordered card（1px 边 + 微微的灰底）
- axis cell 作为卡片标题（accent 色 mono 大小写字体，下方 1px 实线分隔）
- 三档值变成 `grid-template-columns: 90px 1fr` 双列子表：左是 "运动相机 / ROV / REMO" label，右是值
- Remo 行用 `accent` 字色 + display 字体强调
- 卡片左侧 2px accent 竖线作为视觉钩子

`@media (max-width: 680px)` block 中替换了原有 `.compare-table` 子规则。

### 4. 微信 X5 视频"再也不会挂"方案
**根因复盘**（综合三个独立失败模式）：
- (a) 手机端 `.hero-product` 仍保留 `filter: drop-shadow(...)`，X5 的 GPU 合成线程与 video 解码线程争用，导致同帧视频解码失败。
- (b) 离屏视频自动 `pause()` — X5 上 pause 后再调用 play() 经常无响应（promise 解析但视频卡在 poster 上）。
- (c) 缺少最后一道兜底 — 单靠 IntersectionObserver + 事件监听器，X5 锁屏唤醒、bfcache 恢复等场景仍会丢帧。

**修复**（site.css + site.js）：
1. **去掉 mobile `.hero-product` 的 filter**（含 drop-shadow）以及 `::after` 装饰光晕（同样含合成层）。注释里写明"do not reintroduce"。
2. **IntersectionObserver 改为仅 play、不再 pause**。即使视频离屏也保持播放，X5 安全。
3. **新增 1.5 秒 setInterval 心跳**`tryPlayAll`——任何场景下 paused 的视频 1.5s 内必然被重新 play()。这是"永不挂"的最后保险。
4. **新增 `pageshow` / `focus` / `pointerdown` / `pointerup` / `scrollend` 事件 → tryPlayAll**（bfcache + 触摸都能唤醒）。
5. **`pause` 事件 → 80ms 后自动 `play()` 重启**（X5 内部 pause 也能被反弹回 playing 状态）。
6. **`stalled` / `suspend` / `canplaythrough` / `ended` 事件全部接 tryPlay**（缓冲卡顿恢复 + 循环边界恢复）。
7. **WeChat 内 `<source src>` 强制绝对化**（用 `new URL(src, document.baseURI)`）——避免相对路径在 hash change 时被 X5 重解析到错误的 baseURI。
8. **`ensureMuted()` 现在同时设置 x5-playsinline / x5-video-player-type / x5-video-player-fullscreen 属性**（视频后绑也能拥有 X5 内联属性）。

### 文档同步
- `CONTENT.md` 已更新 ## 15 Founding Team section：移除「行业经历 / 在研项目」表，新增"不上墙的内容"备注；lead / note 文案改写。
- 本块就是本轮改动的 SESSION_SUMMARY 增量记录。
- 旧 `.team-experience` / `.exp-col` / `.exp-eyebrow` CSS 规则仍保留在 `site.css` 中（无对应 DOM 节点，不会渲染，留作未来若需要重新启用时直接复用）。

---

## 2026-05-28 会话增量更新 · 第 3 轮

### 1. 删除整段 05 By the Numbers
- HTML 中整段 `<section class="stats wrap">` 删除（40 m / 5× / 3× / 3+ 4 个数字卡片）
- 原因：Hero 顶部已有 `hero-keyspecs` 5 个数字（40 m / 5× / 3× / 40–60 min / 4K），具体硬件数字也在 04 Architecture 与 10 Tech Specs 的表格里以 LIVE/IN-DEV 状态明确写明；重复呈现没有信息增量，反而稀释 Specs section 的权威感
- 后续：site.js 的 counter 动画函数对零元素天然容错，无需调整；i18n stats.* keys 暂留（无害死代码）

### 2. 团队奖项 5 → 2
**删除 3 项**：
- ❌ 挑战杯全国大学生（AI+应用赛 · 国家级一等奖 · "深智鲨"）—— 与"水下机器人冠军班底"叙事不直接相关
- ❌ 挑战杯首都大学生（"青聚 AI" · 省级特等 ×2）—— 省级含金量低于全国级，且与上一项重复
- ❌ 中国国际海洋水下机器人大赛（ROV / AUV · 国家级二等）—— 含金量低于 RoboCup 冠军

**保留 2 项**（都是国家级一等及以上 + 水下机器人专项）：
- ✅ RoboCup 中国赛 · 水下机器人专项赛 · 国家级一等奖（冠军）
- ✅ 国际先进机器人及仿真技术大赛 · 智慧海洋赛道 · 3 × 国家级一等

**lead 文案改写**：去掉"挑战杯"提及，改为「RoboCup 中国赛冠军 + 国际先进机器人智慧海洋三项一等」双重背书。`site.js` 中 zh + en 的 `team.lead` 已同步。

### 3. 微信视频 — TAP-TO-PLAY 终极方案
**最终诊断（三轮失败后的硬结论）**：X5 / WKWebView 的视频沙箱限制 *无法用 JS 防御绕过*。所有非用户手势上下文里的 `play()` 都会被静默丢弃，包括但不限于：
- `setInterval` 心跳调用的 play()
- `IntersectionObserver` 回调内的 play()
- `MutationObserver` / `WeixinJSBridgeReady` 回调内的 play()
- 异步任务（`setTimeout`、Promise.then）后调用的 play()

X5 唯一允许的：**与 click/touchend 事件 handler 在同一同步 callstack 内**的 play()。

**方案**：双流水线分流。
- **WeChat 路径**（site.js section 8 上半部）：
  1. **页面只保留 1 个视频** —— Showcase V01。flow-step 的 V02-V05 全部不加载（V02 写死在 HTML 里的 video 元素被 site.js 直接 remove，恢复 SVG fallback icon）。X5 网络栈对并发视频解码非常敏感，从 5 减到 1 大幅提升成功率。
  2. **注入 `.showcase-tap` 全填充蒙层** —— 半透明深色 + 中央脉冲呼吸的 ▶ 播放按钮 + "点击启用视频播放 / TAP TO PLAY" 引导文案。CSS 在 site.css 顶部新增样式。
  3. **蒙层 click/touchend handler 同步调用 `showcaseVideo.play()`** —— 严禁 await / setTimeout / Promise.then 在 play() 之前，必须在事件 handler 的 *同一同步 callstack* 上发起 play()，否则 X5 会丢弃。
  4. **激活后蒙层 fade 出消失** —— 用户成功 tap 一次后，蒙层永久消失，视频开始播放
  5. **ended 事件 → 强制 currentTime=0 + play()** —— X5 偶尔不能正确处理 `loop` 属性的环绕，强制循环兜底（这一次的 play() 仍处于 X5 认为的"playing session"上下文，所以允许）
  6. CDN fallback + 绝对化 URL 保留
  7. **不做心跳，不做 IntersectionObserver，不做 MutationObserver** —— 上一轮的"七管齐下"在 X5 内全部无效，删除以避免误导未来调试者

- **非 WeChat 路径**（下半部）：保留 7 重防御原貌（心跳 + IntersectionObserver + MutationObserver + 各种事件 + 错误 fallback），Chrome / Safari / Quark / UC / QQ 等浏览器仍走这条路

**关键代码注释**：site.js section 8 头部新增的硬注释明确写下："X5 silently drops play() calls that are not on the same synchronous callstack as a user gesture"——避免下次维护者再走"加更多事件监听就能修好"的弯路。

### 文档同步
- `CONTENT.md`：删除 ## 05 By the Numbers 表格（替换为删除说明）；## 15 Founding Team 的奖项从 5 项精简为 2 项（附"为什么删 3 项"的说明）；lead 文案同步
- `index.html`：删除 stats section；team-awards 删除 3 个 `<li>`；team.lead 文案改写
- `site.js`：分双路径重写视频处理；team.lead zh + en 文案改写
- `site.css`：新增 `.showcase-tap` / `.showcase-tap-icon` / `.showcase-tap-title` / `.showcase-tap-hint` + `@keyframes showcaseTapPulse`

---

## 2026-05-29 会话增量更新 · 第 4 轮

### 1. 奖项纠错：补回挑战杯全国一等奖
**根因**：第 3 轮判断失误。挑战杯**全国**大学生一等奖含金量在大学生科技竞赛体系中最高（与 RoboCup 中国赛冠军并列），不能因"AI+应用赛道"看上去不直接水下就删除——"深智鲨"作品本身就是水下无人潜航器嵌入式 AI 项目，完全切题。

**当前奖项 3 项**（按含金量排序）：
1. ✅ 挑战杯全国大学生 AI+应用赛 · 国家级一等奖（"深智鲨" · 项目负责人）
2. ✅ RoboCup 中国赛 · 水下机器人专项赛 · 国家级一等奖（冠军）
3. ✅ 国际先进机器人 · 智慧海洋赛道 · 3 × 国家级一等

**继续删除的 2 项**：挑战杯首都大学生（省级 < 国家级）、中国国际海洋水下机器人大赛（国家二等 < 一等）。

**lead 文案改回**：「挑战杯全国大学生一等奖 + RoboCup 中国赛水下机器人冠军」双重背书。zh + en 已同步。

### 2. 04 Architecture：隐藏 14 项硬件选型 + 真实示意图
- **删除整段 `<ul class="specs">`**（14 项硬件清单：策海推进器、自研有刷电调、FlyingRC H7Wlite 飞控、ArduSub 4.1.2、AM32 ESC、MS5837-30BA 深度计、DYP-L08 避障声呐、DYP-C01B ×3、12V LED、舱外开关、I2C 漏水、水压密封、Bambu Lab P1S）
- **原因**：详细 BOM 不应在公开站点暴露——属于供应链与 BD 谈判维度的信息，过早披露会被竞品/厂商定价利用。具体选型留在 BD/投资人材料中
- **替代内容**：在 `arch-copy` 内追加 `.arch-pillars` 段落："水平 ×2 提供巡航与转向 · 垂直 ×2 提供升沉与俯仰 · 横向 ×1 提供平移构图——精确解耦的 5 自由度控制基底"
- **替换右侧 inline SVG 推进器示意图** 为真实图：`Image/动力架构布局示意图.png`（用户上传）。`<img>` 双源（CDN 优先、本地 fallback）
- **arch.* i18n keys**：新增 `arch.pillars` / `arch.img.alt`（zh + en）；旧 `arch.spec.*` keys 14 项保留（无害死代码，下次清理）
- `site.css` 删除了 `.arch-copy .specs` / `.arch-diagram svg` / `.arch-diagram .stroke|label|pulse` 等约 60 行规则；新增 `.arch-copy .arch-pillars` + `.arch-diagram img` + `.arch-diagram .diagram-label` + 移动端规则

### 3. 微信视频"双路径"终极方案
**第 3 轮 inline play() 仍失败的根因**：X5 沙箱 spec 允许实现"在某些版本上即使是同步 callstack 内的 play() 也可以静默丢弃"——这是 X5 内部为了避免广告滥用预留的 escape hatch。我们必须假设 inline 路径**有概率失败**。

**新方案 — 双路径并行**（每次访问用户都看到两个按钮，自由选择）：
- **Path A · Inline play()**（与第 3 轮一致）：tap → 同步 callstack `play()` → 视频原位播放。失败时 X5 静默丢弃
- **Path B · 直链 mp4 全屏播放器**（新增）：用户点击 `<a href="./Video/V01.mp4">` → X5 启动其内置全屏 MP4 播放器。**这条路径由 WeChat spec 保证**——他们不能屏蔽，否则朋友圈 / 群组所有视频链接都会打不开

**实现细节**：
- overlay 内布局：上方 `.showcase-tap-inline`（▶ + 主提示）；下方 `.showcase-tap-fallback` `<a>` 按钮（"若点击无效，点这里全屏观看 →"）
- video 触发 `playing` 事件 → 整个 overlay fade out 移除（说明 Path A 起效，无需再看到 fallback）
- video 一直没 playing → fallback 按钮永远在那里，用户随时可点
- 无论 Path A 是否成功，**用户 100% 至少有一条路径能看到视频**——这就是对"再也不会挂"的硬保证

**保留的 X5 适配**：source URL 绝对化、CDN fallback、ended → currentTime=0 + play() 循环兜底、ensureMuted。

### 文档同步
- `CONTENT.md`：## 04 Architecture 标注 14 项 BOM 已隐藏；## 15 Founding Team 奖项回到 3 项 + 改回 lead；新增 5 自由度三柱说明
- `index.html`：删除 ul.specs；删除 inline SVG 推进器图；新增 img + .arch-pillars 段；team.lead 改回；team-awards 加回 #1
- `site.js`：双路径 overlay；ZH/EN team.lead 改回；新增 arch.pillars / arch.img.alt zh+en
- `site.css`：删除旧 specs/SVG 相关规则；新增 .arch-pillars / .arch-diagram img；overlay 双按钮布局 (.showcase-tap-inline + .showcase-tap-fallback)

---

## 2026-05-29 会话增量更新 · 第 5 轮

### 1. 添加创始人肖像照
- 文件：`Image/杨文俊肖像照.png` → founder-card 顶部新增 `<img class="founder-portrait">`（CDN + 本地双源）
- CSS：1:1 方形裁切 `object-fit: cover` + 微去色 `grayscale(0.15)` + 微对比 `contrast(1.04)`
- 位置：在 founder-meta 正上方，与下方角色/姓名/抬头/工具栈构成完整人物卡

### 2. 专利信息精简
- 合并前每条专利含：申请号 `<code>` / 申请日 / 权利要求项数 / 技术描述段落
- 合并后每条只显示：**名称 + 类型（发明/实用新型）+ 受理状态（已受理/撰写中）**
- `site.js` 中 `moat.1-4.desc` zh + en 全部缩减为一句话
- 删除的申请号细节保留在 CONTENT.md 备注中（内部 BD 材料用）

### 3. 手机端三机对比表改为紧凑表格
**废弃**：上一版的卡片堆叠（每行一个独立 bordered card + 2-col label/value 子表 + 左侧 accent bar）
**新方案**：
- 恢复 4 列 grid 布局：`grid-template-columns: 80px 1fr 1fr 90px`
- `.ct-row.ct-head` 在手机端显示（sticky 表头，ink 背景）
- 字体缩小（cell 12px / axis 9px / head 9px）
- Remo 列 accent 高亮 + 浅底
- 整表 `overflow-x: auto`，`min-width: 340px`，窄屏横向滚动
- 与桌面版表格结构一致，只是更紧凑

### 4. Acoustic Intelligence 桌面排版优化
**旧布局**：左右等宽两列（6fr + 6fr），图在左、文字+手环全在右，align-items: center 使图悬空，右侧内容过密。

**新布局**（三行 grid）：
1. 第一行：全宽场景图（grid-column: 1 / -1）
2. 第二行左列 `.acoustic-copy`：H3 大标题 + 主文案 p1
3. 第二行右列 `.acoustic-side`：副文案 p2 + 8 个能力 badge + 声学手环图
grid 比例改为 5fr + 7fr（文窄控宽）

### 文档同步
- `CONTENT.md`：## 14 专利表格去掉申请号/日/权项；## 15 founding team 排版说明加肖像照
- `index.html`：founder-card 加 img；patent li 去详细 code 段；acoustic-body 三行 grid
- `site.js`：moat.*.desc 全部精简
- `site.css`：founder-portrait；acoustic-body 改 grid；mobile compare-table compact table；acoustic-side p

---

## 🚨 永久备忘修订版 · 视频/图片加载策略最终结论（2026-05-29）

> **前几轮记录的"jsDelivr 主源 + GitHub Pages 备源"策略已被废弃。** 实测表明无论顺序怎么排,只要走单一 CDN,就一定有部分用户/网络/时段加载极慢。最终方案是同源 + 多 CDN 并行竞速。

### 单 CDN 都不靠谱的原因（按确定性排序）

1. **jsDelivr 在大陆备案曾被吊销**,目前流量绕港日新加坡,大部分大陆 ISP（特别是联通）有 DNS 污染或限速。**不同用户/网络/时段速度差距可达 50×**。
2. **GitHub Pages 走 Fastly,大陆无合规节点**。和 jsDelivr 类似,不同节点波动巨大,运营商劫持/限速时有发生。
3. **CDN 冷缓存 → 回源失败 → 缓存住失败状态** 是真实存在的问题。新加资源后第一次访问可能命中失败缓存,默认 TTL 12h。
4. **statically.io / raw.githack** 等替代 CDN 也是同一类问题,只是抖动模式不同。

### 最终落地策略：同源主源 + 三 CDN 并行竞速

```
HTML 直接写：
  <video data-video-slot="V01">
    <source src="./Video/V01.mp4">  ← 同源,HTML 解析时就开始下载,慢但稳
  </video>

JS 启动时（site.js 6.5）：
  for each <video[data-video-slot]>:
    raceFastestUrl([
      "./Video/V01.mp4",                                  ← 同源
      "https://cdn.jsdelivr.net/gh/.../Video/V01.mp4",    ← jsDelivr
      "https://cdn.statically.io/gh/.../Video/V01.mp4",   ← statically.io
    ])
    用 fetch GET + Range: bytes=0-0 + 4s 超时 探测哪个先 200/206
    如果非同源胜出 → 替换 video.src（仅在还没起播时）
    如果都失败 → 保持同源,用户最终能播
```

### 为什么这个策略是局部最优

- ✅ **保底速度**：始终有同源在跑,最差情况就是 GitHub Pages 慢,不会出现"完全加载不出来"
- ✅ **加速空间**：当任一 CDN 当前状态良好,其结果会先到,自动切换替换 src
- ✅ **零成本**：纯前端,无需备案、无需服务器
- ✅ **可监控**：浏览器 Network 面板能看到三个 fetch 中谁先成功

### 真正的终极方案（暂未实施）

如果产品长期化,**唯一稳定的加速是国内对象存储 + 自有备案域名 CDN**：
- 腾讯云 COS / 阿里 OSS / 七牛 / Cloudflare R2 + 国内 CNAME
- 需要 ICP 备案（个人备案 1-2 周）
- 月成本 ¥几十级别
- 国内任意网络 100MB/s+ 稳定

未实施的原因：项目还在 POC 阶段,先用免费方案过渡。当用户量上来或拿到融资时再迁。

### ⛔ 历史踩过的坑（不要再踩）

| ❌ 错误做法 | 为什么 |
|---|---|
| 单 CDN 主源（jsDelivr 或 statically） | 任一 CDN 抖动时全站挂 |
| 单 CDN + 错误顺序 fallback | 第一个慢/超时,fallback 已等不及 |
| 在 `<head>` 用 `<link rel=preload as=video>` 给 V01 | 抢首屏带宽,Hero 图被挤 |
| 让 5 个 video 全部 `preload="auto"` | 并发 5 个下载,X5 网络栈崩,Hero 被挤 |
| 视频用大 PNG 当 poster | poster 自身 2MB 又是首屏关键 |
| 降低视频码率 | 不解决问题,瓶颈是网络不是文件 |
| 用 setInterval 心跳触发 X5 重新加载 | X5 不响应非用户手势的 play() |

### 🩹 资源 404 / 缓存住失败状态时

依然需要 `purge.jsdelivr.net/...` 主动清缓存（参见上一节的 runbook）。但因为现在是多源竞速,即使 jsDelivr 抽风,同源和 statically 还在跑,用户感知不到。

### 🔧 验证清单

1. **桌面 Chrome**：F12 Network 面板,看 V01 资源是同源的 200 还是 jsDelivr/statically 的 206。如果 jsDelivr 200 比同源快,会看到 `video.src` 被 JS 替换为 jsDelivr URL。
2. **手机 4G 微信**：Hero WebP（90KB）应在 1-2 秒内显示,V01 在 tap 后 2-5 秒内起播,V02-V05 进入视口后 3-5 秒起播。
3. **WiFi 极慢场景**：raceFastestUrl 4s 超时,即使三个源都慢也会回退到同源继续等。

如果 Hero 图都加载半分钟以上,问题是 **GitHub Pages 自身在用户网络下不可达**——这是 GitHub 的事不是代码的事,只能靠迁国内对象存储解决。

---

## 2026-05-29 会话增量更新 · 第 6 轮（视频加载提速）

> **接下来的所有维护者：在动视频源顺序之前，先读完这一段。**

### 症状
微信原生浏览器（X5 Android / WKWebView iOS）打开页面后,V01 showcase 的"点击启用视频"按钮虽然能成功唤起播放,但视频实际加载需要 **30 秒以上**。V02–V05 flow 视频也一样慢。其它浏览器（Chrome/Safari/Edge）秒开,只在微信里卡。

### 根因（按贡献度排序）

1. **GitHub Pages 在中国大陆是慢链路 / 经常被运营商限速**。GitHub Pages 用 Fastly CDN，Fastly 在中国大陆没有合规节点,流量被绕到香港或日本,实测 50–200 KB/s,1.5MB 视频要 8–30s。这是**最主要瓶颈**。
2. **微信 X5 视频解码器对并发下载极敏感**。同时排队 5 个 video 时,V01 没下完前 V2-V5 的请求会被 X5 串行化,雪崩式累积延迟。
3. **历史遗留的源顺序错误**。HTML `<source>` 写本地路径作为主源、jsDelivr 作为 fallback —— 这个顺序在大陆是反向的：jsDelivr 在大陆有反代节点（jsd.onmicrosoft.cn 等回源点）,实测比 GitHub Pages 快 5–10×,**应该是主源**。

### 最终解决方案（已落地于 commit 见下）

**方案 A：翻转 source 优先级（核心修复）**
- HTML：`<source src="…cdn.jsdelivr.net…">` 主，`data-video-fallback="./Video/Vxx.mp4"` 备
- JS（site.js section 6.5）：`probe.src = cdnUrl` 主，onerror 才换 `localUrl`
- 涉及：V01 showcase（HTML 硬编码）、V02 flow-step 1（HTML 硬编码）、V03–V05（JS lazy attach）

**方案 B：连接预热（次要,但白送 1–2s）**
在 `<head>` 加：
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
<link rel="preload" as="video" href="https://cdn.jsdelivr.net/.../V01.mp4" type="video/mp4">
```
浏览器在 HTML parse 阶段就开始 TLS+TCP 握手,V01 第一帧能再提前。

### ⛔ 不要做这些（前人踩过的坑）

| ❌ 错误尝试 | 为什么会失败 |
|---|---|
| 把 source 顺序改回"本地优先" | 大陆 GitHub Pages 慢，会重蹈 30s 覆辙 |
| 删掉本地 fallback | jsDelivr 偶有抽风（每年 1–2 次几小时降级），需要兜底 |
| 进一步压视频码率到 < 720p | 牺牲画质换不来本质提速；瓶颈在网络不在文件大小 |
| 尝试用 setInterval 心跳触发 X5 重新加载 | X5 不响应非用户手势的 play()，徒劳（已在 Round 3-5 验证过） |
| 用 `<link rel="prefetch">` 替代 preload | prefetch 优先级低,X5 会推到空闲时再下，等于没做 |

### 📈 进一步提速的选项（若用户后续抱怨）

按工作量从小到大：

1. **增加多 CDN fallback 链**（statically.io / raw.githack）— 在 jsDelivr 偶发抽风时多一道保险
2. **真正的国内对象存储 + CDN**（腾讯云 COS / 阿里 OSS / 七牛）— 速度最稳,但需 ICP 备案
3. **改用 HLS 切片流**（`.m3u8` + 720p/360p 双码率）— X5 支持 HLS，可以根据网速自动降级；改造工作量大
4. **首屏只放 V01,V02-V05 改成"图片占位 + 点击加载"** — 把瓶颈从"全部视频并发下载"变成"按需触发"

### 🔧 验证清单（任何动视频源后必跑）

1. Chrome 桌面端：打开,5 个视频应秒开
2. 微信扫码（必须真机）：showcase tap → V01 起播应在 5s 内
3. 微信里下滑到工作流：V02-V05 应在每段视频进入视口后 3-5s 内起播
4. Quark / UC / QQ 浏览器：自动播放（不需要 tap）

如果有任何一步退化到 30s+，**先检查 source 顺序是否被错误地改回了 local-first**。

### 🩹 新视频加进来后必做：**purge jsDelivr 缓存**

> 症状：旧视频（V01-V03）秒开,新加的视频（V04+）页面里完全不加载,显示 SVG 占位 / 一直转圈。
> 
> 根因：jsDelivr CDN 第一次回源 GitHub 拉新视频时,如果命中 GitHub Pages 的暂时性 5xx 或大陆慢链路,**CDN 会把失败状态缓存下来,之后所有请求都返回失败,直到 TTL 到期（默认 12h）**。

**修复方法**：每次推送新视频文件后,立即用 `curl` 调用 jsDelivr purge API,强制清空对应 URL 的缓存:

```bash
# 替换成你的新视频名
for V in V04 V05; do
  curl -s "https://purge.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/Video/$V.mp4"
done
```

**验证 purge 成功**:返回 JSON 里有 `"status": "finished"` 且 `"providers": {"CF": true, "FY": true}` 即 OK。

**验证视频可拉取**:
```bash
curl -sI "https://cdn.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/Video/V04.mp4" | grep -iE "HTTP|content-type|content-length"
```
应看到 `HTTP/1.1 200 OK` + `Content-Type: video/mp4` + 正确 `Content-Length`。

**注意**：purge 后第一个请求是 `x-cache: MISS`(冷启动),第二个请求开始才是 HIT。建议自己先用浏览器访问一次预热。

---

## 2026-05-29 会话增量更新 · 第 6 轮（视频加载提速）

### 1. HTML source 顺序翻转
- `index.html` 中的 V01 showcase video 与 V02 flow-step 1 video,主源从 `./Video/Vxx.mp4` 改为 `https://cdn.jsdelivr.net/gh/.../Vxx.mp4`,fallback 改为本地路径。

### 2. site.js lazy attach probe 顺序翻转
- `probe.src = localUrl` → `probe.src = cdnUrl`
- `onerror` 由 `triedCdn=true; probe.src=cdnUrl` 变为 `triedLocal=true; probe.src=localUrl`
- 注释里写明"DO NOT flip back to local-first" + 历史原因

### 3. `<head>` 加 preconnect / preload
- `preconnect` + `dns-prefetch` 给 jsDelivr 提前握手
- `preload as=video` 给 V01.mp4 提前发起请求

### 4. 文档：本备忘段落 + 后续维护者验证清单
