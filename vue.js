const vm = new Vue({
    el: '#app',
    data: {
      pagina1: [],
      gato: []
    }, 
    mounted() {
        axios({
            "method":"GET",
            "url":"https://genius.p.rapidapi.com/artists/16775/songs",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"genius.p.rapidapi.com",
            "x-rapidapi-key":"704a6d626fmshd990994c743390bp19f74ejsn3a371afd93f6"
            },"params":{
            "per_page":"21"
            }
            })
            .then((response)=>{
              this.pagina1 = response.data.response.songs;
            })
            .catch((error)=>{
              console.log(error)
            })
          axios({
            "method":"GET",
            "url":"https://api.thecatapi.com/v1/images/search"
            })
            .then((response)=>{
                this.gato = response.data;
            })
            .catch((error)=>{
                console.log(error)
            })
    }
  });