<template>
    <div class="container-option">

            <!-- 报销人 -->
            <input type="text" placeholder="请输入报销人姓名" class="name"  v-model="name">

            <!-- 事项 -->
           <expense @sendDate="getDate" >
           </expense>

           <!-- <ExpenseStatus>      </ExpenseStatus> -->

            <date @send="getSend"></date>
            <Time @sendTime="getTime"></Time>
            <button class="layui-btn layui-btn-normal" @click="searchUser "  v-if="flag">搜索</button>
            <button class="layui-btn layui-btn-normal" @click="search " v-else>搜索</button>

            <button class="layui-btn layui-btn-primary" @click="rest">清空</button>
    </div>
</template>

<script>
import date from '../subassembly/date.vue'
import Time from '../subassembly/time.vue'
import expense from '../subassembly/expense.vue'
import axios from 'axios'

export default {
  components: { date, Time, expense },
  props: [],
  data () {
    return {
      flag: false,
      value: '',
      name: '',
      matterValue: '',
      tableDate: [],
      date: '',
      timeData: ''
    }
  },
  methods: {
    getDate (val) {
      this.matterValue = val
      // console.log(val)
    },
    async search () {
      await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/search',
        params: { username: this.name, matter: this.matterValue }

      }).then((res) => {
        this.tableDate = res.data.data
        this.$emit('sendDate', this.tableDate)
        this.$emit('sendUsers', this.tableDate)
        // console.log(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    rest () {
      location.reload()
    },
    getSend (val) {
      this.date = val
    },
    getTime (val) {
      this.timeData = val
      console.log(this.$route.path)
    },
    bus () {
      if (this.$route.path === '/user') {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    async searchUser () {
      await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/searchUser',
        params: { username: this.name }

      }).then((res) => {
        console.log(res)
        this.tableDate = res.data.data

        this.$emit('sendUsers', this.tableDate)
        // console.log(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },

  created () {
    this.bus()
  }

}
</script>

<style lang="less" scoped>
    .container-option {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 1300px;
        height: 70px;

        margin: auto;
        // background-color: aquamarine;

        .name {
          height: 38px;
            line-height: 1.3;
            line-height: 38px\9;
            border-color:#dcdfe6;
            border: 1px solid #dcdfe6;
            background-color: #fff;

            border-radius: 2px;

        }
        .sel,.sel-status{
            width: 172px;
            height: 38px;
            line-height: 1.3;
            line-height: 38px\9;
            border-width: 1px;
            border-style: solid;
            background-color: #fff;
            color: rgba(0,0,0,.85);
            border-radius: 2px;
        }
        .layui-form {

            height: 38px;
        }

    }
</style>
