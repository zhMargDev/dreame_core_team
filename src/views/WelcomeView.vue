<template>
  <div id="welcome" ref="welcome">
    <div id="title-box">
      <h1 id="main-title">WELCOME</h1>
      <h2 id="second-title">TO DREAM CODE WEBSITE</h2>
    </div>
    <h4 id="about-languages-title">Choose your language</h4>
    <div id="btns-box">
      <button @click="select_language('en')" >English</button>
      <button @click="select_language('ru')" >Русский</button>
      <button @click="select_language('am')" >Հայերեն</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
  created(){
    if(localStorage.getItem('language')){
      this.$router.push('/')
    }
  },
  methods:{
    select_language(lang){
      localStorage.setItem('language', lang);
      this.$refs.welcome.style.top = '-100vh';
      setTimeout(() => {
        this.$router.push('/')
      }, 1000);
    }
  }
}
</script>

<style scoped>
h1,h2,h4{
  width: 100%;
}
#btns-box{
  display:flex;
  justify-content: center;
  gap: 50px;
}
button:hover{
  background: #F4F4F4;
  color: #414141
}
button{
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 30px;
color: #F4F4F4;
width: 250px;
height: 76px;
background: #414141;
border-radius: 15px;
cursor: pointer;
border: 0;
transition: 500ms;
}
#about-languages-title{
  margin: auto auto 60px auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 70px;
color: #414141;
text-align: center;
}
#second-title{
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 110px;
color: #414141;
text-align: center;
margin-top: 20px;
}
#title-box{
margin-top: 10%;
}
#main-title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 170px;
    text-align: center;
    color: #414141;
    margin: 0;
}
@keyframes main_show_animation {
  0%{top: 100vh};
  100%{top: 0px};
}
#welcome{
  animation: main_show_animation 1s;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: 1s;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

@media (width <= 1700px){
  #main-title{
    font-size: 80px;
  }
  #second-title{
    font-size: 50px;
  }
  #about-languages-title{
    font-size: 30px;
  }
}
@media (width <= 950px){
  #main-title{
    font-size: 60px;
  }
  #second-title{
    font-size: 35px;
  }
  #about-languages-title{
    font-size: 30px;
  }
  #btns-box{
    gap: 40px;
    flex-wrap: wrap;
    width: 300px;
  }
  #title-box{
    margin-top: 30px;
  }
}
</style>