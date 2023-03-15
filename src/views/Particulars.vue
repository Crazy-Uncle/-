<template>
    <div class="container-particulars">
        <!-- <Nav></Nav> -->
        <Option @gets="getdate" :inputPage="sonPage" :inputPageSize="sonPageSize" ref="hh"></Option>
        <div class="container-particulars-box">

            <table  border-collapse="collapse" >

                    <tr>
                        <td>序号</td>
                        <td>报销人</td>
                        <td>消费金额（元）</td>
                        <td>支付方式</td>
                        <td>事项</td>
                        <td>发票数量</td>
                        <td>消费时间</td>
                        <td>报销提交时间</td>

                        <td>报销状态</td>
                        <td>操作</td>
                    </tr>

                    <tr v-for="item in tableDate" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.username}}</td>
                        <td>￥{{item.expenditure}}</td>
                        <td>{{item.way}}</td>
                        <td>{{item.matter}}</td>
                        <td>{{item.number}}</td>
                        <td>{{item.spendtime | dateFormat}}</td>
                        <td>{{item.submitdate | dateFormat}}</td>
                        <td>{{item.state}}</td>

                        <td>删除</td>
                    </tr>

            </table>

        </div>
        <div class="block" ref="h2">

          <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.page"
      :page-sizes="page_sizes"

      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">

    </el-pagination>

        </div>
    </div>
</template>

<script>
// import store from '../components/Store/index'
import axios from 'axios'
import Option from '@/components/option.vue'
import moment from 'moment'

export default {
  components: { Option },

  data () {
    return {
      pageIsOrNot: false,
      tableDate: [],
      params: {
        page: 1,
        pageSize: 10
      },
      total: 10,
      page_sizes: [5, 10, 15, 20],
      sonPage: 1,
      sonPageSize: 10

    }
  },
  methods: {
    async getDate () {
      const { data: res } = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/get',
        params: { page: this.params.page, pageSize: this.params.pageSize }
      })
      // console.log(res)
      this.total = res.paging.total

      this.tableDate = res.data
      this.pageIsOrNot = false
    },

    handleSizeChange (val) {
      this.params.pageSize = val
      this.sonPageSize = val

      if (this.pageIsOrNot) {
        this.$nextTick(() => {
          this.$refs.hh.search()
        })

        // setTimeout(() => {
        //   this.getdate()
        // }, 500)
      } else {
        this.getDate()
      }
      // console.log(this.sonPageSize)

      console.log(`每页 ${val} 条`)
    },

    handleCurrentChange (val) {
      // console.log(this.ElPagination)
      this.params.page = val
      this.sonPage = val
      if (this.pageIsOrNot) {
        this.$nextTick(() => {
          this.$refs.hh.search()
        })
        // setTimeout(() => {
        //   this.getdate()
        //   console.log(1)
        // }, 500)
      } else {
        this.getDate()
      }

      // console.log(this.$refs.search())
      console.log(`当前页: ${val}`)
    },
    getdate (val) {
      // console.log(val)

      this.tableDate = val[0]
      this.total = val[2]
      this.pageIsOrNot = val[1]
      // this.params.page = val[3]
      // this.params.page = val[3]/
    },
    // 过滤秒:格式化时间
    time (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }

  },
  created () {
    this.getDate()
  },
  watch: {
    params: {
      handler (newVal) {
        // this.params.page = newVal[0]
        // console.log(newVal)

        // console.log('旧数据', oldVal)
        // console.log('改变了')
        // this.onClick
      },
      deep: true
      // immediate: true
    }
  },
  filters: {
    // 格式化日期
    dateFormat (value) {
      return moment(value).format('YYYY-MM-DD')
    }
  }

}
</script>

<style lang="less" scoped>
.container-particulars{

    body,html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .container-particulars-box{
        box-shadow: 0 0 12px #e4effa;

        border-width: 0px;
        margin: auto;
        width: 1773px;
        display: flex;
        // background-color: skyblue;
        border-radius: 12px;

    table {
        width: calc(1773px - 60px);
        color: black;
        margin: 30px auto ;
        text-align: center;

        tr{

            height: 50px;
            font-size: 12px;
            // background-color: rebeccapurple;
            td{
                width: 150px;
                height: 70px;
                font-size: 18px;
            }
        }

        tr:nth-child(odd){
            background-color: rgb(169, 173, 175);
        }

    }

    }
    .block {

       margin: 30px auto;
        text-align: center;

        .el-pagination {

        height: 40px;
        line-height:40px;
        }
    }
}

</style>
