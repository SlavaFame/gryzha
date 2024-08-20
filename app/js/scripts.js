//открыть по клику с кнопки
$('.openModal').on('click', function(){
    $('.modal').toggle();
    $('.overlay').toggle();
    $('body').css('overflow', 'hidden');
});

//закрыть на крестик
$('.modal-close').on('click', function(){
    $('.modal').hide();
    $('.overlay').hide();
});

//закрыть на overlay
$('.overlay').on('click', function(){
    $('.modal').hide();
    $('.overlay').hide();
});

$('.top-navmenu-link').on('click', function(){
  $('.top-navmenu').removeClass('show');
  $('.top-burgerMenu').removeClass('active');
});

$('.top-burgerMenu').on('click', function(){
  $('.top-burgerMenu').toggleClass('active');
  $('.top-navmenu').toggleClass('show');
});

$('.btn-onTop').on('click', function(){
  window.scrollTo(0, 0);
});

mybutton = document.querySelector(".btn-onTop");

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$('.standarts-show').click(function(){
  if ($(this).hasClass('rotate')) {    
    $(this).removeClass('rotate');
    $('.standarts-qualities').slideUp();
    $(this).text("Смотреть");
  } else {
    $('.standarts-qualities').slideUp();
    $('.standarts-show').removeClass('rotate');
    $(this).addClass('rotate');
    $(this).prev().filter('.standarts-qualities').slideDown();
    $(this).text("Закрыть");
  }
});

/*
$(".standarts-show").click(function(){
  $(".standarts-qualities").toggleClass("active");
	$(".standarts-show").toggleClass("rotate");
	
  if($(".standarts-show").text() == "Смотреть"){
		$(".standarts-show").text("Закрыть");
	}
	
  else {
		$(".standarts-show").text("Смотреть");
	}
});*/

let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано снимков: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
});

$(".results-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  focusOnSelect: !0,
  infinite: false,
  adaptiveHeight: true,
  appendArrows: $(".results-arrows"),
  appendDots: $(".results-paginator"),
  
  responsive: [
      {
          breakpoint:1200,
          dots: true,
          arrows: false
      },
      {
          breakpoint:992,
          dots: true,
          arrows: true
      },
      {
          breakpoint:768,
          dots: true,
          arrows: true
      },
      {
          breakpoint:576,
          dots: true,
          arrows: true
      },
  ]
});

$(".results-paginator").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".results-slider",
	dots: !1,
	infinite: false,
	arrows: !1,
	focusOnSelect: !0
});

const hs = $(window).innerHeight();
$(window).scroll(function() {
    let sp = $(this).scrollTop() + hs;
    $('.video-main').each(function(i, e) {
        if (sp > $(e).offset().top) {
            const videos = document.querySelectorAll('.videotalk');

            let generateUrl = function(id, timeCode = '') {
                let query = '?rel=0&showinfo=0&autoplay=1' + timeCode;
                return 'https://www.youtube.com/embed/' + id + query;
            };

            let createIframe = function(id, timeCode = '') {
                let iframe = document.createElement('iframe');
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute('allow', 'autoplay; encrypted-media');
                iframe.setAttribute('src', generateUrl(id, timeCode));
                iframe.setAttribute('id', 'video-gryzha');
                iframe.setAttribute('data-video', id);
                return iframe;
            };

            // Функции для установки разных таймкодов
            const setTimeCode1 = function(id) {
                let iframed = document.getElementById("video-gryzha");
                iframed.setAttribute('src', generateUrl(id, '&start=566')); // Таймкод 1 (30 секунд)
            };

            const setTimeCode2 = function(id) {
                let iframed = document.getElementById("video-gryzha");
                iframed.setAttribute('src', generateUrl(id, '&start=1241')); // Таймкод 2 (1 минута)
            };

            const setTimeCode3 = function(id) {
                let iframed = document.getElementById("video-gryzha");
                iframed.setAttribute('src', generateUrl(id, '&start=2262')); // Таймкод 3 (2 минуты)
            };

            videos.forEach((el) => {
                let videoHref = el.getAttribute('data-video');
                let deletedLength = 'https://youtu.be/'.length;
                let videoId = videoHref.substring(deletedLength, videoHref.length);
                let img = el.querySelector('.videotalk-img');
                let youtubeImgSrc = 'https://i.ytimg.com/vi_webp/' + videoId + '/maxresdefault.webp';
                img.setAttribute('style', 'background-image: url(' + youtubeImgSrc + ')');

                el.addEventListener('click', (e) => {
                    e.preventDefault();

                    let iframe = createIframe(videoId);
                    el.querySelector('.videotalk-img').remove();
                    el.appendChild(iframe);
                    el.querySelector('button').remove();

                    // Привязываем таймкоды к кнопкам по их ID
                    document.getElementById('video-timecode-1').onclick = () => setTimeCode1(videoId);
                    document.getElementById('video-timecode-2').onclick = () => setTimeCode2(videoId);
                    document.getElementById('video-timecode-3').onclick = () => setTimeCode3(videoId);
                });

            });
        }
    });
});


$(".specialists-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: !0,
  infinite: true,
  appendArrows: $(".specialists-arrows"),
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }
]
});


$(".reviews-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  focusOnSelect: !0,
  infinite: true,
  adaptiveHeight: true,
  appendArrows: $(".reviews-arrows"),
  appendDots: $(".reviews-sliderNav"),
  
  responsive: [
      {
          breakpoint:1200,
          dots: true,
          arrows: false
      },
      {
          breakpoint:992,
          dots: true,
          arrows: true
      },
      {
          breakpoint:768,
          dots: true,
          arrows: true
      },
      {
          breakpoint:576,
          dots: true,
          arrows: true
      },
  ]
});

$(".questions-slider").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	infinite: true,
	arrows: true,
  appendArrows: $(".questions-arrows"),
  adaptiveHeight: true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }
]
});

$(".reviews-sliderNav").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: ".reviews-slider",
  initialSlide: 1,
	dots: !1,
	infinite: !1,
	arrows: !1,
	focusOnSelect: !0,
  swipe: false //???
});

$(".author-schema-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
  appendDots: $(".author-schema"), 
	dots: false,
	infinite: true,
	arrows: false,
	focusOnSelect: !0
});

$('div[data-slide]').click(function(e) {
  e.preventDefault();
  var slideNum = $(this).data('slide');
  $('.author-schema-slider').slick('slickGoTo', slideNum - 1);
});


$(".how-block-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: !0,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $(".how-block-dots"),
  adaptiveHeight: true,

  customPaging: function(slider, i) { 
    return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
},
  
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }
]
});


$(function(a) {
  var elements = document.getElementsByClassName("telmask");

  for (var i = 0; i <= elements.length; i++) {
      let phoneMask = IMask(elements[i], {
          mask: '{+7} #00 000 0000',
          definitions: {
              '#': /[012345679]/
          },
          lazy: false,
          maxLength: 5,
          placeholderChar: ' '
      });
  }
});

// modal send mail
$("#modal-form").submit(function(e){
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "send_mail.php",
      data: $("#modal-form").serialize(),
      success: function(data) {
          $("#modal-form-response").remove();
          $("#modal-form-result").css("display", "flex");
          $("#modal-form-result").html('<span class="modal-form-headbig">Спасибо!</span><span class="modal-form-head">Мы позвоним Вам в самое ближайшее время!</span><button class="btn-green">Хорошо</button>');
      }
  });
});

// send with files
document.querySelector('.impress-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию

  let formData = new FormData(this);

  fetch('send_files.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(result => {
      //alert(result); // Показываем результат пользователю
      $("#modal-form-result").css("display", "flex");
      $("#modal-form-result").html('<span class="modal-form-headbig">Спасибо!</span><span class="modal-form-head">Мы позвоним Вам в самое ближайшее время!</span><button class="btn-green">Хорошо</button>');
  })
  .catch(error => {
      console.error('Ошибка:', error);
  });
});


// first form 

document.querySelector('.firstblock-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  let formData = new FormData(this); // Создаем объект FormData из формы

  fetch('send_email.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(result => {
     // alert(result); // Показываем результат отправки пользователю

     //alert(result); // Показываем результат пользователю
     $("#modal-form-result").css("display", "flex");
     $("#modal-form-result").html('<span class="modal-form-headbig">Спасибо!</span><span class="modal-form-head">Мы позвоним Вам в самое ближайшее время!</span><button class="btn-green">Хорошо</button>');
 
  })
  .catch(error => {
      console.error('Ошибка:', error);
  });
});