<style>

</style>
<template>
  <div class="hello">
     
     <input type="text" v-model="firstName"> {{this.fullname}}
     <br />
     <input type="text" v-model="likes.fruit"> {{this.fruit}}
      
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
interface per {
    name: string;
    age: number;
    sex: boolean;
    id: number;
}
@Component
export default class Watche extends Vue {
    firstName = '王';
    fullname: string = ''; 
    
    likes = {
        fruit: 'orange'
    };
    fruit: string = '';
    // 第一次渲染的时候不会执行 即 fullname还是空的
    // @Watch('firstName') getFullName(val: string, oldVal: string):void {
    //     this.fullname = this.firstName + '某某'
    // } 
    // 第一次渲染就会有结果的 即执行了getFullName这个函数的
    @Watch('firstName', { immediate: true }) getFullName(val: string, oldVal: string):void {
        this.fullname = this.firstName + '某某'
    }
    // 内部的属性并没有实现响应式
    // @Watch('likes', { immediate: true }) getFruit(val: string, oldVal: string):void {
    //     this.fruit = '喜欢吃：' + this.likes.fruit;
    // }
    // 内部的属性实现响应式 deep的作用体现出来
    @Watch('likes', { immediate: true, deep: true }) getFruit(val: string, oldVal: string):void {
        this.fruit = '喜欢吃：' + this.likes.fruit;
    }
}
</script>

