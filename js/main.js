$(function () {
    $('.slider__inner, .project__slider, .about__inner').slick({
        dots: false,
        slidesToShow: 1,
        arrows:true,
    });
   
    $('.products-slider__inner').slick({
        dots: false,
        slidesToShow: 1,
        arrows:true,
        asNavFor: '.slider-nav__inner',
    });
  
    $('.slider-nav__inner').slick({
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        arrows:true,
        asNavFor: '.products-slider__inner',
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 780,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
          ]
    });
    $('.products-slider__inner-bottom').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:true,
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    });

    $('.wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

        // $('.drop-down__link').on('click', function(){
        //   $('.drop-down__list').toggleClass('drop-down__active');
        //   // $(this).removeClass('drop-down__active');
        //  });

        
        $('.header__btn').on('click', function(){
            $(this).toggleClass('header__btn-active');
           });
           $('.header__btn').on('click', function(){
            $('.header__menu').toggleClass('header__menu-active');
        
           });

          //  $('.drop-down__link').on('click', function(){
          //   $('.drop-down__list').toggleClass('drop-down__active');
          //   // $(this).removeClass('drop-down__active');
          //  });
          //  $('.drop-down__link').on('click', function(){
           
          //   $('.drop-down__list').removeClass('drop-down__active');
          //  });


});



f12youtube = {
  findVideos: function () {
      let videos = document.querySelectorAll('.video');

      for (let i = 0; i < videos.length; i++) {
          this.setupVideo(videos[i]);
      }
  },

  setupVideo: function (video) {
      let link = video.querySelector('.video__link');
      let media = video.querySelector('.video__media');
      let button = video.querySelector('.video__button');
      let id = this.parseMediaURL(media);

      video.addEventListener('click', () => {
          let iframe = this.createIframe(id);

          link.remove();
          button.remove();
          video.appendChild(iframe);
      });

      link.removeAttribute('href');
      video.classList.add('video--enabled');
  },

  parseMediaURL: function (media) {
      let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
      let url = media.src;
      let match = url.match(regexp);

      return match[1];
  },

  createIframe: function (id) {
      let iframe = document.createElement('iframe');

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', this.generateURL(id));
      iframe.classList.add('video__media');

      return iframe;
  },

  generateURL: function (id) {
      let query = '?rel=0&showinfo=0&autoplay=1';

      return 'https://www.youtube.com/embed/' + id + query;
  }
};


f12youtube.findVideos();