---
title: I’ve heard the wallet “prunes” the chain. What does that mean and why should I care?
ref: pruning
---
Most crypto “core” wallets store the full ledger of blockchain transactions locally, which for a coin like Bitcoin, requires hundreds of gigabytes of storage, and is continually expanding as new blocks of transactions are added to the ledger. 

The Veil wallet offers an option (enabled by default) that removes—“prunes”—those ledger transactions that are not relevant to the wallet owner’s own history of transactions. While the Veil blockchain will be considerably smaller than Bitcoin's for the foreseeable future, pruning will still save the user considerable local storage space.

Technical observers will rightly recognize that to secure the network, some nodes (wallets) need to maintain the full ledger of transactions. To incentivize for this, when a “full Veil node” processes a transaction block—i.e. a wallet owner willing to allow the local storage of the complete blockchain—that wallet, in addition to the normal staking reward, also receives the transaction fees present in the block (which would otherwise be burned.)