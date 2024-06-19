$(document).ready(function () {
  $('[data-active="false"]').hide();
  $(`[data-bar='${$('[data-active="true"]').data('bar')}'].inactive`).hide();
  $('#part1,#part2,#requestDemoSection,#returnHome,#returnHomeHeader').hide();

  $('#learnMore1').click(function () {
    $('#part1').show();
    $('#learnMore1').hide();
  })
  $('#learnMore2').click(function () {
    $('#part2').show();
    $('#learnMore2').hide();
  })
  $('.leftAngle').click(function () {
    let curBar = $('[data-active="true"]').data('bar');
    if (curBar === 'bar1') {
      $('[data-bar=bar1][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar1].inactive').show();
      $('[data-bar=bar8]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar8].inactive').hide();
    } else if (curBar === 'bar2') {
      $('[data-bar=bar2][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar2].inactive').show();
      $('[data-bar=bar1]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar1].inactive').hide();
    } else if (curBar === 'bar3') {
      $('[data-bar=bar3][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar3].inactive').show();
      $('[data-bar=bar2]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar2].inactive').hide();
    } else if (curBar === 'bar4') {
      $('[data-bar=bar4][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar4].inactive').show();
      $('[data-bar=bar3]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar3].inactive').hide();
    } else if (curBar === 'bar5') {
      $('[data-bar=bar5][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar5].inactive').show();
      $('[data-bar=bar4]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar4].inactive').hide();
    } else if (curBar === 'bar6') {
      $('[data-bar=bar6][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar6].inactive').show();
      $('[data-bar=bar5]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar5].inactive').hide();
    } else if (curBar === 'bar7') {
      $('[data-bar=bar7][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar7].inactive').show();
      $('[data-bar=bar6]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar6].inactive').hide();
    } else if (curBar === 'bar8') {
      $('[data-bar=bar8][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar8].inactive').show();
      $('[data-bar=bar7]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar7].inactive').hide();
    }
  })

  $('.rightAngle').click(function () {
    let curBar = $('[data-active="true"]').data('bar');
    if (curBar === 'bar1') {
      $('[data-bar=bar1][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar1].inactive').show();
      $('[data-bar=bar2]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar2].inactive').hide();
    } else if (curBar === 'bar2') {
      $('[data-bar=bar2][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar2].inactive').show();
      $('[data-bar=bar3]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar3].inactive').hide();
    } else if (curBar === 'bar3') {
      $('[data-bar=bar3][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar3].inactive').show();
      $('[data-bar=bar4]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar4].inactive').hide();
    } else if (curBar === 'bar4') {
      $('[data-bar=bar4][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar4].inactive').show();
      $('[data-bar=bar5]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar5].inactive').hide();
    } else if (curBar === 'bar5') {
      $('[data-bar=bar5][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar5].inactive').show();
      $('[data-bar=bar6]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar6].inactive').hide();
    } else if (curBar === 'bar6') {
      $('[data-bar=bar6][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar6].inactive').show();
      $('[data-bar=bar7]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar7].inactive').hide();
    } else if (curBar === 'bar7') {
      $('[data-bar=bar7][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar7].inactive').show();
      $('[data-bar=bar8]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar8].inactive').hide();
    } else if (curBar === 'bar8') {
      $('[data-bar=bar8][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar8].inactive').show();
      $('[data-bar=bar1]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar1].inactive').hide();
    }
  })
  $('.dotsDiv img').click(function () {
    let barClicked = $(this).attr('data-bar');
    $('[data-active=true]').hide();
    $('.inactive').show();
    $(`[data-bar=${barClicked}]`).attr('data-active', 'true');
    $(`[data-bar!=${barClicked}]`).attr('data-active', 'false');
    $('[data-active=true]').show();
    $(`[data-bar=${barClicked}].inactive`).hide();
  })
  $('.requestDemo').click(function () {
    $('.hideOnRequest,#returnHome,#returnHomeHeader').hide();
    $('#requestDemoSection,#reqDemoForm,#reqDemoHeader,#reqDemoDesc').show();

  })
  $('.syncLogo,#returnHome').click(function () {
    $('#requestDemoSection').hide();
    $('.hideOnRequest').show();
    $('#part1,#part2').hide();
    $('#learnMore1,#learnMore2').show()
  })
  $('#reqDemoForm').submit(function (e) {
    e.preventDefault();
    $('#questionsToSbmt,#phoneToSbmt,#emailToSbmt,#firstNmToSbmt,#lastNmToSbmt').val('');
    $('#reqDemoForm,#reqDemoHeader,#reqDemoDesc').hide();
    $('#returnHome,#returnHomeHeader').show();
  })
});
