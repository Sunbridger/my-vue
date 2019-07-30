<style>

</style>
<template>
  <div class="hello">
      <input type="text" v-model="val">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Debug extends Vue {
    val = '';
    fn1() {
        let aa = this.val + 1;
        console.log(aa, 'aa');
    }   
    created() {
        this.fn1();
    }

}
</script>

