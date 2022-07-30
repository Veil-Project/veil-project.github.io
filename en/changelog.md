---
layout: page
ref: changelog
lang: en
permalink: /changelog/
title: Changelog
description: 'This page contains a changelog and list of major open issues with the Veil core wallet.'
lead: 'This page contains a changelog and list of major open issues with the Veil core wallet.'
---
All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Major Open Issues

While all issues are canonically tracked in our [GitHub Issues List](https://github.com/Veil-Project/veil/issues), the following are major open wallet issues users should be aware of. If the issue is OS-specific, it will be indicated as such. Otherwise, GENERAL will be used.

- ~~ GENERAL: Address book/Contacts show the wrong address type. ~~
- GENERAL: Mining rewards can only be received through basecoin "bv" addresses which can be generated with console command: `getnewbasecoinaddress`
- GENERAL: Funds are displayed late or not displayed (still visible on block explorer). -- Set Hide Orphans to false
- GENERAL: Balances and fees are displayed incorrectly.
- ~~WINDOWS: Autominting denomination resets to 10 after restarting the wallet. Set your preferred automint denomination by setting `nautomintdenom=X` (where `X` is 10, 100, 1000, or 10000) in the veil.conf file.~~
- GENERAL: Wallet transaction overview sometimes displays incorrect labels and transaction amounts. For accurate amount information, check transaction ID on the [Veil Block Explorer](https://explorer.veil-project.com/).
- ** There has evidently been a gap in maintaining this changelog. Please refer to Github for issues. **

## [1.0.3] - 2019-04-27
- ADDED: Activation of [Zerocoin Limp Mode](https://github.com/Veil-Project/veil/pull/544)
- ADDED: Zerocoin Precomputed Spends
- ADDED: [Autospend feature](https://veil-project.com/blog/2019-07-autospend/)
- FIXED: Wallet shuts down by itself at 95%+ synchronization.

## [1.0.2] - 2019-02-28
- FIXED: In some cases, CT can't be minted or sent.

## [1.0.1] - 2019-01-25
- ADDED: Support for VIP-1 Soft Fork.
- ADDED: Increased Spam and Denial of Service Protection.
- FIXED: The wallet auto-populates the Address book with new addresses.
- FIXED: Random wallet crashes on Windows.
- FIXED: In some cases, the wallet can't be opened on Windows 10.
- FIXED: Sending RingCT/CT to Basecoin does not display correctly in the balance.
- FIXED: Unable to convert RingCT/CT into Zerocoin.
- FIXED: Send Veil screen is sometimes not functional.
- FIXED: The wallet sometimes crashes on startup on MacOS X.

## [1.0.0] - 2019-01-01

- ADDED: Initial wallet release for Windows, MacOS X and Linux.
- FIXED: Three periods “…” in the address being copied to clipboard.
- FIXED: “This is a pre-release test build” warning has not been removed from the mainnet binaries.
- FIXED: Addresses from `getnewbasecoinaddress` don’t appear in Address book.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen makes the wallet freeze and requires forced termination of the program.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen is met with the error “The amount exceeds your balance” despite having sufficient balance.
- FIXED: Every time the wallet is restarted new addresses are shown.