var MARKET_ENDPOINT = "";
var SUPPLY_ENDPOINT = "https://explorer.veil-project.com/api/index/";

up.compiler('[data-price]', function($element) {
  $.when(
    $.get(MARKET_ENDPOINT).then(function(data) {
      return {
        price: data.veil.usd,
        change: data.veil.usd_24h_change,
        cap: data.veil.usd_market_cap / 1000000
      };
    }),
    $.get(SUPPLY_ENDPOINT).then(function(data) {
      var zerocoin = data.backend.zerocoinsupply;
      return {
        total: data.backend.moneysupply / 100000000,
        zerocoin: zerocoin[zerocoin.length - 1].amount / 100000000
      }
    })
  ).done(function(market, supply) {
    $element.html(
      '<div class="Dropdown block leading-none text-teal whitespace-no-wrap hover:text-white">' +
        '<span class="block py-3 pointer-events-none">' + market.price + ' USD <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 32 32"><path d="M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z"></path></svg></span>' +
        '<div class="Dropdown-menu z-50 text-black text-center p-3">' +
          '<ul class="list-reset">' +
            '<li class="">' +
              '<div class="text-xs uppercase opacity-75 leading-loose">Market cap:</div>' +
              '<div class="text-base">$' + market.cap.toFixed(2) + 'M</div>' +
              '<a href="https://www.coingecko.com/en/coins/veil" target="_blank" style="font-size:.6rem" class="block mt-2 text-grey-dark hover:text-black">' +
                'Powered by CoinGecko' +
              '</a>' +
            '</li>' +
            '<li class="my-2 py-2 border-t border-b">' +
              '<div class="text-xs uppercase opacity-75 leading-loose">Total supply:</div>' +
              '<div class="text-base">' + Number(supply.total.toFixed(0)).toLocaleString(undefined) + '</div>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>'
    )
  })
});

up.compiler('[data-bounties]', function($element) {
  // Labels are case-sensitive on GitHub, and spaces should be encoded.
  // Tip: If you later migrate labels to "bounty: open", just update LABEL below.
  var OWNER = 'veil-project';
  var REPO  = 'veil';
  var LABEL = 'Bounty: Open';

  // Pull only open issues, newest activity first. (Older bounties still show up if recently updated.)
  var ISSUES_URL =
    'https://api.github.com/repos/' + OWNER + '/' + REPO + '/issues' +
    '?state=open' +
    '&labels=' + encodeURIComponent(LABEL) +
    '&sort=updated' +
    '&direction=desc' +
    '&per_page=30';

  $element.html('<div class="p-2">Loading…</div>');

  $.get(ISSUES_URL)
    .done(function(issues) {
      // GitHub returns PRs in /issues too; filter those out.
      issues = (issues || []).filter(function(i) { return !i.pull_request; });

      if (!issues.length) {
        $element.html(
          '<div class="p-2 opacity-75">' +
            'No open bounties are listed right now. ' +
            'If you want to help, check the GitHub issues or ask in Discord for current priorities.' +
          '</div>'
        );
        return;
      }

      $element.html('');

      issues.forEach(function(issue) {
        var devStatusLabel = (issue.labels || []).find(function(l) {
          return l && l.name && l.name.toLowerCase().indexOf('dev status:') !== -1;
        });
        var statusText = devStatusLabel ? devStatusLabel.name.split(':')[1].trim() : 'Help Wanted';

        $element.append(
          '<div class="flex-none w-full md:w-1/2 p-2">' +
            '<a href="' + issue.html_url + '" class="block p-6 text-black hover:text-blue no-underline bg-grey-lighter rounded" target="_blank" rel="noopener noreferrer">' +
              '<div class="font-medium leading-none mb-2 text-md">' + issue.title + '</div>' +
              '<div class="text-sm text-black opacity-75 leading-none">' +
                [
                  '<span class="font-medium">' + statusText + '</span>',
                  '#' + issue.number,
                  'Updated: ' + new Date(issue.updated_at).toLocaleDateString(),
                  'Reward: <span id="reward_' + issue.number + '">TBD</span> VEIL'
                ].join(' &middot; ') +
              '</div>' +
            '</a>' +
          '</div>'
        );

        // Reward parser:
        // - Looks for "bounty price: 1234" (legacy)
        // - Also supports "$VEIL: 1234" or "reward: 1234" (newer, more natural)
        $.get(issue.comments_url).done(function(comments) {
          var reward;

          for (var i = 0; i < (comments || []).length; i++) {
            var body = (comments[i].body || '');

            var m1 = body.match(/bounty\s*price:\s*([0-9]+(?:\.[0-9]+)?)/i);
            var m2 = body.match(/\$?veil\s*:\s*([0-9]+(?:\.[0-9]+)?)/i);
            var m3 = body.match(/reward\s*:\s*([0-9]+(?:\.[0-9]+)?)/i);

            var hit = (m1 && m1[1]) || (m2 && m2[1]) || (m3 && m3[1]);
            if (hit) { reward = hit; break; }
          }

          $('#reward_' + issue.number).html(reward || 'TBD');
        });
      });
    })
    .fail(function() {
      $element.html(
        '<div class="p-2 opacity-75">' +
          'Could not load bounties from GitHub right now (rate limit or network issue). ' +
          'Please check the GitHub repo directly, or try again later.' +
        '</div>'
      );
    });
});

up.compiler('[data-date]', function($element) {
  var date = Date.parse($element.data('date'));
  var today = new Date();
  if (date < today) $element.addClass('is-past');
});

up.compiler('[data-carousel]', function($element, options) {
  $element.flickity(options);
})

$(window).on('scroll', function() {
  var scrolled = window.scrollY > 0;
  $('.VeilNav').toggleClass('is-scrolled', scrolled);
  $('.ScrollArrow').toggleClass('is-scrolled', scrolled);
})

up.on('click', 'a[href^="#"]', function(event, $link) {
  event.preventDefault()
  var scrollNode = document.scrollingElement || document.documentElement;
  up.scroll(scrollNode, $($link.attr('href')).offset().top - 90, {
    easing: 'swing',
    duration: 250
  });
})

$(window.location.hash).prop('checked', true)