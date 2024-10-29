---
sidebar_position: 1
---

# Vein Miner Rune

Vein Miner Rune is a rune that applies **Vein Miner** to the tool it is applied to. **Vein Miner** allows you to mine a vein of ores by breaking one of them.

:::warning

**Vein Miner** is not a real enchantment. Once you remove InfinityExpansion2 from your server, it will not work.

:::

## Usage

Throw the tool you want to apply **Vein Miner** to on the ground, then throw the Vein Miner Rune on top of it.  
Once there is a lightning on the tool, it means the rune is successfully applied.

To activate **Vein Miner**, hold the tool and **sneak** while breaking a block.  
Activating **Vein Miner** will consume 1 hunger point.

## Supported Blocks

Check the [source code](https://github.com/GuizhanCraft/InfinityExpansion2/blob/master/src/main/kotlin/net/guizhanss/infinityexpansion2/implementation/items/tools/VeinMinerRune.kt#L24). Any vanilla block whose Material name contains one of the strings in the list will be supported.
