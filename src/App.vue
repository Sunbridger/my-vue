<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <MyFirst />
    <Data />
    <Props :isnormal="isnormal" :isalways="isalways" />
    <Retive />
    <Watche />
    <AsyncUpdate />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MyFirst from './components/MyFirst.vue';
import Data from './components/Data.vue';
import Props from './components/Props.vue';
import Retive from './components/Retive.vue';
import Watche from './components/Watche.vue';
import AsyncUpdate from './components/AsyncUpdate.vue';


interface person {
  name: string;
  age: number;
}

@Component({
  components: {
    HelloWorld,
    MyFirst,
    Data,
    Props,
    Retive,
    Watche,
    AsyncUpdate
  },
})
export default class App extends Vue {
  isnormal = 3333;
  isalways = '写法方便点咯';
  // 数组泛型
  students: Array<person> = [
    { name:'sss', age:9 }
  ]
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
