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
