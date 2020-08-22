---
layout: post
lang: en
title:  Veil devnet modifications to the Dark Gravity Wave algorithm
date:   2020-08-22
author: strontium
permalink: /blog/devnet-update/
categories: test
excerpt: 'In the near future we will be restarting the devnet chain to incorporate changes to the difficulty algorithms. These changes come from divergences in the Dark Gravity Wave algorithm and our use of multiple independent algorithms.'
description: 'In the near future we will be restarting the devnet chain to incorporate changes to the difficulty algorithms. These changes come from divergences in the Dark Gravity Wave algorithm and our use of multiple independent algorithms.'
---

In the near future we will be restarting the devnet chain to incorporate changes to the difficulty algorithms. These changes come from divergences in the Dark Gravity Wave algorithm and our use of multiple independent algorithms.

![](/uploads/blog/2020-08-22-devnet.png)

The multiple algorithm model in Veil has independent spacing goals for the different algorithms in order to aim for a desired distribution. The way this works is the algorithm rolls back through the chain to find the previous 60 blocks, determines the time between the first and the last of the series, and uses that time to determine if it's been faster, or slower, than the target spacing; and adjusts the difficulty accordingly.

The problem with this method is that it doesn't take into account that the chain will still run even if there're no blocks being mined from a given algo. So, for example, if there is a significant hash power drop on one algo, that algo will stop producing blocks. The difficulty rate however will remain the same, as the time difference in the series of 60 blocks will not change; until a new block for the algo is found.

After a discussion about this, Blondfrogs implemented [PR #805](https://github.com/Veil-Project/veil/pull/805). This adds one more spacing metric to the difficulty calculation by looking at the space between the last block of an algo and the current block. If that algo is "overdue" (the time difference between the last mined block of the algo and the current tip is more than the desired spacing), then it uses that spacing in the average calculation.

This still didn't account for a large drop in hashing power, as the difficulty adjustments were capped at 1/3 to 3 of the current difficulty. With a large drop in hashing power, 1/3 the difficulty might still not be enough to mine a block at the current hash power, and the difficulty can't go any lower.

Changing this difficulty ran the risk of overflowing the target difficulty calculation. For example, if you take 11 o'clock, and multiply it by 3, you get 33 o'clock. However, that overloads the clock and it actually makes it 9 o'clock. So if you're trying to make it later (which is "capped" at 12), you actually made it earlier.

This brought us to a challenge, and that was preventing the overflow while still being able to constantly decrease the difficulty over time while we try to get one algo to move again. However, with some creative calculations, we are able to test if we're going to overflow, and set the minimum difficulty if that is the case. With the example above, it would multiply 11 by 3, see that 9 < 11, and set "12"; the minimum difficulty, instead.

We also revealed that the current 3x cap was too much for RandomX, and it was actually already overflowing, and that was the root issue with our RandomX mining. The actual time span grew too large so it decreased the difficulty 3x, which overflowed and caused the RandomX difficulty to go higher, rather than lower.

During all this analysis, it was realized that if a large gap in the spacing of blocks for any given algo occurs, the Dark Gravity Wave algorithm cannot adjust ideally in our environment.  In a single algo environment, those gaps mean the chain was stuck, and hyper adjusting makes sense, but in our environment the chain is still moving even without one algorithm being used, and large gaps would greatly throw off the overall desired spacing of the chain.

The reason for this is the time it takes for that 'gap' to be flushed from the mathematical averaging. For example, let’s say the desired spacing is 100 seconds for a single algorithm. If there is a large drop in hash power that takes 10000 seconds until the difficulty reaches a level that the current hash power can mine at; that gap will persist through the length of the algorithm. So the desired spacing is 60*100 = 6000. Now assuming for simplicity the blocks are mined every 100 seconds except for that gap, we now have an “actual” time span of 15900, rather than 6000. So the difficulty will be lowered. Let's say the next block comes in 50 seconds. 15900 - 100 = 15800 + 50 = 15850; still significantly above the 6000 goal, so another large reduction in difficulty occurs, without any consideration that the last two blocks came in less than the desired time span. You could end up in a situation where the difficulty goes so low that you get 60 blocks in rapid succession; one every second even, until that "gap" works its way out of the calculation and it now sees an actual time span of 60 instead of 6000. It will now do the reverse, and start increasing the difficulty every block, even if it's now taking over 100 seconds for the next block to be found, potentially creating a 6000 second gap before the 60 rapid succession blocks work their way out of the series under test.

The new changes take that concept of "overdue" and use it as a stop-gap. If the time span of the series is longer than the desired time span, and the difficulty is being decreased, it will not continue to decrease it until it sees that the next block of the algorithm is overdue. Likewise, when the series is shorter than the desired time span, and the difficulty has been raised, it will not continue to raise the difficulty when the next block is overdue. This changes the algorithm to trust its adjustment and wait until results are seen before adjusting further.

This opened the ability to change the algorithm used in the initial switchover. The original switchover code left the minimum difficulty in place until 60 blocks of an algo are mined. This could also run the risk of hyper-producing blocks and then starting the algorithm off needing massive difficulty adjustments. We however have all the information we need to make an adjustment from the very beginning of the switchover period. We know the time of the block right before the fork. We also know the time of each block that comes in after the fork. We will know if an algorithm is ahead of schedule when the first block comes in for that algo—by measuring the time from the fork to the time of that block—and can begin adjusting the difficulty immediately. Once we have that first block, measuring from the tip of the chain to that first block, we can immediately determine if the next one is overdue or not. So rather than letting it go like monkeys on Mountain Dew for an hour or more before the spacing is enforced; the spacing will be monitored and adjusted from the beginning.

This point is especially important to make, as this will not likely work right in devnet, since we will not have a controlled fork time coded for the future. It will be done during testnet, and during mainnet, as the fork will be set to a future date. However regtest and devnet have back-dated fork dates, so it will actually measure from the back-dated time to the first block, and will remain at minimum difficulty unless we chose to set a fork date in the future for the restart of devnet.

The difficulty changes (and another write-up) can be found with [PR #827](https://github.com/Veil-Project/veil/pull/827).

To make a long story short, our controlled testing is almost complete, and the pool will soon be open for swimming!