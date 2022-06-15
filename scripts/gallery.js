const dataImg = dataImg1;
const dataVideo = dataVideo1;

const HTML = document.querySelector("html");
const APP = Vue.createApp({
    data() {
        return {
            imagenes: {},
            imagenesHardcodeadas: [],
            imgFocus: "",
            active: false,

            videosHardcodeados: [],
            videoFocus:"",
        }
    },
    created() {
        this.imagenesHardcodeadas = dataImg;
        this.videosHardcodeados = dataVideo;
    },
    methods: {

        openFullScreen(img) {
            let html = document.querySelector("html")
            let modal = document.querySelector(".fondoModal")
            let container = document.querySelector(".contenedor")

            html.classList.toggle("active")
            modal.classList.toggle("active")
            container.classList.toggle("active")

            this.imgFocus = img.url
            this.active = !this.active;

        },
        closeModal() {
            let html = document.querySelector("html")
            let modal = document.querySelector(".fondoModal")
            let container = document.querySelector(".contenedor")
        },
        openFullVideo(video){
            let html = document.querySelector("html")
            let modal = document.querySelector(".fondoModal")
            let container = document.querySelector(".contenedor")
            let iframe = document.querySelector("iframe")

            html.classList.toggle("active")
            modal.classList.toggle("active")
            container.classList.toggle("active")
            this.active ? iframe.style.display = "none" : iframe.style.display = "flex"
            this.videoFocus = video.urlPlayer;
            this.active = !this.active;
        },
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
    },
}).mount('#app')



function activarOrDesactivar() {
    let navSlide = document.querySelector(".navSlide");
    let btnNav = document.querySelector(".btnNav");
    navSlide.classList.toggle("active");
    HTML.classList.toggle("active");
    btnNav.classList.toggle("active");
}