---
layout: post
lang: en
title: 2019-05-09 State of the Veil network
date: 2019-05-09
author: gabrielnergaard
permalink: /blog/2019-05-09-state-of-veil/
categories: test
excerpt: 'In this article, we are going to discuss the state of the Veil network, including our decision to replace Zerocoin with a new privacy protocol.'
description: 'In this article, we are going to discuss the state of the Veil network, including our decision to replace Zerocoin with a new privacy protocol.'
---

## Launch of the world’s most ambitious network

In January of 2019, we launched Veil, one of the most ambitious and complex blockchain network protocols in existence.

The Veil launch represented the first step towards our ultimate goal of providing “always-on” anonymity, meaning that in addition to the privacy provided by its Zerocoin implementation, its non-zerocoin transactions, unlike other networks, are also protected with RingCT.

## Current limitations

In its initial release, however, complete anonymity in Veil is unavailable in two types of transactions. 

1. We had to include support for fully transparent basecoin transactions to better empower miners and mining pools for our fair-distribution Proof-of-Work mining phase. 

2. Direct conversion to RingCT is not yet available from zerocoin and basecoin, requiring CT transactions for certain scenarios.

Over time, we will remove both basecoin and CT transactions altogether, achieving our goal of providing “always-on” full anonymity. In the meantime, however, it’s important for Veil users to understand the implications of the *current* state of the network. 

## Summary of the current network transaction types

At present there a *four* types of transactions supported and in use on the Veil network, as summarized in the following table.

| Transaction Type | What it is | Can not send to |
|----------|-----------|-----------|
| Basecoin | Typical Bitcoin protocol transactions using UTXO model | RingCT |
| CT | Hides the output amounts | None |
| RingCT | Hides amounts & obfuscates sources | None |
| Zerocoin | Users spend from one common pool of coins without revealing any information about their inputs. | RingCT |

## Implications

This complexity creates a number of scenarios which are important to be aware of and need further explanation.

- We see from the above table, for example, that when zerocoin is spent, change will be received in CT, since zerocoin can not currently spend to RingCT transactions.

- When would one have RingCT? The change from CT transactions is returned in RingCT.

- Your total wallet balance is  comprised of *four* different coin balances. 

- Transactions currently cannot combine multiple input types. For example, if you had 10 veil zerocoin, and 4 veil RingCT in your wallet, you currently could not, for instance, make a *12 veil* transaction, since that would require inputs from both zerocoin and RingCT balances.

- In this same example, if you tried to send 2 veil, you currently cannot specify from which “bucket” it comes from, unless using console commands. By default, the current wallet prioritizes sending from your zerocoin, then RingCT, and finally CT balances (basecoin can only be spent through an RPC command from the Console in the Advanced options area of the wallet).

## Looking forward

Since August of 2018, the Veil team has been working non-stop in the creation of what we believe will become the world’s leading privacy cryptocurrency, and we couldn’t be prouder of having reached our first milestone, with our launch in January.

The current priorities of the development team are removing Basecoin and CT transaction types from the network to achieve our goal of providing “always-on” privacy, as well as completing the feature set of our Core Wallet.