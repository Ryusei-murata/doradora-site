(function(){
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init(){
    var revealEls = document.querySelectorAll(".reveal, .reveal-line");

    if(reduceMotion || !("IntersectionObserver" in window)){
      revealEls.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15, rootMargin:"0px 0px -60px 0px"});

    revealEls.forEach(function(el){ io.observe(el); });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
