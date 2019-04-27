---
layout: post
lang: en
title: New Zerocoin vulnerability and mandatory wallet update v1.0.3.0
date: 2019-04-27
author: gabrielnergaard
permalink: /blog/wallet-1-0-3-0/
categories: test
excerpt: 'Mandatory update of Veil Core Wallet Version 1.0.3.0'
description: 'Mandatory update of Veil Core Wallet Version 1.0.3.0'
---

A new wallet update has been released to ensure the network remains safe and unaffected from the new Zerocoin vulnerability.

![](/uploads/blog/2019-04-27-wallet.jpg)

As followers of the privacy-coin space are aware, the Zcoin project recently made a public announcement regarding a vulnerability that affects all projects using the Zerocoin protocol, including Veil. They contacted us earlier this month and disclosed the issues associated to the libzerocoin library.

For more detailed information about the vulnerability, please see: 

[https://zcoin.io/further-disclosure-on-zerocoin-vulnerability](https://zcoin.io/further-disclosure-on-zerocoin-vulnerability)

As relates to Veil, the good news is that there isn't any evidence of this attack on our network.

However, it is important that we do take immediate measures to protect against this vulnerability, and in that regard we intend to release a **critical** and **mandatory** update to the Veil wallet today, April 27, 2019. The wallet is ready for self-compilers and all builds will be available within several hours.

**[→ Download mandatory wallet v1.0.3.0](https://github.com/Veil-Project/veil/releases/tag/v1.0.3.0)**

The updated wallet will be a **temporary** measure, that immediately protects the network against the announced vulnerability, but removes the **anonymity** feature of Zerocoin, in that Zerocoin mints will temporarily be linked from their original spends on the blockchain. Past Zerocoin transactions will not be deanonymized.

From a functional perspective, however, the usage of the wallet in terms of sending, receiving, and staking remain the same. Furthermore, RingCT and CT privacy are unaffected in this coming wallet update.

We will be working within our own team, and the broader Zerocoin community on the long-term solution, in support of our mission and philosophy of providing full-time privacy, without compromise. 

— The Veil Team