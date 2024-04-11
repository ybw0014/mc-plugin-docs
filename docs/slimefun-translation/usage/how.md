---
title: How does the plugin work?
sidebar_position: 3
---

SlimefunTranslation modifies the packets sent to clients, so the actual ItemStacks are not modified.

## Changing packets

The plugin changes the packets of:

- the items in any user interface (e.g. inventory, chest, furnace, etc.)
- the dropped items (for the display items on Ancient Pedestals)
- the inventory title (only the inventory title of Slimefun blocks)

## Identifying items

All the Slimefun items have a `slimefun:slimefun_item` NBT. This plugin only changes items with this NBT.

