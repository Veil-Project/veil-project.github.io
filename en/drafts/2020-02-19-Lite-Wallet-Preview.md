---
layout: post
lang: en
title:  Say hello to Veil X
date:   2020-02-19
author: gabrielnergaard
permalink: /blog/veil-x-preview/
categories: test
excerpt: 'The Veil team has been working on something new. Something exciting. A new way to experience Veil. Say hello to Veil X.'
description: 'The Veil team has been working on something new. Something exciting. A new way to experience Veil. Say hello to Veil X.'
---
## Introduction

The Veil user experience team has been working on something new. Something exciting. A new way to experience Veil. Today we're going to give you a sneak peek at Veil X.

The Veil wallet you've been using until now is the *Veil Core Wallet*, based on technology shared by many crypto projects, and engineered to expose all the technical services available on the network. Providing access to *everything*, however, comes at a cost—and that is user experience. As expected by the Pareto Principle, the majority of the wallet's advanced features are used rarely, and complicate the user experience in day-to-day use.

Veil X is a new wallet experience, focusing exclusively on the user experience. While the Core Wallet will always remain available for the advanced user, we believe Veil X will be the wallet most people choose for daily use. Our aim is to set the standard for user friendliness in the crypto industry!

With that, let's take a sneak peek at the coming Veil X Wallet.

# Scope

As a reminder, the Veil development team is currently working on a protocol upgrade, transforming "legacy funds", i.e. Zerocoin, Basecoin, and CT, into just RingCT as the exclusive coin type in the network. A mechanism to convert legacy funds to RingCT will naturally be included as part of the upgrade. As an industry first, RingCT will be used for private staking.

Given tight time constraints (that Veil X needs to be ready to support the RingCT launch) the scope of work in Phase 1 of the Veil X Wallet project is to create an "MVP"—i.e. a Minimum Viable Product—that includes just the functionality required to support the network.

It's probably more important to understand what an MVP does **not** include, than what it does includes. Of particular note, the Veil X Wallet MVP will only have a **basic visual design.** It'll still represent a stark improvement over the Core wallet's UI, but visually will be far from what we'll release in Phase 2 of the project.

The MVP phase will provide just those features necessary to support use in the RingCT staking network. Many other new and improved features are in the works for Phase 2 and beyond.

# Technology 

The Veil Core Wallet, as in so many other cryptocurrency projects, is based on the original Bitcoin "Qt" wallet. While Qt is a perfectly respectable framework, there are modern alternatives that provide a wealth of benefits. 

For the coming Veil X Wallet, we'll be using the JavaScript-based **React** framework. This gives us far more flexibility in terms of what we can do in the user interface, as well as providing an efficient path to extend the wallet with a mobile version, sharing the same core codebase as the desktop wallet.

Initially, the Veil X Wallet will be bundled with the core "veild" daemon software that provides all of the underlying blockchain and network functionality. The wallet will allow the user to conveniently start and stop the veild daemon, as well as upgrade it whenever there's a new version of the core software available.

# Design

The fundamental priority of the Veil X Wallet is **user friendliness**. If you have to read a user's manual, we've failed in our objectives! :-) 

Prioritizing the user experience means saying "no" to a lot of features, settings, and options, but we believe the "It just works" experience of day-to-day use will prove delightful. In the words of Steve Jobs, "[Focus is about saying no!][2]" Prioritizing user experience also involves intense effort to remove every point of friction in the use of the wallet.

Here are some examples:

1. The MVP version of the Veil X Wallet will connect to a locally running "veild" daemon, just like the Core Wallet. However, one of the main benefits of the Veil X Wallet will later, in Phase 2, be the option to operate in a "Lite Wallet" mode, connecting to a network of Veil backend nodes, known as "Veil Link Servers", saving the user from having to download the full blockchain.

1. Rather than manually requiring its discovery, the wallet will automatically ensure privacy and security for everyone on startup, prompting you for a password and automatically encrypting your data in a simple manner.

2. The wallet will provide some fun and useful visual analytics, such as graphs of staking rewards over time. At a glance, you'll feel good about earning Veil while helping to secure the network!

3. Unlike Qt wallets, sending Veil will not happen in a "tab" (a UI pattern that never made sense); rather, it'll be conducted through a modal-based workflow that'll ensure you can't get confused or make mistakes. That workflow will not involve having to think about things like esoteric "security levels" that nobody understands. Instead, it'll just set a security level automatically that makes sense for most, if not all, transactions.

4. The wallet will not display advanced data that's not useful or understood by the majority of users, such as peer lists. The current wallet shows a list of peers, along with "ping" times that are misunderstood by nearly everyone, resulting in a mess of inappropriate banning. This simply won't be possible in the Veil X Wallet.

5. The wallet will provide its users with a convenient feature to auto-convert any legacy funds (Zerocoin, Basecoin, CT) into RingCT. The conversion will happen under the hood.

6. Networks sometimes fork, and users need to know this. The current wallet requires you to find the "current block hash", and then compare that with an explorer somewhere to know if you're forked. Who understands that? Practically nobody. And that's not something people *should have to understand.* We're working to make sure the Veil X Wallet can monitor itself, and **let you know if it believes it's forked.** Isn't that just how it should be? :-)

These are just a few examples of the ideas, trade-offs and decisions being taken in the Veil X Wallet project that are in the interest of optimizing the user experience. If you'd like to take a deep dive into the level of internal debate and trade-offs focused on user experience, we encourage you to read this [internal publication][1] arguing for the removal of an internally proposed feature that would likely create confusion for 95% of all users, to address an extremely rare edge case affecting only a few.

# Sneak peek

We know that the Veil community would like to see faster development progress, but we're working on some really great technology, both in terms of the fundamental protocol itself, but also extending to supporting projects like the Veil X Wallet and the remote Link Server. Great software takes *a lot of time*, so we ask for your patience, and are confident that it'll be worth the wait!

In the meantime, we'll leave you with some sneak peek screenshots of the current state of the Veil X Wallet. Enjoy!

- The welcome screen:

![](/uploads/blog/2020-03-01-wallet-01.png)

- Seed creation and confirmation:

![](/uploads/blog/2020-03-01-wallet-02.png)

![](/uploads/blog/2020-03-01-wallet-03.png)

- Encrypt and protect your wallet with a password:

![](/uploads/blog/2020-03-01-wallet-04.png)

- New wallet blank slate screen:

![](/uploads/blog/2020-03-01-wallet-05.png)

- Unlock wallet to generate a new receive address:

![](/uploads/blog/2020-03-01-wallet-06.png)

- Transactions:

![](/uploads/blog/2020-03-01-wallet-07.png)

- Application menu:

![](/uploads/blog/2020-03-01-wallet-08.png)

- Advanced console:

![](/uploads/blog/2020-03-01-wallet-09.png)

![](/uploads/blog/2020-03-01-wallet-10.png)

*Gabriel Nergaard, Veil Team Member, is the design and development lead overseeing the Veil X Wallet team, being developed to support the coming RingCT protocol upgrade.*

[1]: https://clipz.in/veil-change-reserve.html

[2]: https://fs.blog/2011/09/steve-jobs-saying-no/