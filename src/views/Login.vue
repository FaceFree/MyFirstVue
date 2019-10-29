<template>
    <div>
      login
    </div>
</template>

<script>

    export default {
        name: "Login",
        mounted(){
            var url='http://localhost:8089/fangDa';
          this.$ajax(url).then(function(value){
            console.log(value);
          })
        }
    }
</script>

<style>

</style>
