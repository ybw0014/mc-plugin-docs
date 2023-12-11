---
title: Main config
description: config.yml
---

`/plugin/Bump/config.yml`

## Content

```yaml
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

| Option | Description | Default | Available values |
| --- | --- | --- | --- |
| `version` | The version of the config file.<br />**DO NOT CHANGE THIS.**  | &nbsp; | &nbsp; |
| `options.auto-update` | Whether to enable auto update. | `true` | `true`/`false` |
| `options.lang` | The language of the addon. | `en-US` | See [available languages](https://github.com/SlimefunGuguProject/Bump#supported-languages). |
| `options.enable-researches` | Whether to enable researches. | `true` | `true`/`false` |
| `weapons.projectile-duration` | The duration of the projectiles fired by Bump weapons, in Slimefun ticks. | `10` | `0` ~ `60` |
| `appraise.stars` | The relationship of the final percent and the star rating. | &nbsp; | See [Appraisal Instrument](/bump/items/appraisal-instrument). |
