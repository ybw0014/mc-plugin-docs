---
title: API 参考文档
sidebar_position: 1
---

我们的 API 位于：`https://builds.guizhanss.com/api`

模式（schema）中带有 `?` 的参数是可选的。

## 响应格式

一个标准的 API 端点会返回一个 JSON 对象响应，格式如下：

```javascript
{
  "code": number, // 响应代码
  "message": string, // 响应消息
  "data": object | null // 响应数据，如果响应代码不为 0 则为 null
}
```

### 响应代码

一个成功的响应代码总是 `0`。

| 代码 | 描述 |
| ---- | ----------- |
| 0  | 成功          |
| 404 | 路由未找到 |
| 500 | 服务器内部错误 |
| 1000 | 项目未找到 |
| 2000 | 构建未找到 |
| 2001 | 构建工件未找到 |

## 验证

现在我们的 API 端点不需要验证即可访问。
