---
layout: post
lang: en
title: 'Veil month’s end update for October 2020'
date: 2020-11-04
author: strontium
permalink: /news/2020-october-update/
categories: news
excerpt: 'Welcome to the October monthly Veil project update article. October was a very eventful month as Veil saw a new wallet version release, the Proof-of-Work fork, and a new exchange listing.'
description: 'This article provides insight into Veil project developments for the month of October 2020.'
---

Welcome to the October monthly Veil project update article. October was a very eventful month as Veil saw a new wallet version release, the Proof-of-Work fork, and a new exchange listing.

![](/uploads/news/2020-11-06-update.png)

## Development updates

October saw the release of the new 1.1.0 Veil core wallet, and concluded with the accompanying fork introducing Veil's brand new consensus model with revamped mining.

### 1.1.0 Veil core wallet

Veil's new 1.1.0 wallet has been released! The new 1.1 version has brought with it a number of updates, both obvious and behind the scenes. These changes cover bug fixes, usability improvements, removal of vestiges (such as the precompute toggle carried over from Zerocoin), updates to RPC and documentation, and a change to stale chain tips that greatly reduces orphan rates. If you haven't yet updated your wallet you can [update here](https://github.com/Veil-Project/veil/releases).

***Please note*** if you missed the fork your wallet will be on the wrong chain! If you need help getting back on the correct chain after updating [visit our Discord server] to receive help.*

The most important function of the new wallet was to enable the PoW fork, splitting Veil's mining algorithm into three new algorithms: ProgPoW, RandomX, and SHA-256D. These new algorithms protect the network against ASIC domination, as well as open opportunities to users wanting to mine but lacking the specialized hardware.

### Mining with Veil 1.1.0

As mentioned above, Veil now supports mining across three different algorithms. The primary mining algorithm is ProgPoW, which is supported on mining pools. A list of pools [can be found here](https://veil-project.com/mining/) with the status of pools being actively being updated.

A detailed guide on mining VEIL with ProgPoW [can be found here](https://woolypooly.medium.com/how-to-mine-veil-full-mining-guide-6d8a72914377).

Veil also supports in-wallet mining with RandomX. RandomX utilizes your devices CPU to mine, and is specifically designed to do so. Mining with this method allows anyone with a device and sufficient resources to mine directly from within their wallet.

To begin mining with RandomX head into Settings, Advanced options, and click on the Console tab. There enter **generatecontinuous true X** replacing X with the number of threads you want to dedicate to mining (this will default to a minimum of 4). Be sure to leave ample resources available for your device to perform other functions, both from the Veil core wallet and anything else you wish to use it for.

SHA-256D, the algorithm used by Bitcoin, is also available to mine from within the wallet. To do so, enter **mine=sha256d** into your veil.conf file, restart your wallet, and enter *generatecontinuous* into console (remove *mine=sha256d* to default back to RandomX mining). If you cannot find your configuration file, enter Settings, Preferences, and open the wallet tab. There you will find Open Configuration File.

[WhatToMine](https://whattomine.com/) already has Veil's ProgPoW information for miners to consider. Once more information becomes available for RandomX and SHA-256D that too will be available on WhatToMine.

### What's next?

Now that we've released the 1.1 and the PoW update, attention has turned towards the shift to exclusive RingCT. The change will move away from the varied coin types currently in use and consolidate all funds into RingCT. The result will be greatly simplified usability, a lot of saved time for users currently spent waiting on confirmations, and the ability for staking to take place privately. We are confident this update will go a long way to bringing Veil into line with our vision, delivering the privacy intuitive user experience our users deserve.

A new user wallet experience, Veil X, is also set to launch alongside the RingCT change. Veil X is a streamlined user experience tailored to provide the most commonly used wallet features quickly and easily. You can [learn about Veil X here](https://veil-project.com/blog/veil-x-preview/).

We look forward to sharing more news on these objectives and others not yet publicly discussed in the coming months.

## Business developments

Alongside the new wallet version, we've also recently established some new business connections.

### WoolyPooly mining pool

WoolyPooly provided Veil with a solid testnet pool for testing 1.1 mining in the lead up to mainnet release. WoolyPooly joins our list of mining pools supporting Veil (find a complete list [here](https://veil-project.com/mining/)).

![](/uploads/news/2020-11-06-woolypooly.png)

For a limited time WoolyPooly and Veil are running a campaign providing miners with additional mining rewards. Between now and November 11th, 2:00 PM UTC, every ProgPoW block found on the pool will earn an extra 2.834 VEIL, distributed in proportion to hash power contribution.

To learn more, either visit the Veil Discord server or the [WoolyPooly Discord server](https://woolypooly.com/#/discord).

### TradeOgre exchange listing

![](/uploads/news/2020-11-06-tradeogre.png)

We're also pleased to offer our users another exchange that now lists VEIL. TradeOgre offers a BTC-VEIL market, has no KYC, and no limits. You can visit [TradeOgre's VEIL market here](https://tradeogre.com/exchange/BTC-VEIL).

## Closing words

This concludes October’s update. We'd like to take this chance to thank all of our community members for their patience and support through the recent update's testing and launch. We particularly want to extend our gratitude to those members who chose to participate in the testing process. We look forward to this next phase for Veil and sharing more news with you all in the future.

As always, you’re welcome to reach out to the team on Discord or social media with any questions.