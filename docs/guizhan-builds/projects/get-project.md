---
title: Get Project
sidebar_position: 2
---

`GET /project/:author/:repository/:branch`

Get the information of a project.

## Path parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `author` | `string` | The project author. |
| `repository` | `string` | The project repository. |
| `branch` | `string` | The project branch. |

## Response data schema

```typescript
{
  "key": string, // project key, in the format of `author/repository:branch`
  "author": string, // project author
  "repository": string, // project repository
  "branch": string, // project branch
  "type": "maven" | "gradle", // project type
  "alias"?: string[], // an array of alternative project keys
  "buildOptions": BuildOptions, // https://github.com/ybw0014/guizhan-builds-2-data/blob/master/src/ProjectBuildOptions.ts
  "displayOptions"?: DisplayOptions, // https://github.com/ybw0014/guizhan-builds-2-data/blob/master/src/ProjectDisplayOptions.ts
}
```
