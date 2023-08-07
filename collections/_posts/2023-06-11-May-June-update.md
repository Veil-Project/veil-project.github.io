---
layout: post
lang: en
title: 'MAY JUNE TLDR ... Catching up on Veil Discord and Twitter'
date: 2023-06-10
author: sean
permalink: /blog/2023-May-June-blog-update/
categories: blog
excerpt: 'For another bounty the recent Linux (GUI) setup guide has been joined by its macOS equivalent. Some code commits, especially to make it more friendly, have been made to the master branch ready for a minor wallet update.'
description: 'Added another Veil wallet setup guide for the GUI wallet has been uploaded. Some help in the wallet has been added and made more accessible.'
---

## Helpful changes to the Veil Core wallet code ready for a minor update (coming soon)
- A reminder in the command line (or Debug Console) help that "dumpprivkey" and "dumpwallet" does not include private keys for stealth addresses. "Use wallet.dat file or seed words for complete backup". This note is also now added to the output of dumpwallet, to be sure.  
- The "Overview" wallet page in the GUI wallet is where we normally see a list of transactions, but when someone starts the wallet without any transactions yet, it shows some information to help them get started! People can forget all about these things once a single transaction appears, and there was no way to see that page again! You might know it as the ["Looks like you are new here" page](/uploads/blog/2023-06-11-LooksLikeYouAreNewHerePage.png)! So a helpful contributor made a very neat way of displaying it again whenever you want, which also as a side-effect made the existing in-wallet FAQ **much more accessible**! The link to Veil.tools now works there too.

## Veil (incentive) Bounty Tasks
Please check Veil Telegram groups such as the Bounty Telegram, and other places where community work on Veil may have been notified. Any questions, please let us know and we will look into whether some old Veil bounties remain relevant, and you may find some new ones.

"Ohcee" (Github name) received bounty for a second of his Veil GUI SETUP GUIDES <a href="/uploads/setup_guides/Veil-wallet-install-macOS-GUI.html">Veil wallet installation for the GUI Veil core wallet</a>. 2023-06-11 This is also linked from the [Wallet download / Get Started page](/get-started/).

- The Veil Project: [https://veil-project.com](https://veil-project.com)
- Veil Project, Discord: [https://discord.veil-project.com](https://discord.veil-project.com)
- Veil-Dev, Discord:  [https://discord.gg/gGPcwxnSuR](https://discord.gg/gGPcwxnSuR)

- Veil Bounty: [https://t.me/VEILBounty](https://t.me/VEILBounty)
- Veil Announcements: [https://t.me/VEILAnnouncements](https://t.me/VEILAnnouncements)
- Veil Project en Español: [https://t.me/VeilEspanol](https://t.me/VeilEspanol)
- Veil Project Ru: [https://t.me/VeilRussia](https://t.me/VeilRussia)
- Veil Project (English): [https://t.me/VEILProject](https://t.me/VEILProject)

- Veil on Reddit: [https://www.reddit.com/r/Veil/](https://www.reddit.com/r/Veil/)
- Veil on BitcoinTalk: [https://bitcointalk.org/ ... topic=5125073](https://bitcointalk.org/index.php?topic=5125073.new#new)

_(Please be aware of spam on Telegram and other third party websites. Our native community is on Discord._)

## The Veil official TWITTER promo for MAY 2023 has completed
A 10,000 Veil bounty was paid to the indefatigable Veil enthusiast "VEILionaire | @veilminer007"! "@C0nt1ng3nt" came in a very worthy second, and received a 500 Veil bounty, while "Alex mail | @Alex_m_here" is offering his third place prize of 50 Veil (which we will double) to someone else who retweets and includes their Veil stealth address and follows his Twitter account and ours! It's presently the pinned post on [@ProjectVeil on Twitter](https://twitter.com/ProjectVeil) — [The exact tweet is here](https://twitter.com/ProjectVeil/status/1663726287582642179?s=20)! Our favorite Veil meme artists are therefore currently VEILionaire and C0nt1ng3nt, with "Alex mail" providing enthusiastic support! 😀

## Reminder that miners on Veil are currently SOLO mining ProgPoW without a pool
With the Veil price still a bargain, there was not enough money in it for our appreciated former ProgPow pool WoolyPooly to keep supporting the coin. There was another pool that started not long ago for RandomX, [fastpool.xyz/](https://fastpool.xyz/veil-rx/), remind us if there are any others!
SHA256D is still solo CPU mining. No ASICs developed. This would and will change with a much better Veil price, as incentives would make it happen.

## TWITTER alternatives
Results from Twitter have not been up to expectations, so we would like to encourage people (and this is a call to the Veil team also) to get active on other platforms such as:
- YOUTUBE [@VEILProject](https://www.youtube.com/@VEILProject/) [@VeilCryptoPrivacy](https://www.youtube.com/@VeilCryptoPrivacy)
- RUMBLE [Rumble.com](https://rumble.com/)
- VIMEO [Vimeo.com / Sean Phillips](https://vimeo.com/user95312270)
- LBRY [lbry.org](https://lbry.org/) » [Odysee / Sean Crypto Phillips](https://odysee.com/@seanph:e)
- MASTODON [@SeanPhillips](https://mas.to/@SeanPhillips)
- GAB [SPhillip](https://gab.com/SPhillip)
- TUMBLR [veil-project](https://www.tumblr.com/veil-project)
- TRUTH SOCIAL - Maybe try this too. [truthsocial.com](https://truthsocial.com/) _USA only?_
- _Tried Parler.com but it doesn't even load any more._
- Please let us know (in our <a href="http://discord.veil-project.com" target="_blank" rel="noopener noreferrer">DISCORD</a>) about any other platforms worth trying!

## Core development
More developers are coming in, but if you know of people who have an outstanding understanding of Applied Cryptography, ZK Proofs, zkSNARKs, and such things, like serious mathematicians, and have goals aligned with the Veil, cryptocurrency and Bitcoin community, they would be ideal candidates. We have a number of textbook PDFs for others who would like a refresher.

RingCT staking, while running on the development network is still awaiting some bug fixes and further rigorous testing.

## The markets
The VEIL price and volume, last time checked on CoinGecko, there seems to be a bug in their data that suggests that not only there hasn't been any volume for six days, (not true), that the price is $151.7 BILLION DOLLARS and the volume $207.6 million dollars! 🤪 Also NOT true! 

On the other hand, on CoinMarketCap they are using PROBIT's data, which in fact has days of zero volume, while TradeOgre's price and volume is perfectly correct, just not what CoinGecko is currently showing you!

[CoinGecko-priceError](/uploads/blog/2023-06-11-CoinGeckoError.jpg) {Update: This error rarely happens. The CoinGecko price display is usually perfectly fine. See <a href="https://www.coingecko.com/en/coins/veil"  target="_blank" rel="noopener noreferrer">coingecko.com/en/coins/veil</a> .}

Veil traders can, of course, check the Veil markets directly.
- <a href="https://tradeogre.com/exchange/VEIL-BTC"  target="_blank" rel="noopener noreferrer">tradeogre.com/exchange/VEIL-BTC</a>
- <a href="https://www.probit.com/app/exchange/VEIL-BTC"  target="_blank" rel="noopener noreferrer">Probit.com...VEIL/BTC</a>
- <a href="https://www.probit.com/app/exchange/VEIL-USDT"  target="_blank" rel="noopener noreferrer">Probit.com...VEIL/USDT</a>

More exchanges are in the works. Suggest your favourite **decentralised** exchanges (DEX) in our 
<a href="http://discord.veil-project.com" target="_blank" rel="noopener noreferrer">DISCORD</a> !