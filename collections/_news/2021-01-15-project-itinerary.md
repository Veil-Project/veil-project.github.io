---
layout: post
lang: en
title: 'Veil 2021 Project Itinerary'
date: 2021-01-13
author: strontium
permalink: /news/2021-project-itinerary/
categories: news
excerpt: 'With 2020 behind us and a new year before us, it’s once again time the Veil team give a peek behind the curtain. This article covers some of the larger development objectives of 2021.'
description: 'This article shines light on Veil’s 2021 project development objectives, giving insight into what’s to come in the new year.'
---

![](/uploads/news/2021-01-13-Itinerary.png)

With [2020 behind us](https://veil-project.com/news/2020-december-update/) and a new year before us, it’s once again time the Veil team give a peek behind the curtain. This article covers some of the larger development objectives of 2021. Note that these items aren’t necessarily in any particular order, and that we’ll have more information on their release as time progresses.

![](/uploads/news/2021-01-13-RingCTS.png)

# What it means
## RingCT staking will provide Veil users with a means of staking held veil privately, and without complicated minting.

Presently the Veil wallet allows users to stake their held veil using a shaved down version of the Zerocoin protocol. While Zerocoin once provided users with privacy, the unfortunate surfacing of an exploit in 2019 meant Veil had to take measures to remove the vulnerability. This led to the loss of privacy from the Zerocoin protocol, and the reliance on RingCT, formerly Veil’s secondary privacy measure, as its key privacy protocol.
With the upcoming 1.2 version update staking will move to RingCT. This will once again provide Veil users with privacy for their staking balance without first taking multiple time-consuming steps.
(Those steps presently being to first convert funds to RingCT, mint them to Zerocoin, and then stake).
The simplicity this update will bring also means far less time spent waiting for coins to mature as they move between coin types to stake. It also means far more coins will be held in RingCT, greatly improving both the privacy and speed with which RingCT transactions take place.

![](/uploads/news/2021-01-13-Consolidation.png)

# What it means
## Consolidation of user funds to the RingCT coin type drastically simplifies the user experience, greatly reduces wait times changing between coin types, gives held coins anonymity, and makes spending privately a breeze.

Presently Veil operates with four different coin types in order to achieve all of the wallets operations: Zerocoin stakes, RingCT transacts privately, basecoins are used for mining rewards and exchange transactions, and CT serves as a necessary intermediary for RingCT and basecoin under the current system. This system is not ideal—particularly as Zerocoin is no longer private—as it produces needless user friction, complicates the UI, and slows operations. For this reason, all operations in release version 1.2 will take place primarily in RingCT.

The shift to RingCT will inevitably require balances that exist in other coin types to be migrated to RingCT. A lot of hard work is being done to ensure as much of this process is automated and as pain-free for users as possible. We will also give users adequate time to manage their own funds in preparation for the 1.2 hard fork when the time comes.

Once the consolidation takes place, the simplification of coin types will open the way for easier UX/UI, easier implementation on exchanges and platforms, and deliver to users the overall smoother privacy experience for which we strive.

![](/uploads/news/2021-01-13-VeilX.png)

# What it means
## Veil X represents a brand new Veil wallet GUI focused on a streamlined user experience and more accessible functionality.

![](/uploads/blog/2020-03-01-wallet-08.png)
Veil X is something we’ve [teased in 2020](https://veil-project.com/blog/veil-x-preview/), and something we’ve had a very positive reaction to.

Veil X is a unique, custom-built wallet GUI for Veil with a number of [user-focused features](https://veil-project.com/blog/veil-x-ux/). It was built by industry veterans [Makalu](https://makaluinc.com/), incorporating their years of experience and expertise while also considering feedback from the Veil team and community.

Veil X is designed specifically for version 1.2 and RingCT so their releases will coincide closely. More features are planned for Veil X in the future, one of which can be read about in the next section.

![](/uploads/news/2021-01-13-VLS.png)

# What it means
## Veil Link Server (VLS) opens opportunities not previously available with Veil such as a light wallet potential through Veil X, hardware wallet optimization, and mobile wallet support.

A shared back-end server, VLS functions similarly to a block explorer, though it uses its own communication protocol to communicate with clients.

VL S is not a top priority presently, but as it supplements upcoming releases it is safe to assume it will become one once version 1.2 is released.

![](/uploads/news/2021-01-13-QtImp.png)

# What it means
## Ongoing improvements to the Veil Core Qt wallet, including functionality, usability, and aesthetic tweaks.

The Veil Core wallet has steadily been receiving updates and quality of life improvements for as long as it’s existed. The frequency of those improvements picked up in the latter half of 2020, with many bugs squashed and improvements under the hood.

In 2021, these improvements will continue, and will become more noticeable as we consolidate to RingCT. We’re also thrilled to announce the addition of a new Core developer to the Veil team, [WetOne](https://github.com/Veil-Project/veil/pulls/WetOne), a well-rounded developer made official following his successful contributions as a bounty developer. WetOne has already contributed to the Qt wallet in the latest release, and will continue to improve upon it in the near future.

While it’s unlikely these improvements will receive dedicated articles, they will be mentioned in release notes and version announcement articles, so keep your eyes peeled!

![](/uploads/news/2021-01-13-Luxgate.png)

# What it means
## Luxgate Veil support opens an avenue of VEIL trade not subject to the limitations seen in most exchanges.

![](/uploads/news/2021-01-13-Luxdemo.png)

[Luxgate](https://luxcore.io/luxgate/) (by LuxCore) is a partnership Veil have been fostering for some time. Currently in alpha, Luxgate is a decentralized exchange platform that does away with many of the inconveniences and privacy concessions of other exchanges.

Luxgate does not require accounts, sets no limits, and takes no fees. It also provides decentralized books and matching for orders, making it a true decentralized exchange platform (DEX).

To view Luxgate’s alpha demo, [visit here](https://www.youtube.com/watch?v=R2oAs1ddOLY).

![](/uploads/news/2021-01-13-Dandelion.png)

# What it means
## Dandelion++ offers an additional layer of privacy by obfuscating the origin of transactions on the network.

Privacy is best achieved through multiple layers obscuring your identity and actions, e.g. there’s no use wearing a mask if you’re wearing a nametag. The Dandelion++ protocol specifically targets one area of vulnerability in a digital transaction: the network IP address origin of a transaction. It does this by diffusing the transaction's broadcast across the network.

Learn more about Dandelion and the Dandelion++ protocol [visit this page](https://blockonomi.com/dandelion-protocol/).

Note that the nature of Dandelion broadcasting introduces many small delays to obscure the transaction. This will result in slightly longer transaction times. We will bring more information on this in the future.

Currently, it appears Dandelion can be updated without the use of a hard fork, so whether the protocol will be introduced with the release of version 1.2 or soon after has not yet been determined. Expect confirmation closer to release.

## What else to expect

**Exchanges**

2021 will also see renewed effort in finding fitting exchanges to list Veil—particularly after the 1.2 update. The update prerequisite drastically simplifies the listing and maintenance processes for exchanges, so we ask you all to temper expectations at least until then.

With the above stated, Veil’s listing on [TradeOgre exchange](https://tradeogre.com/) in the latter part of 2020 proved a boon for the project and community alike. If you have an exchange you would like us to look into, please feel free to mention it to the team and we’ll be sure to look into it.

**Communication**

The community’s communication survey feedback was very positive. It’s very clear the monthly updates, GitHub visibility bot, contests, and other avenues of communication with the community are greatly appreciated. We will continue bringing you these and more throughout 2021.

We’ll also be finding out more about Veiliens, Veil’s community rewards program, and its juicy higher tier prizes in a dedicated announcement soon. If you haven’t yet learned about Veiliens check the [#veiliens channel](https://discord.gg/UzUdXGY3nM) on the Veil Discord server.

**Marketing**

In 2020 Veil leaned on cautious, focused marketing as we worked hard on the version 1.1 wallet. The release of 1.1 greatly improved key areas such as the PoW mining overhaul and the orphan pruning measures. We subsequently saw in an influx of new miners exposed to Veil through our efforts with [WoolyPooly mining pools](https://woolypooly.com/#/) and [WhatToMine](https://whattomine.com/).

With 1.2 on the horizon marketing will be ramping up. This means more insightful website blog articles shared on social, more contests with bigger prizes, interviews with crypto personalities, paid promotion, and more!

## FAQS

**When will 1.2 release?**

We do not yet have a release window and prefer not to make estimates until we’re quite certain everything is ready to go. Keep an eye on Veil news for more information in the future.

**Will version 1.2 have X feature?**

There will of course be updates that have not been mentioned in this article. Feel free to check progress on [Veil’s GitHub](https://github.com/Veil-Project/veil/tree/1.2.0-Dev) though note not all work is currently public. Feel free to make a feature request issue on GitHub if there is something you hope to see in version 1.2, although it doesn’t guarantee its addition.

**Will Veil be on X exchange?**

As mentioned in this article, any exchange recommendations are welcome. Feel free to contact the team via social media or on Discord to let us know about your favorite exchange.

## Closing words
We hope you’re as excited about the developments we have in store for 2021 as we are working on them. We’ll be bringing you some in-depth articles focusing exclusively on some of the above topics in the near future.

As always, we welcome any discussion or questions over social or on our Discord server.