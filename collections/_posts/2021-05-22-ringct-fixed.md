---
layout: post
lang: en
title: 'RingCT double spend vulnerability fixed'
date: 2021-05-22
author: cavespectre
permalink: /news/2021-ringct-double-spend-fixed/
categories: news
excerpt: 'In late April, we received a vulnerability report about the consensus validation of RingCT transactions. This vulnerability was not exploited and is now prevented.'
description: 'In late April, we received a vulnerability report about the consensus validation of RingCT transactions. This vulnerability was not exploited and is now prevented.'
---

## Key takeaways

* Vulnerability is prevented with version v1.2.1. Get the latest Veil Core wallet version [here](https://github.com/Veil-Project/veil/releases)
* The chain hard forked on March 16th, 2021 at 16:00 GMT with block 1,221,513
* No exploitation of the vulnerability has been found in the ongoing analysis of the chain, which has now covered in excess of 15 months

## The timeline

In late April, we received a report that alleged there was a vulnerability in the consensus validation of RingCT transactions.  The Veil Dev Team spent a couple of weeks reviewing our code and were unable to determine how an attacker could execute a double spend.

On Thursday, May 6th, we received a proof-of-concept script, and spent the evening validating and testing and getting to the bottom of how it was functioning.  It required modifications to the source code on the attacker wallet, and also required the attacking wallet to mine or stake a block.  We found an old commented out section of code and suspected that may have been the error, but putting it back in place did not resolve the vulnerability.

On Friday, May 7th, we implemented and verified a fix for the vulnerability, added logging so we could monitor the chain, and chose a block for Sunday May 9th to begin enforcing and rejecting any blocks that contained such an attack.  On Saturday morning we added the protocol enforcement code for Sunday May 16th, and fast tracked a release of this code as version 1.2.0.

After the vulnerability enforcement took effect, on Monday May 10th, we found a block that had forked the chain.  However, it had only forked part of the v1.2.0 nodes and not all.  After intensive investigation we noticed two things; First that there was an errant assert in the new code, which had issues [still to be investigated] with some older blocks, and more importantly, that the initial code that we found commented out had slipped into the changes we made.

That commented out section of code was checking if the mempool contained a transaction with the same RingCT input as a transaction in a block being verified.  While the transaction in the mempool was not accepted into any block, it still caused issues when a v1.2.0 node was verifying a block and had that other transaction in their mempool.

Monday evening, we changed the assert to a log message so that we can investigate it further in the future,  added some necessary code to the RPC calls in order to aid investigation for both that mempool issue, and the actual vulnerability, and removed the code that caused blocks to be rejected when they had a legitimate RingCT transaction with a duplicate transaction in the mempool.  This became v1.2.1.

On Monday evening we also completed a script to walk backwards through the chain and search for any blocks that contained the attack signature.  This script, as of 17:00 GMT Sunday, May 16th, has analyzed close to a half million blocks, over 11 months back so far, and not one block has shown the signature of the vulnerability.  We will continue to monitor the progress of this script over the next couple weeks, until it finishes its analysis, and update the community upon the completed analysis.

## Closing words

I want to personally thank CodeOfAllTrades for his focus and hard work during all of this investigation as well as the rest of the team for respecting my wishes of letting us focus on the solution while they jumped in to notify exchanges and inform the community.  I would also like to thank the community for being understanding and trusting to install a release when we were withholding the source code for the release.  I tip my hat to the exchanges that jumped at not just one emergency upgrade, but two.  Last and nowhere close to least, I would like to thank, on behalf of myself, the Veil team, our community as a whole, and the unnamed individual that brought this issue to our attention.

Now that we have passed the protocol enforcement date, the [public repo](https://github.com/Veil-Project/veil/) will soon be loaded with the code changes made privately, and we will re-open merging of public PRs.
