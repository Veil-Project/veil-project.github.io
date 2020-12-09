---
layout: post
lang: en
title: 'Veil month’s end update for November 2020'
date: 2020-12-04
author: strontium
permalink: /news/2020-november-update/
categories: news
excerpt: 'Welcome to the November monthly Veil project update article. November saw the team focus mainly on quality of life developments, operational optimization, and expansion of promotion into the Chinese market.'
description: 'This article provides insight into Veil project developments for the month of November 2020.'
---

Welcome to the November monthly Veil project update article. November saw the team focus mainly on quality of life developments, operational optimization, and expansion of promotion into the Chinese market.

![](/uploads/news/2020-12-07-NovemberUpdate.png)

## Development updates

The release of the new 1.1.0 Veil core wallet in October opened several mining options for users, as well as introducing a number of bug fixes. Since the release, the developers have been watching performance, gathering feedback, and identifying any issues to arise following the transition. While progress on RingCT staking is a high priority, it doesn't mean support and improvements to the core wallet version 1.1 aren't to be expected.

### Multi-algorithm mining

The new consensus model has overall proven very successful. We're thrilled to see so many miners taking advantage of the new system—particularly having GPU miners finding blocks with ProgPoW. Veil's ProgPoW mining has not only been working smoothly, but has proven rewarding, and occupied a place on [WhatToMine](https://whattomine.com/) as a recommended mining coin for GPUs.

If you're interested in mining Veil, see our [1.1 mining guide article](https://veil-project.com/blog/2020-mineafterhardfork/).

RandomX and SHA-256d have also been available to mine, representing a smaller number of blocks. An issue some miners have reported involves a stuck chain while trying to mine with their CPU. Analysis suggests this problem stems from users dedicating too much of their processing power to mining and leaving insufficient resources left to process blocks. This issue and a potential solution are being worked on.

### Assertion failed wallet error

![](/uploads/news/2020-12-07-AsFail.png)

Some users have experienced a critical problem with the wallet (with an Assertion failed error message) that fails the pindexWalk->pprev assertion in GetAncestor. This error occurs due to a corruption of the local blockchain on-disk storage. The corruption isn't readily detectable while the wallet is running, and will not become apparent until the user tries to start the wallet up from their corrupted block database.

The developers have made changes to the block write frequency to help mitigate the corruption of local blockchain data. This improvement is not yet available in the latest release, but has been committed to Master on GitHub. Users experiencing this corruption problem are encouraged to use the master build from [GitHub](https://github.com/Veil-Project/veil).

Please also note that the pre-release master build will not correct the corruption after it has occurred, so users experiencing the corruption will have to restore from a [snapshot](https://veil.tools/snapshots/) prior to being able to run with the new executables.

### Infrastructure migration

November saw Veil's hosted nodes and servers hosting tools such as snapshots and block explorers relocated to cut costs and lower downtime. This process required a period of unavailability of some resources as well as DNS changes. We apologize for inconveniences caused by these changes, but are confident they are worthwhile in the long run.

The [block explorer](https://explorer.veil-project.com/), [Veil Tools](https://veil.tools/), and [Veil Stats](https://veil-stats.com/) websites are all now available and correctly linked to both one the Veil website and within the wallet.

## Marketing

After a very busy period of promotion on Twitter and other social platforms immediately following the 1.1 release, as well as promotions with WoolyPooly, November's marketing efforts have been focused on tapping into the Chinese market.

### Thriving Russian community

A big shout out to our Russian Veil community! It's with great pleasure we've watched them flourish through sustained coordination between Aleksandr—our Russian Regional Coordinator—and Veil's marketing and community management teams. The Russian community make up a large portion of our miners, and it's through them we've seen Veil thrive on [WoolyPooly](https://woolypooly.com/) and more recently on [TradeOgre](https://tradeogre.com/).

Interested in joining the Russian Veil community? You can [find them on Telegram](https://t.me/VeilRussia). Also feel free to reach out to Aleksandr on the [Veil Discord](https://discord.veil-project.com/) (display name Alex).

### Expanding into China

Following the success with the Russian Veil community, efforts in November have been focused on tapping into the Chinese market. I've personally worked with BruceYin, our Chinese Regional Coordinator on developing a plan for catering to the Chinese market. Naturally, there are a number of challenges involved, and these things take time, but we now have begun the ball rolling.

Anyone able to speak Chinese and wanting to join our Chinese community as we seek to grow it can do so by joining the [official Veil Weibo account](https://weibo.com/ProjectVeil/). We will begin posting news there regularly, hosting competitions and giveaways, and engaging with the Chinese crypto community from here on, and would love to have you with us.

As with Aleksandr, feel free to reach out to BruceYin on the [Veil Discord](https://discord.veil-project.com/) (display name bruceyin).

## Closing words

This concludes November’s update. As always, the team welcome questions or feedback on Discord or social media. Well-wishes to you all for the holiday season from the Veil team.