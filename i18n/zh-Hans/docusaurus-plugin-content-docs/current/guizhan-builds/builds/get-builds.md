---
title: 获取构建列表
sidebar_position: 1
---

`GET /builds/:author/:repository/:branch`

获取项目的所有构建。

## 路径参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `author` | `string` | 项目作者。 |
| `repository` | `string` | 项目仓库。 |
| `branch` | `string` | 项目分支。 |

## 查询参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `per_page` | `number` | 每页构建数量。（默认：`30`） |
| `page` | `number` | 页码。（默认：`1`） |

## 响应数据模式

```typescript
[
  {
    "id": number, // 构建编号
    "commit": string, // 此构建所构建的提交哈希值
    "author": string, // 提交的作者
    "timestamp": number, // 提交的时间戳
    "message": string, // 提交的消息
    "success": boolean, // 此构建是否成功
    "buildTimestamp": number, // 构建的时间戳
    "target": string, // 构建生成的文件名
    "sha1": string // 构建生成文件的SHA1哈希值
  },
  ... // 其他构建
]
