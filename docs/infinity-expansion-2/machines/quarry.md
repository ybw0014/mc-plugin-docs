---
sidebar_position: 15
---

# Quarry

Quarry is an electric machine that generates resources from thin air.

## Usage

*(Optional)* You can put an [Oscillator](/infinity-expansion-2/tools/oscillator) in the input slot to increase the chance of getting specific resources.

## Information

There are 4 tiers of Quarry:

| Tier | Speed* | Chance | Energy consumption (J/t) |
| ---- | ------------ | ------------- | ------------------------ |
| Basic | 1 | 15% | 300 |
| Advanced | 2 | 25% | 900 |
| Void | 4 | 50% | 3,600 |
| Infinity | 64 | 100% | 36,000 |

- The **Speed** is how many items are generated per run.

:::info default values

Some of these information can be changed in the [item specific configurations](/infinity-expansion-2/config/items) by server owners. The wiki only shows the default values. Check the actual information in-game.

:::

## How does it work?

First, the Quarry will select the pool (defined in [config](/infinity-expansion-2/config/main#quarry-pools)) according to the current world type.

Then, the **Chance** will determine if the Quarry should pick an item from the pool.

If the Quarry should not pick from pool, the base product will be generated instead, and the output procedure ends here.

Now, the Quarry will check if there is a valid Oscillator in the input slot. If there is, the Quarry will pick an item from the pool according to the Oscillator's settings.
