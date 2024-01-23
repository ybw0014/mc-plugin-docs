---
title: Appraisal Instrument
---

Appraisal Instrument is a machine in Bump. It can appraise the equipment labeled with *Not appraised*.

## Usage

Put in any equipment labeled with *Not appraised*, and click on **Click to appraise**.

All [random equiment](/bump/items/random-equipment) are labeled with *Not appraised*. [Quality Identifiers](/bump/items/quality-identifiers) can also label items

## Star Rating

Appraising an item is to add [AttributeModifiers](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.html) to the item.

The appraise result is rated by stars. The number of stars is calculated by adding weighted percents.

The weighted percent is calculated by this formula:

```txt
(AttributeResult - Minimum) / (Maximum - Minimum) * Weight
```

Adding all weighted percents, you will get the overall percents.

| Overall percent larger than or equal to | Number of Stars |
| --------------------------------------- | --------------- |
| 100                                     | 20              |
| 98                                      | 10              |
| 96                                      | 9               |
| 92                                      | 8               |
| 88                                      | 7               |
| 82                                      | 6               |
| 74                                      | 5               |
| 64                                      | 4               |
| 48                                      | 3               |
| 30                                      | 2               |
| 10                                      | 1               |
| 0                                       | 0               |

Server owners can customize this relationship in the [main config](/bump/settings/main-config).

## Default appraise types

### Weapon

| Attribute | Minimum | Maximum | Weight |
| --------- | ------- | ------- | ------ |
| Attack damage | 0       | 30      | 40%    |
| Attack speed | -3      | 10      | 25%    |
| Movement speed | -40%    | 60%     | 15%    |
| Luck | -3      | 10      | 10%    |
| Knockback | -2      | 12      | 10%    |

### Armor

| Attribute | Minimum | Maximum | Weight |
| --------- | ------- | ------- | ------ |
| Armor     | 0       | 30      | 40%    |
| Armor toughness | -2      | 12      | 25%    |
| Maximum Health    | -5      | 12      | 15%    |
| Knockback resistance | -0.2    | 0.8     | 10%    |
| Flight speed | -3      | 5       | 7%     |
| Zombie reinforcements | -5      | 5       | 3%     |

### Horse Armor

| Attribute | Minimum | Maximum | Weight |
| --------- | ------- | ------- | ------ |
| Maximum health    | 0       | 30      | 30%    |
| Armor     | -5      | 30      | 15%    |
| Armor toughness | -2      | 12      | 10%    |
| Knockback resistance | -0.2    | 0.8     | 5%     |
| Horse jump strength | -50%    | 140%    | 20%    |
| Movement speed | -50%    | 120%    | 15%    |
| Follow range | -50     | 250     | 5%     |
