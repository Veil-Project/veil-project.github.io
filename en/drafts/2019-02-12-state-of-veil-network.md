---
layout: post
lang: en
title:  State of the Veil Network
date:   2019-02-12
author: gabrielnergaard
permalink: /drafts/2019-02-state-of-the-veil-network/
categories: test
excerpt: 'In this article we’re going to take a look at the current state of the Veil network.'
description: 'In this article we’re going to take a look at the current state of the Veil network.'
---
## Launch of the world’s most ambitious network

In January of 2019, we launched Veil, one of the most ambitious and complex blockchain network protocols in existence.

The Veil launch represented the first step towards our ultimate goal of providing “always-on” anonymity, meaning that in addition to the privacy provided by its Zerocoin implementation, its non-Zerocoin transactions, unlike other networks, are also protected with RingCT.

## Current limitations

In its initial release, however, complete anonymity in Veil is unavailable in two types of transactions. 

1. We had to include support for fully transparent Basecoin transactions to support our fair-distribution Proof-of-Work mining phase. 

2. A full RingCT implementation wasn’t possible, requiring CT transactions for certain scenarios.

Over time, we will remove both Basecoin and CT transactions altogether, achieving our goal of providing “always-on” full anonymity. In the meantime, however, it’s important for Veil users to understand the implications of the *current* state of the network. 

## Summary of the current network transaction types

At present there a *four* types of transactions supported and in use on the Veil network, as summarized in the following table.

| Transaction Type | What it is | Can not send to |
| ————————-|——————|————————-|
| Basecoin | Typical bitcoin protocol transactions using UTXO model | RingCT |
| CT | Hides the output amounts | None |
| RingCT | Hides amounts & obfuscates sources | None |
| Zerocoin | Users spend from one common pool of coins without revealing any information about their inputs. | RingCT |

## Implications

This complexity creates a number of scenarios which are important to be aware of and need some explanation.

- We see from the above table, for example, that when Zerocoin is spent, change will be received in CT, since Zerocoin can not currently spend to RingCT transactions.

- When would one have RingCT? The change from CT transactions are returned in RingCT.

- Your total wallet balance is  comprised of *four* different coin balances. 

- Transactions currently can not combine multiple inputs. For example, if you had 10 Veil Zerocoin, and 4 Veil RingCT in your wallet, you currently could not make a *12 Veil* transaction, since that would require input from both Zerocoin and RingCT.

- In this same example, if you tried to send 2 Veil, you currently can not specify from which “bucket” it comes from. By default, the current wallet prioritizes sending from Zerocoin, then RingCT, then CT, and finally, Basecoin.

## Looking forward

Since August of 2017, the Veil team has been working non-stop in the creation of what we believe will become the world’s leading privacy cryptocurrency, and we couldn’t be prouder of having reaching our first milestone, with our launch in January.

The current priorities of the development team are removing Basecoin and CT transaction types from the network to achieve our goal of providing “always-on” privacy, as well as completing the feature set of our Core Wallet.