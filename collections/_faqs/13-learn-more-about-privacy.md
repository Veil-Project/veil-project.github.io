---
title: Where can I learn more about the privacy technologies implemented in Veil?
ref: learn_privacy
---

- [RingCT research paper](https://lab.getmonero.org/pubs/MRL-0005.pdf)
- [Dandelion research paper](https://arxiv.org/pdf/1805.11060.pdf)
- [Stealth addresses in the Cryptonote whitepaper](https://cryptonote.org/whitepaper.pdf#page=6)
- [Bulletproofs research paper](https://eprint.iacr.org/2017/1066.pdf)

**Replacing Zerocoin as a core technology**

Half a year after the launch of Veil in 2019, a series of vulnerabilities were discovered in the Zerocoin library which sits at the core of most Zerocoin-based protocol implementations, including Veil’s. In order to immediately protect Veil user funds, the project released an update that preserves the functional characterics of Zerocoin, but removes its unlinkability to original mints. 

After review, and community discussion, the Veil project, along with a number of others, concluded that Zerocoin can not be relied upon to form the anonymity core of the protocol, and at the time of this writing, the project is [assessing a number of alternatives](https://veil-project.com/blog/2019-05-09-state-of-veil/).

Zerocoins minted in Veil from RingCT, still carry the anonymity inherent in RingCT, and so during the interim Veil users have some level of anonymity in spending and staking with Zerocoin if originally minted from RingCT.

The remainder of this page describes how Zerocoin is used in the Veil network *today*, but the reader should be aware that at some point, likely during 2019, Zerocoin will be replaced.
