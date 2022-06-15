const HTML = document.querySelector("html");
const data = dataImg1;
const data2 = dataVideo1;

const APP = Vue.createApp({
  data() {
    return {
      imagenes: [],
      videos: [],
      navActive: false,
      videoFocus:"",
      activeScreen: false,
    }
  },
  created() {
    for (let i = 0; i < 6; i++) {
      this.imagenes.push(data[i])
    }
    for (let i = 0; i < 5; i++) {
      this.videos.push(data2[i])
    }
   
  },
  methods: {

    redireccionar(locacion) {
      switch (locacion) {
        case "WHATSAPP":
          window.location.href = "https://api.whatsapp.com/send?phone=+51982940111"
          break;
        case "INSTAGRAM":
          window.location.href = "https://www.instagram.com/Mr_.ibarra"
          break;

        case "VIMEO":
          window.location.href = "https://vimeo.com/carlosibarrapro"
          break;
        case "LINKEDIN":
          window.location.href = "https://www.linkedin.com/in/carlosibarrapro/"
          break;


      }
    },
    openFullScreen(video){
      let html = document.querySelector("html")
      let iframe = document.querySelector("iframe")
      let bodyModal = document.querySelector(".bodyModal")
      html.classList.toggle("active")
      this.videoFocus = video;
      this.activeScreen ? iframe.style.display = "none" : iframe.style.display = "flex";
      this.activeScreen ? bodyModal.style.display = "none" : bodyModal.style.display = "flex";
      this.activeScreen = !this.activeScreen;
    },

  },
}).mount('#app')
let html = document.querySelector("html")
if(html.classList.contains("index")){
  var isAnimating = false;
function scrollLeftAnimate(elem, unit) {

  if (!elem || isAnimating) {
    //if element not found / if animating, do not execute slide
    return;
  }

  var time = 400; // animation duration in MS, the smaller the faster.
  var from = elem.scrollLeft; // to continue the frame posistion
  var aframe =
    10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
  isAnimating = true; //if animating prevent double trigger animation

  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      elem.scrollLeft = ((step * unit) + from);
      if (step === 1) {
        clearInterval(timer);
        isAnimating = false;
      }
    }, aframe);
}
function initDealCarrousel(dealCarrouselID) {
  var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
  var cardOutterWidth;
  var maxCarrouselScroll;

  function updateUpaCarrouselInfo() {
    cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
    maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
      cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
        .clientWidth;
  }

  document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
    function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft > 0) {
        scrollLeftAnimate(target, -cardOutterWidth * 2);
      }
    }
  );

  document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
    function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info 
      if (target.scrollLeft < maxCarrouselScroll) {
        scrollLeftAnimate(target, cardOutterWidth * 2);
      }
    }
  );
}
// Initiate the container with ID
initDealCarrousel('va_container'); //carrousel ID


}
function activarOrDesactivar() {
  let navSlide = document.querySelector(".navSlide");
  let btnNav = document.querySelector(".btnNav");
  navSlide.classList.toggle("active");
  HTML.classList.toggle("active");
  btnNav.classList.toggle("active");
}