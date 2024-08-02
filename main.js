$(document).ready(function () {
  $('[data-active="false"]').hide();
  $(`[data-bar='${$('[data-active="true"]').data('bar')}'].inactive`).hide();
  $('#part1,#part2,#requestDemoSection,#returnHome,#returnHomeHeader,.reqFooter').hide();
  $('.playPauseBtns').hide();
  $('#playBtn1').show();
  let infoStrip1ImgUrl = '';
  let infoStrip2ImgUrl = '';
  if (screen.width > 1727) {
    infoStrip1ImgUrl = 'imgs/img11728Plus.png';
    infoStrip2ImgUrl = 'imgs/img21728Plus.png';
  } else if (screen.width > 1439) {
    infoStrip1ImgUrl = 'imgs/img11440Plus.png';
    infoStrip2ImgUrl = 'imgs/img21440Plus.png';
  } else if (screen.width > 1334) {
    infoStrip1ImgUrl = 'imgs/img11200Plus.png';
    infoStrip2ImgUrl = 'imgs/img21200Plus.png';
  } else if (screen.width > 991) {
    infoStrip1ImgUrl = 'imgs/img1992Plus.png';
    infoStrip2ImgUrl = 'imgs/img2992Plus.png';
  } else if (screen.width > 743) {
    infoStrip1ImgUrl = 'imgs/img1744Plus.png';
    infoStrip2ImgUrl = 'imgs/img2744Plus.png';
  } else if (screen.width > 429) {
    infoStrip1ImgUrl = 'imgs/img1430Plus.png';
    infoStrip2ImgUrl = 'imgs/img2430Plus.png';
  } else if (screen.width <= 429) {
    infoStrip1ImgUrl = 'imgs/img1320Plus.png';
    infoStrip2ImgUrl = 'imgs/img2320Plus.png';
  }
  $('.infoStrip .descImg').attr('src', `${infoStrip1ImgUrl}`);
  $('.infoStrip2 .descImg').attr('src', `${infoStrip2ImgUrl}`);

  $('#learnMore1,#learnMore3').click(function () {
    $('#part1').show();
    $('#learnMore1,#learnMore3').hide();
    if (screen.width < 1440) {
      $(".infoStrip2").css("margin", "24px 60px 23px 60px");
      $(".descHeader2Div").css("margin-top", "0");
    }
    if (screen.width < 1335) {
      $(".infoStrip").css("margin", "24px 50px 24px 50px");
      $(".infoStrip2").css("margin", "53px 50px 24px 50px");
      $(".descHeader1Div").css("margin-top", "22px");
      $(".descHeader2Div").css("margin-top", "-27px");
    }
    if (screen.width < 744) {
      $(".infoStrip").css("margin", "26px 20px 24px 20px");
      $(".infoStrip2").css("margin", "20px 20px 24px 20px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
    if (screen.width < 430) {
      $(".infoStrip").css("margin", "13px 10px 16px 10px");
      $(".infoStrip2").css("margin", "11px 10px 16px 10px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
  })
  $('#learnMore2,#learnMore4').click(function () {
    $('#part2').show();
    $('#learnMore2,#learnMore4').hide();
    if (screen.width < 1440) {
      $(".infoStrip2").css("margin", "24px 60px 24px 60px");
      $(".descHeader2").css("margin-top", "0");
    }
    if (screen.width < 1335) {
      $(".infoStrip").css("margin", "24px 50px 24px 50px");
      $(".infoStrip2").css("margin", "53px 50px 24px 50px");
      $(".descHeader1Div").css("margin-top", "22px");
      $(".descHeader2Div").css("margin-top", "-27px");
    }
    if (screen.width < 744) {
      $(".infoStrip").css("margin", "26px 20px 24px 20px");
      $(".infoStrip2").css("margin", "20px 20px 24px 20px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
    if (screen.width < 430) {
      $(".infoStrip").css("margin", "13px 10px 16px 10px");
      $(".infoStrip2").css("margin", "11px 10px 16px 10px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
  })
  $('.leftAngle').click(function () {
    let curBar = $('[data-active="true"]').data('bar');
    let leftAngleMargin = '';
    let rightAngleMargin = '';
    if (curBar === 'bar1') {
      $('[data-bar=bar1][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar1].inactive').show();
      $('[data-bar=bar8]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar8].inactive').hide();
      $('#pauseBtn8').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '597px 20px 0px 20px';
        rightAngleMargin = '597px 20px 0px 20px';
      }
    } else if (curBar === 'bar2') {
      $('[data-bar=bar2][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar2].inactive').show();
      $('[data-bar=bar1]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar1].inactive').hide();
      $('#pauseBtn1').hide();
    } else if (curBar === 'bar3') {
      $('[data-bar=bar3][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar3].inactive').show();
      $('[data-bar=bar2]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar2].inactive').hide();
      $('#pauseBtn2').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '588px 20px 0px 20px';
        rightAngleMargin = '588px 20px 0px 20px';
      }
    } else if (curBar === 'bar4') {
      $('[data-bar=bar4][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar4].inactive').show();
      $('[data-bar=bar3]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar3].inactive').hide();
      $('#pauseBtn3').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px'
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar5') {
      $('[data-bar=bar5][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar5].inactive').show();
      $('[data-bar=bar4]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar4].inactive').hide();
      $('#pauseBtn4').hide();
    } else if (curBar === 'bar6') {
      $('[data-bar=bar6][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar6].inactive').show();
      $('[data-bar=bar5]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar5].inactive').hide();
      $('#pauseBtn5').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar7') {
      $('[data-bar=bar7][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar7].inactive').show();
      $('[data-bar=bar6]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar6].inactive').hide();
      $('#pauseBtn6').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar8') {
      $('[data-bar=bar8][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar8].inactive').show();
      $('[data-bar=bar7]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar7].inactive').hide();
      $('#pauseBtn7').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    }
    $('.leftAngle').css('margin', `${leftAngleMargin}`);
    $('.rightAngle').css('margin', `${rightAngleMargin}`);
  })

  $('.rightAngle').click(function () {
    let curBar = $('[data-active="true"]').data('bar');
    let leftAngleMargin = '';
    let rightAngleMargin = '';
    if (curBar === 'bar1') {
      $('[data-bar=bar1][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar1].inactive').show();
      $('[data-bar=bar2]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar2].inactive').hide();
      $('#pauseBtn2').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '588px 20px 0px 20px';
        rightAngleMargin = '588px 20px 0px 20px';
      }
    } else if (curBar === 'bar2') {
      $('[data-bar=bar2][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar2].inactive').show();
      $('[data-bar=bar3]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar3].inactive').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px'
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
      $('#pauseBtn3').hide();
    } else if (curBar === 'bar3') {
      $('[data-bar=bar3][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar3].inactive').show();
      $('[data-bar=bar4]').attr('data-active', 'true');
      $('[data-active=true').show();
      $('[data-bar=bar4].inactive').hide();
      $('#pauseBtn4').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    } else if (curBar === 'bar4') {
      $('[data-bar=bar4][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar4].inactive').show();
      $('[data-bar=bar5]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar5].inactive').hide();
      $('#pauseBtn5').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar5') {
      $('[data-bar=bar5][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar5].inactive').show();
      $('[data-bar=bar6]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar6].inactive').hide();
      $('#pauseBtn6').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar6') {
      $('[data-bar=bar6][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar6].inactive').show();
      $('[data-bar=bar7]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar7].inactive').hide();
      $('#pauseBtn7').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBar === 'bar7') {
      $('[data-bar=bar7][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar7].inactive').show();
      $('[data-bar=bar8]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar8].inactive').hide();
      $('#pauseBtn8').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '597px 20px 0px 20px';
        rightAngleMargin = '597px 20px 0px 20px';
      }
    } else if (curBar === 'bar8') {
      $('[data-bar=bar8][data-active=true]').hide();
      $('[data-active=true]').attr('data-active', 'false');
      $('[data-bar=bar8].inactive').show();
      $('[data-bar=bar1]').attr('data-active', 'true');
      $('[data-active=true]').show();
      $('[data-bar=bar1].inactive').hide();
      $('#pauseBtn1').hide();
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    }
    $('.leftAngle').css('margin', `${leftAngleMargin}`);
    $('.rightAngle').css('margin', `${rightAngleMargin}`);
  })

  $('.dot').click(function () {
    let barClicked = $(this).attr('data-bar');
    $('[data-active=true]').hide();
    $('.inactive').show();
    $(`[data-bar=${barClicked}]`).attr('data-active', 'true');
    $(`[data-bar!=${barClicked}]`).attr('data-active', 'false');
    $('[data-active=true]').show();
    $(`[data-bar=${barClicked}].inactive`).hide();
    $(`#pauseBtn${barClicked.slice(barClicked.length - 1)}`).hide();
    let leftAngleMargin = '';
    let rightAngleMargin = '';
    if (barClicked === 'bar1') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    } else if (barClicked === 'bar2') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '588px 20px 0px 20px';
        rightAngleMargin = '588px 20px 0px 20px';
      }
    } else if (barClicked === 'bar3') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px'
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (barClicked === 'bar4') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    } else if (barClicked === 'bar5') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (barClicked === 'bar6') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (barClicked === 'bar7') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (barClicked === 'bar8') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '597px 20px 0px 20px';
        rightAngleMargin = '597px 20px 0px 20px';
      }
    }
    $('.leftAngle').css('margin', `${leftAngleMargin}`);
    $('.rightAngle').css('margin', `${rightAngleMargin}`);
  })

  $('.playPauseBtns').click(function () {
    const curId = $(this).attr('id');
    if (curId.includes('play')) {
      $(`#${curId}`).hide();
      $(`#pauseBtn${curId.slice(curId.length - 1)}`).show();
    } else if (curId.includes('pause')) {
      $(`#${curId}`).hide();
      $(`#playBtn${curId.slice(curId.length - 1)}`).show();
    }
  })
  $('.requestDemo').click(function () {
    $('.hideOnRequest,#returnHome,#returnHomeHeader,.requestDemo').hide();
    $('#requestDemoSection,#reqDemoForm,#reqDemoHeader,#reqDemoDesc,.reqFooter').show();
  })

  $('.syncLogo,#returnHome').click(function () {
    $('#requestDemoSection,.reqFooter').hide();
    $('.hideOnRequest,.requestDemo').show();
    $('#part1,#part2').hide();
    if (screen.width > 743) {
      $('#learnMore1,#learnMore2').show();
    } else $('#learnMore3,#learnMore4').show();
    if (screen.width < 1440) {
      $(".infoStrip2").css("margin", "55px 60px 23px 60px");
      $(".descHeader2").css("margin-top", "-30px");
    }
    if (screen.width < 1335) {
      $(".infoStrip").css("margin", "42px 50px 42px 50px");
      $(".infoStrip2").css("margin", "70px 50px 0 50px");
      $(".descHeader1Div").css("margin-top", "-16px");
      $(".descHeader2Div").css("margin-top", "-70px");
    }
    if (screen.width < 744) {
      $(".infoStrip").css("margin", "26px 20px");
      $(".infoStrip2").css("margin", "22px 20px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
    if (screen.width < 430) {
      $(".infoStrip").css("margin", "16.5px 10px");
      $(".infoStrip2").css("margin", "16.5px 10px");
      $(".descHeader1Div").css("margin-top", "0");
      $(".descHeader2Div").css("margin-top", "0");
    }
  })

  $('#reqDemoForm').submit(function (e) {
    e.preventDefault();
    $('#questionsToSbmt,#phoneToSbmt,#emailToSbmt,#firstNmToSbmt,#lastNmToSbmt').val('');
    $('#reqDemoForm,#reqDemoHeader,#reqDemoDesc').hide();
    $('#returnHome,#returnHomeHeader,#headerReqBtn').show();
  })

  $('#btmDivReq').hover(function () {
    function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
        let startWidth = 0;
        const endWidth = current.dataset.size;
        const interval = setInterval(frame);

        function frame() {
          if (startWidth >= endWidth) {
            clearInterval(interval);
          } else {
            startWidth++;
            current.style.width = `${startWidth}%`;
          }
        }
      });
    }
    loading();
  }, function () {
    document.querySelectorAll(".bar").forEach(function (current) {
      let startWidth = Number(current.style.width.replace('%', ''));
      const interval = setInterval(frame, 1);

      function frame() {
        if (startWidth <= 0) {
          clearInterval(interval);
        } else {
          startWidth--
          current.style.width = `${startWidth}%`;
        }
      }
    });
  })

  $(window).resize(function () {
    let infoStrip1ImgUrl = '';
    let infoStrip2ImgUrl = '';
    if (screen.width > 1727) {
      infoStrip1ImgUrl = 'imgs/img11728Plus.png';
      infoStrip2ImgUrl = 'imgs/img21728Plus.png';
    } else if (screen.width > 1439) {
      infoStrip1ImgUrl = 'imgs/img11440Plus.png';
      infoStrip2ImgUrl = 'imgs/img21440Plus.png';
    } else if (screen.width > 1334) {
      infoStrip1ImgUrl = 'imgs/img11200Plus.png';
      infoStrip2ImgUrl = 'imgs/img21200Plus.png';
    } else if (screen.width > 991) {
      infoStrip1ImgUrl = 'imgs/img1992Plus.png';
      infoStrip2ImgUrl = 'imgs/img2992Plus.png';
    } else if (screen.width > 743) {
      infoStrip1ImgUrl = 'imgs/img1744Plus.png';
      infoStrip2ImgUrl = 'imgs/img2744Plus.png';
    } else if (screen.width > 429) {
      infoStrip1ImgUrl = 'imgs/img1430Plus.png';
      infoStrip2ImgUrl = 'imgs/img2430Plus.png';
    } else if (screen.width <= 429) {
      infoStrip1ImgUrl = 'imgs/img1320Plus.png';
      infoStrip2ImgUrl = 'imgs/img2320Plus.png';
    }
    $('.infoStrip .descImg').attr('src', `${infoStrip1ImgUrl}`);
    $('.infoStrip2 .descImg').attr('src', `${infoStrip2ImgUrl}`);

    let curBarSelected = $('[data-active=true]').attr('data-bar');
    let leftAngleMargin = '';
    let rightAngleMargin = '';
    if (curBarSelected === 'bar1') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar2') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '588px 20px 0px 20px';
        rightAngleMargin = '588px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar3') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px'
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar4') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '548px 20px 0px 20px';
        rightAngleMargin = '548px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar5') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar6') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar7') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '644px 20px 0px 20px';
        rightAngleMargin = '644px 20px 0px 20px';
      }
    } else if (curBarSelected === 'bar8') {
      if (screen.width <= 743) {
        leftAngleMargin = '0px 8px 0px 0px';
        rightAngleMargin = '0px 0px 0px 2px';
      } else if (screen.width <= 991) {
        leftAngleMargin = '597px 20px 0px 20px';
        rightAngleMargin = '597px 20px 0px 20px';
      }
    }
    $('.leftAngle').css('margin', `${leftAngleMargin}`);
    $('.rightAngle').css('margin', `${rightAngleMargin}`);
  });
});
