<style>

</style>
<template>
  <div class="hello">
    <Son @myfirst="getDataFromSon"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Son from './Son.vue';
@Component({
    components:{
        Son
    }
})
export default class MyFirstr extends Vue {
    // props
    @Prop() param?: String
    // data
    name: string = 'Sunbridger' 
    // computed
    get sayHelloText():string {
        return `hello ${this.name}`;
    }
    // methods
    sayHello() {
        console.log(this.sayHelloText, '说话的内容:');
    }
    getDataFromSon(param: string) {
        console.log(param,'我是父组件')
    }
    // hooks
    created() {
        this.sayHello();
    }
}
</script>

