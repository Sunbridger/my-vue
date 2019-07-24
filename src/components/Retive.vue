<style>

</style>
<template>
  <div class="hello">
      <div v-for="el in table" :key="el.id">
          <p @click="el.age += 1">change</p>
          <p>{{el.age}}</p>
          <p>{{el.name}}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface per {
    name: string;
    age: number;
    id: number;
}

@Component
export default class Retive extends Vue {
    table =  <per[]>[]; 
    // <per[]>[] 的解释
    // 1.可以在元素类型后面接上 []，表示由此类型元素组成的一个数组： per[] 
    // 2.类型断言有两种形式。 其一是“尖括号”语法： <per[]>[] 后面的空数组是我断言的 
    a:per[]
    mounted() {
        this.table = [
            {
                id: 999,
                age: 1,
                name: 'xunbridge'
            }
        ];
        this.a = [
            {
                name:'xxx',
                age:2,
                id:8
            }
        ]
    };
}
</script>

