---
layout: page
lang: en
ref: technology
permalink: /specs/
title: Detailed Specifications
description: 'Veil blockchain technology specifications. View Veil’s codebase, GitHub repository address, mining algorithm, consensus, license, minting, and other data.'
---
The table below captures the detailed technical specifications relevant to Veil and its network. First, however, a note about Zerocoin.

## Replacing Zerocoin as a core technology

Half a year after the launch of Veil in 2019, a series of vulnerabilities were discovered in the Zerocoin library which sits at the core of most Zerocoin-based protocol implementations, including Veil’s. In order to immediately protect Veil user funds, the project released an update that preserves the functional characterics of Zerocoin, but removes its unlinkability to original mints. 

After review, and community discussion, the Veil project, along with a number of others, concluded that Zerocoin can not be relied upon to form the anonymity core of the protocol, and at the time of this writing, the project is [assessing a number of alternatives](https://veil-project.com/blog/2019-05-09-state-of-veil/).

Zerocoins minted in Veil from RingCT, still carry the anonymity inherent in RingCT, and so during the interim Veil users have some level of anonymity in spending and staking with Zerocoin if originally minted from RingCT.

The remainder of this page describes how Zerocoin is used in the Veil network *today*, but the reader should be aware that at some point, likely during 2019, Zerocoin will be replaced.

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
| Concensus dechanism | Hybrid Proof-of-Work and Proof-of-Stake model. | 
| Proof-of-Work | [X16RT Mining Algorithm](/faqs/#x16rt) |
| Proof-of-Stake | Exclusively with Zerocoin. | 
| Block time | 60 seconds, retargeting every block. |
| Block schedule | Block rewards will stop in approximately 2037, when a max coin supply of 300 million VEIL is reached. After this hard cap is reached, network fees will continue to incentivize the network. | 
| Transaction fees | Variable based on data size.  |
| Privacy technology | Veil uses mandatory RingCT+stealth addresses to anonymize the Basecoin layer. When 10 or more Basecoin Veil is deposited to a wallet, it will be autominted into Zerocoin Veil. |
| [Dandelion](/faqs/#dandelion) | Veil will use multiple stems, rather than one, to increase the level of IP anonymity and privacy. Inspired by BIP 156. |


| Zerocoin | |
| --- | --- | --- |
| Zerocoin mint fee | Fixed to start, then variable at a later date.  |
| Full-time autominting | All available balances are automatically converted to Zerocoin Veil with certain exceptions. Exceptions may be special use cases for exchanges and other services as well as a designated Basecoin address for each user where Basecoin Veil will not be automatically converted into Zerocoin Veil. |
| Multi-transaction Zerocoin spending | This allows a transaction to be spread over multiple blocks. Since Zerocoin spending is computationally expensive, only up to 20 Zerocoin denominations can be sent at once in a single transaction. If 21 or more Zerocoin denominations are being sent in one transaction, it is automatically split into two or more transactions by the Multi-Transaction Zerocoin spend feature. |
| Precomputed Zerocoin spends for faster spending | Veil precomputes Zerocoin spends, which automatically processes spend data in the background and stores it in a database so that when a user decides to spend their coins, there is less computation involved.|
| Bulletproofs | Without Bulletproofs, Zerocoin spend sizes are over 20 kilobytes, but with the implementation of Bulletproofs, we now have the Zerocoin spend sizes down to ~11.3 kilobytes. This makes for cheaper transactions. With Veil Labs, a major goal is to reduce this figure even further. |


| Miscellaneous | |
| --- | --- | --- |
| Wallet backup | The Zerocoin deterministic wallet will be integrated with Bitcoin Improvement Proposals 39 and 44 (BIP 39/44). The seed for both the Zerocoin wallet and Basecoin wallet will be the same, requiring users to only backup a single seed. |
