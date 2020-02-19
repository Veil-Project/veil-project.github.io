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

The Veil project is excited to provide a brief update on the design and development of a new wallet that will support the coming RingCT protocol upgrade.

As a reminder, the Veil development team is currently working on a protocol upgrade, eliminating the use of "legacy funds", i.e. Zerocoin, Basecoin and CT, keeping RingCT as the exclusive coin type in the network. As an industry first, RingCT will be used for private staking.

Most existing Veil users are aware that the user experience of current wallet has been somewhat of a pain point. The user interface isn't as friendly as we'd like, and in a couple of places, the functionality isn't working properly (i.e. sending funds).

As part of the RingCT upgrade, we're directly addressing this with the ground-up development of a brand new wallet, which will be known as the "Veil Lite Wallet".

# Scope

Given tight time constraints (the wallet needs to be ready to support the RingCT launch) the scope of work in Phase 1 of the Lite Wallet project is to create an "MVP"—i.e. a Minimum Viable Product, that includes just the functionality required to support the network.

It's probably more important to understand what an MVP does **not** include, than what it does includes. Of particular not, the Veil Lite Wallet MVP will only have a **basic visual design.** It'll still represent a stark improvement over the *current* wallet's UI, but visually will be far from what we'll release in Phase 2 of the project.

The MVP phase will provide just those features necessary to support use in the RingCT staking network. Many other new and improved features are in the works for Phase 2, and beyond.

# Technology 

The current Veil wallet, as in so many other cryptocurrency projects, is based on the original Bitcoin "Qt" wallet. While Qt is a perfectly respectable framework, there are modern alternatives that provide a wealth of benefits. 

For the coming Veil Lite Wallet, we'll be using the JavaScript-based **React Native** framework, giving us far more flexibility in terms of what we can do in the user interface, as well as providing an efficient path to extend the wallet with a mobile version sharing the same core codebase as the desktop wallet.

Initially, the Lite Wallet will be bundled with the core "veild" daemon software, that provides all of the underlying blockchain and network functionality. The wallet will allow the user to conveniently start and stop the veild daemon, as well as upgrade it whenever there's a new version of the core software available.

The overhead of running a local daemon and downloading the full Veil blockchain will be phased out in future versions, where the Lite Wallet will allow for connecting to, and integrating with, a network of remote Veil backend nodes, known as "Veil Link Servers"

# Design

The fundamental priority of the Veil Lite Wallet is **user friendliness**. If you have to read a user's manual, we've failed in our objectives! :-) 

Prioritizing the user experience means saying "no" to a lot of features, settings, and options, but we believe the "It just works" experience of day-to-day use will prove delightful. In the words of Steve Jobs, "[Focus is about saying no!][2]" Prioritizing user experience also involves intense effort to remove every point of friction in the use of the product.

Here are some examples:

1. Rather than manually requiring its discovery, the wallet will automatically ensure privacy and security for everyone on startup, prompting you for a password and automatically encrypting your data in a simple manner.

2. The wallet will provide some fun and useful visual analytics, such as graphs of staking rewards over time. At a glance, you'll feel good about earning Veil while helping to secure the network!

3. Unlike Qt wallets, sending Veil will not happen in a "tab" (a UI pattern that never made sense); rather, it'll be conducted through a modal-based workflow that'll ensure you can't get confused or make mistakes. That workflow will not involve having to think about things like esoteric "security levels" that nobody understands. Instead, it'll just set a security level automatically that makes sense for most if not all transactions.

4. The wallet will not display advanced data that's not useful or understood by the majority of users, such as peer lists. The current wallet shows a list of peers, along with "ping" times that are misunderstood by nearly everyone, resulting in a mess of inappropriate banning. This simply won't be possible in the Lite Wallet.

5. The wallet will provide its users with a convenient feature to auto-convert any legacy funds (Zerocoin, Basecoin, CT) into RingCT. The conversion will happen under the hood.

6. No longer will users have to worry about configuring and sizing their holdings for optimal staking. The wallet will just take care of that for you, automatically and behind the scenes, optimizing for both maximum staking and health of the Veil network.

7. Networks sometimes fork, and users need to know this. The current wallet requires you to find the "current block hash", and then compare that with an explorer somewhere to know if you're forked. Who understands that? Practically nobody. And that's not something people *should have to understand.* We're working to make sure the Lite Wallet can monitor itself, and **let you know if it believes it's forked.** Isn't that just how it should be? :-)

These are just a few examples of the ideas, trade-offs and decisions being taken in the Lite Wallet project that are in the interest of optimizing the user experience. If you'd like to take a deep dive into the level of internal debate and trade-offs focused on user experience, we encourage you to read this [internal publication][1] arguing for the removal of an internally proposed feature that would likely create confusion for 95% of all users, to address an extremely rare edge case affecting only a few.

# Sneak Peek

We know that the Veil community would like to see faster development progress, but we're working on some really great technology, both in terms of the fundamental protocol itself, but also extending to supporting projects like the Lite Wallet and the remote Link Server. Great software takes *a lot of time*, so we ask for your patience, and are confident that it'll be worth the wait!

In the meantime, we'll leave you with short video sneak peak of the current state of the Lite Wallet. Enjoy!

**Video Preview Goes Here**

[1]: https://clipz.in/veil-change-reserve.html

[2]: https://fs.blog/2011/09/steve-jobs-saying-no/