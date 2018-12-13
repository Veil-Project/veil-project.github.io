---
layout: post
lang: en
title:  Welcome to Veil
date:   2018-11-11
author: cryptymike
permalink: /blog/welcome-to-veil/
categories: test
excerpt: Veil is a privacy-focused blockchain project with a simple mission - to offer the most private and user-friendly digital currency. With an experienced team of over 25 members, including top cryptographers and developers, we are implementing and improving upon thoroughly vetted privacy protocols, pushing the technical boundaries for privacy and anonymity.
description: 'Welcome to the Veil Project. This article discusses our philosophy, technology and more.'
---
## Our Philosophy

In today’s digital age, the need for digital cash is a necessity. Transacting privately and anonymously is an inherent human right. For centuries, humans have been transacting with precious metals or fiat-backed currencies which are both physical and fungible.

Achieving the same level of privacy that cash offers, digitally, is nearly impossible, but with the internet acting as a new medium for transacting, a competitive new industry focused solely on emulating cash in the digital space is emerging.

In an effort to stay ahead of the curve, the Veil project is establishing Veil Labs, which is a research and development entity focused on improving upon and innovating new privacy-oriented technologies for cryptocurrencies. The first step was implementing Bulletproofs into the Zerocoin protocol, for increased scalability.

Privacy is needed for many reasons, particularly in blockchain-based systems where data is transparent and public to anyone who downloads the blockchain.

For example:

- If you operate a business that accepts cryptocurrency as payment, then all client payments are sent to your wallet. This is analogous to having your bank account activity be public record - showing all of your clients and partners your bank account and all of the transactional history along with it. Many businesses charge clients and partners different rates, for the same service. It would be beneficial for the business to keep this information as private as possible.

- As a private citizen, companies have access to your spending habits - which includes the amounts you spend and items you purchase. If you can disconnect your spending habits from your personal identity, then companies will have less ammunition for intrusive advertisements and manipulation.

- If a company which accepts payment in cryptocurrency is compromised, then the bad actors will be able to easily view all of its customer’s spending habits. Ensuring that privacy is maintained throughout all steps of a transaction protects all participants involved.

Bitcoin was the first major cryptocurrency released to the masses in 2009 with a goal of serving as digital cash, but since its release, the community has learned that it is pseudonymous and not private. With strategically placed nodes around the globe, there are surveillance oriented nodes which can track all of Bitcoin’s payments and gather enough information to connect transactions with an IP address, and potentially, a user’s personal identity. As a result, we aim to improve upon Bitcoin’s original mission by keeping true to its core consensus rules while improving privacy to protect transactional data exposed to the network.

## Our Technology

Our technology stack includes a combination of the Zerocoin protocol, RingCT, Dandelion, and Bulletproofs. Let’s briefly dive in to understand how Veil incorporates these.

### Zerocoin Protocol and Ring CT

Veil is an always-on private cryptocurrency. With most cryptocurrencies, privacy is merely an option in a user’s wallet, meaning a user can choose to spend in a pseudonymous manner, or a more private fashion.

Technically speaking, the Veil project, much like other Zerocoin focused projects, has two types of coins: Basecoins and Zerocoins. With most other projects, users must manually mint their Basecoins into Zerocoins, if they so choose. With Veil, Basecoins are automatically minted into Zerocoins above 10 Basecoin. In other words, every time a user has at least 10 Basecoins, they are automatically minted into Zerocoins. The reason that two types of coins exist and every coin is not minted into a Zerocoin, despite the fact they are the same currency (Veil), is because there is a computational cost to minting and spending Zerocoins. Please note that the average user does not need to worry about this, as they will ultimately see one balance.

In Veil, Basecoin transactions are anonymized using RingCT and stealth addresses. RingCT is a method to anonymize the sender in a transaction by merging the sender’s digital signature with random other signatures grabbed from the blockchain’s history, creating a final, unique signature. Then using a range proof the amount transacted is hidden. Ultimately, the network does not know the sender or amount in a transaction but using a cryptographic key image, miners can confirm that the transaction is valid and no double-spend has occurred.

Now, every 10 Basecoins auto-mints into 1 Zerocoin denomination, which to the user is simply 10 Veil. This is the relationship Veil has created between RingCT and Zerocoin logic. RingCT anonymizes the Basecoins, while Zerocoin ensures the highest level of privacy for the sender.

### What makes Zerocoin private?

As you can tell, we are major advocates of the Zerocoin protocol. We will briefly explain how this process works.

There is the process of minting Basecoins into Zerocoins and then the process of spending Zerocoins.

Zerocoin Minting. The minting process begins by burning Basecoins and generating a serial number which represents the value of those Basecoins - let’s say 10 Basecoins are minted into 1 Zerocoin denomination of Veil. In this case, 10 Basecoins are burned and there is a serial number created representing those 10 Basecoins as 1 Zerocoin denomination. The user then takes this serial number and cryptographically commits it to the blockchain.

A common way to visualize this cryptographic commitment of the serial number is by pretending the serial number is a message placed in a locked box. You put the lockbox up publicly for the network to see (this is committing it to the blockchain). Your lockbox looks like everyone else’s and no one knows whose box belongs to who. Only each individual owner can open their own lockbox if they have the proper private key. The network merely knows that there are a bunch of lockboxes representing burned coins.

Zerocoin Spending. Next, you want to send someone Veil, hence, you want to spend Zerocoins. To gain access to your lockbox, you must prove that you have the key to open it. Cryptographically, in terms of the blockchain, this proving process is done through zero-knowledge proofs where you can prove to the network that you opened a box. You do not show the contents of the box, or even which box was yours. In essence, the Zerocoin mint and spending action allows the network to confirm that the person who spent the Zerocoins must be the same person who minted them, and the serial number is marked as used.

To onlookers, this looks like a brand new coin, with no history or source address, is being sent, thus providing absolute unlinkability between the sender and the transaction. In layman’s terms, it looks like a coin is created and sent out of thin air.

### Dandelion

Inspired by BIP 156, Veil has implemented Dandelion into its wallet. RingCT and Zerocoin are excellent methods for ensuring user privacy after a transaction is broadcasted, but not from the onset of a broadcast. Being meticulous in our approach, we chose to include Dandelion which makes the original IP address of a transaction difficult to determine. Put simply, when sending a transaction using Dandelion, the initial broadcast is more private. A specific node, chosen at random, is first given the transaction data from the sending node. The transaction is temporarily not available for query by other nodes in the network. This transaction is kept separate from the others and is sent to a few other nodes privately. Eventually, the transaction is publicly broadcasted to the network similar to a typical transaction would, but in this case, the transaction is broadcasted from a node, or multiple nodes, who are not the original sender.

### A Veil Transaction in Action

Please look closely at the diagram below, displaying how Veil’s transactions with Basecoin Veil and Zerocoin Veil work together. Note: this example uses whole numbers and neglects to include minting fees for the sake of simplicity.

![](/uploads/blog/2018-11-19-change.png)


## Join us on this journey.

This was a brief overview of the main technologies used in the Veil project. Moving forward we will be producing content which explains our thought process and technology in a more detailed fashion. Additionally, if you want to keep up with us be sure to subscribe to our email newsletter for all of our latest updates. Welcome aboard!