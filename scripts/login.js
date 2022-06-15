const APP = Vue.createApp({
    data() {
        return {
            username:"",
            password:"",

        }
    },

    methods: {
        login(){
            axios.post("/api/login", `mail=${this.username}&password=${this.password}`,{
                headers:{'content-type':'application/x-www-form-urlencoded'}})
                .then(response => window.location.href="http://localhost:8080/web/manager.html")
                .catch(error => console.log(error))
            }
    },


}).mount('#app')