const vm = new Vue({
    el: '#app',
    data: {
      salida: [],
      picked: "",

    },
    mounted() {
        
    }, methods: {
        throwCoin(){
            axios({
                "method":"GET",
                "url":"https://coin-flip1.p.rapidapi.com/headstails",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"coin-flip1.p.rapidapi.com",
                "x-rapidapi-key":"704a6d626fmshd990994c743390bp19f74ejsn3a371afd93f6"
                }
                })
                .then((response)=>{
                  this.salida = response.data.outcome;
                })
                .catch((error)=>{
                  console.log(error)
                })
        }
    },
  });
