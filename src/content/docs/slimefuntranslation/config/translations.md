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

The sub directories and files under each "language" directory are translation files, if they satisfy:

- The file extension is `.yml` or `.yaml`.
- The filename does not start with a period (`.`) or an underscore (`_`). (e.g. `.example.yml` or `_example.yml` will not be loaded)

## Content

A translation file looks like this:

```yaml
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

```

| Field | Description |
| --- | --- |
| `name` | The display name of this translation file. |
| `author` | The author of this translation file. |
| `translations` | All the item translations. See [Item Translations](/slimefuntranslation/config/translations#) section. |
| `lore` | All the lore translations. See [PlaceholderAPI](/slimefuntranslation/config/placeholders) page. |

### Item Translations

An item translation holds the translations for a single item. It looks like this:

```yaml
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
```

| Field | Description |
| --- | --- |
| `name` | The display name of this item. |
