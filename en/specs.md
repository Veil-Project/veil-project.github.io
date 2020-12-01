---
layout: page
lang: en
ref: technology
permalink: /specs/
title: Detailed Specifications
description: 'Veil blockchain technology specifications. View Veil’s codebase, GitHub repository address, mining algorithm, consensus, license, minting, and other data.'
---

## Veil Technical Specs

| Development Data | |
| --- | --- | --- |
| Genesis block date | Jan 1, 2019 |
| Code repository | [https://github.com/Veil-Project/veil](https://github.com/Veil-Project/veil) |
| Codebase | Bitcoin Core version 0.17.1 |
| Supported OSs | Windows, macOS, Linux, paper wallet |
| Source model | Open Source |
| License | MIT License |
| Website | [https://veil-project.com/](https://veil-project.com/) |
| Explorer | [https://explorer.veil-project.com/](https://explorer.veil-project.com/) |

| Blockchain Data | |
| --- | --- | --- |
| Concensus mechanism | Hybrid Proof-of-Work and Proof-of-Stake model. | 
| Proof-of-Work | [SHA-256D (ASICs), ProgPow (GPU), RandomX (CPU)](https://veil-project.com/blog/pow-update/) |
| Proof-of-Stake | De-anonymized Zerocoin. (Will be anonymous RingCT-based in forthcoming V1.2) | 
| Block time | 60 seconds, retargeting every block. |
| Block schedule | Block rewards will stop in approximately 2037, when a max coin supply of 300 million VEIL is reached. After this hard cap is reached, network fees will continue to incentivize the network. | 
| Transaction fees | Variable based on data size.  |
| Privacy technology | Veil uses mandatory RingCT+stealth addresses to anonymize the Basecoin layer. |
| [Dandelion](/faqs/#dandelion) | Veil will use multiple stems, rather than one, to increase the level of IP anonymity and privacy. Inspired by BIP 156. |


| Zerocoin [De-Anonymized](https://veil-project.com/blog/2019-09-07-exploit-update/) | |
| --- | --- | --- |
| Zerocoin mint fee | Fixed to start, then variable at a later date.  |
| Full-time autominting | All available balances are automatically converted to Zerocoin Veil with certain exceptions. Exceptions may be special use cases for exchanges and other services as well as a designated Basecoin address for each user where Basecoin Veil will not be automatically converted into Zerocoin Veil. |
| Multi-transaction Zerocoin spending | This allows a transaction to be spread over multiple blocks. Since Zerocoin spending is computationally expensive, only up to 20 Zerocoin denominations can be sent at once in a single transaction. If 21 or more Zerocoin denominations are being sent in one transaction, it is automatically split into two or more transactions by the Multi-Transaction Zerocoin spend feature. |
| Bulletproofs | Without Bulletproofs, Zerocoin spend sizes are over 20 kilobytes, but with the implementation of Bulletproofs, we now have the Zerocoin spend sizes down to ~11.3 kilobytes. This makes for cheaper transactions. With Veil Labs, a major goal is to reduce this figure even further. |


| Miscellaneous | |
| --- | --- | --- |
| Wallet backup | The Zerocoin deterministic wallet will be integrated with Bitcoin Improvement Proposals 39 and 44 (BIP 39/44). The seed for both the Zerocoin wallet and Basecoin wallet will be the same, requiring users to only backup a single seed. |
