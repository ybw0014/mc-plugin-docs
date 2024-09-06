---
sidebar_position: 2
---

# Selective Breeding

We left
[Step 1](/genetic-chickengineering/steps/gathering-chickens)
knowing how to capture chickens, how to learn and understand their DNA, and what
traits to look for to get started on our chicken empires. Now, we will take our
first look into expanding our flock through Selective Breeding in a Private
Coop. But first, it's time for everyone's favorite segment:

## Let's Talk Genetics

:::info

It is a great time to freshen up on
[*Punnett squares*](https://en.wikipedia.org/wiki/Punnett_square)

:::

The key to making resource-producing chickens is to selectively pass down
recessive traits in your chickens. In order to do that, you'll need to know how
breeding works and the probabilities involved in it.

When two organisms sexually reproduce, each parent donates half of its DNA to
the child. These half strands of DNA are made up of one of the two alleles in
each gene from each parent. For *homozygous* genes, this does not affect
anything because there is a 100% chance that the allele passed on will have the
same dominance as the gene. However, in *heterozygous* genes, this means that
the parent will have a 50% chance to pass on the dominant allele and a 50%
chance to pass the recessive. Setting up a Punnett square can help to visualize
the possible outcomes and their relative liklihood.

### As it Relates to GCE

In GCE, recessive genes are typically what you will be most concerned with. You
will want to breed chickens that share a *heterozygous*  gene to make chickens
that are recessive in that trait. To best explain this, let's look at an
example. Let's say you would like to have a coal chicken (`bbccDDFFSSWW`) to
help alleviate the slog of mining 8 stacks of coal to make a single Carbonado.
All you have, however, are two feather chickens: one chicken is `BbCCDDFFSSWW`,
and the other is `BBCcDDFFSSWW`. Although it may take some effort, these
chickens are sufficient for obtaining that precious coal chicken.

Let's use some handy dandy Punnett squares to take a look at the path from
feather to coal chickens. Because both chickens have *homozygous* dominant genes
in D, F, S, and W, you can ignore those in your Punnett square and focus on
`BbCC` and `BBCc`. Here is what your square will look like:

.   |  BC  |  bC
--  | ---- | ----
BC  | BBCC | BbCC
Bc  | BBCc | BbCc

As you can see, there is a 1 in 4 chance that these chickens will produce a
child that is *heterozygous* in both genes, which is the ideal chicken for
getting to the `bbcc` coal. However, you are not there yet. To move onward you
will need 2 chickens with `BbCc` DNA that have fully grown into adults. Once you
have them, your Punnett square will be:

.   |  BC  |  bC  |  Bc  |  bc
--  | ---- | ---- | ---- | ----
BC  | BBCC | BbCC | BBCc | BbCc
Bc  | BBCc | BbCc | BBcc | Bbcc
bC  | BbCC | bbCC | BbCc | bbCc
bc  | BbCc | bbCc | Bbcc | bbcc

Suddenly your odds are not looking so great... You are down to 1 in 16 odds of
getting the chicken you want, which although not impossible, will likely be
painfully slow without amazing luck. Fortunately, there are ways to improve your
odds and speed this up. Notice that in the `bc` column and row, there are four
chickens with 3 recessive alleles each, 2 `Bbcc` and 2 `bbCc`. As mentioned
above, *homozygous* genes are guaranteed to pass along a specific type of
allele, which doubles your odds of getting a coal chicken. Let's say that within
your first few attempts, you get a `Bbcc` chicken. If you shove it full of seeds
and accelerate its growth, you can swap it with one of the `BbCc` chickens. By
that alone, your Punnett square is halved in size:

.   |  BC  |  bC  |  Bc  |  bc
--  | ---- | ---- | ---- | ----
Bc  | BBCc | BbCc | BBcc | Bbcc
bc  | BbCc | bbCc | Bbcc | bbcc

This brings you from 1 in 16 odds to 1 in 8 odds. This can be halved again to 1
in 4 odds if you get another one of the chickens with 3 recessive alleles:

.   |  bC  |  bc
--  | ---- | ----
Bc  | BbCc | Bbcc
bc  | bbCc | bbcc

Now, getting one or multiple coal chickens can happen at a much more tolerable
pace.

It is worth mentioning that while Punnett squares can be somewhat confusing and
cumbersome to use, there is a faster way of calculating your odds. Because
*homozygous* genes are certain to pass on one type of allele and any
*heterozygous* genes have a 50% chance of passing a desired allele, to get a
chicken with a *homozygous* DNA sequence simply count the number of
*heterozygous* genes in each parent's DNA and raise 2 to that power. To reuse
the previous example with the 2 `BbCc` chickens, there are 4 *heterozygous*
genes between the two chickens, meaning the odds of getting `bbcc` would be
`1/2^4 = 1/(2*2*2*2) = 1/16`. As another example, you could try to get a
Netherite chicken from two feather chickens with DNA `BbCcDdFfSsWw`, however you
would be looking at `1/2^12` odds, or 1 in 4,096, so you're far better off
working down the tiers to give yourself better odds throughout the whole
process.

There is a command available to calculate the odds that a parent
will produce your desired child:
`/gce calcchance <parent DNA> <parent DNA> <child DNA>`

Congratulations! You now have all the knowledge you need to start breeding all
types of chickens! There's still one more step before you can start creating
resources, though, and that is
[using the Excitation Chamber to collect resources](/genetic-chickengineering/steps/collecting-resources).
