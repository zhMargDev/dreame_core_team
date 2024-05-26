<template>
  <router-view :change_page="change_page_value" />
  <nav-bar v-if="$route.path !== '/welcome' " :page="page" @change-page="change_page" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'  
export default{
  components:{
    NavBar
  },
  data(){
    return{
      change_page_value:false,
      page: this.$route.path
    }
  },
  created(){
    if(!localStorage.getItem('language')){
      this.$router.push('/welcome');
    }
    setTimeout(()=>{this.page = this.$route.path}, 50)
    
  },
  methods:{
    change_page(page){
      this.change_page_value = true;
      this.page = page;
      setTimeout(()=>{this.$router.push(page); this.change_page_value = false;},1000)
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding:0;
  background: #F5F0E3;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
