---
sidebar_position: 2
---

# Item specific configurations

There are some config options that are specific to items. You can find them in `/plugins/Slimefun/Items.yml`, under the specific item's config options.

## `tick-rate` {#tick-rate}

This determines how often the machine runs in Slimefun ticks.  
When the machine is not running, it will not consume any energy.

By default, the tick rate is 1, which means the machine runs every Slimefun tick. If you set it to 5, the machine will run every 5 Slimefun ticks.

By default, 1 Slimefun tick = 0.5 seconds.

**Range**: `1` to `3600`

## `energy-per-tick`/`energy-per-use` {#energy-consumption}

This determines how much energy the machine consumes per tick or use.

**Range**: `0` to `1_000_000_000` (1 billion)

:::info

The energy per tick is actually energy per run, which is affected by [tick rate](#tick-rate).

Machines only consume energy when they run.

:::

## `output-interval` {#output-interval}

This determines how often the machine produces an output, in the number of runs.

**Range**: `1` to `3600`

:::info

Not all machines have this option. The output interval of quarries and mob simulations is configured in the [main config](/infinity-expansion-2/config/main).

:::

:::note Example

If a machine's tick rate is 5, and the output interval is 10, the machine runs every 5 sf ticks, consumes energy in each run. The machine produces an output every 10 runs (50 ticks).

:::

## Other options

Some items also have other item specific config options. You may find them in the corresponding item's wiki page.
