 arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", поэтому стрелка автоматически скроется
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    
