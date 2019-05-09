---
layout: post
lang: en
title: 2019-05-09 State of the Veil Network
date: 2019-05-09
author: gabrielnergaard
permalink: /drafts/2019-05-09-state-of-the-veil-network/
categories: test
excerpt: 'In this article, we are going to discuss the state of the Veil network, including our decision to replace Zerocoin with a new privacy protocol.'
description: 'In this article, we are going to discuss the state of the Veil network, including our decision to replace Zerocoin with a new privacy protocol.'
---

On April 27th, a critical vulnerability in the libzerocoin library [was discovered](https://zcoin.io/further-disclosure-on-zerocoin-vulnerability) by the Zcoin project. This library is used by most Zerocoin-based projects, including Veil.

In order to protect our users, the Veil project immediately [released a wallet update](https://veil-project.com/news/wallet-1-0-3-0/). Furthermore, an internal analysis did not reveal any indication that the vulnerability was exploited on the Veil network prior to our wallet update.

The downside of the wallet update, is that it **removes the anonymity feature of Zerocoin**, in that Zerocoin mints will temporarily be linked from their original spends on the blockchain. Past Zerocoin transactions will not be deanonymized.

From a functional perspective, the usage of the wallet in terms of sending, receiving, and staking remain the same. Furthermore, the privacy characteristics of RingCT and CT are unaffected. **Zerocoin minting, spending and staking, however, are no longer anonymous**.

This was the **second such Zerocoin vulnerability** discovered in a short period of time, and this second one was far more serious than the first. After an extensive internal review and discussion with the Zerocoin community, and in the context of our long-term mission, the Veil project has concluded that **we can no longer rely on Zerocoin as the core of our protocol**. 

As such, we are currently assessing a number of alternative protocols that would satisfy our original set of requirements for Veil. 

![](https://clipz.in/g7zub.png)

Identifying a privacy protocol that meets our requirements, developing and testing the associated network protocol, creating a new wallet, and developing & testing the software necessary to migrate coins from the existing to new network is complex endeavor, that will take time. We estimate at least six months.

Where does that leave the project in the meantime?

- Veil users can still earn staking rewards, non-anonymously, in the interim. 
- We will continue to push out wallet updates as necessary. 
- The development bounty program will likely continue unaffected; however, the community bounty program may in certain areas be suspended.

What should potential acquirers of Veil consider in the meantime?

Owning Veil now allows you to earn staking rewards while the new network is under development, and would be of interest to those who trust and have confidence in the team behind Veil.

Migrating away from our core technology is a difficult decision, particularly as it means the loss of a good portion of the project's seed investment, and a requirement for additional capital to fund the activity of developing a new protocol. We started Veil with the mission to create an anonymous cryptocurrency that can serve the privacy needs of its users for generations to come. 

Privacy will only increase in importance and necessary as we move forward, and so we are confident the temporary setback we experience today will be more than compensated in the long-term by the benefits of a more reliable anonymity protocol at the core of our network.

As we move forward, we will continue to keep you, the Veil community, up to date with frequent updates. And as always, if you have any questions, please do not hesitate to reach out to us in Discord or Telegram.

Onwards!