---
layout: post
lang: en
title: A very hard problem (and a fairy tale on how Gauss created time)
date: 2020-02-05
author: paulmoonshine
permalink: /blog/very-hard-problem/
categories: blog
excerpt: 'On the Discrete Logarithm Problem'
description: 'Second blog entry'
---

Let's start a tree-house club, but a very nerdy one. To enter the clubhouse, you must of course confirm your identity with a real password. Being a very nerdy bunch, we decide this password should be the answer to some riddle.

![](/uploads/blog/2020-02-05-paul.png)

At first, in the infancy of our club, we're naive: we pick some super large number, say 42, and hand this number out to club members. We call this our "private key". Next, we compute it's square — 1764 (the "public key") — and let the riddle be:

**What's the square root of 1764?**

This is fun in the beginning as it's just us, but after a while we start noticing some older kids in the tree-house that look suspicious and we don't recognize. And then some parents even drop in; WE'VE BEEN HACKED!

## The problem that's hard enough for Gauss

The mistake we made is that our problem was not hard enough: someone who wasn't given the solution may still, by himself, compute it fairly quickly [^1]. We need to find a problem for which no such algorithm exists. For inspiration we look in the Big Book Of Epic Math Myths and Sagas and stumble upon this little tale on the creation of time:

### How Gauss created time by nearly destroying it

Long, long ago, on the Mathematical Mount OlymPi — where the Math Gods rule, and and Gauss sits on the throne — all things are mathy and nerdy. In particular: time is not measured with clocks that run till 12, but — as only prime numbers are allowed in plain sight — all clocks run up to 11!

One day, a criminal by the name of Sysiphos is brought to Gauss (charged with the horrendous crime of misleading the public with bad use of statistics) and Gauss summons him to take a large stone, roll it up a hill in hell, and to come back when done.

Three hours later, Sysiphos comes back. Gauss, in a grumpy mood, shouts: "Ha, three hours, you sissy. For every hour you spent rolling: you will roll the stone uphill again!" Sysiphos grunts, and nine hours later comes back, whereupon Gauss coldly says: "and again: for every hour you just spent rolling, you'll roll that stone again!".

At some point, Euler steps in and overhears Gauss fuming over Sysiphos, telling him to go down again and do another exponentially larger batch of rolls.

Euler: "Nasty. How long does this guy take rolling up that stone?".

Gauss: "Three hours"

Euler: "And how many times have you summoned him down with this exponentially increasing task?"

Gauss (still grumpy): "You tell me. He started his last batch at 11 o'clock. It's 5 now, so you should be able to compute it yourself."

Euler: "Hmm, let's see. It wasn't his first batch, or it would've been 3 o'clock now. It wasn't his second batch, as that one took 3x3=9 hours, making it 9 now. Maybe its the 3rd? let's see: 3x3x3=27, but on the clock that would be, ehm, 27 - 2x11 = 5. So he did three batches already!"

Gauss (not impressed with Euler's childish computation): "Well congratulations, but there has to be a general algorithm for this computation that you just did so childishly with a stupid brute force computation."

Euler: "If you're so smart, let's hear your fancy algorithm!"

Gauss (after having spent hours and hours trying to find such a smart solution): "Ah, I can't find it, it can't exist! It's all because of this stupid clock!"

Whereupon Gauss takes the clock and smashes it on poor Sysiphos' head.

It is told that when the local town smith — who couldn't count — repaired the clock, he accidentally made and extra mark. Gauss, being fed up with the prime clock, didn't care, and now we have the 12 hour clock."

### Hard enough for us

Gauss couldn't find a general solution to this riddle: given a clock that runs till 11 (or any large prime number, say p), and given a stone push time of 3 (or any prime number g smaller than p), then, given the time it is now, say 5 (or "h"), compute the number N, such that 3^N = 5 (g^N = h (mod p))[^2]) on my clock (that is: how many batches of stone pushes has Sysiphos already done, given the facts that 1) he started at p o'clock and 2) it's h o'clock now). The general, abstract problem is: Compute N such that g^N = h (modulo p). This general problem is called the **Discrete Logarithm Problem**, and there is no known general solution for this problem.

We reason: if it's hard enough for Gauss, then it'll be hard enough for us! So we change our clubhouse password as follows:

We take a large prime number p — the clock length —, and also take a prime number g that's large but smaller than p. For example, let's take p=101 and g = 89.

Now we settle the number of exponents, N, we will take (the number of stone push batches in the tale). This will be our super secret private key. Let's settle on N=37. We then compute: 89^37, modulo 101 and we find that it's:

89^37 = 61 (modulo 101)

So this way the solution to the riddle is 61. This will be our public key, so that now when someone knocks on our tree-house door we whisper:

**What's the discrete logarithm of 61, for p = 101 and on a base = 89?**

## Hard enough for everybody!

Today, many cryptographic protocols operate on the basis of the hardness of the discrete logarithm problem. The only real difference is that where we took 101 as our large prime number, in modern applications, we use way bigger prime numbers, as large as 2^250. We can use this discrete logarithm for many other fun things: signing messages, creating shared and private keys, and committing to a message. Next time we'll see how to use this problem to our advantage in Veil's zero-knowledge protocols.


---

[^1]: For example using [the Babylonian algorithm](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method) algorithm to compute squares of integers.

[^2]: To express the clock length, mathematicians abbreviate this to "mod" or "modulo": 13 = 1 (mod 12) just means: 13 hours is the same as 1 hour on a 12-clock.
