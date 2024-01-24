---
title: API Reference
sidebar_position: 1
---

Our API is located at: `https://builds.guizhanss.com/api`

Fields with `?` in schema are optional.

## Response Format

A standard API endpoint will return a JSON object response in the following format:

```javascript
{
  "code": number, // response code
  "message": string, // response message
  "data": object | null // response data, will be null if the response code is not 0
}
```

### Response codes

The code of a successful response is always `0`.

| Code | Description |
| ---- | ----------- |
| 0  | Success          |
| 404 | Route not found |
| 500 | Internal server error |
| 1000 | Project not found |
| 2000 | Build not found |
| 2001 | Build artifact not found |

## Authentication

There is no authentication needed to access our API endpoints now.
