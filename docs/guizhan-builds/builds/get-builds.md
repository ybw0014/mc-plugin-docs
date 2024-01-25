---
title: Get Builds
sidebar_position: 1
---

`GET /builds/:author/:repository/:branch`

Get all the builds of a project.

## Path parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `author` | `string` | The project author. |
| `repository` | `string` | The project repository. |
| `branch` | `string` | The project branch. |

## Query parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `per_page` | `number` | The number of projects per page. (default: `30`) |
| `page` | `number` | The page number. (default: `1`) |

## Response data schema

```typescript
[
  {
    "id": number, // the build number
    "commit": string, // the commit hash this build is built on
    "author": string, // the commit author
    "timestamp": number, // the commit timestamp
    "message": string, // the commit message
    "success": boolean, // whether this build is successful
    "buildTimestamp": number, // the timestamp of this build
    "target": string, // the build artifact filename
    "sha1": string // the sha1 hash of the build artifact
  },
  ... // other builds
]
```
