---
layout: post
lang: en
author: dango
permalink: /news/2019-04-20-two-week-sprint/
date: 2019-04-20
title: 2019-04-20 Two week sprint
description: 'This article describes our plans for the next two-week sprint.'
---
Greetings Veil community! Welcome to this month’s Veil roundup where we provide quick updates on short-term technical focuses over the next 2-3 weeks. 

In this piece, we’ll list the specific GitHub issues that are on our radar to relieve common user pain points and continue making Veil a smoother experience. We’ll even include some recent issues we closed!

Our focuses over the next couple of weeks revolve around:

- Improving autominting functionality
- Improving wallet user experience and utility 
- Improving specific use-case crashes when opening wallets 

For more details, keep reading below. 

Let’s dive in.

## Github Issue:

**[#405](https://github.com/Veil-Project/veil/issues/405)** - This is where Mac users get some relief. We have received user feedback and confirmed that when a user quits (command + Q) out of the wallet, the blockchain corrupts upon re-opening. Currently, users must re-install their wallet or download a new snapshot and resync to the network to fix this. While this is not a security vulnerability and funds are safe, it’s certainly a user hinderance that we will soon get rid of. 

**[#433](https://github.com/Veil-Project/veil/issues/433)/[#434](https://github.com/Veil-Project/veil/issues/434)/[#438](https://github.com/Veil-Project/veil/issues/438)** - These issues all regard autominting. Currently, only basecoins are eligible for autominting, but soon that will be updated to include all coin states such as CT and RingCT. 

**[#415](https://github.com/Veil-Project/veil/issues/415)** - specifically focused on adding a GUI option allowing users to set an automint time interval. This way users can set the frequency at which they wish to automint.

**[#453](https://github.com/Veil-Project/veil/issues/453)** - We are looking to add GUI options for auto-generating basecoin and stealth addresses when first installing a Veil wallet. In cases where users are restoring addresses after a fresh seed restore, the wallet will then auto-scan the blockchain for associated transactions.

**[#455](https://github.com/Veil-Project/veil/issues/4550)** - We recently integrated the Travis Cl, which allows us to have a private repository, in case we are dealing with sensitive or premature functionalities before releasing publicly. This issue is already closed.

**[#422](https://github.com/Veil-Project/veil/issues/422)** - We’ve identified a startup crash error under specific conditions. This has been resolved.

**[#430](https://github.com/Veil-Project/veil/issues/430)/[#431](https://github.com/Veil-Project/veil/issues/431)** - Coin control will now include zerocoins, and we plan on showing a status check of the precompute progress for each zerocoin denomination. For those unfamiliar with coin control, it is an expected wallet feature in PoS coins which allows user to view all transactions and manage which coins to stake. #431 is closed already.

**[#437](https://github.com/Veil-Project/veil/issues/437)** - The debug log needed to be cleaned up by not including “FOUND 0 STAKEABLE ZEROCOINS” by default. This will greatly reduce the log’s length and file size. This issue is closed already.

Improving user experience is a priority for us moving forward. If you have any feedback, suggestions, or just want to chat with the team, come join our [Discord](https://discordapp.com/invite/Ywyb9hs) or [Telegram](https://t.me/VEILProject)! (Our Discord even has a wallet-suggestions channel now).