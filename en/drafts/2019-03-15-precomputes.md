---
layout: post
lang: en
title: Spend Zerocoins in Seconds Thanks to Veil’s Precompute Functionality
date: 2019-03-21
author: cryptymike
permalink: /drafts/veil-precompute/
categories: test
excerpt: 'In this article, we’ll explore Veil’s coming precompute functionality.'
description: 'IIn this article, we’ll explore Veil’s coming precompute functionality.'
---


New layers of technology often come with compromises that must be made. A common factor compromised in the blockchain space, especially when adding privacy layers, is transaction speed.

For privacy-focused cryptocurrencies that use the Zerocoin protocol, spending Zerocoins can take longer than expected. Depending on how many Zerocoins a user has in their wallet, it can take as little as 10 minutes, or hours to send them. Staying true to our customer-focused philosophy, we want to offer both privacy and usability. We recognize that if a coin is rich with features but slow to transact, then the utility of the currency drops drastically.  

The process of spending Zerocoins requires more steps than spending a non-private coin (normally referred to as basecoins) so the transaction can be noticeably slower. As a result, a main focus of ours is to make Zerocoin spending virtually seamless to spending basecoins.

In this article, we’ll explain why spending Zerocoins are slower, and what our plans are to speed things up. 

Let’s dig in. 


## Why is it Slow to Spend Zerocoins?

To put it simply, the Zerocoin protocol utilizes what are called zero-knowledge proofs. Proofs, in general, are arguments for a mathematical statement, explaining how and why things can be as they are. 

**A zero-knowledge proof, in particular, is a proof which allows one party to prove to another party that a statement is true without providing any additional information other than proving that the statement is true.** 

In the case of cryptocurrencies, you will prove to the network that the Zerocoins you wish to claim and spend are indeed yours, without providing any information as to how many coins you have, where you wish to spend them, or how you received them. You can learn more about the Zerocoin protocol by [clicking here](https://veil-project.com/blog/understanding-zerocoin/), for a more in-depth look. 

**The point here is that performing these proofs takes time.** Your computer and the rest of the network must communicate and go through these proofs. 

**So, what can we do to speed up this proving process? Ah, precompute!** 


## Spend Zerocoins in Seconds


Our developers are working to implement precomputing functionality which will actually precompute your Zerocoin proofs, so when you want to spend them in the future, they are good to go. 

When we implement precompute functionality:

- It will be turned on by default 
- If you want it turned off, you can do so by entering “precompute=0” in the console of the wallet or setting this variable in your veil.conf file.
- Since precompute data will be stored in its own database, it can take up some memory, but the file can be deleted manually. Ultimately, it’s not much data and you should have no need to turn it off.
- Spending your Zerocoins will be exponentially faster!

**Our developers have actually tested the precompute functionality on our mainnet.** Yes, on our mainnet, not testnet, and here are the results:
Test Results: Spend 40 Zerocoin ( 4 coins of 10 denomination with similar depth of 75000 blocks old) **with precompute:** 17 seconds to complete. 

Test Results: Spend 40 Zerocoin ( 4 coins of 10 denomination with similar depth of 75000 blocks old) **without precompute:** 29 minutes to complete.

This means that spending 40 Zerocoin, of similar age and same amount of denominations, took 17 seconds with precompute, compared to 29 minutes without precompute. 

The precompute functionality does 99% of the work prior to spending the coins, and then only needs to do 1% to complete. 

We believe that people not only have a right to privacy, but they should be usable as well. Stay tuned for announcements in the future as approach the implementation of precompute functionality.
