---
title: Server Owner Guide
---

## Installing

1. Download SlimefunTranslation and its dependencies from here: [Click to go](/slimefuntranslation/).
2. Stop server.
3. Put all the required plugins into your server's `plugins` folder.
4. Start the server.
5. Wait for SlimefunTranslation to load everything.

Now, installation is done. All the items that have appropriate translations will be displayed in the player's language.

## Updating translations

Once SlimefunTranslation is loaded in the first time, it will automatically pull all the translations packed in the jar file. These translation files will not be automatically updated.

You can use `/sftr translations extract` command to extract all packed translations into `plugins/SlimefunTranslation/translations` folder. Existing files will be overridden. Other files will not be affected.
