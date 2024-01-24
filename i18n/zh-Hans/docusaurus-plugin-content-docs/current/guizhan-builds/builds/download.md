---
title: 下载构建
sidebar_position: 11
---

`GET /download/:author/:repository/:branch/:build`

下载项目指定构建的构建工件。
这不是标准的 API 端点。如果构建工件存在，它将返回一个下载流。

## 路径参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `author` | `string` | 项目作者。 |
| `repository` | `string` | 项目仓库。 |
| `branch` | `string` | 项目分支。 |
| `build` | `number` | `"latest"` | 构建编号。使用 "latest" 获取最新构建。 |

## 响应

响应将是一个下载流。

如果未找到构建，它将返回 [2001 构建产物未找到](/docs/guizhan-builds/api/reference) 错误。
