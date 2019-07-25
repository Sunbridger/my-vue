<style>
    .red {
        color: red;
    }
</style>
<template>
  <div class="hello">
    <button @click="handleClick">+</button>{{number}}
    <hr>
    <button @click="change">正常change</button>
    <button @click="change2">替代性change</button>
    {{people.age}}
    {{people.likes.fruit}}
    {{people.likes.sports.play}}
    <hr>
    <div v-for="row in tableData" :key="row.id">
        <!-- <p :class="{red: row.hascolor}" @click="row.hascolor = !row.hascolor">{{row.id}}</p> -->
        <p :class="{red: row.hascolor}" @click="clickChangTable(row.id)">{{row.id}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AsyncUpdate extends Vue {
    number:number = 0;
    people = {
        age: 1,
        likes: {
            fruit: 'orange',
            sports: {
                play: 'basketball'
            }
        }
    };
    tableData = [];
    
    handleClick() {
        for (let i=0; i < 1000; i++)
        this.number++;
    }
    change() {
        this.people.age = 2;
        this.people.likes.fruit = 'wrappp';
        this.people.likes.sports.play = 'scrolll';
    }
    change2() {
        this.people = {
            age: 11,
            likes: {
                fruit: 'asdasdad',
                sports: {
                    play: '09iosdais'
                }
            }
        }
    }
    clickChangTable(id: number) {
        this.tableData = this.tableData.map(row => {
            if (row.id === id){
                row.hascolor = !row.hascolor;
            }
            return row;
        });
    }
    created() {
        // this.tableData = [
        //     { id: 1, hascolor: false },
        //     { id: 2, hascolor: false },
        //     { id: 3, hascolor: false },
        // ]
        this.tableData = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
    }
}
</script>

