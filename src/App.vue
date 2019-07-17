<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <MyFirst />
    <Data />
    <Props :isnormal="isnormal" :isalways="isalways" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MyFirst from './components/MyFirst.vue';
import Data from './components/Data.vue';
import Props from './components/Props.vue';

@Component({
  components: {
    HelloWorld,
    MyFirst,
    Data,
    Props,
  },
})
export default class App extends Vue {
  isnormal = 3333;
  isalways = '写法方便点咯';

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
