---
layout: page
lang: en
ref: technology
permalink: /technology/
title: Veil Technology
description: 'Veil is a privacy-focused cryptocurrency built on Bitcoin, with RingCT for private transfers and a hybrid PoW/PoS consensus.'
lead: 'Discover how Veil combines Bitcoin’s security with modern privacy tooling and a hybrid consensus design.'
---

## Introduction & objectives

Across the landscape of privacy-focused cryptocurrencies, a number of general approaches have been taken—each with its own benefits and trade-offs.

Veil’s goal is to deliver a secure, usable privacy coin where private usage is practical for everyday users, while keeping a conservative foundation and a focus on long-term maintainability.

## Technology

- At its core, Veil is built on **Bitcoin 0.17.1**, providing a proven and conservative foundation.

- For on-chain privacy, Veil integrated **RingCT** (from Particl), enabling amounts to be hidden and allowing users to transact using **stealth (“sv…”) addresses**.

- Veil uses **light Zerocoin** as its current **staking mechanism**. Light Zerocoin is designed for staking and **does not provide transaction privacy by itself**.  
  However, when users **mint light Zerocoin from RingCT funds**, the original source of funds is **less linkable on-chain prior to staking**, because the mint is funded by a RingCT transaction. (Veil also supports non-RingCT funds such as Basecoin/stealth balances, so minting can be done from different sources depending on a user’s wallet state and workflow.)

- Veil includes a **de-anonymized, safety-focused Zerocoin implementation** compared to legacy “fully anonymous Zerocoin” designs, reflecting security lessons from the broader Zerocoin ecosystem.

- Veil implements a hybrid **Proof-of-Work (PoW)** and **Proof-of-Stake (PoS)** consensus system, supporting fair distribution and strong protocol security.

- Veil supports **three separate PoW algorithms** alongside PoS, to encourage broader participation across different hardware classes. See: [PoW update](/blog/pow-update/).

- Veil uses **Dandelion** to reduce the ability to trace a transaction back to its originating network node.

- The adoption of **Bulletproofs** has been explored as a way to reduce transaction sizes.

- Research has also tracked advanced proof systems (including **Supersonic**) as part of long-term exploration of smaller, efficiently verifiable zero-knowledge proofs.

## User experience

Veil places great emphasis on user experience. For example, the Veil Core wallet supports a single BIP-0039/BIP-0044 **Deterministic Seed** from which its entire wallet can be restored. We still recommend occasional file backups (available by clicking “Backup Wallet” in the Settings screen) for faster restoration.

## The Veil emission schedule

![](/uploads/emission-schedule-white-is_obsolete_.jpg)

[Edit December 2022: Correcting the emissions schedule to account for well-publicised events in 2019 relating to zerocoins, and leading to the founder giving up the founder reward. _For the benefit of newer Veil users, and a reminder to old, here is the announcement relating to it:_ [2019-08-exploit](/news/2019-08-exploit/).] Related details also are in: [2019-07-07-exploit-update](/blog/2019-09-07-exploit-update/). To see how this has played out in the actual Veil Superblocks, and where the founder reward was eliminated, check this retrospective superblocks data ([spreadsheet PDF](/uploads/Superblocks.202502.pdf)).

As summarized in the table, the Veil coin emission schedule includes:

- A declining and capped contribution to the **founder**, to recover the seed investment from which the project has been bootstrapped. _The final Founder reward was paid in the first anniversary Superblock on January 6th, 2020 for reasons specified above._

- A declining but uncapped contribution to the **Veil Labs**, a separate entity that will be established to provide ongoing research and development in privacy technologies related to cryptocurrencies.

- A front-heavy, declining and uncapped contribution to the **Veil operations budget**, funding operations activities such as core network and wallet development, project management, online user support, bounties, marketing and partnerships.

- It should be noted that the funds allocated to the Labs and operations budgets *will not stake*, meaning those funds will not disadvantage those staking in the network. Salaries paid are however free to stake.
