---
title: Translator Guide
---

SlimefunTranslation aims to translate all Slimefun items (as well as addons) into different languages. If you want to help us translate SlimefunTranslation, please read this guide.

## Translating SlimefunTranslation

SlimefunTranslation uses [Crowdin](https://crowdin.com/project/slimefuntranslation) to manage translations. You can join the project and start translating SlimefunTranslation into your language. If the language you want to translate is not available, please contact us in `#slimefuntranslation` at [Slimefun Addon Community Discord Server](https://discord.gg/SqD3gg5SAU), or dm `@ybw0014`.

Once you submit a translation, you join our translation project and become a member. The first translator of a language will be promoted to proofreader of that language (manually when I check Crowdin, so be patient if you are not promoted yet). Proofreaders can approve translations. Only approved translations will be synced to our GitHub repository and be included in the next release.

### Placeholders

If you have read the [Placeholders section](/slimefuntranslation/config/placeholders), you should know that SlimefunTranslation uses PlaceholderAPI to provide placeholders for the translations. In this case, any available placeholders can be used in translations.

However, if you changed the format of placeholders, it may cause problems. It is important to know when to keep the format and when to change it.

`slimefun/lore-builder.yml` file contains the commonly used item lore, it is corresponding to Slimefun's `LoreBuilder` utility class.

Lore placeholders are something like the following:

```text
%sftrlore_RightClickToUse%
%sftrlore_Speed_1%
%sftrlore_Power_{0}_ Buffer%
%sftrlore_Radioactive_Low%
%sftrlore_Machine_Medium_Machine%
```

The placeholder has a percent sign (`%`) at both beginning and end. The placeholder identifier is `sftrlore`, and each argument is separated by an underscore (`_`).

The first argument is the lore id. It must be the same id defined in the lore translation file. The rest arguments will be applied to the placeholders (`{0}`, `{1}`, and so on) in the lore. You should **NEVER** change the first argument!

Usually, the rest of arguments should be translated, like the "Buffer" in `sftrlore_Power_{0}_ Buffer` should be translated. Note that you should keep the space before "Buffer".

### Special lore

There are 2 special lore placeholders: `Radioactive` and `Machine`. The arguments of these 2 placeholders are read as ids, and should **NOT** be translated. If you see something like `%sftrlore_Radioactive_Low%` or `%sftrlore_Machine_Medium_Machine%` in the lore, you should keep them as they are.
