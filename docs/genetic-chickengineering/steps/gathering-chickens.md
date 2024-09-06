---
sidebar_position: 1
---

# Gathering Chickens

All chicken empires start from humble beginnings. To get started, first craft yourself a **Chicken Net**. This net will allow you to pick up chickens and put them in your pocket by right clicking on a chicken.  
You may re-release your **Pocket Chicken** by right clicking it on a block.

Gathering chickens and moving them around is nice, but it doesn't compare to having a seemingly endless supply of Netherite. The next step towards that goal is to craft a **Genetic Sequencer**. This machine takes a Pocket Chicken, analyzes its DNA, and reports it to you by marking the chicken.  
When in Pocket Chicken form, the chicken's DNA and resource type will be visible in the item's lore.

Chickens caught in the overworld will always be feather chickens. To make a chicken that can produce resources, you will have to find certain chickens and selectively breed them together. But before we get to that...

## An Aside on Genetics

Although a deep knowledge of genetics is not required to play with GCE, having
an understanding of some basic concepts will help ease the frustration.

Very broadly, DNA is a string of genes put together in a specific order. Genes
are structures made up of two alleles, and typically relate to one specific
trait. Alleles come in two varieties: *dominant* and *recessive*. Depending on which
alleles make up a gene, the gene can also be dominant or recessive. If both
alleles are recessive, then the gene is recessive, however if a gene has at
least one dominant allele, then the gene will be dominant. Lastly, the terms
*homozygous* and *heterozygous* are used to define genes. *Homozygous* genes
have two of the same alleles, either both dominant or both recessive.
*Heterozygous* genes have one dominant and one recessive allele each.

When writing DNA in text form, all alleles of interest are written out. Each
gene is assigned a unique letter to represent it, and dominant and recessive
alleles are differentited by case (dominant alleles are upper case, recesive are
lower).

## Tying it in to this Plugin

That is a lot of jargon to process, so let's look at some examples of these
concepts at work in GCE.

In GCE, there are 6 genes in each strand of DNA: B, C, D, F, S, and W. These
correlate to the types of resources that a chicken can make if it has
**two recessive alleles in that gene**:

* `B` -> Bone
* `C` -> Cobblestone
* `D` -> Dirt
* `F` -> Flint
* `S` -> Sand
* `W` -> Water

So, if you have a chicken that has the DNA `bbCCDDFFSSWW`, it will be a bone
chicken. However, that is not the only possibility for obtaining a bone chicken.
Since there are two ways an allele can be dominant (*homozygous* dominant or
*heterozygous* dominant), any of the C, D, F, S, or W genes can have up to one
recessive allele and the chicken will still be a bone chicken:

* `bbCCDDFFSSWW` -> Bone chicken
* `bbCcDDFFSSWW` -> Bone chicken
* `bbCCDDFFSsWW` -> Bone chicken
* `bbCcDdFfSsWw` -> Bone chicken
* etc.

Having more than one pair of recessive alleles will make a different chicken
type. For example, `bbCcDDFFSSWW` will be a bone chicken, but `bbccDDFFSSWW`
will be a coal chicken. See
[the sequence table](/genetic-chickengineering/misc/sequencing-guide)
for the full list of available chickens.

## Back to Gameplay

As mentioned before, all chickens caught in the overworld will be feather
chickens. This is the resource that a chicken with 6 dominant genes will
produce. To start producing more valuable resources, find at least one chicken
with a *heterozygous* gene for each of the 6 genes. When you have two chickens
that share at least one *heterozygous* gene with each other, it is time to move
on to
[selective breeding](/genetic-chickengineering/steps/selective-breeding).
