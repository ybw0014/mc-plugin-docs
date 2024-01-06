---
title: Main config (config.yml)
---

`/plugins/SlimefunTranslation/config.yml`

```yaml
auto-update: true
debug: false
language-mappings:
  en-US: en
  zh-Hans: zh-CN
  zh-Hant: zh-TW
```

| Field | Description | Default | Available values |
| --- | --- | --- | --- |
| `auto-update` | Whether to enable auto update. | `true` | `true`/`false` |
| `debug` | Whether to print debug messages in console. | `true` | `true`/`false` |
| `language-mappings` | The language mappings, used to map the language code into the ones Slimefun uses. In the example, `en-US` will be treated as `en`. | &nbsp; | `Source language: Target language` pairs. |
