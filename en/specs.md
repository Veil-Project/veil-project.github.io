---
layout: page
lang: en
ref: specs
permalink: /specs/
title: Network Specifications
description: 'Detailed technical data for the Veil network: Hybrid consensus, fixed 10 VEIL rewards, and superblock funding.'
---

## Infrastructure Data

| Identity | Details |
| --- | --- |
| **Launch Date** | January 1, 2019 |
| **License** | MIT License |
| **Explorer** | [Official Network Explorer](https://explorer.veil-project.com/) |
| **Supply Cap** | 300,000,000 VEIL |

---

## The Monetary Stack

Veil utilizes a tiered system to separate network generation from daily utility and exchange liquidity.

| Coin Type | Role | Usage |
| --- | --- | --- |
| **RingCT** | **Network Standard** | The primary layer for exchanges, light wallets, and all private transfers. |
| **Basecoin** | **Generation Layer** | The current output of PoW mining. |
| **Stealth** | **Identity Layer** | Provides masked recipient identities; accessible via the Core Wallet. |

**Precision Control:** The Veil Core Wallet is the exclusive hub for moving funds between these layers. Manual conversion gives users full precision over their balances and privacy timing.

---

## Blockchain Data

| Feature | Specification |
| --- | --- |
| **Consensus Model** | Hybrid Proof-of-Work (PoW 50%) and Proof-of-Stake (PoS 50%) | 
| **PoW Algorithms** | SHA-256D-Veil (CPU), ProgPow-Veil (GPU), RandomX-Veil (CPU) |
| **PoS Staking** | Secured via **Light Zerocoin** within the Core Wallet | 
| **Block Reward** | 10 VEIL |
| **Funding Mechanism** | Monthly Superblock (Operations & Development) |
| **Block Time** | 60-second targets (DGW retargeting) |
| **Network Routing** | Dandelion Protocol for IP anonymity |

---

## Economics and Funding Logic

The Veil protocol follows a pre-programmed schedule designed to maintain long-term network stability.

* **The Reward State:** The network produces a stable 10 VEIL per block. This is locked until the maximum supply of 300 million is reached.
* **The Monthly Superblock:** This is the project’s payout mechanism. It automates the funding of network operations, project management, and developer support once per month.
* **Fair Staking:** Project-held operational funds do not stake. This ensures that community stakers are never disadvantaged or diluted by the project's own funding.
* **Founder Reward Status:** Successfully concluded on January 6th, 2020. The reward was terminated early by the founder to offset the 2019 exploit, protecting the 300M coin cap.

---

## Network Performance

* **Light Wallets:** RingCT-only; optimized for mobile and desktop use where portability is prioritized over staking.
* **Deterministic Backup:** All coin types are managed and recovered via a single BIP 39/44 seed phrase.

---

### Resources
* [Mining Update](/blog/pow-update/)
* [Project Releases](https://github.com/Veil-Project/veil/releases)