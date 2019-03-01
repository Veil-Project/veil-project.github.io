---
layout: post
lang: en
author: gabrielnergaard
permalink: /news/release-wallet-1-0-2-0/
date: 2019-03-01
title: Release of Veil Core Wallet Version 1.0.2.0
description: 'The Veil development team have just released version 1.0.2.0 of the Veil Core Wallet. All users are required to upgrade before the next superblock.'
---

The Veil development team have just released version 1.0.2.0 of the Veil Core Wallet.
This release contains an important fix in the budget checks where a protocol bump will be enforced starting 50 blocks before the superblock.

Please [upgrade immediately](https://github.com/Veil-Project/veil/releases), before block 86,350 to remain on the correct chain.

Improvements in this version include:

**Wallet**

- Correction for a math error in the budget checks.
- Change from minting Zerocoin from Basecoin will return as CT balance.
- Oldest Zerocoin denominations will be used first when spending Zerocoin.
- Most issues of not being able to spend CT and RingCT fixed.
- Zerocoin Minting option to automatically mint as much of the available balance as possible. Any denomination will be used.
- Refactor zerocoin mints collection before spending.

**GUI**

- Coin control dialog issue resolved.
- UI issues related to unlocking wallet for staking fixed.
- Transaction record status included in transaction detail dialog.
- Hide orphans option fixed.
- Premature Zerocoin spending fixed.

**RPC**

- Updated listmintedzerocoins command uses serial hash and sorts by descending number of confirmations.
- New command getzerocoinsupply used to obtain the Zerocoin supply per denomination at the node’s current height or a specified height and percentages relative to total supply.
- Command getblockchaininfo will display money supply information at the current height.
- Check added for security level value in command spendzerocoin.

As always, we encourage Veil users to keep an eye on our [changelog page](https://veil-project.com/changelog/) for a summary of all major issues of which users should be aware.

Best regards,

The Veil Team