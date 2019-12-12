const vm = new Vue({
    el: '#app',
    data: {
      hechos: []
    },
    mounted() {
        
    }, methods: {
        dameHechos(){
            axios({
                "method":"GET",
                "url":`https://numbersapi.p.rapidapi.com/${this.$refs.mes.value}/${this.$refs.dia.value}/date`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"numbersapi.p.rapidapi.com",
                "x-rapidapi-key":"704a6d626fmshd990994c743390bp19f74ejsn3a371afd93f6"
                },"params":{
                "fragment":"true",
                "json":"true"
                }
                })
                .then((response)=>{
                  this.hechos = response.data;
                })
                .catch((error)=>{
                  console.log(error)
                })
        }
    },
  });

Vue.filter('uppercase', function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
})