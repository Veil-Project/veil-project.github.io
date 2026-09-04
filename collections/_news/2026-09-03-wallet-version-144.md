---
layout: post
lang: en
title: 'Veil Core mandatory wallet update v1.4.4 is available'
date:   2026-09-03
author: sean
permalink: /news/2026-wallet-144/
categories: news
excerpt: 'A MANDATORY upate has been released with several security fixes, which will be described in more detail later. This version also brings the ability to automatically convert funds from the CT and basecoin categories into RingCT if you add a line into your config file.'
description: 'Veil developer ohcee identified a potential attack vector prompting this mandatory fix version 1.4.4, which also allowed us to include the many other fixes and features developed in the past month. Adding autoconvert=1 to your veil.conf now allows the wallet to begin sending funds from basecoin and CT that you may have mined, to the private form in RingCT.'
---

This MANDATORY update [1.4.4.0 Veil core wallet update — download from Github](https://github.com/Veil-Project/veil/releases/tag/v1.4.4.0) brings various security fixes, one of which deems the update mandatory. A more in-depth description will be provided later, once the overwhelming majority of users, miners, and stakers have updated to this version. Additionally, by adding `autoconvert=1` to your `veil.conf` file the wallet, whether the GUI Qt (graphical interface) wallet or the command line `veild` daemon version your wallet will, once unlocked, gather your largest 32 basecoin or CT unspent transaction outputs and at randomised times every few or more minutes send them to your RingCT funds. Automating this saves you from having to do it manually or write your own script. If you have basecoin funds you may have received them from your mining payouts or from old exchange withdrawals or from an intentional transfer of basecoin transparent funds. If you have CT UTXOs (unspent transactioon outputs) you may have received them when you or someone else sent Veil from basecoin utxos to your stealth address, or if you received funds from a zerocoin spend.

Two features that new users will enjoy (without realising it) is firstly, that a fresh, empty wallet will offer to automatically download a quarterly-updated snapshot, removing the need to have to manually go and download a snapshot from the veil.tools website. Secondly, the wallet will much, much more quickly make connections to peer nodes, when the wallet has not previously ever been on the network.

In-wallet mining has also been greatly improved. It is now "technically" possible to mine ProgPoW in the wallet, and easier to mine RandomX. Indicators in the Mining screen have been improved. As mining difficulty, of course, is strong network-wide, you're not at all likely to mine in the wallet without a GPU miner or other specialised mining effort, but it is there, and you can try it out on testnet.

We wish to thank the people involved in coding, testing, and reviewing this wallet, especially ohcee.

Updating the wallet software is as simple as replacing the program files veild, veil-qt, veil-cli, .... There is no need to touch your data files. Normal data backup procedures apply.

**Download Veil Core wallet v1.4.4.0 and read the full release notes when they are updated [here](https://github.com/Veil-Project/veil/releases/tag/v1.4.4.0)**. Check our Veil support article for [how to update your Veil wallet](https://veil.freshdesk.com/support/solutions/articles/43000528762-how-to-update-upgrade-your-veil-wallet).

For any assistance, join the Veil community on [Discord](https://discord.veil-project.com) or refer to the Veil Knowledgebase at [https://veil.freshdesk.com/](https://veil.freshdesk.com/support/home)!