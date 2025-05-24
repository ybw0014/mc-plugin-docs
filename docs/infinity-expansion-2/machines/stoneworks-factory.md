---
sidebar_position: 5
---

# Stoneworks Factory

Stoneworks Factory is an electric machine that produces stone-related items.

## Information

There are 4 tiers of Stoneworks Factory:

| Tier | Speed* | Energy consumption (J/t) |
| ---- | ----- | ------------------------ |
| Basic | 1x | 200 |
| Advanced | 4x | 600 |
| Void | 16x | 1,800 |
| Infinity | 64x | 5,400 |

- The **Speed** is how many cobblestones are generated and how many items are processed per run.

:::info default values

Some of these information can be changed in the [item specific configurations](/infinity-expansion-2/config/items) by server owners. The wiki only shows the default values. Check the actual information in-game.

:::

## Procedures

The Stoneworks Factory produces cobblestones, and can be processed up to 3 times with the given procedures.

### None

The default procedure, simply passes the cobblestones to the next slot.

### Furnace

| Input | Output |
| ----- | ------ |
| Cobblestone | Stone |
| Stone | Smooth Stone |
| Sand | Glass |
| Stone Bricks | Cracked Stone Bricks |

### Crush

| Input | Output |
| ----- | ------ |
| Cobblestone | Gravel |
| Gravel | Sand |

### Compact

| Input | Output |
| ----- | ------ |
| Stone | Stone Bricks |
| Granite | Polished Granite |
| Diorite | Polished Diorite |
| Andesite | Polished Andesite |
| Sand | Sandstone |

### Transform

| Input | Output |
| ----- | ------ |
| Cobblestone | Andesite |
| Andesite | Diorite |
| Diorite | Granite |
| Stone | Deepslate |
| Sand | Suspicious Sand |
| Gravel | Suspicious Gravel |
