<style>

</style>
<template>
  <div class="hello">
      <p>isdefault:{{isdefault}}</p>
      <p>isnormal:{{isnormal}}</p>
      <p>isalways:{{isalways}}</p>
      <p v-for="el in isdefaultarr" :key="el.id">isdefaultarr:{{el.name}}</p>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
interface per {
    name: string;
    age: number;
    sex: boolean;
    id: number;
}
@Component
export default class Props extends Vue {
    // props
    @Prop({
        default: '默认值'
    }) isdefault!: String;
    @Prop({
        type: Array,
        default():Array<per> { // 有type时 default必须是函数
            return [{
                name: 'xxx',
                age: 3,
                sex:false,
                id: 123
            }]
        }
    }) isdefaultarr!:Array<per>;
    @Prop() isdefaultarr2!:Array<per>;
    @Prop(Number) isnormal!: number;
    @Prop() isalways!: string;
}
</script>

