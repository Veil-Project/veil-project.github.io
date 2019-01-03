---
layout: page
ref: changelog
lang: en
permalink: /changelog/
title: Change Log & Major Open Issues
description: 'This page contains a changelog and list of major open issues with the Veil core wallet.'
lead: 'This page contains a changelog and list of major open issues with the Veil core wallet.'
---
# Veil Changelog & Major Open Issues
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Major Open Issues

While all issues are canonically tracked in our [GitHub Issues List](https://github.com/Veil-Project/veil/issues), following are major open wallet issues users should be aware of. If the issue is OS-specific, it will be indicated as such. Otherwise, GENERAL will be used.

- GENERAL: Address book/Contacts show the wrong address type.
- GENERAL: Three periods “…” in the address being copied to clipboard.
- GENERAL: “This is a pre-release test build” warning has not been removed from the mainnet binaries. Please disregard the warning if you are using the mainnet binaries (version 1.0.0 and above).
- GENERAL: Mining rewards are not viewable (the rewards are still there) when sent to a stealth address, i.e. addresses starting with “sv”.
- GENERAL: Every time the wallet is restarted new addresses are shown.
- GENERAL: Addresses from getnewbasecoinaddress don’t appear in Address book.
- GENERAL: Funds are display late or not displayed (still visible on [block explorer](https://explorer.veil-project.com)).
- GENERAL: Funds and fees are displayed incorrectly.
- GENERAL: The wallet auto-populates the Address book with new addresses.

## [1.0.0] - 2019-01-03

- ADDED: Initial wallet release for Windows and Linux