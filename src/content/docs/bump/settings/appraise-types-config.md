---
title: Appraise types config
description: appraise-types.yml
---

`/plugin/Bump/appraise-types.yml`

## Content

Each appraise type is defined in a section with the name of the type.

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

| Option | Description | Available values |
| --- | --- | --- |
| *example_type* | (**Required**) The ID of the appraise type.<br />This will be used in `NamespacedKey`, so only lowercase letters, numbers, slashes, dots, underscores and hyphens are allowed.<br />The ID of different appraise types CANNOT be the same. | `[a-z0-9/._-]` |
| `enabled` | (**Required**) Whether this appraise type is enabled. | `true`/`false` |
| `name` | (**Required**) The display name of this appraise type.<br />Color code `&` is supported. | |
| `description` | (**Required**) The description of this appraise type.<br />Color code `&` is supported.<br />Can be in multiple lines. | |
| `permission` | (*Optional*) The permission required to choose this appraise type.<br />If you want everyone to be able to choose, delete this field, instead of leaving it empty. | See [permission](#permission) for more info. |  
| `equipment-type` | (**Required**) Allowed equipment type.<br /> | **ANY**: Any item.<br />**VANILLA**: Vanilla items only (Actually, non-Slimefun items).<br />**SLIMEFUN**: Slimefun items only. |
| `check-material` | (*Optional*) Whether to check the material of the item while appraising. | `true`/`false` |
| `materials` | (*Optional*) Allowed materials.<br />If `check-material` is `false`, this field will be ignored. | See [acceptable materials](#acceptable-materials) section for more info. |
| `equipment-slots` | (**Required**) Allowed equipment slots.<br /> | See [EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html) |
| `slimefun-items` | (*Optional*) Acceptable Slimefun item ids.<br />Only valid when `equipment-type` is `ANY`/`SLIMEFUN`.<br />If this option is empty, then all slimefun items are acceptable. | Slimefun item IDs. |
| `attributes.X` | The attributes that will be modified by this appraise type. Each section represents an attribute. | See [Attribute](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html). |
| `attributes.X.min` | (**Required**) The minimum value of this attribute. | See [attribute](#attribute) section for more info. |
| `attributes.X.max` | (**Required**) The maximum value of this attribute. | See [attribute](#attribute) section for more info. |
| `attributes.X.weight` | (*Optional*) The weight of this attribute. | `0` ~ `100` or `-1`<br />See [attribute](#attribute) section for more info. |

### Acceptable materials

This is different from [`Material`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html). We do not need to type all the Materials here. Instead, we have both tags and materials.

Do we just write down the name of the Material? No. We write the `NamespacedKey` of Material.  
If you do not know what is `NamespacedKey`, no need to worry about.  
The `NamespacedKey` of Material is the lowercased Material with prefix `minecraft:`. For example, `STONE` should be written as `minecraft:stone`, `DIAMOND_SWORD` should be written as `minecraft:diamond_sword`.

What about tags? A tag is a set of Materials. You can just write a tag instead of writing all Materials within it.  
Bump defined a series of tags for you to use.
To use a tag, write its lowercased name with prefix `bump:`. For example, `axe` is the tag that covers all axes, you will need to write `bump:axe` when you using it.  
You can find all tags in our GitHub repository: [Click to go](https://github.com/SlimefunGuguProject/Bump/tree/main/src/main/resources/tags)

### Permission

The permission will be checked when a player selects a specified appraise type in Appraisal Instrument, or clicks on **Appraise** button in Appraisal Instrument.

### Attribute

About the weight of attributes:

- The appraise type will not be registered if all attributes' weights are specified, but the overall weight is not 100.
- All attributes with unspeficied weights will divide the remaining weight.
- `-1` weight means an unspeficied weight.
- If you do not want an attribute value to be calculated in star rate, you need to set it to 0, instead of removing the weight.

About the values of attributes：

- The maximum value must be equal to or greater than the minimum value. Otherwise, the appraise type will not be registered.
- The attributes will be applied to equipment by `AttributeModifier`. The [operations](https://minecraft.fandom.com/wiki/Attribute#Operations) of `GENERIC_MOVEMENT_SPEED` and `HORSE_JUMP_STRENGTH` are **multiply_base**. The operations of other attributes are all **add**.
