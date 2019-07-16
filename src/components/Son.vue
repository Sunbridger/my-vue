<style>

</style>
<template>
  <div class="hello">
    son
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Son extends Vue {
    // hooks
    beforeCreate() {
        this.$on('myfirst', (para: string):any => {
            console.log(para, '我是本身');
        })
    }
    created() {
        this.$emit('myfirst','子组件向父组件传值的表现参数');
    }
}
</script>

