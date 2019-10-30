---
layout: post
lang: en
title:  The future of Veil’s consensus and reward distribution
date:   2019-10-30
author: strontium
permalink: /blog/2019-future-consensus/
categories: test
excerpt: 'Veil’s consensus and reward distribution is changing, and this article discusses the rational.'
description: 'Veil’s consensus and reward distribution is changing, and this article discusses the rational.'
---

![](/uploads/blog/2019-10-29-consensus.png)

Upon announcing Veil prior to the project's launch on January 1st of this year, the team shared details of our hybrid Proof-of-Work/Proof-of-Stake consensus and reward structure. As a refresher, that structure, currently in place, entails mining with Veil's X16RT algorithm (comprising a range of 16 chained algorithms), and staking with Zerocoin denominations minted in the user's wallet. Each of these methods makes up approximately 50% of generated blocks, though PoW can find as many as 5 consecutive blocks before a PoS block must follow.

The driving factors behind the current consensus structure were to protect the fledgling network against attacks, and to provide as broad a distribution of veil as possible in the fairest manner possible. We announced that this hybrid model would be subject to future reconsideration, however, particularly due to ASIC (Application-Specific Integrated Circuit) mining becoming more popular. It's the outcomes of that reconsideration we're sharing here.

## Staking

PoS staking will remain an integral part of Veil's consensus model. Staking ensures the Veil network is supported by a high number of active nodes, rewarding those users who are unable or choose not to mine. **Staked blocks will continue to make up approximately 50% of all blocks** averaging 720 blocks per day.

### In-wallet staking with RingCT

With Zerocoin now defunct and being phased out, **staking functionality will shift solely to RingCT**. This shift means no more reliance on minting denominations, or any of the inconveniences Zerocoin has brought about. This change also means users will be able to stake with as little as 1 veil, down from the current minimum of 10 (though staking a single veil is incredibly unlikely to garner a reward in a timely manner).

## Mining

PoW mining will continue to be supported by Veil also, though after careful consideration, some changes are on the cards. Mined blocks will soon move away from X16RT's 16 algorithms to a new an as of yet unnamed PoW consensus model consisting of 3 mining algorithms. **These three algorithms combined will approximately make up the remaining 50% of all blocks**.

### GPU mining with ProgPoW

ProgPoW (Programmatic Proof-of-Work) is a high-performing, GPU-tuned extension of the Ethash algorithm. With Ethereum developers voting in favor of ProgPoW for Ethereum in an effort to reduce the impact of ASICs, this algorithm is sure to be well supported and documented. One benefit ProgPoW holds over X16RT for GPU mining is that it doesn't fluctuate hashrate with the changing algos, meaning fine-tuning for maximum efficiency is easier and more rewarding. It also performs much better on AMD cards, which are currently struggling for profitability with X16RT. GPUs mining with ProgPoW are projected to find approximately **35% of all blocks** (70% of all PoW blocks) averaging **504 blocks per day**.

### CPU mining with RandomX

RandomX is an algorithm for CPU mining intended to be ASIC resistant. Opening this mining option up via the Veil wallet software itself gives a far greater segment of the user base the ability to mine. What's more, mining via RandomX will be available within the wallet alongside staking, meaning any user can take advantage of the two in tandem. RandomX CPU mining is projected to account for approximately **10% of all blocks** (20% of all PoW blocks) averaging **144 blocks per day**.

Although there is a possibility botnets may emerge for RandomX, the percentage is insignificant to restrict the impact they could potentially have. The network will be monitored and adjustments made if deemed necessary.

### ASIC mining with SHA-256D

Previously the thinking was to avoid ASICs taking what was anticipated to be a significant share of mining rewards. This is what drove the development and use of X16RT. Now, however, the attitude has changed, and support of ASICs in a way that can be controlled for has become the prevailing attitude. This will allows Veil to avoid changing the X16RT every time ASICs are developed for the X16RT version of the time. SHA-256 and SHA-256D are very popular, heavily supported algorithms used by Bitcoin and many other coins. SHA-256D ASIC mining is projected to find approximately **5% of all blocks** (10% of all PoW blocks) averaging **72 blocks per day**.

## How balance is struck

There is some potential for details to change based on testing, but currently the plan is as follows.

As with live mainnet, staking will remain the primary consensus method, able to continue even when PoW blocks aren't being found. This way the blockchain is certain to continue moving regardless of any complications with mining.

The balance of mining algorithms finding blocks will be handled through difficulty adjustments based on the previous 30 blocks. This will target the percentage breakdown provided above, though these percentages will not be precisely enforced by hard code. This way if an algorithm isn't being mined, its blocks become available to other algorithms. As circumstances are dynamic and bound to change, skewing is likely to take place from time to time until the network can adjust difficulty.

It's worth noting that users may freely combine PoS with as many PoW methods as they please.

## Into the future

While the implementation of the above changes is still some time off, the objective is to promote more nodes securing the network and an even broader distribution of veil. The hope is that this consensus structure will be robust enough to have some permanence, and can endure with relatively few changes moving forward.

We'll have more specific details on technical features when these changes are close to release.

Feel free to visit us on [Discord](https://discord.veil-project.com/) with any questions.Upon announcing Veil prior to the project's launch on January 1st of this year, the team shared details of our hybrid Proof-of-Work/Proof-of-Stake consensus and reward structure. As a refresher, that structure, currently in place, entails mining with Veil's X16RT algorithm (comprising a range of 16 chained algorithms), and staking with Zerocoin denominations minted in the user's wallet. Each of these methods makes up approximately 50% of generated blocks, though PoW can find as many as 5 consecutive blocks before a PoS block must follow.

The driving factors behind the current consensus structure were to protect the fledgling network against attacks, and to provide as broad a distribution of veil as possible in the fairest manner possible. We announced that this hybrid model would be subject to future reconsideration, however, particularly due to ASIC (Application-Specific Integrated Circuit) mining becoming more popular. It's the outcomes of that reconsideration we're sharing here.

## Staking

PoS staking will remain an integral part of Veil's consensus model. Staking ensures the Veil network is supported by a high number of active nodes, rewarding those users who are unable or choose not to mine. **Staked blocks will continue to make up approximately 50% of all blocks** averaging 720 blocks per day.

### In-wallet staking with RingCT

With Zerocoin now defunct and being phased out, **staking functionality will shift solely to RingCT**. This shift means no more reliance on minting denominations, or any of the inconveniences Zerocoin has brought about. This change also means users will be able to stake with as little as 1 veil, down from the current minimum of 10 (though staking a single veil is incredibly unlikely to garner a reward in a timely manner).

## Mining

PoW mining will continue to be supported by Veil also, though after careful consideration, some changes are on the cards. Mined blocks will soon move away from X16RT's 16 algorithms to a new an as of yet unnamed PoW consensus model consisting of 3 mining algorithms. **These three algorithms combined will approximately make up the remaining 50% of all blocks**.

### GPU mining with ProgPoW

ProgPoW (Programmatic Proof-of-Work) is a high-performing, GPU-tuned extension of the Ethash algorithm. With Ethereum developers voting in favor of ProgPoW for Ethereum in an effort to reduce the impact of ASICs, this algorithm is sure to be well supported and documented. One benefit ProgPoW holds over X16RT for GPU mining is that it doesn't fluctuate hashrate with the changing algos, meaning fine-tuning for maximum efficiency is easier and more rewarding. It also performs much better on AMD cards, which are currently struggling for profitability with X16RT. GPUs mining with ProgPoW are projected to find approximately **35% of all blocks** (70% of all PoW blocks) averaging **504 blocks per day**.

### CPU mining with RandomX

RandomX is an algorithm for CPU mining intended to be ASIC resistant. Opening this mining option up via the Veil wallet software itself gives a far greater segment of the user base the ability to mine. What's more, mining via RandomX will be available within the wallet alongside staking, meaning any user can take advantage of the two in tandem. RandomX CPU mining is projected to account for approximately **10% of all blocks** (20% of all PoW blocks) averaging **144 blocks per day**.

Although there is a possibility botnets may emerge for RandomX, the percentage is insignificant to restrict the impact they could potentially have. The network will be monitored and adjustments made if deemed necessary.

### ASIC mining with SHA-256D

Previously the thinking was to avoid ASICs taking what was anticipated to be a significant share of mining rewards. This is what drove the development and use of X16RT. Now, however, the attitude has changed, and support of ASICs in a way that can be controlled for has become the prevailing attitude. This will allows Veil to avoid changing the X16RT every time ASICs are developed for the X16RT version of the time. SHA-256 and SHA-256D are very popular, heavily supported algorithms used by Bitcoin and many other coins. SHA-256D ASIC mining is projected to find approximately **5% of all blocks** (10% of all PoW blocks) averaging **72 blocks per day**.

## How balance is struck

There is some potential for details to change based on testing, but currently the plan is as follows.

As with live mainnet, staking will remain the primary consensus method, able to continue even when PoW blocks aren't being found. This way the blockchain is certain to continue moving regardless of any complications with mining.

The balance of mining algorithms finding blocks will be handled through difficulty adjustments based on the previous 30 blocks. This will target the percentage breakdown provided above, though these percentages will not be precisely enforced by hard code. This way if an algorithm isn't being mined, its blocks become available to other algorithms. As circumstances are dynamic and bound to change, skewing is likely to take place from time to time until the network can adjust difficulty.

It's worth noting that users may freely combine PoS with as many PoW methods as they please.

## Into the future

While the implementation of the above changes is still some time off, the objective is to promote more nodes securing the network and an even broader distribution of veil. The hope is that this consensus structure will be robust enough to have some permanence, and can endure with relatively few changes moving forward.

We'll have more specific details on technical features when these changes are close to release.

Feel free to visit us on [Discord](https://discord.veil-project.com/) with any questions.