---
title: 获取项目
sidebar_position: 2
---

`GET /project/:author/:repository/:branch`

获取项目的信息。

## 路径参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `author` | `string` | 项目作者。 |
| `repository` | `string` | 项目仓库。 |
| `branch` | `string` | 项目分支。 |

## 响应数据模式

```typescript
{
  "key": string, // 项目键，格式为 `author/repository:branch`
  "author": string, // 项目作者
  "repository": string, // 项目仓库
  "branch": string, // 项目分支
  "type": "maven" | "gradle", // 项目类型
  "alias"?: string[], // 可选的替代项目键数组
  "buildOptions": BuildOptions, // [项目构建选项](https://github.com/ybw0014/guizhan-builds-2-data/blob/master/src/ProjectBuildOptions.ts)
  "displayOptions"?: DisplayOptions, // [项目显示选项](https://github.com/ybw0014/guizhan-builds-2-data/blob/master/src/ProjectDisplayOptions.ts)
}
