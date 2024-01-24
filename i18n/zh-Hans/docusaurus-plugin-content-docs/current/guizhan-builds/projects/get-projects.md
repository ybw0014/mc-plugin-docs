---
title: 获取项目列表
sidebar_position: 1
---

`GET /projects`

获取所有项目。

## 查询参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `per_page` | `number` | 每页项目数量。（默认：`30`） |
| `page` | `number` | 页码。（默认：`1`） |

## 响应数据模式

```typescript
[
  {
    "author": string, // 项目作者
    "repository": string, // 项目仓库
    "branch": string // 项目分支
  },
  ... // 其他项目
]
