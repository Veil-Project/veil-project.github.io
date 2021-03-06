---
layout: post
lang: en
title:  Veil month’s end update for September 2020
date: 2020-10-17
author: strontium
permalink: /news/2020-september-update/
categories: test
excerpt: ‘Welcome to the September monthly Veil project update article. Due to some circumstances surrounding efforts for version 1.1's release this installment has come late. We apologize for keeping you all waiting.''
description: 'September’s Veil project update covering testnet, campaigns, and more.'
---

Welcome to the September monthly Veil project update article. Due to some circumstances surrounding efforts for version 1.1's release this installment has come late. We apologize for keeping you all waiting.

## Development updates

The development of version 1.1 of the wallet didn't quite meet the target testnet release date due to unforeseen complications. It's important to note that such complications are the reason we use target dates and not deadlines.

**The following is a summary of worked issues provided by CaveSpectre**

- Addressed [issue #772](https://github.com/Veil-Project/veil/issues/772) [(#842)](https://github.com/Veil-Project/veil/pull/842)

- Addressed [issue #659](https://github.com/Veil-Project/veil/issues/659) [(#844)](https://github.com/Veil-Project/veil/pull/844)

- Addressed [issue #520](https://github.com/Veil-Project/veil/issues/520) [(#845)](https://github.com/Veil-Project/veil/pull/845)

- Corrected a mining issue with sha256d [(#846)](https://github.com/Veil-Project/veil/pull/846)

- Reworked PoS algorithm to manage the overall chain spacing based on PoW actuals, rather than it's own spacing [(#840)]((https://github.com/Veil-Project/veil/pull/840))

- Added more checkpoint blocks [(#848)](https://github.com/Veil-Project/veil/pull/848)

- Merged 1.1 branch into master [(#847)](https://github.com/Veil-Project/veil/pull/847)

- Fine-tuned PoS difficulty adjustments [(#849)](https://github.com/Veil-Project/veil/pull/849)

- Added win32 and arm32 to GitHub actions [(#854)](https://github.com/Veil-Project/veil/pull/854)

- Fixed the min proto rules for testnet and devnet [(#855)](https://github.com/Veil-Project/veil/pull/855)

**Proof-of-Stake block-find balancing issues**

While the Proof-of-Work efforts have been fruitful for version 1.1, devnet block discovery distribution wasn't matching expectations. The complication stemmed from staking blocks, which make up the majority of Veil's network security, not adequately conforming to target.

Developing several algorithms for the chain that need to satisfy targets that are relative to other algorithms is no small feat, and relies on timing and difficulty adjustments. Adjustments to PoS spacing were made to reflect PoW blocks and more adequately adjust to network and chain activity. To read a detailed description of the problem and its solution, [see this GitHub link](https://github.com/Veil-Project/veil/pull/849).

## Testnet promotions

Veil's 1.1 testnet is upon us! For exact details on how and where to participate, visit the testnet channel on the [Discord server](https://discord.veil-project.com/) or the [Veil development server](https://discord.gg/5V3Y5Mf).

A number of promotions are coinciding with Veil's 1.1 testnet. Details and conditions of each follow.

### WoolyPooly promotion

WoolyPooly, our partner for 1.1 PoW testnet and mainnet mining, is hosting a mining contest from October 15th through November 15th. Among other prizes on offer is a nice chunk of veil.

Campaign rules

**1.** Miner has to join the [WoolyPooly Discord server](https://woolypooly.com/#/discord) OR [WoolPooly's Telegram group](https://woolypooly.com/#/telegram)

**2.** Mine any coin on US (!) stratum on WoolyPooly with any hash they have available from 15th October till 15th November. Coins can be switched within that period but only within WoolyPooly pool.

**3.** Provide an address (or addresses) [here](https://discord.gg/nd7y52W).

**Prizes:**

**1.** RTX 2060 Super GPU

**2.** Donnager 8 GPU Case with separate air streams ([see here](http://donnagercase.com/#!/tproduct/233957988-1498486301712))

**3.** 1000 Veil coins

**4.** 100 Grin coins

Two sets of prizes will be made available. One set applies to Russia and CIS, and another to US and Canada.

Prizes will be drawn on the 20th of November using a randomizer website.

### Veil testnet promotion on WoolyPooly

![](/uploads/blog/2020-10-02-WPCtestnet.png)

In addition to the above promotion, users on WoolyPooly mining Veil's testnet during the testnet period will be eligible to a share of **7200 mainnet veil**. This amount will be distributed to miners over the course of the testnet period.

Administration of the 7200 veil will be handled by WoolyPooly, and not by Veil. To keep up-to-date on WoolyPooly and the Veil 1.1 testnet, join the WoolyPooly [Discord sever](https://woolypooly.com/#/discord) or [Telegram channel](https://woolypooly.com/#/telegram).

### Testnet Veiliens points

Community members taking part in the 1.1 testnet will also be eligible for 50 Veiliens points.

Veiliens points have already earned some users a custom emote slot on the Veil Discord server. As of yet, no community members have reached beyond the lower tiers to discover what rewards are waiting. We look forward to revealing higher tier prizes when the time comes!

## Security reminder

We want to take this chance to remind Veil users to protect their veil wallet, staking machine, passwords, and any account-tied personal information. While the Veil team will do whatever we can to help if you lose veil, in the event it's stolen from you by means outside of the wallet's scope of responsibility, there's little we can do.

To protect your veil, we recommend you do the following:

- Encrypt your wallet and keep it unlocked for staking transactions only when not in use.

- Only use Veil wallet software sourced from Veil's official GitHub releases or source.

- Use a firewall, and be cautious of *any* unsigned software you install on your machine.

- Avoid storing passwords and personal information on a device connected to the internet.

- Choose your passwords wisely, being sure to use one of adequate length and complexity.

- Keep a backup of your wallet and seed on a device not connected to the internet and/or make a hard copy.

We sincerely want each and every Veil user to feel protected and secure in using Veil's software, but our greatest efforts can only reach as far as your own. If you have any further questions about securing your veil, don't hesitate to check in with the team.

## Closing words

While we initially planned to partner with both WoolyPooly and ZelPools for 1.1 mining, circumstances have recently seen Zel lose a key developer they needed to implement the Veil pool properly. While we regret being unable to work with ZelPools on this, we remain in contact with them, and other arrangements we have with them presently still stand—but more on that in the future.

This concludes September’s update. We're excited to get 1.1 out to you guys, and hope the incentives to help out on testnet will help some of you justify helping make sure everything's perfect before the push to mainnet.

As always, you’re welcome to reach out to the team on Discord or social media with any questions.