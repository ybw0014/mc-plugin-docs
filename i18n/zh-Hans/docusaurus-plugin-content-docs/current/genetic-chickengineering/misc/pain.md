# Pain system

Pain is an optional difficulty modifier for GCE.

When pain is enabled, GCE has a chance every 0.5 seconds to inflict 0.25 damage (1/8 of a heart) to a chicken that is processing (In the Excitation Chamber, in the Private Coop, or when chosen to analyze with the Genetic Sequencer).

When a chicken has 0.25 health remaining, one of two things will happen:

- If `pain-kills` is disabled, then the machine will stop and wait for the Exhausted chicken to be removed from the machine.
- If `pain-kills` is enabled, then the chicken will continue to process, however if it is damaged by pain, it will die
and be lost forever.

## Healing

There are two options for healing your chickens.

One is to release your Pocket Chickens use splash potions of healing on them. This will be slow and resource intensive, likely.

The other option is to use a machine in GCE that is only available when pain is enabled: **Restoration Chamber**.  
The Restoration Chamber takes one Pocket Chicken plus an amount of wheat seeds and will heal the chicken over time.
One wheat seed will heal 0.25 of a chicken's health. By default, each 0.25 of health will take 2 seconds to heal. however this time interval is customizable in the server's configs.
