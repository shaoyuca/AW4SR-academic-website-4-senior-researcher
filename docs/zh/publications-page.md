# Publications 页面 — 使用说明

Publications 页面的所有内容都集中在**同一个文件**里：

```
content/publications.tsx
```

打开这个文件，编辑 `PUBLICATIONS` 数组即可。**不需要动其他任何文件。**

---

## 整体结构

论文按年份分组，每个年份对应一个 H2 标题：

```tsx
export const PUBLICATIONS = [
  {
    year: 2026,
    papers: [ … ],
  },
  {
    year: 2025,
    papers: [ … ],
  },
]
```

请按**年份从新到旧**排列（最新的放最上面）。

---

## 新增一篇论文

复制任意一个已有的论文块，粘贴到对应年份的 `papers` 数组中：

```tsx
{
  title: '你的论文标题',
  authors: <>作者一, <Strong>作者二</Strong>, 作者三</>,
  venue: 'In CHI 2026, Honolulu, Hawaii, USA. ACM, New York, NY, USA, 12 pages.',
  links: [
    { label: 'PDF',   href: 'https://dl.acm.org/…' },
    { label: 'Video', href: 'https://example.com' },
  ],
},
```

## 删除一篇论文

删除对应的整个 `{ title: …, authors: …, … },` 块即可。

---

## 新增一个年份

复制一个已有的 `{ year: …, papers: […] }` 块，修改年份，填入论文：

```tsx
{
  year: 2024,
  papers: [
    { … },
  ],
},
```

## 删除一个年份

删除对应的整个 `{ year: …, papers: […] },` 块。

---

## 作者列表（authors）

`authors` 字段默认以**斜体**展示。有两个独立的标记，可自由组合——同一个人可以同时拥有两者、其中一个，或两者都没有：

| 效果 | 写法 |
|---|---|
| 普通姓名 | `Bob Smith` |
| 网页主人 / **加粗** | `<Strong>Alice Chen</Strong>` |
| 通讯作者 / 右上角 `*` | `Bob Smith<Corresponding />` |
| 既加粗又是通讯作者 | `<Strong>Alice Chen</Strong><Corresponding />` |

### 示例

网页主人和通讯作者是**同一人**：
```tsx
authors: <><Strong>Alice Chen</Strong><Corresponding />, Bob Smith, Carol Williams</>
```

网页主人和通讯作者是**不同的人**：
```tsx
authors: <>Bob Smith<Corresponding />, <Strong>Alice Chen</Strong>, Carol Williams</>
```

网页主人排在后面，通讯作者是别人：
```tsx
authors: <>Carol Williams<Corresponding />, David Lee, <Strong>Alice Chen</Strong></>
```

---

## 发表位置（venue）

直接写纯文本字符串，无需加粗：

```tsx
venue: 'In CHI 2026, Honolulu, Hawaii, USA. ACM, New York, NY, USA, 14 pages.',
```

---

## 获奖信息（award，可选）

如果论文获奖，添加 `award` 字段，它会显示在链接行的上方。  
**没有获奖则删掉这整行**。

```tsx
award: <>🏆 Best Paper Award — CHI 2026</>,
```

使用 🏆 emoji，与 Portfolio 页面风格保持一致。

---

## 链接（links）

可添加任意数量的链接，每个显示为带下划线的文字：

```tsx
links: [
  { label: 'PDF',   href: 'https://dl.acm.org/doi/…' },
  { label: 'Video', href: 'https://example.com' },
  { label: 'Code',  href: 'https://github.com/…' },
  { label: 'Talk',  href: 'https://example.com' },
],
```

请使用外部链接（ACM DL、arXiv、学校仓库等）。

---

## 通讯作者脚注

如需在页面底部显示脚注（如"* 通讯作者"），修改 `CORRESPONDING_NOTE`：

```ts
export const CORRESPONDING_NOTE = '* Corresponding author'
```

设为空字符串则不显示：

```ts
export const CORRESPONDING_NOTE = ''
```

---

## 快速参考 — 作者标记

| 标记 | 含义 | 写法 |
|---|---|---|
| `<Strong>` | 网页主人 / 需要加粗的作者 | `<Strong>姓名</Strong>` |
| `<Corresponding />` | 通讯作者（右上角 `*`） | `姓名<Corresponding />` |
