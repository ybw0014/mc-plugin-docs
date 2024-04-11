---
title: Commands & Permissions
sidebar_position: 1
---

SlimefunTranslation provides a base command `/sftranslation` (aliases: `/sft`, `/sftr`, `/slimefuntranslation`). In this page, we will use `/sftr`.

## Commands

### Get Slimefun ID of handheld items

Command: `/sftr id`  
Permission: `slimefuntranslation.command.id`  
Default: `true`

Displays the ID of your handheld Slimefun item.

### Search for items

Command: `/sftr search <query>`  
Permission: `slimefuntranslation.command.search`  
Default: `true`

Due to the way SlimefunTranslation transates items, the Slimefun's search will not work properly for translated items. (If you changed the )

### Extract translation files

Command: `/sftr translation extract <true/false>`  
Permission: `slimefuntranslation.command.translation.extract`  
Default: `op`

Extract all the bundled translation files to *translations* folder.

The parameter determines whether to replace existing files.

### Generate translation file

Command: `/sftr translation generate <addon> <language> [itemgroup]`  
Permission: `slimefuntranslation.command.translation.generate`  
Default: `op`

Generate the translation file with the given language of all the items in the addon.  
If `itemgroup` is specified, then only export the items in the itemgroup.
