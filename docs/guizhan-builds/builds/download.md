---
title: Download Build
sidebar_position: 11
---

`GET /download/:author/:repository/:branch/:build`

Download the build artifact of the specific build of a project.
This is not a standard API endpoint. It will return a download stream if the artifact exists.

## Path parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `author` | `string` | The project author. |
| `repository` | `string` | The project repository. |
| `branch` | `string` | The project branch. |
| `build` | `number` | `"latest"` | The build number. "latest" for the latest build. |

## Response

The response will be a download stream.

If the build is not found, it will return a [2001 Build artifact not found](/docs/guizhan-builds/api/reference) error.
