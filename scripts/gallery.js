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
            videoFocus: "",
        }
    },
    created() {
        this.imagenesHardcodeadas = dataImg;
        this.videosHardcodeados = dataVideo;
        let rutaAbsoluta = self.location.href;
        let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
        let rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
        if (rutaRelativa == "videos.html") {
            setTimeout(() => {
                let videoChange = document.querySelector("#id15");
                videoChange.classList.add('videoConflic')
            }, 500)
        }
        else if (rutaRelativa == "fotos.html") {
            setTimeout(() => {
                let imagenChange = document.querySelector("#id21");
                imagenChange.classList.add('fotoConflic')
                let imagenChange2 = document.querySelector("#id22");
                imagenChange2.classList.add('fotoConflic2')
                let imagenChange3 = document.querySelector("#id25");
                imagenChange3.classList.add('fotoConflic3')
                let imagenChange4 = document.querySelector("#id9");
                imagenChange4.classList.add('fotoConflic4')
            }, 500)
        }
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