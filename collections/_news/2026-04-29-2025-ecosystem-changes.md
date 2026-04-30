---
layout: post
lang: en
title: 'Veil ecosystem developments in 2025.'
date: 2026-04-29
author: sean
permalink: /news/2025update/
categories: news
excerpt: "Some important developments in 2025 were publicised elsewhere, but should have been added here on the website."
description: "In 2025 the TradeOgre exchange closed without notice, we exited from Probit with notice, Veil finally got added to the Zelcore wallet, and the active market data websites need to be updated as NonKYC exchange is not feeding API data to CoinGecko and CMC until our trade volume is improved for the sake of the ranking of the exchange. While the core of the Veil community are well accustomed to running a full node wallet and mining and staking their funds, those who against advice keep funds on exchanges can now hold their Veil very conveniently without having to maintain a full blocks database!"
---

## Announcements were made on Veil's Discord, but not here on the website

As mentioned in our recent blog post [2026 Veil catchup](/blog/2026-Veil-catchup/) in 2025 TradeOgre exchange closed down and some Veil users will have lost their funds on the exchange. This was reportedly due to a large Bitcoin theft, which send amounts to several exchanges, including some to TradeOgre. We heard that TradeOgre refused to hand over the account holder to the Canadian authorities as the other exchanges had done, and when they demanded that TradeOgre turn over their entire server infrastructure to them TradeOgre disappeared rather than to comply! So, the effect is, that your data is safe, but your funds are gone. That exchange didn't collect KYC anyway, but they would have had metadata and information about wallet addresses and such that Canada would have liked to have recorded.

Veil trading on Probit Global exchange ended. As trade volume on this KYC-collecting exchange continued to decline since KYC/AML requirements had been enforced in Korea, most of us had progressively stopped trading on the exchange. In 2025 it was no longer viable to continue on Probit. People were notified on Discord, if not directly by Probit, and should have all withdrawn their funds.

## The long-awaited addition of Veil to the Zelcore multi-currency wallet was finally completed

A number of people connected with the Veil team had also been users of the Zelcore wallet, and the Zelcore team completed adding Veil at last! This provides the same benefit as Veil's dedicated light wallet, but for people who would like to manage their funds along with those in other coins. Download the Zelcore wallet from: https://zelcore.io/

### Our dedicated light wallet has continued to be updated and provides good service

This, as the Zelcore wallet, is a non-custodial light wallet. Your keys are your own, and no-one else holds them.
Being a light wallet, the back-end infrastructure is provided by other people, but _only you_ hold your coins and can spend your coins.

 - [Github releases](https://github.com/steel97/veil_wallet/releases) has all of the code for all versions of Veil Wallet, iOS, Android, Windows, and Linux!
 - Android
    - [Google Play Store, Veil Wallet](https://play.google.com/store/apps/details?id=org.veilproject.wallet)
    - F-Droid (Let's know if you want the Android Veil Wallet on [F-Droid](https://f-droid.org))
 - iOS (Apple mobile devices)
    - App Store (Veil Wallet is not on the Apple App Store)
    - [AltStore](https://altstore.io) enables you to "side-load" Veil Wallet from the Github releases page onto your iPhone or iPad. 

### How can I install it?

See our user guides
 - [Sideloading the Veil Light Wallet on iPhone](/uploads/setup_guides/Veil-light-wallet-iPhone-sideload.html) using AltStore.
 - Installing the Veil Wallet via [the Google Play Store](https://play.google.com/store/apps/details?id=org.veilproject.wallet) is automatic. When starting it for the first time, set the language and any other initial settings and either create a new wallet or restore an existing one, remembering to always keep an encrypted or safely stored copy of your seed phrase when you set it up. The light wallet only uses Veil as RingCT. If you restore an old or existing wallet, if there is anything other than RingCT, such as basecoin, CT, or zerocoins, _the light wallet will only see and handle the RingCT balance._ This ensures your Veil remains fully private. **Exchanges or other wallets that don't offer** stealth/RingCT Veil deposits and withdrawals using the sv (stealth Veil) address will be unavailable to you with this wallet. Not to worry! [NonKYC exchange](https://nonkyc.io) supports private deposits and withdrawals using the stealth Veil address! (Make sure to keep deposits above 200 or 300 Veil and use RingCT, not just plain CT!)
 - Installing the [Veil Light Wallet on Ubuntu Linux](/uploads/setup_guides/Veil-light-wallet-Linux.html).
 - Installing the Veil Light Wallet in Windows and macOS should also be pretty straightforward, but there isn't a special guide for it yet.

## Veil is currently ONLY on one exchange. Don't buy "Veil" on any unknown exchange or you may not be buying the real Veil.

Veil is now only on [NonKYC](https://nonkyc.io) exchange.

We are looking forward to new listings and welcome <em>free</em> listings, but particularly to Basic Swap DEX in the reasonably near future! I'm sure that [they](https://basicswapdex.com) will welcome any new Beta testers!


Have an opinion on any of these things? Weigh in on [Veil's Discord server!](http://discord.veil-project.com/)

Future mandatory updates as presently planned should only be expected for either a rebase of the wallet code and a change in the budget or foundation multisignature addresses, or to improve Post-Quantum Cryptography security. The replacement of zerocoin staking with RingCT staking has been put aside, as zerocoin staking is working well, and the current economy doesn't support the required development.


## Veil invites new developers to contribute work on rebasing the code to more modern Bitcoin developments and potential quantum-resistant updates.

Additional exposure to other technologies may be available if you contribute to and test Veil's approaching addition to Basic Swap DEX, or if you work on any other platform that Veil may be added to.

