var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 8000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Khởi tạo Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 8000,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
   
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      var images = [
        'Public/Images/bg28th.jpg',
        'Public/Images/bg29th.jpg',
        'Public/Images/bg30th.jpg',
        'Public/Images/bg31th.jpg'
      ];
      var bullet = document.createElement('span');
      bullet.className = className;
      bullet.innerHTML = '<img src="' + images[index] + '">';
      bullet.style.width = '50px';
      bullet.style.height = '50px';
      bullet.style.borderRadius = '100%';
      bullet.style.overflow = 'hidden';
      
      if (index === 0 ){
        bullet.style.border = '2px solid gray';
      }
      return bullet.outerHTML;
    },
  },
});
swiper.on('reachEnd', function () {
  swiper.autoplay.stop(); // Dừng tự động chuyển slide khi đạt đến slide cuối
});

swiper.on('slideChangeTransitionEnd', function () {
  var activeIndex = swiper.realIndex; // Lấy index của slide hiện tại (có thể sử dụng swiper.activeIndex hoặc swiper.realIndex)
  swiper.pagination.bullets.forEach(function (bullet, index) {
    bullet.style.border = ''; // Xóa border của tất cả các bullets
    if (index === activeIndex) {
      bullet.style.border = '2px solid gray'; // Thêm border cho bullet tương ứng với slide hiện tại
    }
  });
});

swiper.on('transitionStart', function () {
  swiper.pagination.bullets.forEach(function (bullet) {
    bullet.style.border = ''; // Xóa border của tất cả các bullets khi bắt đầu chuyển đổi slide
  });
});

function closeDropdown(dropdown) {
  setTimeout(function () {
    dropdown.classList.remove('show');
  }, 2000);
}
function showOverlay(element) {
  var overlay = element.querySelector('.overlay-content');
  overlay.style.opacity = '1';
}

function hideOverlay(element) {
  var overlay = element.querySelector('.overlay-content');
  overlay.style.opacity = '0';
}

//khởi tạo slie Evaluate
var swiper = new Swiper('.Evaluate', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const player = new Plyr('#player', {captions: {active: true}});

// Expose player so it can be used from the console
window.player = player;

var swiper = new Swiper('.mySwiper2row', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',   
  },
});

function animateCounter() {
  var startValue1 = 0;
  var endValue1 = 500;
  var increment1 = 25;
  var counterElement1 = document.querySelector('.counter-1');

  var startValue2 = 0;
  var endValue2 = 500;
  var increment2 = 25;
  var counterElement2 = document.querySelector('.counter-2');

  var startValue3 = 5;
  var endValue3 = 25;
  var increment3 = 1;
  var counterElement3 = document.querySelector('.counter-3');

  var interval = setInterval(function() {
    if (startValue1 >= endValue1 && startValue2 >= endValue2) {
      clearInterval(interval);
    } else {
      if (startValue1 < endValue1) {
        startValue1 += increment1;
        var displayValue1 = formatCounterValue(startValue1);
        counterElement1.textContent = displayValue1;
      }
      if (startValue2 < endValue2) {
        startValue2 += increment2;
        var displayValue2 = formatCounterValue(startValue2);
        counterElement2.textContent = displayValue2;
      }
      if (startValue3 < endValue3) {
        startValue3 += increment3;
        var displayValue3 = formatCounterValue(startValue3);
        counterElement3.textContent = displayValue3;
      }
    }
  }, 50);

  function formatCounterValue(value) {
    if (value >= 1000) {
      return (value / 500).toFixed(0);
    } else {
      return value;
    }
  }
}



function animateProgressBars() {
  var progressBars = document.querySelectorAll('.progressbar');

  progressBars.forEach(function(bar) {
    var value = bar.getAttribute('data-value');
    var width = 0;
    var increment = 1;

    var interval = setInterval(function() {
      if (width >= value) {
        clearInterval(interval);
      } else {
        width += increment;
        bar.style.width = width + '%';
      }
    }, 10);
  });
}
function animateincrease() {
  var startValue1 = 0;
  var endValue1 = 100;
  var increment1 = 5;
  var counterElement1 = document.querySelector('.progressbar-text');

  var startValue2 = 0;
  var endValue2 = 80;
  var increment2 = 5;
  var counterElement2 = document.querySelector('.progressbar-text1');

  var startValue3 = 0;
  var endValue3 = 85;
  var increment3 = 5;
  var counterElement3 = document.querySelector('.progressbar-text2');

  var startValue4 = 0;
  var endValue4 = 75;
  var increment4 = 5;
  var counterElement4 = document.querySelector('.progressbar-text3');
  var interval = setInterval(function() {
    if (startValue1 >= endValue1) {
      clearInterval(interval);
    } else {
      if (startValue1 < endValue1) {
        startValue1 += increment1;
        var displayValue1 = formatCounterValue(startValue1);
        counterElement1.textContent = displayValue1;
      }
      if (startValue2 < endValue2) {
        startValue2 += increment2;
        var displayValue2 = formatCounterValue(startValue2);
        counterElement2.textContent = displayValue2;
      }
      if (startValue3 < endValue3) {
        startValue3 += increment3;
        var displayValue3 = formatCounterValue(startValue3);
        counterElement3.textContent = displayValue3;
      }
      if (startValue4 < endValue4) {
        startValue4 += increment4;
        var displayValue4 = formatCounterValue(startValue4);
        counterElement4.textContent = displayValue4;
      }
    }
  }, 50);

  function formatCounterValue(value) {
    if (value >= 1000) {
      return (value / 1000).toFixed(0);
    } else {
      return value;
    }
  }
}
window.onload = function() {
  animateCounter();
  animateProgressBars();
  animateincrease();
};
var swiper = new Swiper('.mySwiper3row', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
   
  },  
});
