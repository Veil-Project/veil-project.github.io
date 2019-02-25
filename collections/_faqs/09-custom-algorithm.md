---
title: Why did Veil create the X16RT mining algorithm?
ref: x16rt
---
The X16R hashing algorithm was introduced, by the Ravencoin project, in an effort to resist the development of dedicated ASICs, thereby increasing the decentralization of mining. For this reason, X16R was selected as the baseline for Veil's mining.

Threatening decentralization, Field-Programmable Gate Array (FPGA) code for X16R is known to exist, and expected to become widely available soon. To address this risk, Veil has created an implementation of the algorithm, called X16RT, which preserves almost all the benefits of X16R, but with an added barrier against FPGAs. In particular, the ordering of blocks in X16RT have to follow different rules to be accepted by Veil nodes.

While mining pools, and even exchanges, will not have to make modifications on the software side, software that calculates block hashes and submits them to the network will.