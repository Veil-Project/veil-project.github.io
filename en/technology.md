---
layout: page
lang: en
ref: technology
permalink: /technology/
title: Veil Technology
description: 'Veil is working towards a secure, anonymous coin providing full-time privacy.'
lead: 'Discover how the Veil Project is leveraging state-of-the-art technologies to set a new standard in the field of privacy-focused cryptocurrencies.'
---
## Introduction & objectives

Across the landscape of privacy-focused cryptocurrencies, a number of general approaches have been taken, each with its own benefits and trade-offs.

The Veil Project is working to improve the state of privacy-focused cryptocurrencies by creating a secure, highly anonymous coin that provides full-time privacy. In addition, Veil offers a user experience suited to the masses with self-funding to support long-term research and development by a dedicated team of researchers and blockchain developers.

This document introduces the project, its technologies and its approach to long-term sustainability.

## Core network technology

In its first implementation, Veil combined the world’s most secure blockchain software, **Bitcoin version 0.17.1**, with the cryptography-based privacy protocol, **Zerocoin** and the Particl project's **RingCT** implementation.

- Over a decade in operation, the **Bitcoin** core software has demonstrated itself to be the most secure and battle-tested blockchain software in existence.

- In order to provide for “always-on” privacy, Veil added **RingCT** privacy from Particl to its Basecoin transactions, such that all transaction components in the Veil network as anonymous as technology today can provide for.

- The **Zerocoin** protocol is based on **zero-knowledge proofs**, a cryptographic method which allows a computation to be proven to have taken place, without knowledge of its inputs and outputs. In the case of a cryptocurrency, this computation would be a value transaction, in which the sender, receiver and amount transacted can remain anonymous.

- Support for the **Dandelion protocol** makes it nearly impossible to trace a transaction back to its source node on the network.

- Finally, **Bulletproofs** technology will be adopted to ensure minimal transaction sizes.

## Replacing Zerocoin as a core technology

Half a year after the launch of Veil in 2019, a series of vulnerabilities were discovered in the Zerocoin library which sits at the core of most Zerocoin-based protocol implementations, including Veil’s. In order to immediately protect Veil user funds, the project released an update that preserves the functional characterics of Zerocoin, but removes its unlinkability to original mints. 

After review, and community discussion, the Veil project, along with a number of others, concluded that Zerocoin can not be relied upon to form the anonymity core of the protocol, and at the time of this writing, the project is [assessing a number of alternatives](https://veil-project.com/blog/2019-05-09-state-of-veil/).

Zerocoins minted in Veil from RingCT, still carry the anonymity inherent in RingCT, and so during the interim Veil users have some level of anonymity in spending and staking with Zerocoin if originally minted from RingCT.

The remainder of this technology overview describes how Zerocoin is used in the Veil network *today*, but the reader should be aware that at some point, likely during 2019, Zerocoin will be replaced.

## Consensus algorithms

The Veil network operates a hybrid **Proof-of-Work** (PoW) and **Proof-of-Stake** (PoS) consensus system. 

The **Proof-of-Stake** consensus system ensures maximum decentralization, energy efficiency and provide a mechanism for all Veil holders to **earn rewards in Veil** through the process of *staking*. To further enhance the coin’s privacy, staking will only be available through **Zerocoin denominations**, and for that reason, all Veil balances (with the exception of exchanges) will *auto-mint* to these denominations: 10, 100, 1000 and 10000 Zerocoin Veil.

The **Proof-of-Work** mining system, guarantees a fair distribution of the coin, avoids the necessity of an ICO or pre-mine, and adds security to the overall network. To promote fairness of mining, Proof-of-Work mining will utilize the **ASIC-resistant X16RT hashing algorithm**, an improved version of X16R introduced by the Ravencoin project.

## User experience

Veil places great emphasis on user experience, and in this regard will support a number of experiential benefits, beginning with **multi-transaction Zerocoin spends**.

What does this mean? Those familiar with the protocol will be familiar with the concept that, due to the computation and transaction size requirements, Zerocoin systems usually limit transactions to a fixed number of denominations. How this manifests itself as a user problem, is in limiting the amount a user can spend in a single transaction. Veil addresses this user friction with **multi-block transactions** that are transparent to the user, and allows them to create sends of any size.

To avoiding the necessity of file backups, the Veil wallet will support a single BIP-0039/BIP-0044 **Deterministic Seed** from which its entire wallet can be restored, including both Basecoin and Zerocoin transactions.

Finally, starting in phase 2 the Veil wallet will offer users the option of saving tremendous (and ever-growing) amounts of local disk storage, through a process known as **transaction pruning**, in which all transactions not relevant to the particular wallet are removed from the local data set.

For those interested in helping to secure the network through the running of a full node, Veil will include the reward of all the transaction fees in the block.

## The Veil emission schedule

![](/uploads/emission-schedule-white.png)

As summarized in the table, the Veil coin emission schedule includes:

- A declining and capped contribution to the **founder**, to recover the seed investment from which the project has been bootstrapped.

- A declining but uncapped contribution to the **Veil Labs**, to provide for ongoing research and development in privacy technologies related to cryptocurrencies.

- A front-heavy, declining and uncapped contribution to the **Veil operations budget**, funding operations activities such as core network and wallet development, project management, online user support, bounties, marketing and partnerships.

- It should be noted that the funds allocated to the Labs and operations budgets *will not stake*, meaning those funds will not disadvantage those staking in the network. Salaries paid are however free to stake.

## Veil Labs

Veil Labs is made up of a dedicated team with a focused mission. It is the project’s R&D entity with a goal to push the technical boundaries for privacy and anonymity without compromising scalability and performance. For example, at launch, the Veil transaction data size will be 11.3 kilobytes, using Bulletproofs. An initial goal of the Veil Labs will be to reduce that substantially. This is one example of many.

In the end, as new methods are conceived and tested, the Veil project will be the first to implement them in Veil to stay at the forefront of the industry.
