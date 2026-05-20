# Project 详情页 — 使用说明

About 页面上每个项目都有一个独立的详情页，路由为 `/projects/<slug>`。  
所有项目详情页的内容集中在**同一个文件**里：

```
content/projectDetails.tsx
```

**不需要动其他任何文件。**

---

## 路由是如何工作的

只要在 `content/about.tsx` 里添加了项目，该项目的路由就会**自动创建**，无需任何额外配置。所有项目共用同一套页面模板。

- **已在本文件中填写内容** → 显示完整模板（标题、描述、图片/视频、论文引用）。
- **未填写内容** → 页面显示标题和 "coming soon"。

---

## 如何找到项目的 slug

Slug 由 `content/about.tsx` 中的项目标题自动生成：

| about.tsx 中的标题 | 对应的 slug（此文件中的 key） |
|---|---|
| `Project Alpha` | `project-alpha` |
| `Soft Robot Arm` | `soft-robot-arm` |
| `My Project (2024)` | `my-project-2024` |

**最简单的方法**：点击 About 页面上的项目图片，查看地址栏中的 URL —  
`/projects/` 后面的部分就是你需要填写的 key。

---

## 新增一个 project 详情页

**第一步** — 在 `content/about.tsx` 里添加项目图片（这样项目才会出现在 About 页面）。  
**第二步** — 在 `content/projectDetails.tsx` 里添加对应 slug 的条目：

```tsx
'your-project-slug': {
  description: '关于这个项目的一段描述。',
  media: [ … ],          // 可选
  publication: '…',      // 可选
},
```

---

## 各字段说明

### description（描述）

纯文字或带超链接的富文本：

```tsx
// 纯文字
description: '关于这个项目的描述。',

// 带超链接
description: (
  <>
    描述文字，其中包含一个{' '}
    <InlineLink href="https://example.com" external>超链接</InlineLink>。
  </>
),
```

### media（图片/视频，可选）

图片和视频以两列网格展示（手机端显示为一列），可自由混搭。

```tsx
media: [
  // 图片
  { type: 'image', src: '/images/my-photo.jpg', alt: '图片内容描述' },

  // YouTube 视频
  { type: 'video', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID', title: '视频标题' },

  // Vimeo 视频
  { type: 'video', embedUrl: 'https://player.vimeo.com/video/VIDEO_ID', title: '视频标题' },
],
```

**如何获取 YouTube 嵌入链接：**  
打开视频 → 点击**分享** → 点击**嵌入** → 复制 `src="…"` 里的 URL。

图片和视频均采用懒加载，只有滚动到视口时才会下载，不影响页面初始加载速度。

### publication（论文引用，可选）

直接粘贴引用文本（Google Scholar 格式或其他格式均可）：

```tsx
publication: '作者 A, 作者 B. "论文标题." 会议名称, 年份.',
```

以普通正文形式展示在 "Publication" 标题下方。

---

## 隐藏某个字段

`media` 和 `publication` 均为可选字段，不需要时删除对应那行即可：

```tsx
'project-gamma': {
  description: '只有描述，没有图片和论文引用。',
},
```

---

## 快速参考 — media 类型

| 类型 | 写法 |
|---|---|
| 图片 | `{ type: 'image', src: '/images/file.jpg', alt: '…' }` |
| YouTube | `{ type: 'video', embedUrl: 'https://www.youtube.com/embed/ID', title: '…' }` |
| Vimeo | `{ type: 'video', embedUrl: 'https://player.vimeo.com/video/ID', title: '…' }` |
