---
layout: post
lang: en
title:  Preview of the Veil Lite Wallet
date:   2020-02-19
author: gabrielnergaard
permalink: /blog/lite-wallet-preview/
categories: test
excerpt: 'In this article, we discuss the coming Veil Lite Wallet, including a video sneak peek.'
description: 'In this article, we discuss the coming Veil Lite Wallet, including a video sneak peek.'
---
## Introduction

My name is Gabriel Nergaard, and I'm a member of the Veil team, and currently leading the design and development of a new Veil wallet that will support the coming RingCT protocol upgrade.

As a reminder, the Veil developers are currently working on a protocol upgrade, eliminating the use of what we'll refer to as "legacy funds", i.e. Zerocoin, Basecoin and CT, keeping RingCT as the exclusive coin type in the network. And as an industry first, RingCT will be used for private staking.

As all existing Veil users know, the current wallet has been a pain point. It's broken in places (sending, for example) and the user interface isn't very friendly. As part of the RingCT upgrade, we're directly addressing this with the ground-up development of a new wallet, which will be known as the "Veil Lite Wallet".

# Scope

Given the time constraints, i.e. that the wallet needs to be ready to support the RingCT launch, the scope of work is to create an "MVP", i.e. a Minimum Viable Product. 

It's probably more important to understand what an MVP does *not* include, than what it includes. In this case, you should understand that the Veil Lite Wallet MVP will *not* have a polished visual design. It'll be an improvement on the current wallet UI for sure, but will be far visually from what will be coming in Phase 2 of the project.

In addition, several nice-to-have features will be missing from the initial MVP version of the wallet. In short, the MVP will have just those features necessary to support the RingCT network.

# Technology 

The current Veil wallet, like that in so many other cryptocurrency projects, is based on the original Bitcoin "Qt" wallet. While Qt is a perfectly respectable framework, there are modern alternatives that provide a wealth of benefits. For the coming Veil Lite Wallet, we'll be using the JavaScript-based React Native framework, giving us far more flexibility in terms of what we can do in the user interface, as well as providing an efficient path to extend the wallet with a mobile version based on the same core codebase as the desktop wallet.

Initially, the Lite Wallet will be bundled with the core "veild" daemon software, that provides all of the underlying blockchain and network functionality. The wallet will allow the user to conveniently start and stop the veild daemon, as well as upgrade it whenever there's a new version of the core software available.

Future versions of the Lite Wallet, including the mobile wallet, will be able to avoid running a local daemon altogether (and the associated full blockchain download), by connecting to remote Veil backend nodes, that will be known as "Veil Link Servers". Users will be able to choose to run their own Link Servers, or connect to any operated by the Veil network itself.

# Design

The fundamental priority of the Veil Lite Wallet is user friendliness. If you have to read a user's manual, we've failed in our objectives! :-) This priority means saying "No" to a lot of features, settings, options, etc. but we believe the "It just works" experience of the day to day use of the wallet will, for the large majority of users, prove delightful.

Here are some example:

1. The wallet will not provide an encryption "option". Rather, it'll require you to encrypt and create a password on first launch, thereby ensuring wallet protection automatically, for everyone.

2. The wallet will provide some fun and useful visual analytics, such as graphs of staking rewards over time.

3. Unlike Qt wallets, sending Veil will not happen in a "tab" (a UI pattern that never made sense); rather, it'll be conducted through a modal-based workflow that'll ensure you can't make any mistakes. That workflow will not involve having to think about esoteric "security levels" that nobody understands. Instead, it'll set a security level automatically that makes sense for most if not all transactions.

4. The wallet will not display advanced data that's not useful or understood by the majority of users, such as list of peers. The current wallet shows a list of peers, along with "ping" times that are misunderstood by nearly everyone, resulting in the inappropriate banning of peers. This simply won't be possible in the Lite Wallet.

5. The wallet will provide its users with a convenient feature to auto-convert any legacy funds (Zerocoin, Basecoin, CT) into RingCT. The conversion will happen under the hood.

6. No longer will users have to worry about sizing their holdings for optimal staking. The wallet will just take care of that for you, automatically and behind the scenes.

7. Networks sometimes fork, and users need to know this. The currently wallet requires you to access to the "current block hash", and then compare that the current block hash in an explorer somewhere to know if you're forked. Who understands that? Practically nobody. And that's not something people *should have to understand.* The Lite Wallet will monitor itself, and *let you know if it believes it's forked.* (Isn't that just how it should be? :-)

These are just a few examples of the ideas, trade-offs and decisions being taken in the Lite Wallet in the interest of optimizing the user experience. If you'd like to take a deep dive into the level of internal debate and trade-offs focused on user experience, you can read this [internal publication][1] arguing for the removal of an internally proposed feature that would likely create confusion for 95% of all users, to address an extremely rare edge case.

# Sneak Peek

We know that the Veil community would like to see faster progress, but we're working on some really great technology, both in terms of the fundamental protocol itself, but also extending to supporting projects like the Lite Wallet and the remote Link Server. Great software takes *a lot of time*, so we ask for your patience, and are confident that it'll be worth the wait!

In the meantime, we'll leave you with short video sneak peak of the current state of the Lite Wallet. Enjoy!

**Video Preview Goes Here**

[1]: https://clipz.in/veil-change-reserve.html