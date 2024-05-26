<template>
    <div id="about_us" ref="main" >
        <div id="title-box">
            <h1>Dreame Code Teame</h1>
            <h3>We are The Dream Code Team, we are from Armenia. We develop websites, mobile applications, and desktop applications. We accept orders for development.</h3>
        </div>
        <div id="btns-title-box">
            <h3>On this site you can:</h3>
            <h5>Click for more information</h5>
        </div>
        <div id="btns-box">
            <button>Find out what we do</button>
            <button>View our portfolio</button>
            <button>Get a free consultation</button>
            <button>Find out our services</button>
            <button>View prices</button>
            <button>Order service</button>
        </div>
    </div>
</template>

<script>
export default{
  created(){
    if(!localStorage.getItem('language')){
      console.log(localStorage.getItem('language'))
      this.$router.push('/welcome');
    }
  },
  props:{
    change_page: Boolean
  },
  watch: {
        change_page() {
            this.$refs.main.style.top = '-100vh';
        }
    }
}
</script>

<style scoped>
button{
    width: 469px;
    height: 55px;
    background: #414141;
    box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #F5F0E3;
    cursor: pointer;
    padding-left: 20px;
    margin-left: -2px;
    border: 0;
    transition: 500ms;
}
button:hover{
    width: 101%;
}
#btns-title-box{
    display: flex;
    margin-top: auto;
    gap: 20px;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 10px;
}
#btns-title-box h3, #btns-title-box h5{
    margin: 0;
}
#title-box{
    width: 100%;
}
#btns-box{
    width: 100%;
    display: grid;
}
h3{
    text-align: start;
    margin-left: 30px;
    font-size: 24px;
    max-width: 600px;
}
h1{
    font-size: 30px;
    text-align: start;
    margin-left: 30px;
}
@keyframes show_animation {
    0%{top: 100vh}
    100%{top: 0;}
}
#about_us{
    animation: show_animation 1s;
    transition: 1s;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    width: calc(100vw - 240px);
    height: 100vh;
    top: 0;
    left: 0;
}

@media (width >= 1700px){
    h1{
        font-size: 50px;
    }
    h3{
        font-size: 35px;
        max-width: 900px;
    }
    h5{
        font-size: 20px;
    }
    button{
        font-size: 30px;
        height: 70px;
        width: 720px;
    }
}

@media (width >= 2100px){
    h1{
        font-size: 70px;
    }
    h3{
        font-size: 44px;
        max-width: 1200px;
    }
    h5{
        font-size: 20px;
    }
    button{
        font-size: 43px;
        height: 100px;
        width: 860px;
    }
}
</style>