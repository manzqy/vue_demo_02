<template>
  <div id="app">
    <div class="add">
      编号:<input type="text" v-model="brandNow.id" />
      品牌名称:<input type="text" v-model="brandNow.bname" />
      <input type="button" value="添加" @click="addData"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
        </tr>
        <tr v-for="(v,i) in brandList" :key="i">
            <td>{{i + 1}}</td>
            <td>{{v.bname}}</td>
            <td>{{v.btime | format('##')}}</td>
            <td>
                <a href="#" @click.prevent="del(i)">删除</a>
            </td>
        </tr>
        <tr v-show="brandList.length == 0">
          <td colspan="4">亲，没有数据了哦⚽⚽⚽</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brandNow: {
        id: '',
        bname: '',
        btime: new Date()
      },
      brandList: [
        {
          id: 1,
          bname: '前端',
          btime: new Date()
        },
        {
          id: 2,
          bname: 'python',
          btime: new Date()
        },
        {
          id: 3,
          bname: 'ios',
          btime: new Date()
        }
      ]
    }
  },
  methods: {
    addData () {
      this.brandList.push({ ...this.brandNow })
    },
    del (i) {
      // console.log(i)
      this.brandList.splice(i, 1)
    }
  }
}
</script>

<style lang='less' scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
