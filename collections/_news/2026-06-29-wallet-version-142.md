---
layout: post
lang: en
title: 'Veil Core mandatory wallet update v1.4.2 is available'
date:   2026-06-29
author: sean
permalink: /news/2026-wallet-142/
categories: news
excerpt: 'Veil users and services are required to install this mandatory wallet version update, which is a hot fix for an attack experienced on June 28th, 2026.'
description: 'It is necessary to update to this mandatory wallet version and not to use the previous wallet. The intended consensus rules have been strengthened to avoid violating transactions being accepted by the memory pool, and to avoid any such transactions from being put into a block..'
---

This MANDATORY [1.4.2.0 Veil core wallet update — download from Github](https://github.com/Veil-Project/veil/releases/tag/v1.4.2.0) better enforces the consensus rule that shielded (stealth CT, or RingCT) transactions cannot be in a coinbase transaction, one that adds to the money supply. If you have installed PR1062 or the master build from June 28th, 2026, then you do not need to install this one, which is identical except for the release status and the version number.

If you have not upgraded since the previous mandatory upgrade, 1.4.0.0 then the improvements listed in the update 1.4.1.0 will also be new to you.

Updating the wallet software is as simple as replacing the program files veild, veil-qt, veil-cli, .... There is no need to touch your data files. Normal data backup procedures apply.

... EXCEPT, if you have already synced your previous wallet **beyond** block **3890102** you will have to run a couple of commands in the Debug Console, as follows:
```
invalidateblock 913780c878021677e2c5fc471016c8db5e1acf5e705ed48c413525bff85009fc
clearmempool
```

**If you had not synced** your old wallet fully you can simply replace the application files without any further commands, as normal.

**Download Veil Core wallet v1.4.2.0 and read the full release notes [here](https://github.com/Veil-Project/veil/releases/tag/v1.4.1.0)**. Check our Veil support article for [how to update your Veil wallet](https://veil.freshdesk.com/support/solutions/articles/43000528762-how-to-update-upgrade-your-veil-wallet).

Still need assistance? Join the Veil community on [Discord](https://discord.veil-project.com)!