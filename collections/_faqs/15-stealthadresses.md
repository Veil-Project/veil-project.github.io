---
title: How do stealth addresses work?
ref: stealth_addresses
---
Stealth addresses allow users to share a single, static receiving address without exposing their transaction history. Unlike traditional Bitcoin addresses, where all incoming transactions are publicly linkable, stealth addresses prevent third parties from associating payments with a known address.

With Bitcoin-style addresses, preserving privacy requires careful address management, such as generating a new address for every transaction and avoiding any public association with those addresses.

Stealth addresses remove this burden. For each payment, the sender derives a unique one time public key using the recipient’s stealth address and random data. This one time destination cannot be linked back to the recipient’s public address on-chain, making it effectively impossible to trace payments to a single identity.

As a result, users can safely publish a static receiving address without revealing their transaction history or compromising privacy.
