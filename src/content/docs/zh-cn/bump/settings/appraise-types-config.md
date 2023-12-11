---
title: 鉴定类型配置
description: appraise-types.yml
---

`/plugin/Bump/appraise-types.yml`

## 内容

每个鉴定类型都在一个以类型名称命名的部分中定义。

```yaml
example_type:
  enabled: true
  name: "Example name"
  description:
  - "Example description"
  - "Multiple lines and color code is supported."
  permission: "bump.example.node"
  equipment-type: SLIMEFUN
  check-material: true
  materials:
  - bump:sword
  equipment-slots:
  - HAND
  attributes:
    GENERIC_ATTACK_DAMAGE:
      min: 0
      max: 30
      weight: 40
    GENERIC_ATTACK_SPEED:
      min: -3
      max: 10
      weight: 25
    GENERIC_MOVEMENT_SPEED:
      min: -0.4
      max: 0.6
      weight: 15
    GENERIC_LUCK:
      min: -3
      max: 10
      weight: 10
    GENERIC_ATTACK_KNOCKBACK:
      min: -2
      max: 12
      weight: 10
```

| 选项 | 描述 | 可选值 |
| --- | --- | --- |
| *example_type* | (**必须**) 鉴定类型的 ID。<br />该 ID 将用于 `NamespacedKey`，因此只能使用小写字母、数字、斜线、点、下划线、连字符。<br />不同鉴定类型的 ID 不能重复。 | `[a-z0-9/._-]` |
| `enabled` | (**必须**) 是否启用该鉴定类型。 | `true`/`false` |
| `name` | (**必须**) 鉴定类型的显示名称。<br />支持使用 `&` 颜色字符。 | |
| `description` | (**必须**) 鉴定类型的说明。<br />支持使用 `&` 颜色字符。<br />可多行。 | |
| `permission` | (*可选*) 选择该鉴定类型所需的权限。<br />如果你想让所有人都可以使用，删除该选项，而不是留空。 | 查看[权限](#permission)以了解更多。 |  
| `equipment-type` | (**必须**) 允许的装备类型。<br /> | **ANY**：任意物品。<br />**VANILLA**：仅原版物品（实际上是所有非粘液物品）。<br />**SLIMEFUN**：仅粘液科技物品。 |
| `check-material` | (*可选*) 是否启用鉴定时的物品材料 `Material` 检测。 | `true`/`false` |
| `materials` | (*可选*) 允许的材料。<br />如果 `check-material` 设置为 `false`，该选项会被无视。 | 查看[可用材料](#acceptable-materials)以了解更多。 |
| `equipment-slots` | (**必须**) 支持的装备栏位`EquipmentSlot`。 | See [EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html) |
| `slimefun-items` | (*可选*) 支持的粘液科技物品 ID 列表。<br />仅在 `equipment-type` 设置为 `ANY`/`SLIMEFUN` 时有效。<br />如果该选项留空，则所有粘液科技物品都可用。 | 粘液科技物品 ID。 |
| `attributes.X` | 该鉴定类型修改的属性 `Attribute`。每部分代表一个将会修改的属性。 | 查看 [Attribute](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html) 以了解更多。 |
| `attributes.X.min` | (**必须**) 属性修改范围的最小值。 | 查看[属性](#attribute)部分以了解更多。 |
| `attributes.X.max` | (**必须**) 属性修改范围的最大值。 | 查看[属性](#attribute)部分以了解更多。 |
| `attributes.X.weight` | (*可选*) 属性权重。 | `0` ~ `100` 或 `-1`<br />查看[属性](#attribute)部分以了解更多。 |

### 可用材料 {#acceptable-materials}

这与 [`Material`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 不同。我们不需要列出所有的材料。我们现在有标签和材料。

我们需要写下材料的名字吗？并不是，我们需要写下材料的 `NamespacedKey`。  
如果你不知道什么是 `NamespacedKey`，不用担心。  
材料的 `NamespacedKey` 是小写的材料名，并在前面加上 `minecraft:`。举个例子，`STONE` 应该写为 `minecraft:stone`，`DIAMOND_SWORD` 应该写为 `minecraft:diamond_sword`。

那么，什么是标签呢？一个标签是一系列材料的集合。你可以只写下一个标签，而不用写出标签所含的所有材料。  
Bump 定义了一系列的标签可供使用。  
要想使用标签，写下标签的小写名称，并在前面加上 `bump:`。举个例子，`axe` 是包含所有斧头的标签。你需要在使用时写下 `bump:axe`。  
你可以在我们的 GitHub 仓库中找到所有的标签：[点击前往](https://github.com/SlimefunGuguProject/Bump/tree/main/src/main/resources/tags)

### 权限 {#permission}

当玩家在[鉴定仪](/zh-cn/bump/items/appraise-instrument)中选择指定的鉴定类型，或点击**鉴定**按钮时，会检查权限。

### 属性 {#attribute}

关于属性的权重：

- 如果所有的属性权重都指定，但累计权重不是100，则鉴定类型不会被注册。
- 所有未指定权重将会平分剩余权重。
- 权重为`-1`则意味着未指定权重。
- 如果你不想让某个属性加入到评级计算，则应设置权重为0，而不是删除权重。

关于属性的数值：

- 最大值必须大于等于最小值。否则，鉴定类型不会被注册。
- 属性将会通过属性修饰符 `AttributeModifier` 应用到装备上。`GENERIC_MOVEMENT_SPEED` 与 `HORSE_JUMP_STRENGTH` 的[运算模式](https://zh.minecraft.wiki/w/%E5%B1%9E%E6%80%A7#%E8%BF%90%E7%AE%97%E6%A8%A1%E5%BC%8F)为**倍率操作 multiply_base**。其余修饰符的运算模式均为**增量操作 add**。
