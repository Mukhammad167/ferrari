$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow:  '<img src="images/2849832_arrows_navigation_arrow_left_back_icon.png">',
    nextArrow:  '<img src="images/2849833_arrows_navigation_forward_arrow_right_icon.png">',
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });