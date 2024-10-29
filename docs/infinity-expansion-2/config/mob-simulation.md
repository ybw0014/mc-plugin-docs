---
sidebar_position: 3
---

# `mob-simulation.yml`

`/plugins/InfinityExpansion2/mob-simulation.yml`

This file hosts all Mob Data Cards for InfinityExpansion 2.

```yaml title="Default Cow card"
cow:
  enabled: true
  name: "Cow"
  texture: IRON_CHESTPLATE
  energy: 75
  experience: 1
  drops:
    - item: LEATHER
      chance: 1
    - item: BEEF
      chance: 1
  recipe:
    pattern:
      - "LBL"
      - "CXC"
      - "LBL"
    ingredient:
      L:
        item: LEATHER
        amount: 64
      B:
        item: BEEF
        amount: 64
      C:
        item: COOKED_BEEF
        amount: 64
```

| Option | Description | Values |
| --- | --- | --- |
| **cow** | The ID of the card. Must be unique. | Lowercase English letters, numbers, underscores (`_`). |
| `enabled` | Whether this card is enabled. | `true`/`false` |
| `name` | The display name of the card. | Any string |
| `texture` | The [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) of the card. | Valid item [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| `energy` | The energy consumption of the card. | 0 ~ |
| `experience` | The experience of the card. | 0 ~  |
| `drops` | [Drops section](#drops). | |
| `recipe` | [Recipe section](#recipe). | |

## Drops {#drops}

This list defines all the drops of the card.

A drop contains the following fields:

- `item`: The item ID of the drop. Must be a valid Slimefun item ID, or a valid item [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) name (Slimefun ID takes precedence).
- `chance`: The chance of the drop. A decimal number between 0 and 1.
- `amount`: The amount of items. Can be omitted and defaults to 1.

## Recipe {#recipe}

The recipe is similar to a Minecraft's shaped crafting recipe.

### `pattern`

The `pattern` field is a 3x3 grid of characters. Each **case-sensitive** character represents an item in the recipe.

Use *spaces* for empty slots.

:::danger Important

The pattern must have one and only one `X` character, which represents the empty mob data card.

:::

### `ingredient`

Specifies the ingredients of the corresponding characters in the pattern (besides `X`).

Each ingredient contains the following fields:

- `item`: The item ID of the ingredient. Must be a valid Slimefun item ID, or a valid item [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) name (Slimefun ID takes precedence).
- `amount`: The amount of items. Can be omitted and defaults to 1.
