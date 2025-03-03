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

## Technology

- At its core, Veil is built on the world’s most secure blockchain software, **Bitcoin version 0.17.1**.

- In order to provide for “always-on” privacy, Veil added **RingCT** privacy from Particl to its Basecoin transactions, such that all transaction components in the Veil network are  as anonymous as technology today can provide for.

- Veil originally integrated the **Zerocoin** protocol, based on **zero-knowledge proofs**. However, this technology is currently being deprecated in the Veil network, due to the [Zerocoin insecurities discovered in 2019](/blog/2019-09-07-exploit-update/).

- The existing version of Veil includes a de-anonymized, safe, implementation of Zerocoin; however, a development version of Veil is testing the removal of Zerocoin completely, to move to an **industry-first, fully anonymous RingCT-based staking implementation**.

- Veil implements a hybrid **Proof-of-Work** (PoW) and **Proof-of-Stake** (PoS) consensus system, providing both fair distribution, and an unprecedented level of protocol security.

- Veil is the only protocol in the industry supporting [three separate proof-of-work algorithms](/blog/pow-update/), together with a private proof-of-stake algorithm, thereby providing **fair distribution to ASICs, GPUs and CPUs**.

- Use of the **Dandelion protocol** makes it nearly impossible to trace a transaction back to its source node on the network.

- The adoption of **bulletproofs** is planned in order to ensure minimal transaction sizes.

- Research is ongoing into cutting-edge **Supersonic**, the first practical, trustless, and efficiently verifiable zero-knowledge proofs, which are smaller than 10 kilobytes and take only milliseconds to verify even for the most complex statements. Should this research prove fruitful, future generations of the Veil protocol will take advantage of this advanced technology.

## User experience

Veil places great emphasis on user experience, and in this regard supports a number of experiential benefits.

For example, to avoid *the necessity* of file backups, the Veil wallet supports a single BIP-0039/BIP-0044 **Deterministic Seed** from which its entire wallet can be restored, including both Basecoin and Zerocoin transactions. We still recommend occasional file backups _(available by simply clicking "Backup Wallet" in the Settings screen)_ for an easier restoration process.

And ready for use with the RingCT protocol release (where spending and staking are all done using the RingCT protocol, simplifying wallet operations), is the **Veil X** wallet, which has been designed and built from the ground-up with an emphasis on a friendly user experience.

## The Veil emission schedule

![](/uploads/emission-schedule-white-is_obsolete_.jpg)

[Edit December 2022: Correcting the emissions schedule to account for well-publicised events in 2019 relating to zerocoins, and leading to the founder giving up the founder reward. _For the benefit of newer Veil users, and a reminder to old, here is the announcement relating to it:_ [2019-08-exploit](/news/2019-08-exploit/).] Related details also are in: [2019-07-07-exploit-update](/blog/2019-09-07-exploit-update/). To see how this has played out in the actual Veil Superblocks, and where the founder reward was eliminated, check this retrospective superblocks data ([spreadsheet PDF](/uploads/Superblocks.202502.pdf)). 

As summarized in the table, the Veil coin emission schedule includes:

- A declining and capped contribution to the **founder**, to recover the seed investment from which the project has been bootstrapped. _The final Founder reward was paid in the first anniversary Superblock on January 6th, 2020 for reasons specified above._

- A declining but uncapped contribution to the **Veil Labs**, a separate entity that will be established to provide ongoing research and development in privacy technologies related to cryptocurrencies.

- A front-heavy, declining and uncapped contribution to the **Veil operations budget**, funding operations activities such as core network and wallet development, project management, online user support, bounties, marketing and partnerships.

- It should be noted that the funds allocated to the Labs and operations budgets *will not stake*, meaning those funds will not disadvantage those staking in the network. Salaries paid are however free to stake.
