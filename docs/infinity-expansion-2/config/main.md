---
sidebar_position: 1
---

# `config.yml`

`/plugins/InfinityExpansion2/config.yml`

This file hosts general settings for InfinityExpansion 2.

:::warning

The config options listed here may be outdated as the addon updates.

:::

| Option | Description | Values | Default |
| --- | --- | --- | --- |
| `auto-update` | Automatically updates the addon when a new version is available. | `true`/`false` | `true` |
| `debug` | Enables debug logs. | `true`/`false` | `false` |
| `lang` | The default language of this addon. | [Language codes](https://github.com/ybw0014/InfinityExpansion2/tree/master/src/main/resources/lang) | `en` |
| `balance` | [Balance options](#balance). | | |
| `resource-synthesizer` | [Resource Synthesizer options](#resource-synthesizer). | | |
| `mob-simulation` | [Mob Simulation options](#mob-simulation). | | |
| `quarry` | [Quarry options](#quarry). | | |
| `advanced-anvil` | [Advanced Anvil options](#advanced-anvil). | | |
| `infinity-gear-enchantments` | [Infinity gear enchantment options](#infinity-gear-enchantment). | | |

## Balance options {#balance}

### `singularity-cost-multiplier` {#balance-singularity-cost-multiplier}

This affects the final cost of crafting [Singularities](/infinity-expansion-2/singularities/).

**Range**: `0.0` to `1000.0`  
**Default**: `1.0`

### `allow-sf-item-transform` {#balance-allow-sf-item-transform}

This affects [Gear Transformer](/infinity-expansion-2/machines/gear-transformer). When this is `true`, Gear Transformer will be able to convert Slimefun items.

**Values**: `true`/`false`  
**Default**: `false`

### `enable-researches` {#balance-enable-researches}

Whether to enable researches.

**Values**: `true`/`false`  
**Default**: `false`

## Resource Synthesizer options {#resource-synthesizer}

### `recipes` {#resource-synthesizer-recipes}

This is a list of sections that define the recipes of Resource Synthesizer.

An example section:

```yaml
- input:
    1: IE_IRON_SINGULARITY
    2: IE_COAL_SINGULARITY
  output:
    item: REINFORCED_ALLOY_INGOT
    amount: 32
```

- `input.1` and `input.2`: The 2 input items' ID. Must be a valid Slimefun item ID. It's recommended to use [Singularities](/infinity-expansion-2/singularities).
- `output.item`: The output item's ID. Must be a valid Slimefun item ID.
- `output.amount`: The amount of output, can be omitted. The default value is `1`.

:::tip

InfinityExpansion2 items are all prefixed with `IE_`.

:::

## Mob Simulation options {#mob-simulation}

### `output-interval` {#mob-simulation-output-interval}

See the [item specific configuration](/infinity-expansion-2/config/items#output-interval).

### `allow-stacked-card` {#mob-simulation-allow-stacked-card}

Whether to allow cards to be stacked.

Since InfinityExpansion2, the mob data card can be a stacked item.  
When this is `true`, the products will be multiplied by the stack size, and the energy consumption remains same.  
When this is `false`, the products are always same for 1x card.

**Values**: `true`/`false`  
**Default**: `false`

### `exp-multiplier` {#mob-simulation-exp-multiplier}

The experience multiplier for mob simulation.

**Range**: `0.0` to `1000.0`  
**Default**: `1.0`

### `legacy-output` {#mob-simulation-legacy-output}

Whether to use the legacy output mode in InfinityExpansion.

Current mode: Each drop has a chance to be dropped.  
Legacy mode: The chance of each drop is its weight. Only one will be dropped.

**Values**: `true`/`false`  
**Default**: `false`

## Quarry options {#quarry}

### `output-interval` {#quarry-output-interval}

See the [item specific configuration](/infinity-expansion-2/config/items#output-interval).

### `pools` {#quarry-pools}

A quarry pool contains the base product and the other products in each world type (`Environment`).

```yaml title="Default normal world pool"
base-product: COBBLESTONE
products:
  COAL: 4
  COPPER_INGOT: 2
  IRON_INGOT: 1
  GOLD_INGOT: 1
  REDSTONE: 1
  LAPIS_LAZULI: 1
  EMERALD: 1
  DIAMOND: 1
```

In the config, `base-product` is the general product ID.  
It must be a valid Slimefun item ID, or a valid Minecraft [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) name.

`products` is a map of product ID and the weight.

:::info

Check how does the [quarry](/infinity-expansion-2/machines/quarry) work to understand the quarry pool.

:::

### `oscillators` {#quarry-oscillators}

This section defines the available oscillators in `ID: chance` pairs. The oscillators will be registered in game.  
The ID must be a valid Slimefun item ID, or a valid Minecraft [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) name.

:::info

Check how does the [quarry](/infinity-expansion-2/machines/quarry) work to understand the oscillators.

:::

## Advanced Anvil options {#advanced-anvil}

### `max-levels` {#advanced-anvil-max-levels}

This section defines the maximum possible levels of each Enchantment.

```yaml title="Default max levels"
sharpness: 9
bane_of_arthropods: 9
smite: 9
protection: 10
fortune: 6
efficiency: 7
fire_aspect: 6
power: 7
thorns: 13
looting: 6
unbreaking: 13
```

The key is the lowercase name of the enchantment in [1.20.5+ javadocs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html).

Enchantments not listed here will have the vanilla max levels.

## Infinity gear enchantment options {#infinity-gear-enchantment}

This section contains the enchantment options for all Infinity gear.

`unbreakable` is a boolean value that determines whether the gear should have unbreakable.

You can add more enchantments by adding more lines with the format `enchantment: level`.  
To remove an existing enchantment, set the level to `0`. (The config module would fill the missing fields so you have to set them to `0`)

The enchantment should be the lowercase name of the enchantment in [1.20.5+ javadocs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html).
