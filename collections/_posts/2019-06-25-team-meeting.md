---
layout: post
lang: en
title: Team meeting highlights
date: 2019-06-25
author: strontium
permalink: /blog/2019-06-25-team-meeting/
categories: test
excerpt: 'Recently the Veil team held a staff conference to consolidate plans for the project and its various aspects.'
description: 'Recently the Veil team held a staff conference to consolidate plans for the project and its various aspects.'
---

Recently the Veil team held a staff conference to consolidate plans for the project and its various aspects. While we’re not able to share news on all of what was discussed just yet, the following provides some information on what to expect from Veil in the future.

![](/uploads/blog/2019-06-25-meeting.png)

## Version 1.0.3.1 release and development bounty update

Wallet version 1.0.3.1 is due to release after final QA testing is completed in the coming days. The update addresses a number of issues users have been experiencing, including crashes such as that experienced on MacOS, and features GUI updates development bounty participants have contributed.

The development bounty has seen overwhelmingly positive results; with approximately half-a-dozen developers taking part to date. Usability will continue to be a focus in the upcoming weeks as the bounty program continues. If you or someone you know may be interested in participating, please check the [development bounty page](https://veil-project.com/bounties) or head into [the developer Discord server]( https://discord.gg/EfFUbEy) for more information.

## Moving away from Zerocoin to full-time RingCT

We’ve previously discussed our intentions to leave Zerocoin behind after the surfacing of vulnerabilities. Currently Veil users must mint zerocoin denominations to stake, though RingCT, and not Zerocoin, is currently providing privacy; this makes for a confusing user experience. Due to this, we’ve decided to drop Zerocoin ahead of what was previously planned and shift to full-time RingCT as an interim measure before the new protocol is implemented.

### Reducing coin-types
Making the shift to full-time RingCT provides a number of benefits to users and developers alike, the first of which is a much more streamlined user experience as we cut down on coin-types. This has been a point of confusion and frustration for users and exchanges alike, so we’re making this change sooner rather than later to alleviate that friction. This will see an end to moving funds between coin types and the accompanying maturity waiting times.

### Improving anonymity
Focusing the supply into RingCT will vastly improve the anonymity provided by RingCT. The change will also shift Veil away from the use of basecoin, with mining and staking moving to RingCT. User privacy is a top priority for us, and this modification ensures Veil will remain a strong choice in the period before the new protocol while still allowing users to stake privately.

### Improving zerocoin spend times
Zerocoin has proven particularly slow for spending, and while that tardiness was previously offset by the privacy Zerocoin provided, there’s little reason to keep it moving forward. This will not only speed up user interactions with their wallet, but should help level the playing field for users with slower computers.

### Laying groundwork
Lastly, shifting to RingCT allows developers to consolidate everything for the future implementation of Sonic, which should make the process of moving to the new protocol significantly easier.

The transition to RingCT will be made as streamlined and hands-off as possible, and hopefully will require no user interaction at all. User zerocoin denoms will remain in their possession, but zerocoin minting support will end with all spent zerocoin moving to RingCT. This ensures no veil are cut from the supply, and user funds will remain in their possession even if they’re not present for the shift.

As a final note, developers still plan to fix the Zerocoin protocol—even if Veil itself will not use it any longer. The priority of this fix is not critical, however, and will take a back seat to the move to RingCT.

## Sonic paper and Veil’s future protocol

Focus on development of Veil’s future protocol based on the [Sonic whitepaper](https://eprint.iacr.org/2019/099.pdf) will come after the move to full-time RingCT, though research, planning, and theory are well underway. The protocol change will entail moving to Sonic’s zkSNARKs as Veil’s new primary privacy mechanism. The interim move to RingCT and the unified coin-type will facilitate this along the way.

The team has no intention of rushing out an unfinished product, so we ask you to please be patient while work on the new protocol continues. Beyond the RingCT change and development of the new protocol, ample time for extensive testing as well as a code audit provided by [Least Authority]( https://leastauthority.com) must also be afforded.

Currently the plan is to remain on the current chain and simply prune it with the change to the new Sonic-based protocol. The plan is to prune by default, though this is subject to change as specifics are a ways off yet. Although this may change subject to further investigation, rest assured the goal is to ensure the chain doesn’t burden Veil users.

The Veil team will continue to provide updates as we’re able, and will have some exciting news to share in the near future. In the meantime, please feel free to ask any questions you may have on [Discord](https://discord.veil-project.com/) or [Telegram](https://telegram.veil-project.com/)
