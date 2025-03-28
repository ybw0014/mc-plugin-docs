---
sidebar_position: 2
---

# 选择性育种

我们在[第一步](/genetic-chickengineering/steps/gathering-chickens)中学习了如何捕获鸡、如何了解和理解它们的 DNA，以及开始建立我们的鸡帝国需要寻找哪些特征。现在，我们将首次探索如何通过在鸡舍中进行选择性育种来扩大我们的鸡群。但首先，是时候进入大家最喜欢的环节了：

## 让我们聊聊遗传学

:::info

现在是复习[*旁氏表*](https://zh.wikipedia.org/wiki/%E6%97%81%E6%B0%8F%E8%A1%A8)的好时机

:::

制造资源生产型鸡的关键是有选择地传递鸡的隐性特征。为了做到这一点，你需要了解育种的工作原理和其中涉及的概率。

当两个生物进行有性生殖时，每个亲本都会将其一半的 DNA 贡献给后代。这些半条 DNA 链由每个亲本每个基因中的两个等位基因之一组成。对于*纯合子*基因，这不会影响任何结果，因为该等位基因被传递的几率为 100%，且基因的显性状态不变。但是，对于*杂合子*基因，这意味着亲本有 50% 的几率传递显性等位基因，也有 50% 的几率传递隐性等位基因。设置旁氏表可以帮助可视化可能的结果及其相对可能性。

### 与鸡因工程的关系

在鸡因工程中，你通常最关心的是隐性基因。你会希望繁殖共享*杂合子*基因的鸡，以培育出在该特征上为隐性的鸡。为了更好地解释这一点，让我们看一个例子。假设你想要一只煤炭鸡（`bbccDDFFSSWW`）来帮助缓解挖掘 8 组煤炭以制作单个碳化合金的繁重工作。然而，你只有两只羽毛鸡：一只鸡的基因型是 `BbCCDDFFSSWW`，另一只是 `BBCcDDFFSSWW`。虽然可能需要一些努力，但这些鸡足以获得珍贵的煤炭鸡。

让我们使用旁氏表来了解从羽毛鸡到煤炭鸡的路径。因为两只鸡在 D、F、S 和 W 基因上都是显性*纯合子*，你可以在旁氏表中忽略这些，只关注 `BbCC` 和 `BBCc`。你的方格将如下所示：

.   |  BC  |  bC
--  | ---- | ----
BC  | BBCC | BbCC
Bc  | BBCc | BbCc

如你所见，这些鸡有 1/4 的几率产生在两个基因上都是*杂合子*的后代，这是获得 `bbcc` 煤炭鸡的理想鸡。但是，你还没有到达目标。要继续前进，你需要 2 只具有 `BbCc` DNA 且已完全成长为成年的鸡。一旦你拥有它们，你的旁氏表将是：

.   |  BC  |  bC  |  Bc  |  bc
--  | ---- | ---- | ---- | ----
BC  | BBCC | BbCC | BBCc | BbCc
Bc  | BBCc | BbCc | BBcc | Bbcc
bC  | BbCC | bbCC | BbCc | bbCc
bc  | BbCc | bbCc | Bbcc | bbcc

突然间，你的几率看起来不那么乐观了...你只有 1/16 的机会获得你想要的鸡，虽然不是不可能，但如果没有惊人的运气，这可能会慢得令人痛苦。幸运的是，有方法可以提高你的几率并加快这个过程。注意在 `bc` 列和行中，有四只鸡各有 3 个隐性等位基因，2 只 `Bbcc` 和 2 只 `bbCc`。如上所述，*纯合子*基因保证会传递特定类型的等位基因，这使你获得煤炭鸡的几率翻倍。假设在你最初的几次尝试中，你得到了一只 `Bbcc` 鸡。如果你给它喂满了种子并加速其生长，你可以用它替换其中一只 `BbCc` 鸡。仅靠这一点，你的旁氏表的大小就减半了：

.   |  BC  |  bC  |  Bc  |  bc
--  | ---- | ---- | ---- | ----
Bc  | BBCc | BbCc | BBcc | Bbcc
bc  | BbCc | bbCc | Bbcc | bbcc

这使你的几率从 1/16 提高到了 1/8。如果你再获得一只有 3 个隐性等位基因的鸡，这个几率可以再次减半至 1/4：

.   |  bC  |  bc
--  | ---- | ----
Bc  | BbCc | Bbcc
bc  | bbCc | bbcc

现在，以更可接受的速度获得一只或多只煤炭鸡成为可能。

值得一提的是，虽然旁氏表可能有些令人困惑且使用起来很麻烦，但有一种更快的方法来计算你的几率。由于*纯合子*基因肯定会传递一种类型的等位基因，而任何*杂合子*基因都有 50% 的几率传递所需的等位基因，要获得*纯合子* DNA 序列的鸡，只需计算每个亲本 DNA 中*杂合子*基因的数量，并将 2 的幂次方。重新使用前面的例子，两只 `BbCc` 鸡之间有 4 个*杂合子*基因，这意味着获得 `bbcc` 的几率将是 `1/2^4 = 1/(2*2*2*2) = 1/16`。作为另一个例子，你可以尝试从两只 DNA 为 `BbCcDdFfSsWw` 的羽毛鸡获得下界合金鸡，但你将面临 `1/2^12` 的几率，或者说 1/4,096，所以在整个过程中逐级提升会给你更好的几率。

有一个命令可用于计算亲本产生你希望的后代的几率：
`/gce calcchance <parent DNA> <parent DNA> <child DNA>`

恭喜你！你现在拥有开始繁殖各种类型鸡所需的所有知识！不过，在你开始创造资源之前还有一步，那就是 [使用激励室收集资源](/genetic-chickengineering/steps/collecting-resources)。
