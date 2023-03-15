<template>
  <div class="container-collect">
    <!-- <Nav></Nav> -->
    <collectContentVue @sendDate="getDate"></collectContentVue>

    <div class="container-collect-box">
      <table  border-collapse="collapse" >

        <tr>
            <td>序号</td>
            <td>报销人</td>

            <td>事项</td>
            <td>报销金额</td>
            <td>发票数量</td>
            <td>操作</td>

        </tr>

        <tr v-for="item in data" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.username}}</td>
            <td>{{item.matter}}</td>
            <td>￥{{item.money}}</td>
            <td>{{item.number}}</td>
            <td>删除</td>

        </tr>

      </table>

    </div>

    <div class="block">

    <el-pagination

    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="params.page"
    :page-sizes="page_sizes"
    :page-size="params.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    background
    :total="total">
    </el-pagination>

    </div>
  </div>
</template>

<script>
import collectContentVue from '@/components/function/collectContent.vue'
import axios from 'axios'

export default {
  components: { collectContentVue },
  data () {
    return {
      data: [],
      params: {
        page: 1,
        pageSize: 10
      },
      page_sizes: [5, 10, 15, 20],
      total: 10
    }
  },
  methods: {
    async  getData () {
      const { data: res } = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/getCollect',
        params: { page: this.params.page, pageSize: this.params.pageSize }
      })
      // console.log(res)
      this.total = res.paging.total

      this.data = res.data
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.getData()
      // console.log(`每页 ${val} 条`)
    },

    handleCurrentChange (val) {
      this.params.page = val
      this.getData()
      // console.log(`当前页: ${val}`)
    },
    getDate (val) {
      if (val) {
        this.data = val
        this.total = this.data.length
      } else {
        this.total = 0
        this.data = 0
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.container-collect{

    .container-collect-box{
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
