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
    mounted() {
        this.table = [
            {
                id: 999,
                age: 1,
                name: 'xunbridge'
            }
        ]
    };
}
</script>

