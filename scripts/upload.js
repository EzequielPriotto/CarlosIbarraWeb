const dataImg = dataImg1;
const dataVideo = dataVideo1;
const APP = Vue.createApp({
    data() {
        return {
            urlImg: "",
            nameImg: "",
            imagenes: {},
            imagenesData: {},
            urlPlayer: "",
            urlPreview: "",
            nameVideo: "",
            videos: {},
            videosData: {},
        }
    },
    created() {
        axios.get("/api/imagenes")
        .then(response =>  {
            this.imagenes = response.data.sort((x,y)=> y.id - x.id)
        })
        axios.get("/api/videos")
        .then(response =>  {
            this.videos = response.data.sort((x,y)=> y.id - x.id)
        })
        this.imagenesData = dataImg1;
        this.videosData = dataVideo1;
    },
    methods: {
        uploadImg() {
            axios.post("/api/upload/img", `url=${this.urlImg}&name=${this.nameImg}`)
                .then(response => {
                  window.location.reload()
                })
        },
        open(){
            const client = filestack.init("ARrDfQETjRmKnH09UPirsz");
            const options = {
                onUploadDone: (res) =>{
                    console.log(res)
                    this.nameImg = res.filesUploaded[0].filename;
                    this.urlImg = res.filesUploaded[0].url;
                    this.uploadImg();
                } ,
              };
            client.picker(options).open();
            

        },
        removeImg(img){
            axios.post("/api/delete/img", `url=${img.url}`)
            .then( response => console.log("borrado"))
            .catch(error => console.log(error))
        },
        uploadData(){
            this.imagenesData.forEach(img => {
                axios.post("/api/upload/dataImg", img)
                .then( () => console.log("Upload img: " +  img.url))
            });
        },
        uploadVideo() {
            axios.post("/api/upload/video", `urlPlayer=${this.urlPlayer}&urlPreview=${this.urlPreview}&name=${this.nameVideo}`)
                .then(response => {
                  window.location.reload()
                })
        },
      
        removeVideo(video){
            axios.post("/api/delete/video", `urlPlayer=${video.urlPlayer}`)
            .then( response => console.log("borrado"))
            .catch(error => console.log(error))
        },
        uploadDataVideo(){
            this.videosData.forEach(video => {
                axios.post("/api/upload/dataVideo", video)
                .then( () => console.log("Upload video: " +  video.urlPlayer))
            });
        },
        
    }

}).mount('#app')