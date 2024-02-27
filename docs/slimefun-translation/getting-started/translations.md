---
title: Managing Translations
sidebar_position: 2
---

SlimefunTranslation stores all the translations in `/plugins/SlimefunTranslation/translations` folder.  
Each language stays in separate folders.

The default translation files embedded in the plugin jar file will be automatically extracted.

## Switching language

SlimefunTranslation respects the player's Slimefun language setting.

*Shift + Right click* while holding Slimefun Guide, or click on the **Settings** button in the Slimefun Guide, to access settings. Then, click on the language button to switch language.

## Updating translations

Once a translation file is extracted to the folder, it will not be updated automatically. Only the new translation files will be extracted.

You can use `/sftr translation extract true` command to extract all embedded translations into `/plugins/SlimefunTranslation/translations` folder, and overriding existing files. Use `/sftr translations extract false` instead to only extract default translations

After updated translations, use `/sftr translation reload` to reload all translations.
