---
title: Translation files
---

`/plugins/SlimefunTranslation/translations/**/*.yml`

## Directory Structure

SlimefunTranslation will scan the directories and files under `/plugins/SlimefunTranslation/translations`. The directory structure may look like this:

```markdown
- translation
  - en
    - file1.yml
    - file2.yml
    - ...
    - slimefun
      - weapons.yml
      - useful-items.yml
      - basic-machines.yml
      - ...
  - zh-CN
    - file1.yml
    - file2.yml
    - ...
  - ...
```

The directories directly under `/plugin/SlimefunTranslation/translations` are treated as the target languages. The above example will load `en` and `zh-CN` as the target languages.

The files under each "language" directory (including subdirectories) are translation files, if they satisfy:

- The file extension is `.yml` or `.yaml`.
- The filename does not start with a period (`.`) or an underscore (`_`). (e.g. `.example.yml` or `_example.yml` will not be loaded)

## Content

A translation file looks like this:

```yaml title="/plugins/SlimefunTranslation/translations/**/*.yml"
name: Slimefun Useful Items
author: Slimefun
translations:
  PORTABLE_CRAFTER:
    name: "&6Portable Crafter"
    lore-overrides:
      1: "&a&oA portable Crafting Table"
  RAG:
    name: "&cRag"
    lore:
      - ""
      - "&aLevel I - Medical Supply"
      - ""
      - "&fRestores 2 Hearts"
      - "&fExtinguishes Fire"
      - ""
      - "%sftrlore_RightClickToUse%"
lore:
  RightClickToUse: "&eRight Click &7to use"
  Radioactive: "&a\u2622&7 Radiation level: &r{0}"
messages:
  error: "&cError: &r{0}"
```

| Field | Description |
| --- | --- |
| `name` | The display name of this translation file. |
| `author` | The author of this translation file. |
| `translations` | All the item translations. See [Item Translations](#item-translations) section. |
| `lore` | All the lore translations. See [PlaceholderAPI](/slimefun-translation/usage/placeholders) page. |
| `messages` | All the message translations.|

### Item Translations

An item translation holds the translations for a single item. It looks like this:

```yaml
  RAG:
    check-name: false
    force: false
    name: "&cRag"
    lore:
      - ""
      - "&aLevel I - Medical Supply"
      - ""
      - "&fRestores 2 Hearts"
      - "&fExtinguishes Fire"
      - ""
      - "%sftrlore_RightClickToUse%"
    lore-overrides:
      2: "&aLevel I - Medical Supply"
    lore-replacements:
      "Restores 2 Hearts": "Restores 4 Health"
```

| Field | Description |
| --- | --- |
| `check-name` | Whether to check the name of the item.<br />This config should be set to `true` when the item is also used as a category item. |
| `force` | Whether to force load the translation.<br />The item ID will be checked while loading the translation. Set this to `true` to cancel the check. |
| `name` | The display name of this item.<br />Color code `&` and placeholders are supported. |
| `lore` | The lore of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |
| `lore-overrides` | The lore overrides of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |
| `lore-replacements` | The lore replacements of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |

#### Lore, lore overrides and lore replacements

The item lore usually describes the function of the item. Since the lore can be modified at any time, but the translation is fixed, SlimefunTranslation provides 3 ways to cover most of the cases.

- `lore`: This is an array that defines the lore of the item. This is best for items that has *ALL* fixed lore.
- `lore-overrides`: This is a map that describes the lines that will be overridden. This is best for items that has some fixed lines. Usually, chargable items have a line in the lore that shows the current energy, the `lore` will be not suitable for this suitation.
- `lore-replacements`: This is a map that describes the text in lines that will be replaced. This is best for some lines that has dynamic text, but some part of it needs to be translated.

When the `lore` field exists, the other fields will be ignored. When none of these 3 fields exist, the lore will not be changed.
