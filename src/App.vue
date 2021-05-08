<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <a href="./static/index.html">跳转到index.html</a> -->
  <div>
    <button @click="jump2Index">跳转到index.html</button>
    <button @click="cliBut">切换主题颜色now!</button>
    <div style="height:40px;"/>
    <div style="display:flex;flex-direction: column;">
      <!-- <router-link to="/xx">小伙子我们得去page1了</router-link> -->
      <router-link :to="{path:'/xx'}">小伙子我们得去page1了</router-link>
    </div>
    <router-view/>
    <div class="style_x">测试下mixin与include</div>
    <div class="title_wrap">联手巨头KRKA，打开CMO超级蓝海赛道。已与施维雅，德国拜耳等15家国内外优秀医药企业达成合作，临床阶段和转移验证阶段产品约20余项。</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      themeWorB:false,
    };
  },
  computed:{
    themeWorBVal(){
      return this.themeWorB;
    },
  },
  methods: {
    jump2Index(){
      console.log("em>>>>jump2Index-----------");
      // window.location.href="./static/index.html"
      // this.$router.push('/xx');
      // this.$router.push('./static/index.html');
    },
    cliBut(){
      this.themeWorB = !this.themeWorB;
      console.log("em>>>>cliBut------this.themeWorB="+this.themeWorB+'--'+(this.themeWorB?'白板':'黑板'));
      let cn = global.className;
      console.log("em>>>>cliBut------cn="+cn);
      if(cn === 'color_w'){
        global.className = 'color_b';
      }else{
        global.className = 'color_w';
      }
      cn = global.className;
      console.log("em>>>>cliBut切换后主题------cn="+cn);
      // window.document.documentElement.setAttribute('class', cn);
      document.documentElement.setAttribute('class', cn);
    },
  },
}
</script>

<style lang="scss">
@import './assets/skins/common.scss';
// @import '~@/assets/skins/common.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  margin-top: 1px;
  @extend .bg_view;
  // height: calc(100vh);
  padding-bottom: 20px;
}
.style_x{
  @extend .color_fonts;
  font-weight: bolder;
  font-size: 32px;
}
.title_wrap{
  @extend .color_fonts;
  font-size: 50px;
  margin:40px 40px 30px 40px;
}
</style>
