window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var motionContent = document.querySelector('.motion_content');
    var lis = motionContent.querySelectorAll('ul li');
    if (scrollPosition > 300) {
      lis.forEach(function(li) {
        li.style.fontSize = '18rem';
      });
    } else {
      lis.forEach(function(li) {
        li.style.fontSize = '14rem';
      });
    }
  });

  function move() {
    var lis = document.querySelectorAll('.marquee .motion_wrap li');
    lis.forEach(function(li) {
      var currentTransform = getComputedStyle(li).getPropertyValue('transform');
      var currentX = parseInt(currentTransform.split(',')[4]);
      li.style.transform = 'translateX(' + (currentX - 1) + 'px)';
      if (currentX <= -1 * li.offsetWidth) {
        li.style.transform = 'translateX(' + (currentX + lis[0].offsetWidth) + 'px)';
      }
    });
    requestAnimationFrame(move);
  }

  requestAnimationFrame(move);