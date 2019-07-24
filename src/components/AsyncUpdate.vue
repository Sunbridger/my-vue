<style>

</style>
<template>
  <div class="hello">
    <button @click="handleClick">+</button>{{number}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AsyncUpdate extends Vue {
    number:number = 0;
    handleClick() {
        for (let i=0; i < 1000; i++)
        this.number++;
    }
}
</script>

