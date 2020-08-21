---
layout: post
lang: en
title:  Veil’s PoW update—making network participation rewarding for all
date:   2020-08-21
author: strontium
permalink: /blog/2020-pow-update/
categories: test
excerpt: 'As we close in on Veil’s new Proof-of-Work consensus model, this article explores the PoW update and what it means for the future of the Veil network and its users.'
description: 'As we close in on Veil’s new Proof-of-Work consensus model, this article explores the PoW update and what it means for the future of the Veil network and its users.'
---

As we close in on Veil's new Proof-of-Work consensus model, this article explores the PoW update and what it means for the future of the Veil network and its users. It includes links to further information, resources, and development thought processes behind the changes.

![](/uploads/blog/2020-08-19-PoWinfo.png)

Veil is nearing a hard fork to implement a new multi-algorithm Proof-of-Work consensus model. We've [covered the basics of the PoW system earlier](https://veil-project.com/blog/2019-future-consensus/), but below is a summary of the changes coming up.

**GPU mining with ProgPoW**

Aims for 70% of all PoW blocks averaging 504 blocks per day.

**CPU mining with RandomX**

Aims for approximately 20% of all PoW blocks averaging 144 blocks per day.

**ASIC mining with SHA-256D**

Aims for approximately 10% of all PoW blocks averaging 72 blocks per day.

Note: PoW will continue to target 50% of blocks alongside PoS's 50%. This division can deviate with varying hash power.

## Why the change?

As crypto mining matures it brings a number of growing challenges as participating parties aim to profit more from their operations. This has included the introduction of both larger operations with more hardware available to them (farms and pools) and new specialized hardware such as ASICs and FPGAs giving some parties a competitive edge.

The Veil PoW change has been planned for quite some time. It aims to deviate from the two most common PoW strategies in the space: a common algorithm that welcomes competition, or a frequently evolving algorithm that seeks to thwart monopolization.

Rather than one of those two, our third strategy allows users to mine, even if only via their CPU, in tandem with staking. We also wish to ensure GPU miners are able to compete fairly without being bullied out by the specialized hardware adept at mining algorithms other than ProgPoW and RandomX. The end result we are aiming for is a network heavily supported by users that are both miners and stakers. This will increase security and participation while avoiding centralization.

For further insight from an independent party on this third option [read the interview with Kristy-Leigh Minehan](https://veil-project.com/blog/2020-OhGodAGirl/).

## How to participate

When the PoW changes are made available on mainnet, all users will be required to update their wallet software. Updates should be made directly from the [Veil GitHub releases page](https://github.com/Veil-Project/veil/releases) to avoid the risk of compromised software.

RandomX mining will be available from within the wallet software once the fork target block is reached. No additional software will be required to participate in RandomX mining, making it an easy option available to anyone using the Veil wallet.

ProgPoW will require additional software. For more information, and to test the ProgPoW prior to the mainnet launch, visit the [Veil development Discord server](https://discord.gg/5V3Y5Mf).

SHA-256D will technically be open to CPU mining, but unfettered competition will make that futile, as in-wallet mining is presently. GPU and pool mining SHA-256D will remain options to miners.

Users are of course encouraged to continue staking as per usual alongside whatever mining they may choose to do. The only limit to what network participation users can opt into is their own available resources; there is no system in place to prevent users mining multiple algorithms simultaneously if they wish.

## PoW change release

The changes are already available for users to test and play with outside of mainnet on the developer build. To participate in testing simply check in with the team on the [Veil Discord server]https://discord.veil-project.com/(), or the [Veil development Discord server](https://discord.gg/5V3Y5Mf).

A period of three weeks will be allocated to a testnet build before a mainnet fork takes place prior to October's superblock early in the month. This of course is subject to everything behaving as expected and no major issues causing delay.

## Closing words

As an exact release date has not been settled on, we encourage anyone interested in participating in the new PoW to keep an eye on official channels for release information in the near future.

As always, we welcome anyone with questions to reach out via Discord or social platforms.