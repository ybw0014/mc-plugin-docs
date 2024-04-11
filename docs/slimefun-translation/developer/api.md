---
title: API methods
sidebar_position: 2
---

You can access our API by `SlimefunTranslationAPI` class.  
(`net.guizhanss.slimefuntranslation.api.SlimefunTranslationAPI`)

Avoid accessing other classes/methods directly, as they are subject to change.

## Methods

### Get the `User`

A `User` represents an online player, it stores the player's language and some other information.

```java
SlimefunTranslationAPI.getUser(UUID uuid)
SlimefunTranslationAPI.getUser(Player player)
```

The method returns a `User` object ([Reference](https://github.com/GuizhanCraft/SlimefunTranslation/blob/master/src/main/java/net/guizhanss/slimefuntranslation/core/users/User.java)) to pass to other API methods.

:::info[Example]

```java
User user = SlimefunTranslationAPI.getUser(player);
```

:::

### Get translated item name

```java
SlimefunTranslationAPI.getItemName(User user, String id)
SlimefunTranslationAPI.getItemName(User user, @Nullable SlimefunItem sfItem)
```

The method returns a `String` that is the translated name of the item for the given `User`.

If the item is invalid (`sfItem` is `null`, or `id` is not a valid item id), the method returns an empty string.  
If there is no available translation for the item, the default item name is returned.

### Translate an item

```java
SlimefunTranslationAPI.translateItem(User user, ItemStack item)
```

The method translates the item for the given `User`. It returns a boolean value representing whether the translation is applied to the item. Check out ["How do translations work?"](/slimefun-translation/usage/how) page for more information.

:::warning

This method modifies the provided `ItemStack`. Pass a copy of item if you want to keep the original item unchanged.

:::

### Get the lore

```java
SlimefunTranslationAPI.getLore(User user, String id, boolean defaultToId)
```

The method returns the lore line `String` by given id. ([Reference](/slimefun-translation/usage/placeholders))

### Get the `MessageFactory`

The `MessageFactory` provides methods to send translated messages to the player.

```java
SlimefunTranslationAPI.getMessageFactory(Plugin plugin)
```
