---
title: Adding translations
sidebar_position: 3
---

Other Slimefun addons can also add translations.

## Preparing translation files

You will need to prepare translation files that are similar to the ones in the `translations` folder of SlimefunTranslation. You can use `/sftr translation generate` command to generate a translation file for your addon ([Reference](/slimefun-translation/usage/commands-and-permissions)).

If your project already has translation files, you can try to adapt your translation files to the format of SlimefunTranslation's translation files. You will need to specify the fields in your translation files.

## Put the localization files in your plugins folder

You should put all the localization files in plugin's data folder.

## Listen to translation load event

Listen to `TranslationsLoadEvent` to load your translations.  
(`net.guizhanss.slimefuntranslation.api.events.TranslationsLoadEvent`)

Call `TranslationConfiguration.fromFileConfiguration` to load your translations. 
