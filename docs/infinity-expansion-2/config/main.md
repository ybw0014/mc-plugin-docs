---
sidebar_position: 1
---

# Main configuration file

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

Range: `0.0` to `1000.0`  
Default: `1.0`

### `allow-sf-item-transform` {#balance-allow-sf-item-transform}

This affects [Gear Transformer](/infinity-expansion-2/machines/gear-transformer). When this is `true`, Gear Transformer will be able to convert Slimefun items.

Values: `true`/`false`  
Default: `false`

### `enable-researches` {#balance-enable-researches}

Whether to enable researches.

Values: `true`/`false`  
Default: `false`

## Resource Synthesizer options {#resource-synthesizer}

### `recipes` {#resource-synthesizer-recipes}

This is a list of strings that define the recipes of Resource Synthesizer.  
The format of each string is:

```text
INPUT1,INPUT2,OUTPUT,AMOUNT
```

- `INPUT1` and `INPUT2` must be the ID of a singularity that can be crafted in Singularity Constructor (no need the prefix `IE_`).
- `OUTPUT` must be a valid Slimefun item ID. (InfinityExpansion2 items are all prefixed with `IE_`)
- `AMOUNT` is the amount of output, can be omitted. The default value is `1`.

:::note Example

```text
IRON_SINGULARITY,COAL_SINGULARITY,REINFORCED_ALLOY_INGOT,32
```

This recipe will convert 1 Iron Singularity and 1 Coal Singularity into 32 Reinforced Alloy Ingots.

:::

## Mob Simulation options {#mob-simulation}

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

## Infinity gear enchantment options {#infinity-gear-enchantment}

This section contains the enchantment options for all Infinity gear.

`unbreakable` is a boolean value that determines whether the gear should have unbreakable.

You can add more enchantments by adding more lines with the format `enchantment: level`.  
To remove an existing enchantment, set the level to `0`.

The enchantment should be the lowercase name of the enchantment in [1.20.5+ javadocs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html).
