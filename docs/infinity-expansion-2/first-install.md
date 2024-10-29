---
sidebar_position: 2
---

# ⚙️ First Install

:::warning

**Make sure** that all of your plugins and server software are up to date!

:::

## Installation

Installing InfinityExpansion2 is similar to installing any other Slimefun addon.

Download the plugin from one of the builds site:

- [Blob Builds](https://blob.build/project/InfinityExpansion2)
- [Guizhan Builds](https://builds.guizhanss.com/ybw0014/InfinityExpansion2)

Then, place the downloaded jar file into the `plugins` folder of your server. Restart the server to load the plugin.

:::danger warning

As always, **never reload**. Always restart the server to load the plugin.

:::

### Optional plugins

You may also install *optional* plugins that InfinityExpansion2 supports:

- [SlimefunTranslation](https://blob.build/project/SlimefunTranslation)
- [SlimeHUD](https://blob.build/project/SlimeHUD)

### Incompatible plugins

InfinityExpansion2 is incompatible with the following plugins:

- **InfinityExpansion**: The original InfinityExpansion plugin. You should remove it before installing InfinityExpansion2.

## First load

By default, InfinityExpansion2 downloads required libraries from Maven Central.  
However, in some regions, the connection to Maven Central may be slow or blocked. You can specify a mirror repository by adding the following argument to the JVM arguments:

```shell
-DcentralRepository=https://repo1.maven.org/maven2/
```

Replace the URL with the mirror repository you want to use.

:::info

You can also download the libraries manually and place them in the `plugins/InfinityExpansion2/libraries` folder, if you know how to do it.

:::
