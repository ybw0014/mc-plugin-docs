---
title: 获取构建
sidebar_position: 2
---

`GET /build/:author/:repository/:branch/:build`

获取项目的特定构建信息。

## 路径参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `author` | `string` | 项目作者。 |
| `repository` | `string` | 项目仓库。 |
| `branch` | `string` | 项目分支。 |
| `build` | `number` | `"latest"` | 构建编号。使用 "latest" 获取最新构建。 |

## 响应数据模式

```typescript
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
}
```
