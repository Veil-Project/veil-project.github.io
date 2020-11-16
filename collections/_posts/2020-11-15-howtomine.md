---
layout: post
lang: en
title: 'How to mine Veil 1.1'
date: 2020-11-15
author: aleksandrsh
permalink: /blog/2020-mineafterhardfork/
categories: blog
excerpt: 'This article covers the procedure to follow for mining after the October 31 Veil 1.1 hard fork.'
description: 'This article covers the procedure to follow for mining (ProgPoW, RandomX, SHA-256d) after the October 31 hard fork.'
---

This article covers the procedure to follow for mining after the October 31 Veil 1.1 hard fork.

![](/uploads/blog/2020-11-15-howtomine.png)

After the 31.10.2020 Hard Fork you can mine Veil with:

-**GPU mining with ProgPoW**, Aims for 70% of all PoW blocks averaging 504 blocks per day.

-**CPU mining with RandomX**, Aims for approximately 20% of all PoW blocks averaging 144 blocks per day.

-**ASIC mining with SHA-256d**, Aims for approximately 10% of all PoW blocks averaging 72 blocks per day.

PoW will continue to target 50% of blocks alongside PoS’s 50%. This division can deviate with varying hash power.

## GPU mining with ProgPoW

You can mine Veil with ProgPoW solo or on pool. However, Veil ProgPoW difficulty is quite high now and you will need a lot of power to get blocks everyday with ProgPoW.

## Solo GPU mining with ProgPoW

[TT-miner](https://bitcointalk.org/index.php?topic=5025783.0) (Nvidia GPU only) has a solo mining feature through the full local node. What you have to do:

**Step 1.** 

Download and install [Veil desktop wallet](https://veil-project.com/get-started/).
Sync it using [snapshot](https://veil.tools/snapshots/).

Go to /Appdata/Roaming/Veil/ folder and create a veil.conf file with such an info:

  automintoff=1
  
  rpcuser=TTx
  
  rpcpassword=tt
  
  rpcbind=127.0.0.1
  
  rpcallowip=0.0.0.0/0
  
  rpcport=5555
  
  server=1
  
  listen=1
  
  gen=1
  
  mine=progpow
  
  miningaddress={your-address}

Edit your network parameters according to your router settings.

**Step 2.** 

Restart the wallet to apply all the changes.

**Step 3.** 

Launch TT-miner .bat file with:

  TT-Miner.exe -coin veil -luck -log -logpool -P http://TTx:tt@127.0.0.1
:5555

## GPU mining with ProgPoW on mining pool

Currently only WoolyPooly.com mining pool supports Veil ProgPoW. What you have to do:

Create a wallet address. You can choose:

* Veil [official wallet](https://veil-project.com/get-started/) (mining address starts with bv), sync it using [snapshot](https://veil.tools/snapshots/);
* [Wooly account](https://woolypooly.medium.com/wooly-user-accounts-bc0c70345e4f) address (starts with WP).

P.S. How to get basecoin address starts with bv? Go to wallet console and type this command:

  getnewbasecoinaddress

Don’t know how to find wallet console? Click on Settings tab, then Advanced options menu.

**Step 4.** 

Download a miner or choose it from HiveOS or RaveOS flight sheets:

* [T-rex](https://github.com/trexminer/T-Rex/releases) (Nvidia) recommended by Wooly for Veil progpow
* [WildRig](https://bitcointalk.org/index.php?topic=5023676.0) (Nvidia + AMD) recommended by Wooly for Veil progpow
* [TT-miner](https://bitcointalk.org/index.php?topic=5025783.0) (Nvidia)

**Step 5.** 

Unpack miner.

**Step 6.** 

Edit .bat file (choose one with a Veil name), add in there your Veil or Wooly account address (workers at the end after “.” as an option) and WoolyPooly server url:

For miners from Europe and Russia:

- [veil.woolypooly.com:3098](veil.woolypooly.com:3098) if you want to mine PPLNS
- [veil.woolypooly.com:3099](veil.woolypooly.com:3099) if you want to mine solo

For miners from USA and Canada:

- [veil.us.woolypooly.com:3098](veil.us.woolypooly.com:3098) if you want to mine PPLNS
- [veil.us.woolypooly.com:3099](veil.us.woolypooly.com:3099) if you want to mine solo

For miners from Asia:

- [veil.sg.woolypooly.com:3098](veil.sg.woolypooly.com:3098) if you want to mine PPLNS
- [veil.sg.woolypooly.com:3099](veil.sg.woolypooly.com:3099) if you want to mine solo

**Step 7.** 

Start Veil .bat file.

T-rex .bat file example:

  t-rex -a progpow-veil -o stratum+tcp://veil.woolypooly.com:3098 -u WPMYWxleEB3b29seXBvb2x5LmNvbQ.rig1 -p x

WildRig .bat file example:

  wildrig.exe --print-full --algo progpow-veil --url veil.woolypooly.com:3098 --user WPMYWxleEB3b29seXBvb2x5LmNvbQ.rig1 --pass x

TT-miner .bat file example:

  TT-Miner -coin VEIL -P WPMYWxleEB3b29seXBvb2x5LmNvbQ.rig1@veil.woolypooly.com:3098

**Step 8.** 

Check your statistics [here](https://woolypooly.com/#/coin/veil) by entering your wallet address.

### GPU hashrate on Veil Progpow:

Nvidia:

- 1066 - 10-12 mh/s
- 1070 - 14-15 mh/s
- 1070Ti - 15-16 mh/s
- P104-100 - 16-18 mh/s
- 1080 - 16-18 mh/s
- 1660 - 10 mh/s
- 1660Ti - 15-16 mh/s
- 1080Ti - 23-27 mh/s
- 2060 - 17 mh/s
- 2070 - 21-22 mh/s
- 2070s - 25 mh/s
- 2080 - 28-29 mh/s
- 2080Ti - 35-37 mh/s
- 3080 - 43-49 mhs

AMD:

- RX470 8gb - 10 mh/s
- RX480 8gb - 11 mh/s
- RX570 8gb - 11 mh/s
- RX580 8gb - 11 mh/s
- Vega56 - 18 mh/s
- Vega64 - 18 mh/s
- 5700XT - 19 mh/s
- VII - 30 mh/s

## CPU Mining with RandomX

Currently Veil doesn't have any CPU mining pools. The only option is to mine solo into your wallet.

**Step 1.** 

Download and install [Veil desktop wallet](https://veil-project.com/get-started/).

**Step 2.** 

Sync it using [snapshot](https://veil.tools/snapshots/).

**Step 3.** 

Go to console (Click on Settings tab, then Advanced options menu), and type this command:

  generatecontinuous true 'number-of-threads'

Be aware that number of threads should be 4 and above. Also you need to leave at least 1 core to sync blocks, 1 core to do other PC work, and 1 core to stake if you are staking.

To stop RandomX mining use this command:

  generatecontinuous false
  
If you use cli version of Veil wallet commands should be:

  ./veil-cli generatecontinuous true 'number-of-threads'
  
And to stop mining:

  ./veil-cli generatecontinuous false

## CPU Mining with Sha256d:

Currently Veil doesn't have any Sha256d mining pools. The only option is to mine solo into your wallet.

**Step 1.** 

Download and install [Veil desktop wallet](https://veil-project.com/get-started/).
Sync it using [snapshot](https://veil.tools/snapshots/).
Go to /Appdata/Roaming/Veil/ folder and create a veil.conf file with such an info:

  mine=sha256d

**Step 2.** 

Restart the wallet to apply all the changes. 

**Step 3.** 

Go to console (Click on Settings tab, then Advanced options menu).

**Step 4.** 

Type this command:

  generatecontinuous true 'number-of-threads'
  
Be aware that number of threads should be 4 and above. Also you need to leave at least 1 core to sync blocks, 1 core to do other PC work, and 1 core to stake if you are staking.

To stop RandomX mining use this command:

  generatecontinuous false
  
If you use cli version of Veil wallet commands should be:

  ./veil-cli generatecontinuous true 'number-of-threads'
  
And to stop mining:

  ./veil-cli generatecontinuous false
  
Need support? Feel free to ask on [Discord](https://discord.veil-project.com/) or [Telegram](https://t.me/VEILProject).