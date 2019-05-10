---
layout: post
lang: en
title: Spend Zerocoins in Seconds Thanks to Veil’s Precompute Functionality
date: 2019-03-19
author: cryptymike
permalink: /blog/veil-precompute/
categories: test
excerpt: 'In this article, we’ll explore Veil’s coming precompute functionality.'
description: 'IIn this article, we’ll explore Veil’s coming precompute functionality.'
---

**Important update**

*In May 2019, after this article was originally published, a series of vulnerabilities were discovered in the Zerocoin library which sits at the core of most Zerocoin-based protocol implementations, including Veil’s.*

*After extensive review, and discussion with the Zerocoin community, the Veil project, along with a number of others, concluded that Zerocoin can not be relied upon to form the anonymity core of the protocol, and at the time of this writing, the project is working to [implement a new core privacy protocol](https://veil-project.com/blog/2019-05-09-state-of-veil/).**

![](/uploads/blog/precompute.png)

New layers of technology often come with compromises that must be made. A common factor compromised in the blockchain space, especially when adding privacy layers, is transaction speed. 

For privacy-focused cryptocurrencies that use the Zerocoin protocol, spending zerocoins can take longer than expected. Depending on when, and how many zerocoins, a user mints, it can take anywhere from 5 seconds to 10 minutes or more. 

The process of spending zerocoins requires more steps than spending a non-private coin which is why transactions can be noticeably slower. As a result, a main focus of ours is to make zerocoin spending virtually indistinguishable from other spends. If you’re unfamiliar with the Zerocoin protocol, [check out this write up](https://veil-project.com/blog/understanding-zerocoin/), for a more in-depth look.

In this article, we’ll explain how the process of spending looks right now and how we plan to improve it for better user experience.  

Let’s dig in. 



## Why is it Slow to Spend Zerocoins?


To put it simply, the Zerocoin protocol utilizes what are called zero-knowledge proofs. Proofs, in general, are arguments for a mathematical statement explaining how and why things can be as they are. 

**A zero-knowledge proof, in particular, is a proof which allows one party to prove to another party that a statement is true without providing any additional information other than proving that the statement is true.** In the case of cryptocurrencies, you will prove to the network that the Zerocoins you wish to claim and spend are indeed yours, without providing any information as to how many coins you have, where you wish to spend them, or how you received them. 

**The point here is that performing these proofs consumes a lot of computing power.** 

To elaborate, a zero-knowledge proof must be solved in order to send zerocoin. This type of proof takes a significant amount of time to solve, and the older the zerocoin, the longer it takes. For example, zerocoin minted 500 blocks ago will take less than 4 seconds to solve on most machines, whereas zerocoin minted 75000 blocks ago, could take 10 minutes to spend. 

**So, what can we do to speed up this proving process? Ah, precompute!** 


## Spend Zerocoins with Zero-Wait


With precomputing functionality, we are actively solving these zero-knowledge proofs ahead of time, as the chain grows, so users can spend zerocoins quickly in the future and still maintain a high level of privacy.

When we implement precompute functionality:

- It will be turned on by default 
- Precompute data will be stored in its own database. The database can be found at "path_to_data_dir/wallets/precomputes," and thus far, from testing with 1500 zerocoins of different denominations, the current database takes up only around 8MB of data. You can always delete the database file, but as you can see, it’s not much data, so you should have no need to turn it off.
- If you want precomputing turned off, you can do so by entering “precompute=0” in the console of the wallet or setting this variable in your veil.conf file.
- Spending your zerocoins will be noticeably faster!


**Our developers have actually tested the precompute functionality on our mainnet.** Yes, on our mainnet, not testnet, and here are the results:
Test Results: Spend 40 zerocoin (4 coins of 10 denomination with similar depth of 75000 blocks old) **with precompute:** 17 seconds to complete! 

Test Results: Spend 40 zerocoin (4 coins of 10 denomination with similar depth of 75000 blocks old) **without precompute:** 29 minutes to complete.

This means that spending 40 zerocoin, of similar age and the same amount of denominations, took 17 seconds with precompute, compared to 29 minutes without precompute. The precompute functionality does 99% of the work prior to spending the coins, and then only needs to do 1% to complete. 

All in all, we are excited about this development because not only do people have a right to privacy, but also a positive user experience. We expect precomputing to be ready during this Q2 of 2019, so stay tuned for announcements in the near future!

If you have any questions in the meantime, be sure to join our [Discord](https://discordapp.com/invite/Ywyb9hs) or [Telegram](https://t.me/VEILProject) to chat with the team. 