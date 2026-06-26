# Courses 页面 — 使用说明

Courses 页面的所有内容都集中在**同一个文件**里：

```
content/courses.tsx
```

打开这个文件，编辑 `COURSES` 数组即可。**不需要动其他任何文件。**

---

## 1. 课程块

每门课对应一个 `{ … },` 块：

```tsx
{
  title: 'Interactive Systems Studio',
  href: 'https://example.edu/courses/interactive-systems-studio',
  linkLabel: 'Course website',
  description: (
    <>
      这里写课程简介。
    </>
  ),
}
```

每个课程块会生成：

- 一个大的课程标题
- 一个课程外链
- 一段课程描述
- 可选的视频嵌入区域
- 可选的 Student Work 区域

---

## 新增一门课程

复制一整个课程 `{ … },` 块，粘贴到 `COURSES` 数组中：

```tsx
{
  title: 'New Course Title',
  href: 'https://example.edu/course-page',
  linkLabel: 'Course website',
  description: (
    <>
      这里写课程的简短介绍。
    </>
  ),
},
```

## 删除一门课程

删除对应课程的整个 `{ … },` 块即可。

---

## 课程链接

修改 `href` 和 `linkLabel`：

```tsx
href: 'https://example.edu/course-page',
linkLabel: 'Course website',
```

- `href` 是课程外部网页地址。
- `linkLabel` 是页面上显示的可点击文字。

---

## 课程描述

### 纯文字

修改 `<>` 和 `</>` 之间的文字：

```tsx
description: (
  <>
    This course introduces prototyping, critique, and evaluation methods.
  </>
),
```

### 描述中加入链接

在描述里使用 `<InlineLink>`：

```tsx
description: (
  <>
    Students may reference{' '}
    <InlineLink href="https://www.w3.org/WAI/" external>
      accessibility guidelines
    </InlineLink>{' '}
    during project evaluation.
  </>
),
```

- 链接到外部网站时，保留 `external`。
- 链接到本站内部页面时，去掉 `external`。

---

## 视频

视频通过**外部平台的嵌入链接**展示。不要把视频文件上传到网站项目里。

给课程添加 `videos` 数组：

```tsx
videos: [
  {
    title: 'Course overview video',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
  },
  {
    title: 'Student showcase video',
    src: 'https://player.vimeo.com/video/VIDEO_ID',
  },
],
```

页面会自动响应式排列：

- 手机端每行 1 个视频
- 宽屏每行最多 2 个视频

### 删除视频区域

如果某门课没有视频，删除整个 `videos: [ … ],` 块即可。

---

## Student Work

需要展示学生作品说明时，添加 `studentWork`：

```tsx
studentWork:
  'Students produce working prototypes, short reports, and final demonstrations.',
```

如果某门课不需要 `Student Work` 区域，删除 `studentWork` 这一行即可。

---

## 快速参考

| 目标 | 修改哪里 |
|---|---|
| 修改课程标题 | `title` |
| 修改课程外链 | `href` |
| 修改链接文字 | `linkLabel` |
| 修改课程描述 | `description` |
| 添加视频 | 添加 `videos: [ … ]` |
| 隐藏视频 | 删除 `videos: [ … ]` |
| 添加 Student Work | 添加 `studentWork` |
| 隐藏 Student Work | 删除 `studentWork` |

课程描述和学生作品说明建议使用自己原创的文字。不要直接复制其他课程网站的文字，除非你确认有使用权限。
