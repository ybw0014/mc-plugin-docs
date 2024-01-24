---
title: API Reference
sidebar_position: 1
---

Our API is located at: `https://builds.guizhanss.com/api`

## Response Format

A standard API endpoint will return a JSON object response in the following format:

```javascript
{
  // The response code.
  "code": number,

  // The response message.
  "message": string,

  // The response data.
  "data": object | null
}
```

### Response codes

The code of a successful response is always `0`.

| Code | Description |
| ---- | ----------- |
| 0  | Success          |
| 404 | Route not found |
| 500 | Internal server error |
| 
