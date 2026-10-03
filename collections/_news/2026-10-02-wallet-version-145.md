---
layout: post
lang: en
title: 'Veil Core mandatory wallet update v1.4.5 is available'
date:   2026-10-02
author: sean
permalink: /news/2026-wallet-145/
categories: news
excerpt: 'A MANDATORY upate has been released to fix a potential security vulnerability, where an attacker may be able to relay a valid block and mark it as invalid, thereby stalling a node that runs old code.'
description: 'Veil developers ohcee and Nik343 identified and fixed a potential attack vector prompting this mandatory fix version 1.4.5, specifically, some fields were not covered by the block hash, so an attacker relaying a block could potentially change them without changing the hash! The block could then treat that altered information as proof that the block is invalid, reject it, and then get stuck and unable to accept the valid block accepted by nodes that did not receive the mutated version.'
---

This MANDATORY update [1.4.5.0 Veil core wallet update — download from Github](https://github.com/Veil-Project/veil/releases/tag/v1.4.5.0) fixes a potential vulnerability by refusing relayed mutations of fields that the block hash does not cover. 

After the PoW update (from X16RT to the current three mining algorithms), stake type, the proof-of-full-node fields, pre-update hashVeilData on stake blocks, and the post-update accumulator body can be rewritten without moving the hash.

This is fixed by rejecting those copies as a possible corruption before storage, and only connecting the copy that this call stored.

We wish to thank the people involved in coding, testing, and reviewing this wallet, especially ohcee.

Updating the wallet software is as simple as replacing the program files veild, veil-qt, veil-cli, .... There is no need to touch your data files. Normal data backup procedures apply.

If you have not already updated to the previous v1.4.4.0 release you will be pleased to discover a great many improvements to the wallet. (See the News post about [v1.4.4.0.](/news/2026-wallet-144/))

**Download Veil Core wallet v1.4.5.0 and read the full release notes [here](https://github.com/Veil-Project/veil/releases/tag/v1.4.5.0)**. Check our Veil support article for [how to update your Veil wallet](https://veil.freshdesk.com/support/solutions/articles/43000528762-how-to-update-upgrade-your-veil-wallet).

For any assistance, join the Veil community on [Discord](https://discord.veil-project.com) or refer to the Veil Knowledgebase at [https://veil.freshdesk.com/](https://veil.freshdesk.com/support/home)!