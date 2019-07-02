---
layout: post
lang: en
author: bountybase
permalink: /news/release-wallet-1-0-3-1/
date: 2019-07-02
title: Release of Veil Core Wallet Version 1.0.3.1
description: 'The Veil development team have just released version 1.0.3.1 of the Veil Core Wallet.'
---

The Veil development team have just released version 1.0.3.1 of the Veil Core Wallet.

![](/uploads/blog/2019-07-02-wallet.png)

**Updates for 1.0.3.1 include:**

   -   Autospend  
   -   Block Explorer links in transaction detail view    
   -   Progress bar for searchdeterministiczerocoin Remote Procedure Call (RPC)   
   -   RingCT input list display   
   -   Transaction list filtering    
   -   Transaction compute time display 
   -   Additional quality-of-life updates

Veil wallet version 1.0.3.1 has recently released, and can be found [here.](https://github.com/Veil-Project/veil/releases) The update is not compulsory, but we recommend updating whenever possible.

When running the new release, users will find a plethora of new functionality and usability improvements. While the release page lists included changes, this article elaborates on some of the key upgrades new with 1.0.3.1.

**Autospend**

The Autospend feature automatically spends zerocoins to a stealth address that you own. This is done with a security level of 1 to maximize speeds. Note that the security level no longer impacts privacy due to zerocoin changes made in 1.0.3.0, which you can learn [more about here.](https://veil-project.com/blog/zerocoin-exploit/)


This autospend functionality will prove useful in moving user funds out of zerocoin as Veil moves exclusively to RingCT. Learn more about the interim move to RingCT [here.](https://veil-project.com/blog/2019-06-25-team-meeting/)


**Block Explorer links in transaction detail view**

The transactions listed within the wallet will now include links to the Veil block explorer. This function is particularly useful for:

-   Checking transaction details;   
-   Linking transaction details to receivers;    
-   Sharing transaction details with support staff, should the need arise.

**Progress bar added for searchdeterministiczerocoin RPC**

The *searchdeterministiczerocoin* RPC can take quite some time to complete, and may leave users wondering if it has failed. A progress bar displaying the progress percentage of the process will now display upon using this command to recover zerocoins.

**RingCT input Information**

Using *getrawtransaction* and *gettransaction* will now display a list of RingCT inputs (all decoys/inputs used in a RingCT transaction). While this will usually not concern users, it can be useful for both support and developers for problem-solving purposes.

**Transaction list filtering**

The GUI now allows for transactions to be filtered by: sent, received, mint, mined, stake, basecoin, ringct, ct, zerocoin, and all. This functionality is essentially a quality-of-life change that allows users to quickly view and locate transaction types as they please.

**Transaction compute time display**

The transaction compute time display change adds computation time to the wallet transaction record and Transaction Details dialog. This information has been popular for users wanting to optimize their performance for such things as staking, though the feature has previously been difficult to access.

**Additional GUI quality-of-life updates**

As well as the above, various updates to the wallet GUI have been implemented to improve the experience for users. Some examples include hiding the pop-up balance dialog box when the cursor moves away, better visual communication of clickable events on buttons, and progress completion information on slower processes.

The update also features a handful of under-the-hood updates that typical users aren’t likely to engage with, however, the updates will improve performance of the wallet and Veil network.

We are on a mission to provide a fully anonymous protocol at the core of our network. Improvements will continue towards this goal.

We will continue to keep you, the Veil community, updated with our latest releases. And as always, if you have any questions, please do not hesitate to reach out to us in [Discord](https://discord.veil-project.com/) or [Telegram](https://telegram.veil-project.com/).

Onwards!
