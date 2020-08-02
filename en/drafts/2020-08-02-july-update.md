---
layout: post
lang: en
title: 'Veil month’s end update for July 2020'
date: 2020-08-02
author: strontium
permalink: /news/2020-july-update/
categories: news
excerpt: 'Welcome to the first monthly Veil project update article. Here you’ll find an overview of some of the work that’s taken place during the preceding month. '
description: 'Welcome to the first monthly Veil project update article. Here you’ll find an overview of some of the work that’s taken place during the preceding month. '
---

Welcome to the first monthly Veil project update article. Here you’ll find an overview of some of the work that’s taken place during the preceding month. 

![](/uploads/blog/2020-08-02-update.png)

## Development updates

Development efforts are currently focused almost exclusively on getting the Proof-of-Work update release out. PoW is currently in testing, and draws closer to release. More on PoW can be found in the next section.

**CI changes**

This month a change to how work with Git is handled was made by the developers. Where previously they’ve relied on Travis for continuous integration, they’ve now shifted to GitHub Actions. There are several advantages here, though the greatest is perhaps the production of images on the fly as commits are made. This makes running the latest development build of the wallet far easier, faster, and more accessible than it previously was.

**Update visibility**

A bot channel on Veil’s development Discord server has been made publicly visible. This channel tracks changes to the Veil Github repository so users can conveniently watch updates as they’re made. You can access the channel via [this link]( https://discord.gg/36tjAV8).

## Proof-of-Work testing

While the work on Proof-of-Work changes is all but complete, testing to ensure it behaves as intended over longer periods of time with multiple participants on the network is crucial.

**From Sean:**

We restarted our development network around the 21st / 22nd of July for a change to the Proof-of-Work minimum difficulty.

All three algorithms are being mined successfully: ProgPow in a separate GPU miner, RandomX by CPU, and SHA256D also by CPU currently. It has been possible using virtual machines to run three CPUs each on different algorithms on one physical machine with another machine staking.

**From codeofalltrades:**

The block difficulty fix for the new algo package is working much better. Checking the devnet explorer the algo splits are very close to the targets. Prior to the fix the difficulty of an algo would only adjust down once a block of that algo was found.

If the difficulty wants to run up really high you could mine for hours and hours with no blocks. If the algo is below its target and no blocks are being mined the difficulty will step down gradually.

There is a new RPC command in the wallet that will get the block count by algo over the previous 1440 blocks (~1 day).

---

Anyone wanting to help out with testing, or interested in getting a feel for the new mining algos before mainnet release can [join the development Discord server]( https://discord.gg/5V3Y5Mf) to find information.

## Ternio BlockCard and Veil

![](/uploads/blog/2020-08-02-BlockCardAv.png)

Working with our friends over at Ternio, we’re pleased to announce a Veil BlockCard Visa debit card is now available through [Ternio’s BlockCard website]( https://veil.getblockcard.com/). Please note that presently physical cards are only available within the United States, though Europe is set to follow in the near future.

## Other business development efforts

Regarding exchanges, presently Hort’s efforts are being made only to maintain existing arrangements and prepare them for upcoming hard forks. While we look forward to providing further platforms through which to trade with Veil, we acknowledge the stress hard forks place on exchanges and users. As we’re anticipating several hard forks in the near future, further exchanges will be engaged once it’s more opportune to do so.

Joshua is working hard on developing relationships with a mind to future partnerships and arrangements. Obviously the corona situation complicates matters, but he presses on, launching [Have I Been Known? On ProductHunt]( https://www.producthunt.com/posts/have-i-been-known), furthering work with [Staking Rewards](https://www.stakingrewards.com/), and other efforts not quite ready to be spoken about.

For his article contributions there, Hacker Noon also has Joshua up for a [Noonie award]( https://noonies.tech/)!  Follow [Joshua on Twitter]( https://twitter.com/satoshua) to keep an eye on his Hacker Noon related news.

Joshua also has a [Meet the team article]( https://veil-project.com/blog/meet-the-team-joshua-marriage/) now available on Veil’s website where you can learn more about him.

## Twitter puzzle

For July we held a [word puzzle competition on Twitter]( https://twitter.com/ProjectVeil/status/1285641695820943363).

Congratulations to the winner, @HordalandMining on solving the puzzles correctly and winning 1000 veil! The following users have also won 100 veil for retweeting:

- @Real_PRPros
- @supernyner
- @Catnip202X
- @1770
- @twoshotgurl

If you see your username above and have not yet provided us with a basecoin address, please contact the official Veil Twitter account using your winning account.

For those expressing curiosity, the puzzle solutions and reasoning follows.

**1 APPIAN**

The Appian Way was a highway along which criminals and revolutionaries were crucified and left for dead as an example by the authorities of Rome.

**2 ARSENIC**

Arsenic, atomic number 33, is an element with gray, yellow, and black allotropes that’s generally toxic to life and used in production of useful alloys.

**3 FLETCHER**

Arrows, which we use as signs to guide us, and fire from bows as projectile weapons, are traditionally made by fletchers.

**4 ICOSAHEDRON**

Platonic solids (named for Plato) are three-dimensional structures made up of sides of differing polygonal planes. Each is associated with a classical element.

**5 GNOMON**

Sundials tell the time with a gnomon casting a shadow on a face relative to the sun’s position, though are now primarily ornamental as clocks have replaced them.

**6 NAIAD**

Neptune was worshipped as god of the seas, though is also a planet in our solar system. Naiad is a moon of Neptune with the tightest orbit.

**7 PERSONAL**

Shuffling the highlighted letters from the other answers creates this word.

I look forward to putting together more competitions for you all, so keep an eye on [Veil’s official Twitter account]( https://twitter.com/ProjectVeil) for more in the future.

## Veiliens efforts

Unsure what Veiliens is about? [Learn about Veiliens here]( https://discord.com/channels/481997816982405130/510216423059226654/735519694055931994).

Following up with the Veiliens proposal, I’m working hard on getting things together to kick this off properly. As you may know, Discord isn’t exactly the most accommodating when it comes to formatting, image inclusion, text wrapping, etc. I’m still looking at options, but it’s looking like a lot of the heavy lifting may need to be done with images.

Below are some rank badge image bases I’m working on.

![](/uploads/blog/2020-08-02-badges.png)

These are working the way up to the full Veil V logo. I’m hoping I can add some animation layers (shines and shimmers) if Discord plays nice.

I’m still working on how levels will be acquired exactly, but as mentioned on Discord it’s likely to revolve around actions that benefit Veil such as content production, helping out with testing, engaging on Twitter, etc.

I’ll have more for you soon, but in the meantime please feel free to discuss ideas with us on Discord.

## PoW release preparation

In the lead up to Proof-of-Work changes we’ve been making efforts to make the process smoother. First, here are a few groups we’re working with.

![](/uploads/blog/2020-08-02-PoWP.png)

**ZelLabs Pools**

Zel will be Veil’s primary pool service moving forward. We’ve built up a good relationship with them, and will make sure they have all the support they need in order to host a reliable VEIL mining operation for users to participate in.
Learn more about ZelLabs Pools [here]( https://zellabs.net/pools/).

**WoolyPooly**

Aleksandr, our Russian community manager, will be providing a VEIL mining pool service with WoolyPooly, a Russian and Persian friendly pool. We hope this option not only helps protect the network, but makes our non-English-speaking Russian community feel they’ve a less intimidating option for mining.
Visit WoolyPooly [here]( https://woolypooly.com/#/).

**WhatToMine**

codeofalltrades and I have been working with WhatToMine to ensure their popular mining rewards website will have accurate estimations for Veil’s upcoming PoW algo switch.

Visit WhatToMine [here]( https://whattomine.com/).
Further, we’re well aware that the upcoming Proof-of-Work changes are a little intimidating and unlikely to be readily understood by the mining community. As such, we’ve produced a simple infographic for a basic understanding of Veil’s PoW changes.

![](/uploads/blog/2020-08-02-MiningHandbookS.png)

With the help of Aleksandr and Bruce, this will also be available in Russian and Chinese at PoW release and made available to mining pools.

ONeZetty and Yankdiary have also been helping out, so I’d like to thank them for their efforts too.

Lastly, we also released an interview with Kristy-Leigh Minehan aka OhGodAGirl on Veil’s PoW changes, ProgPoW, and mining in general. You can read that [here](https://veil-project.com/blog/2020-OhGodAGirl/).

## Closing words

This concludes July’s update. We’re hard at work as we close in on the new Proof-of-Work release, which we’re excited to get to you all and eager to get our hands on ourselves.

As always, you’re welcome to reach out to the team on Discord or social media with any questions.