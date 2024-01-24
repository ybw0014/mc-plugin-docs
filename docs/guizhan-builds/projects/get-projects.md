---
title: Get Projects
sidebar_position: 1
---

`GET /projects`

Get all the projects.

## Query parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `per_page` | `number` | The number of projects per page. (default: `30`) |
| `page` | `number` | The page number. (default: `1`) |

## Response data schema

```typescript
[
  {
    "author": string, // project author
    "repository": string, // project repository
    "branch": string // project branch
  },
  ... // other projects
]
```
