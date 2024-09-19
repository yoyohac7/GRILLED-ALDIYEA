// صفحة الانتظار اثناء تحميل عناصر الصفحة
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

    // فلترة اصناف الطعام 
    $(window).on('load', function () {
      $('.filters_menu li').click(function () {
        var filter = $(this).data('filter');

        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        if (filter === '*') {
          $('.box').show();
        } else {
          $('.box').hide();
          $(filter).show();
        }
      });

      var $grid = $(".grid").isotope({
        itemSelector: ".box",  
        percentPosition: false,
        masonry: {
          columnWidth: ".box"  
        }
      });

      // العرض التلقائي لكل اصناف الطعام
      $('.filters_menu li.active').click();
    });



// دوران العروض
$(document).ready(function () {
  $('.owl-collection').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      465: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});



// زر الصعود

let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);
