---
layout: post
lang: en
title: 'Veil Core mandatory wallet update v1.3.0 is now available'
date:   2022-08-22
author: sean
permalink: /news/2022-wallet-130/
categories: news
excerpt: 'Veil users and services are required to install this mandatory wallet version update before protocol enforcement at block 2,000,000 close to November 2022.'
description: 'It is necessary to update to this mandatory wallet version as soon as possible, especially for those operating exchanges, mining pools, and any other services in the Veil ecosystem.'
---

This is a MANDATORY update that will enforce a hard fork in or near November!

Veil Core wallet v1.3.0 is a mandatory update that extends Proof of Work mining from block 2,000,000 (November 2022) until the end of Veil's Supply (block 9,816,000).
This change has been included in our master branch for a couple of months, but not in any previous release. To be sure, you need to upgrade.

All exchanges, services, miners, stakers, and all users need to upgrade before block 2 million, expected by November, regardless of whether we have another mandatory upgrade activating by then.

This release also creates a RingCT light-wallet API enabling Zelcore to include Veil in their wallet using RingCT privacy.

- What this feature does: Zelcore or another wallet using the same API can connect to a Veil core wallet that is launched in light wallet API mode, to enable the third party light wallet to do RingCT transactions and to display the wallet balances.

- What this feature does not do: This does not make the Veil core wallet a light wallet in itself.

Miners can now see which Proof of Work type they mined any particular basecoin mining win.

A fix is included for some macOS segmentation faults.

Some refactoring has been committed specific to the future RingCT staking functionality.

The scroll bar height has been given a minimum height so that wallets with many transactions do not find themselves with a microscopic and unusable scroll bar!



**Download Veil Core wallet v1.3.0 and read the full release notes [here](https://github.com/Veil-Project/veil/releases/tag/v1.3.0.0)**. Check our Veil support article for [how to update your Veil wallet](https://veil.freshdesk.com/support/solutions/articles/43000528762-how-to-update-upgrade-your-veil-wallet).

Still need assistance? Join the Veil community on [Discord](https://discord.veil-project.com)!