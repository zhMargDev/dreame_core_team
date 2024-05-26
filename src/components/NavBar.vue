<template>
    <nav>
        <img src="@/assets/logo-white.svg" id="logo" alt="">
        <div id="btns-box">
            <div class="active_box" :style="{top: active_position}" ></div>
            <button @mouseenter="set_active_position('/')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/')"
            :style="{color: btns_colors[0]}" >About Us</button>
            <button @mouseenter="set_active_position('/websites')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/websites')"
            :style="{color: btns_colors[1]}" >Websites</button>
            <button @mouseenter="set_active_position('/mobileapps')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/mobileapps')"
            :style="{color: btns_colors[2]}" >Mobile Apps</button>
            <button @mouseenter="set_active_position('/desktopapps')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/desktopapps')"
            :style="{color: btns_colors[3]}" >Desktop Apps</button>
            <button @mouseenter="set_active_position('/portfolio')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/portfolio')"
            :style="{color: btns_colors[4]}" >Portfolio</button>
            <button @mouseenter="set_active_position('/orderservices')" 
            @mouseleave="set_active_position(page)"
            @click="select_page('/orderservices')"
            :style="{color: btns_colors[5]}" >Order Service</button>
        </div>
    </nav>
</template>

<script>
export default{
    props:{
        page: String
    },
    data(){
        return{
            btns_colors: [],
            active_position: '0px',
            page_selected: true
        }
    },
    mounted(){
        this.set_active_position(this.page);
    },
    watch: {
        page() {
            this.set_active_position(this.page)
        }
    },
    methods:{
        select_page(page){
            if(page !== this.page && this.page_selected){
                this.$emit('change-page', page);
                this.set_active_position(page);
                this.page_selected = false;
                setTimeout(()=>{this.page_selected = true;}, 1200)
            }
        },
        set_active_position(page){
            this.btns_colors = ['#F5F0E3','#F5F0E3','#F5F0E3','#F5F0E3','#F5F0E3','#F5F0E3'];
            if(page === '/'){
                this.active_position = '10px';
                this.btns_colors[0] = ['#414141'];
            }
            else if(page === '/websites'){
                this.active_position = '70px';
                this.btns_colors[1] = ['#414141'];
            }
            else if(page === '/mobileapps'){
                this.active_position = '130px';
                this.btns_colors[2] = ['#414141'];
            }
            else if(page === '/desktopapps'){
                this.active_position = '190px';
                this.btns_colors[3] = ['#414141'];
            }
            else if(page === '/portfolio'){
                this.active_position = '250px';
                this.btns_colors[4] = ['#414141'];
            }
            else if(page === '/orderservices'){
                this.active_position = '310px';
                this.btns_colors[5] = ['#414141'];
            }
        }
    }
}
</script>

<style scoped>
.active_box{
    background: #F5F0E3;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 8;
    transition: 500ms;
}
button{
    width: 100%;
    height: 60px;
    cursor: pointer;
    background: transparent;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    text-align: end;
    color: #F5F0E3;
    border: 0;
    padding-right: 30px;
    padding: 10px 20px 0 0px;
    position: relative;
    z-index: 10;
    transition: 1s;
}
#btns-box{
    width: 100%;
    position: relative;
}
#logo{
    width: 60px;
    margin: 20px auto;
}
@keyframes show_animatio {
    0%{right: -240px;}
    100%{right: 0;}
}
nav{
    animation: show_animatio 1s;
    overflow: hidden;
    width: 240px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background: #414141;
}
</style>