<style>

</style>
<template>
  <div class="hello">
    <p 
        v-for="person in userInfo" 
        :key="person.id"
        @click="showDetail(person.id)">
        {{person.id}}
    </p>
      <div v-if="showMore">
        <p 
            v-for="person in detailData" 
            :key="person.id">
            {{person.id}}
            {{person.name}}
            {{person.age}}
            <span v-for="like in person.likes" :key="like">{{like}}</span>
        </p>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface per {
    name: string;
    age: number;
    id: number;
    likes: Array<any>;
}
@Component
export default class Data extends Vue {
    showMore:boolean = false
    userInfo = [
        {
            name: 'Sunbridger',
            age: 18,
            likes: ['篮球', '足球'],
            id: 1,
            xxx:'ssss'
        },
        {
            name: 'string',
            age: 21,
            likes: ['吃饭', '睡觉'],
            id: 2,
            xxx:'ssss'
        }
    ]
    detailData:Array<per> = [] // 最好是外部的数据过来是这样的type
    showDetail(id: number) {
        const arr = this.userInfo.filter(el => el.id === id);
        this.showMore = true
        this.detailData = Object.assign([], arr);
    }
}
</script>

