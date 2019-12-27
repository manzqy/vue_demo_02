<template>
  <div>
    <ul>
      <li v-for="(v, i) in arr" :key="i">{{v}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(v,k,i) in obj" :key="i">
        <p>{{v.name}}</p>
        <p>{{v.age}}</p>
      </li>
    </ul>
    <hr>
    <input type="text" name="name" id="name" v-model="user.name">
    <input type="password" name="password" id="password" v-model="user.password" @keyup.13="collect">
    <button v-on:click="btnclick">click</button>
    <button @click="btnclick('kkk', $event)">click</button>
    <a href="http://www.baidu.com" @click.prevent="aclick">哈哈哈</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: ['hhh', 'lll', 'ppp', 'ooo', 'jjj'],
      user: {
        name: '',
        password: ''
      },
      obj: [
        {
          name: 'alai',
          age: 12
        },
        {
          name: 'abiao',
          age: 13
        },
        {
          name: 'xiaoming',
          age: 16
        },
        {
          name: 'oopp',
          age: 17
        }
      ]
    }
  },
  methods: {
    btnclick (name, e) {
      console.log(name)
      console.log(e)
    },
    collect () {
      console.log(this.user)
    },
    aclick () {
      console.log('hello world')
    }
  }
}
</script>

<style lang="less" scoped>
  li {
    font-size: 20px;
    // background-color: green;
    color: green;
  }
</style>
