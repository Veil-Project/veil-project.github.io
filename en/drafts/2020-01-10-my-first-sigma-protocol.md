---
layout: post
lang: en
title:  My first Sigma protocol
date:   2020-01-06
author: paulmoonshine
permalink: /blog/2020-first-sigma-protocol/
categories: test
excerpt: 'This is the first in a series of publications by Veil mathematician Paul Moonshine on his research into SuperSonic.'
description: 'This is the first in a series of publications by Veil mathematician Paul Moonshine on his research into SuperSonic.'
---

# My first Sigma protocol

Valery is having an existential crisis. She’s color blind, but she is starting to believe that maybe she really isn’t, and that all her friends and family are just conspiring to trick her into believing she is.

Along comes Peter, her uncle, and Alice starts venting her conspiracy theory to him.

**Valery**:  I trust you all no longer; I don’t believe you can distinguish between what you call ‘blue’ and ‘red’ any better than I can. Unless you can offer me some proof.

**Peter**:  Got it.

Peter takes out of his pocket two balls: one that’s red, the other blue. Valery however, being color blind, sees two identical balls.

**Peter**:  You see these two balls, and you can confirm they are identical?

**Valery**:  Yes, indeed.

**Peter**:  Let me convince you that I can distinguish between them. I will hand over the balls to you now. I want you to take one ball in each hand, and then hold the balls behind your back, so I cannot see them. Then, I need you to decide yourself whether you swap the balls or not. After that, you present the balls to me again. Now, since I claim I can distinguish the balls, I should easily be able to tell whether you swapped the balls or not. However, in case I too see two identical balls, and cannot see color as you suspect, I will not be able to tell whether you made the swap, and I won’t be able to see.

Peter hands over the balls, blue in Valery’s left hand; red in her right. Valery, per instruction, places the balls behind her back and decides to swap them. She presents the balls back to Peter.

**Peter**:  You swapped them.

**Valery**:  I did! OK, maybe you are right after all!

We have just witnessed our very first interactive proof of knowledge[^1]. A proof of knowledge is a way for a prover P to convince a verifier V that it knows something, in this case that it knows how to distinguish between red and blue. In this instance, the proof (or protocol) was interactive[^2]: Valery and Peter had to do a lot of talking and exchanging of balls and what not. What was nice about this proof, was that Peter only convinced Valery of the mere fact that he does know how to distinguish between red and blue. He did not explain how he did this. He did not disclose the mechanism or trick. This feature (convincing someone of your knowledge without spilling any other information whatsoever, is commonly referred to as proving something in zero knowledge, or just a zero knowledge proof.

There are some obvious problems in the proof. The first and most important one is that Valery is convinced a little too easily. Suppose, namely, that Peter is lying and in fact cannot distinguish between red and blue at all. That means that at the final step of the protocol above, all he can do is guess whether Valery has made the swap or not. And in this scenario, that still leaves him with a 50% chance of guessing right! So overall, if Peter is lying and Valery’s conspiracy theory is actually correct, Valery has a 50% chance of falsely buying Peter’s nonsense. That’s not acceptable.

This problem can readily be addressed however. We simply repeat the protocol! If we run this for a second time, then a lying Peter has to guess right in both instances of the protocol, and the chances of him guessing correctly are reduced to 25%. More generally, Valery can decide to ask for N instances of the protocol, hence reducing the chance of a lying Peter to pass this test to a slim chance of Peter guessing correctly at all N instances of the verification protocol = (1/2)^N

His chance reduces exponentially in N, and now Valery can just pick a high enough N to be convinced after all N runs.

As it happens, solving this problem did introduce a new one, one of practicality: the protocol becomes cumbersome, lengthy and boring, and it will be hard to enthuse Peter to partake[^3]. Another problem is that this protocol is rather specific, and it is not easy to see how we can take it and use it for other purposes than convincing the color blind they are, really, color blind.

This is a blog on cryptographic methods for cryptocurrency – Veil in particular – and this blog is not intended for only the color blind, so why should we care about this example?

Veil is a cryptocurrency that offers privacy. That’s very nice, but it introduces a puzzle: How can two parties that exchange a sum of Veil convince the rest of the Veil community that their transaction was bona fide (this is their “secret”, like seeing color in the example), without disclosing their identity, the sum exchanged, or in fact without disclosing any type of (meta-)data about this transaction? To address this problem, we will use exactly the type of zero knowledge protocols as above, and this document will delve into this technique a little deeper.

Look forward to the next part in a series of Paul's cryptographic breakdown in the near future.

---

[^1]: Such a protocol is more abstractly referred to as a Sigma protocol, as the exchange P → V → P can be drawn to look like the Greek capital letter Σ.

[^2]: We refer to the dictionary where some terms and symbols are explained for the novice.

[^3]: You could overcome this by using a large number of pairs of red and blue balls. This reduces the time it takes, but does increase the ‘weight‘ – or bit size – of the balls to be exchanged in the protocol, and exchanging heavy information is problematic also.

