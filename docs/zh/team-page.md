# Team 页面 — 使用说明

Team 页面的所有内容都集中在**同一个文件**里：

```
content/team.tsx
```

打开这个文件，按照注释修改对应内容即可。**不需要动其他任何文件。**

---

## 1. 页面介绍正文

`Team` 标题下面的介绍文字由 `TEAM_INTRO` 控制：

```tsx
export const TEAM_INTRO =
  '这里写一两句实验室、团队文化或研究社区的介绍。'
```

只需要替换引号里的文字。建议保持简短，一到两句话即可。

---

## 2. 团队分区

页面中的各个分区由 `TEAM_SECTIONS` 控制：

```tsx
export const TEAM_SECTIONS = [
  {
    title: 'Current',
    members: [
      'Research Fellow - 简短描述。',
      'PhD Student - 简短描述。',
    ],
  },
]
```

每一个 `{ … }` 块会生成：

- 一个来自 `title` 的 H2 标题
- 一个来自 `members` 的 bullet 列表

---

## 修改分区标题

修改 `title` 的值即可：

```tsx
{
  title: 'Current',
  members: [ … ],
},
```

例如：

```tsx
title: 'Current'
title: 'Alumni'
title: 'Former Capstone Student'
```

---

## 新增成员

在 `members` 数组里新增一行：

```tsx
members: [
  'Research Fellow - studies interactive systems.',
  'New Member - 在这里写简短的身份或项目描述。',
],
```

每一条成员信息都要放在引号里，并以英文逗号结尾。

---

## 删除成员

删除对应成员的整行即可：

```tsx
'New Member - 在这里写简短的身份或项目描述。',
```

---

## 新增一个分区

复制一个完整的分区块，粘贴到 `TEAM_SECTIONS` 数组中：

```tsx
{
  title: 'Visitors',
  members: [
    'Visiting Scholar - 简短描述。',
    'Exchange Student - 简短描述。',
  ],
},
```

---

## 删除一个分区

删除对应的整个 `{ … }` 块：

```tsx
{
  title: 'Visitors',
  members: [
    'Visiting Scholar - 简短描述。',
  ],
},
```

---

## 快速参考

| 目标 | 修改哪里 |
|---|---|
| 修改介绍正文 | `TEAM_INTRO` |
| 修改分区标题 | `title` |
| 新增成员 | 在 `members` 中新增一条字符串 |
| 删除成员 | 删除对应成员那一行 |
| 新增分区 | 复制并修改一个 `{ title, members }` 块 |

占位文字可以保留，也可以改成自己的原创表述。不要直接复制其他网站上的介绍文字，除非你确认有使用权限。
