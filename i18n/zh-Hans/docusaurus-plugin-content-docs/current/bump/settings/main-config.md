---
title: 主要配置
description: config.yml
---

```yaml title="/plugins/Bump/config.yml"
version: 4

options:
  auto-update: true
  lang: en-US
  enable-researches: true

weapons:
  projectile-duration: 10

appraise:
  stars:
    100: 20
    98: 10
    96: 9
    92: 8
    88: 7
    82: 6
    74: 5
    64: 4
    48: 3
    30: 2
    10: 1
```

| 选项 | 描述 | 默认值 | 可用值 |
| --- | --- | --- | --- |
| `version` | 配置文件的版本。<br />**不要改动该项。**  | &nbsp; | &nbsp; |
| `options.auto-update` | 是否启用自动更新。 | `true` | `true`/`false` |
| `options.lang` | 附属的语言。 | `en-US` | 详见[可用语言](https://github.com/SlimefunGuguProject/Bump#supported-languages)。 |
| `options.enable-researches` | 是否启用研究。 | `true` | `true`/`false` |
| `weapons.projectile-duration` | Bump 武器发射的弹射物持续时间，单位为粘液刻。 | `10` | `0` ~ `60` |
| `appraise.stars` | 鉴定结果与星级的关系。 | &nbsp; | 详见[鉴定仪](/zh-cn/bump/items/appraisal-instrument)。 |
