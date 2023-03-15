<template>
    <div class="container-option">

            <!-- 报销人 -->
            <input type="text" placeholder="请输入报销人姓名" class="name"  v-model="params.username">

            <expense ref="way"></expense>

            <ExpenseStatus ref="status"></ExpenseStatus>

            <div class="block">

            <el-date-picker
              v-model="value"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              >
            </el-date-picker>
  </div>

            <el-button type="primary" icon="el-icon-search" @click.left="search" >搜索</el-button>
            <button class="layui-btn layui-btn-primary" @click="rest">清空</button>
    </div>
</template>

<script>
import store from '@/components/Store/index'
import expense from './subassembly/expense.vue'
import ExpenseStatus from './subassembly/expenseStatus.vue'
// import router from '@/router'
import axios from 'axios'
export default {
  components: { expense, ExpenseStatus },
  props: {
    inputPage: {
      default: 1
    },
    inputPageSize: {
      default: 10
    }

  },
  data () {
    return {
      // incident: '',
      pageIsOrNot: false,
      value: '',
      params: {
        username: '',
        way: '',
        status: '',
        start_date: '',
        end_date: ''
      },
      dateList: [],
      total: 0
      // current: this.inputPage
    }
  },
  methods: {
    async  search () {
      // console.log(this.$refs.status)
      this.params.way = this.$refs.way.value
      this.params.status = this.$refs.status.value
      this.params.start_date = this.value[0]
      this.params.end_date = this.value[1]
      // store.state.params = this.params
      // console.log(this.params)
      // store.dispatch('getDateTable')

      // console.log(this.current = this.inputPage)
      // // // console.log(this.inputPage, this.inputPageSize)
      // if (!this.pageIsOrNot) {
      //   this.current = 1
      //   console.log(111)
      // }

      await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/userinfo',
        params: { username: this.params.username, matter: this.params.way, state: this.params.status, spendtime: this.params.start_date, submitdate: this.params.end_date, page: this.inputPage, pageSize: this.inputPageSize }
      }).then((res) => {
        this.dateList = res.data.data
        this.total = res.data.total
        console.log(res)
      })
      // console.log(this.dateList)
      this.pageIsOrNot = true
      this.$emit('gets', [this.dateList, this.pageIsOrNot, this.total])
      // console.log(this.inputPage, this.inputPageSize)
    },
    rest () {
      location.reload()
    }

  },
  created () {

  },
  updated () {

  },
  mounted () {

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
