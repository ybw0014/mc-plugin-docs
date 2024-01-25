---
title: Get Build Badge
sidebar_position: 10
---

`GET /badge/:author/:repository/:branch/:build`

Get the badge of the specific build of a project.  
This is not a standard API endpoint. It will return a svg.

## Path parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `author` | `string` | The project author. |
| `repository` | `string` | The project repository. |
| `branch` | `string` | The project branch. |
| `build` | `number` | `"latest"` | The build number. "latest" for the latest build. |

## Response

The response will always be a svg image with HTTP 200 status code.

The text will be in English by default. By passing `Accept-Language` header, you can get the text in other languages if available.  
The available languages are: `en-US`, `zh-CN`.  
The resolver will try to find the best match language. If no match is found, it will fallback to English.

A successful build will look like this:

![Successful build](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/28)

A failed build will look like this:

![Failed build](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/29)

If the build is not found, it will look like this:

![Build not found](https://builds.guizhanss.com/api/badge/ybw0014/GuizhanLibPlugin/master/-1)
