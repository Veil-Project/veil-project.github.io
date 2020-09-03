---
layout: post
lang: en
title: 'Veil month’s end update for August 2020'
date: 2020-09-03
author: strontium
permalink: /news/2020-august-update/
categories: news
excerpt: 'This article provides insight into Veil project developments for the month of August 2020.'
description: 'This article provides insight into Veil project developments for the month of August 2020.'
---

Welcome to the August monthly Veil project update article. Here you’ll find an overview of some of the work that’s taken place during the preceding month. 

![](/uploads/news/2020-09-03-update.png)

## Development updates

We have several development items relating to the upcoming 1.1 release this update.

**Testnet and mainnet plans for Proof-of-Work announced**

Development on Veil's Proof-of-Work update is reaching its conclusion. A broader testnet in the lead up to the mainnet release. You can learn the details of the testnet and mainnet plans by [reading here](https://veil-project.com/blog/pow-update/).

**Dark Gravity Wave modifications**

As part of the work preparing Veil's upcoming PoW consensus, developers have made some changes to the Dark Gravity Wave algorithm. This change impacted RandomX and solved an issue with an overflow problem unique to Veil's complicated PoW model. Read the detailed [article by CaveSpectre](https://veil-project.com/blog/devnet-update/) for more information.

**Proof-of-Work algorithm difficulty adjustments**

A crucial factor in running a PoW consensus model with multiple contributing algorithms is ensuring each performs within desired parameters. Developers have had to find ways to ensure each algorithm can maintain adequate difficulty without relying on the difficulties of other algorithms to do so. You can imagine, if any algorithm were to fall behind in hashing power or suffer a difficulty spike, it would cause a knock-on effect across all algorithms, throwing off block timing and algorithm distribution. This proved a considerable challenge that couldn't be taken lightly.

**More details on Continuous Integration change away from Travis**

We mentioned the change away from Travis for CI on GitHub in the last monthly update. Here is more information on that change and what it means for users.

Veil Engineering has changed their Continuous Integration from Travis to Github Actions.  This now provides images for all supported 64-bit platforms as an output from the CI process, and allows for anyone with a GitHub account to download the latest master or 1.1.0 branch executables to experiment with on testnet or devnet (respectively). Additionally, anyone that wants to test out any un-merged code change can also download one of those and provide their feedback in the open Pull Request thread.

Below is an example of the Actions tab on GitHub, showing the latest master build, the latest 1.1.0 build, and the PR build for #842 (which of course is the same as the latest master build, since it was already merged at the time this example was taken).

**Other changes in 1.1 wallet**

Wallet version 1.1 will include a great deal of improvements to the Veil wallet. Some of these improvements will be immediately obvious, such as the removal of the outdated precompute, and others much more subtle, such as the improvements to wallet functions such as *getbalance*.

Sean mentioned an RPC change in July's monthly updates for daily algo stats, but we did not go into detail. Veil RPC has seen the addition of *getchainalgostats*. This provides useful information on block discovery as demonstrated below.

>{
>
>  "start": 1597795945,
>
>  "finish": 1597977109,
>
>  "period": 3019,
>
>  "pos": 510,
>
>  "progpow": 546,
>
>  "randomx": 290,
>
>  "sha256d": 94,
>
>  "x16rt": 0
>
> }

You can [click here](https://github.com/Veil-Project/veil/pull/833) to learn more.

Overall, we're confident these changes will add up to produce a more enjoyable wallet experience for users. You can see each commit and read about them in detail by [checking GitHub]( https://github.com/Veil-Project/veil/pull/821/commits).

## Proof-of-Work testing

Since late June's testnet restart, everything has been running like clockwork. Sean invites anyone interested in participating to do so, but to be aware that a restart will be taking place in the near future as we head to the final testing phase of 1.1 before release.

Branch 1.1.0 (the PoW fork) is now building all supported operating systems on GitHub. ARM was broken previously.

Note that as final testing begins, those participating in both testing and Veiliens program will be eligible for 50 Veiliens points at the conclusion of testing. In addition, other testing incentives are being decided currently. We will have more information on this as we head into the final testing phase.

If you have any questions about testnet or 1.1 testing, please feel free to drop in on our [development Discord server](https://discord.gg/5V3Y5Mf).

## Joshua Marriage Noonie award nomination

As mentioned last month, for his article contributions there, Hacker Noon also has Joshua up for a [Noonie award]( https://noonies.tech/)!  Follow [Joshua on Twitter]( https://twitter.com/satoshua) to keep an eye on his Hacker Noon related news.

We currently have 10 Veiliens points up for grabs over on our [Discord server](https://discord.veil-project.com/) for anyone who has voted for Josh in the Noonies. Just check the Veiliens channel and emote per instructions to collect.

## Twitter contest

![](/uploads/news/2020-09-03-contest.png)

We currently have another contest running on [Twitter](https://twitter.com/ProjectVeil/status/1299391296704929792). This time we're looking for a one tweet long piece of fiction featuring privacy. We have a runner-up prize this time, as well as the same 100 veil prizes as last time.

In addition to veil, this contest also has some Veilien points up for grabs too, so if you're aiming to climb the Veiliens rankings this is a chance for some juicy points!

## Interested in helping out regional development?

We presently are working on having more representation in non-English-speaking communities. Presently we have Regional Managers for Russia, Latin America (Spanish), China, and Africa (Huasa).

If you are a part of a non-English-speaking community you feel would welcome news about Veil and would like to help spread the word, please contact Strontium on Discord for a chat.


## Closing words

This concludes August’s update. With 1.1 just around the corner now we hope you're all as excited as we are to get your hands on it.

As always, you’re welcome to reach out to the team on Discord or social media with any questions.