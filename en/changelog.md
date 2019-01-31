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

- GENERAL: Address book/Contacts show the wrong address type.
- GENERAL: Mining rewards can only be received through basecoin "bv" addresses which can be generated with console command: getnewbasecoinaddress
- GENERAL: Funds are display late or not displayed (still visible on block explorer).
- GENERAL: Balances and fees are displayed incorrectly.
- GENERAL: Send Veil screen is not functional. Refer to [this article](https://veil.freshdesk.com/support/solutions/articles/43000474291-different-methods-sending-coins-from-debug-console-) for the various console commands to send funds.
- GENERAL: Transaction list shows some transactions as "Basecoin received with anonymous" or "Basecoin received with *(unknown bv address)*".
- GENERAL: A display issue where Zerocoin Mint transactions show a send amount equal to the basecoin minted plus the 0.01 minting fee (i.e. -100.010000000 VEIL), instead of just the 0.01 minting fee.
- MacOS X: The wallet sometimes crashes on startup.

## [1.0.1] - 2019-01-25
- ADDED: Support for VIP-1 Soft Fork.
- ADDED: Increased Spam and Denial of Service Protection.
- FIXED: The wallet auto-populates the Address book with new addresses.
- FIXED: Random wallet crashes on Windows.
- FIXED: In some cases, the wallet can't be opened on Windows 10.
- FIXED: Sending RingCT/CT to Basecoin does not display correctly in the balance.
- FIXED: Unable to convert RingCT/CT into Zerocoin.

## [1.0.0] - 2019-01-01

- ADDED: Initial wallet release for Windows, MacOS X and Linux.
- FIXED: Three periods “…” in the address being copied to clipboard.
- FIXED: “This is a pre-release test build” warning has not been removed from the mainnet binaries.
- FIXED: Addresses from getnewbasecoinaddress don’t appear in Address book.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen makes the wallet freeze and requires forced termination of the program.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen is met with the error “The amount exceeds your balance” despite having sufficient balance.
- FIXED: Every time the wallet is restarted new addresses are shown.