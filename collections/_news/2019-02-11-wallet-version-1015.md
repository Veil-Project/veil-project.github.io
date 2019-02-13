---
layout: post
lang: en
author: gabrielnergaard
permalink: /news/release-wallet-1-0-1-5/
date: 2019-02-11
title: Release of Veil Core Wallet Version 1.0.1.5
description: 'Release of Veil Core Wallet Version 1.0.1.5'
---

The Veil development team have just released version 1.0.1.5 of the Veil Core Wallet. All users are recommended to [upgrade immediately](https://github.com/Veil-Project/veil/releases).

Improvements in this version include:

- Reduced rate of staking orphans.
- Multithreaded Zerocoin Spend Validation (2 CPU thread count by default. Set thread count using threadbatchverify=X in the veil.conf file, replacing X with thread count).
- Faster and more efficient blockchain data syncing.
- Consensus improvements to help nodes stay on the correct chain and on the latest block.
- Multiple fixes for bugs that could cause incorrect display of wallet transactions and balances.
- Fix for Zerocoin Mint transaction fee being too high in some scenarios.
- New RPC command lookupzerocoin to manually look up the status of a user’s specific zerocoin denomination by serial, serial hash, pubcoin value, or pubcoin hash.
- RPC command rescanringctwallet has been expanded and made more effective in finding missing CT/RingCT balances.
- Significantly faster loading on wallet startup.
- Users can now set their preferred Zerocoin denomination to be autominted by setting nautomintdenom=X in the veil.conf file, replacing X with 10, 100, 1,000, or 10,000. This setting may not work through GUI.

As always, we encourage Veil users to keep an eye on our [changelog page](https://veil-project.com/changelog/) for a summary of all major issues of which users should be aware.

Best regards,

The Veil Team