---
title: Where can I learn more about the privacy technologies used in Veil?
ref: learn_privacy
---

Veil’s privacy model is built around RingCT, which forms the core anonymity layer for everyday transactions. RingCT hides transaction amounts and obscures links between inputs and outputs.

Research: [RingCT research paper](https://web.getmonero.org/resources/research-lab/pubs/MRL-0005.pdf)

Veil also uses stealth addresses to prevent address reuse and reduce transaction linkability.

Background: [Stealth Addresses in Cryptonote whitepaper](https://bytecoin.org/old/whitepaper.pdf#page=6)

At the network layer, Dandelion helps limit the ability to associate transactions with originating IP addresses during propagation.

Research: [Dandelion research paper](https://arxiv.org/pdf/1805.11060.pdf)

Zerocoin is not used as Veil’s primary anonymity layer. Instead, it's role within the protocol is staking, while RingCT provides the core transaction privacy.