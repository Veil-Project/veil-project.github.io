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
- GENERAL: Mining rewards are not viewable (the rewards are still there) when sent to a stealth "sv" address. Please use a basecoin "bv" address by going to Settings > Advanced Options > Console tab > enter: getnewbasecoinaddress
- GENERAL: Funds are display late or not displayed (still visible on block explorer).
- GENERAL: Balances and fees are displayed incorrectly.
- GENERAL: The wallet auto-populates the Address book with new addresses.
- GENERAL: Sending Veil to basecoin "bv" addresses through the Send Veil screen is met with the error “Invalid data”.
- WINDOWS: Random wallet crashes.
- WINDOWS: In some cases, the wallet can't be opened on Windows 10.
- GENERAL: Transaction list shows some transactions as "Basecoin received with anonymous" or "Basecoin received with *(unknown bv address)*".
- GENERAL: Unable to convert CT into Zerocoin.

## [1.0.0] - 2019-01-01

- ADDED: Initial wallet release for Windows, MacOS X and Linux
- FIXED: Three periods “…” in the address being copied to clipboard.
- FIXED: “This is a pre-release test build” warning has not been removed from the mainnet binaries.
- FIXED: Addresses from getnewbasecoinaddress don’t appear in Address book.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen makes the wallet freeze and requires forced termination of the program.
- FIXED: Sending Veil to stealth "sv" addresses through the Send Veil screen is met with the error “The amount exceeds your balance” despite having sufficient balance.
- FIXED: Every time the wallet is restarted new addresses are shown.
