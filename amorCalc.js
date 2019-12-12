const vm = new Vue({
    el: '#app',
    data: {
      amor: []
    },
    mounted() {
        
    }, methods: {
        calcularAmore(){
            axios({
                "method":"GET",
                "url":"https://love-calculator.p.rapidapi.com/getPercentage",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"love-calculator.p.rapidapi.com",
                "x-rapidapi-key":"704a6d626fmshd990994c743390bp19f74ejsn3a371afd93f6"
                },"params":{
                "fname": this.$refs.fname.value,
                "sname": this.$refs.sname.value
                }
                })
                .then((response)=>{
                this.amor = (response.data);
                })
                .catch((error)=>{
                console.log(error)
                })
        }
    },
  });