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

## Translation file

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
| `conditions` | The [conditions](#conditions) to apply to all the items in the current file. |
| `translations` | All the item translations. See [Item Translations](#item-translations) section. |
| `lore` | All the lore translations. See [PlaceholderAPI](/slimefun-translation/usage/placeholders) page. |
| `messages` | All the message translations. |

### Item Translations

An item translation holds the translations for a single item. It looks like this:

```yaml
  RAG:
    conditions:
      match-name: false
      force-load: false
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
| `conditions` | The [conditions](#conditions) to apply to the item. |
| `name` | The display name of this item.<br />Color code `&` and placeholders are supported. |
| `lore` | The lore of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |
| `lore-overrides` | The lore overrides of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |
| `lore-replacements` | The lore replacements of this item. Check the following section for more info.<br />Color code `&` and placeholders are supported. |

### Conditions

The conditions will be applied to the item. Item conditions will override file conditions.

- `force-load`: Whether to force load the translation. SlimefunTranslation checks whether the items is registered, enable this to skip the check. Useful for UI/ItemGroup items.
- `match-name`: Whether the actual item's name must match the original item's name. Slimefun uses Slimefun items as ItemGroup items, enable this option for those items.
- `match-lore`: Whether the actual item's lore must match the original item's lore. Some Slimefun items are displayed as fuel in the guide, the lore is changed. Enable this option for those items. (This check has bad performance, try not to enable this option)
- `partial-override`: Whether to only override the lore partially. When this is set to `true`, the translation only applies to the lines that are defined. The remaining lines will be kept. When this is set to `false`, the translation will override the entire lore.

When `match-name` and `match-lore` are both enabled and only name matches, only the name will be translated.

### Lore, lore overrides and lore replacements

The item lore usually describes the function of the item. Since the lore can be modified at any time, but the translation is fixed, SlimefunTranslation provides 3 ways to cover most of the cases.

- `lore`: This is an array that defines the lore of the item. This is best for items that has *ALL* fixed lore.
- `lore-overrides`: This is a map that describes the lines that will be overridden. This is best for items that has some fixed lines. Usually, chargable items have a line in the lore that shows the current energy, the `lore` will be not suitable for this suitation.
- `lore-replacements`: This is a map that describes the text in lines that will be replaced. This is best for some lines that has dynamic text, but some part of it needs to be translated.

When the `lore` field exists, the other fields will be ignored. When none of these 3 fields exist, the lore will not be changed.

## Making own translations

You can choose to make your own translation files, either for your own server or for the future contribution.

Use the command `/sftr translation generate` (See command [usage](/slimefun-translation/usage/commands-and-permissions#generate-translation-file) for more information) to generate the source text file. The source text file will be generated under `/plugins/SlimefunTranslation/translations/<language>/export-X.yml`, where X is a self-increment integer.

Then you can change the source text file to make use of placeholders, or just start translating it.
