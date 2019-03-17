var MARKET_ENDPOINT = "https://api.coingecko.com/api/v3/simple/price?ids=veil&vs_currencies=usd&include_market_cap=true&include_24hr_change=true";
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
            '</li>' +
            '<li class="my-2 py-2 border-t border-b">' +
              '<div class="text-xs uppercase opacity-75 leading-loose">Total supply:</div>' +
              '<div class="text-base">' + Number(supply.total.toFixed(0)).toLocaleString(undefined) + '</div>' +
            '</li>' +
            '<li class="">' +
              '<div class="text-xs uppercase opacity-75 leading-loose">Zerocoin supply:</div>' +
              '<div class="text-base">' + Number(supply.zerocoin.toFixed(0)).toLocaleString(undefined) + '</div>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>'
    )
  })
});

up.compiler('[data-bounties]', function($element) {
  $.get("https://api.github.com/repos/veil-project/veil/issues?labels=Bounty").done(function(data) {
    console.log(data);
    output = "";
    for (var i = 0; i < data.length; i++) {
      var bounty = data[i];
      var priceLabel = bounty.labels.find(function(label) {
        return label.name.toLowerCase().indexOf("price:") > -1;
      })
      var price = priceLabel && priceLabel.name.split(":")[1].trim();
      output +=
        '<div class="flex-none w-full md:w-1/2 p-2">' +
          '<a href="' + bounty.html_url + '" class="block p-6 text-black hover:text-blue no-underline bg-grey-lighter rounded" target="_blank">' +
            '<div class="font-medium leading-none mb-2 text-md">' + bounty.title + '</div>' +
            '<div class="text-sm text-black opacity-75 leading-none">' +
              [
                '#' + bounty.number,
                new Date(bounty.created_at).toLocaleDateString(),
                price ? 'Reward: ' + price + ' Veil' : null
              ].filter(function(obj) { return obj }).join(' &middot; ') +
            '</div>' +
          '</a>' +
        '</div>';
    }
    $element.html(output)
  })
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