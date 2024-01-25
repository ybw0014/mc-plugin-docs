---
title: 获取构建徽章
sidebar_position: 10
---

`GET /badge/:author/:repository/:branch/:build`

获取项目指定构建的构建徽章。
这不是标准的 API 端点。它将返回一个 svg 图像。

## 路径参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `author` | `string` | 项目作者。 |
| `repository` | `string` | 项目仓库。 |
| `branch` | `string` | 项目分支。 |
| `build` | `number` | 构建编号。使用`latest`获取最新构建。 |

## 响应

响应将始终是一个 svg 图像且返回 HTTP 200。

文本默认为英语。通过传递 `Accept-Language` 头部，你可以获取其他可用语言的文本。
可用的语言有：`en-US`，`zh-CN`。
解析器将尝试找到最佳匹配的语言。如果找不到匹配项，它将回退到英语。

一个成功的构建将如下所示：

![成功构建](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/28)

一个失败的构建将如下所示：

![失败构建](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/29)

如果未找到构建，将如下所示：

![构建未找到](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/-1)
