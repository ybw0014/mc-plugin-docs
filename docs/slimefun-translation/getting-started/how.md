---
title: How do translations work?
sidebar_position: 3
---

SlimefunTranslation checks whether an item has `slimefun:slimefun_item` tag. This tag is used by Slimefun to identify items, and the value is the item's ID.

If an item is identified as a Slimefun item, SlimefunTranslation will look for the translation for this item. If the translation is found, it will be applied to the item. The actual item will not be modified, the translation is applied to the item packets sent to clients.

There may be some conditions applied to the translation. Check [conditions](/slimefun-translation/config/translations#conditions) for more info.
