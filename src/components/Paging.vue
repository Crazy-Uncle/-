<template>
   <div class="block">

    <el-pagination

    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    background
    :total="300">
    </el-pagination>

</div>
</template>

<script>
import store from '@/components/store/index'
export default {
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      currentdata: [],
      total: 0,
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    handleSizeChange (size) {
      this.pagesize = size
      console.log(`每页 ${size} 条`)
    },
    handleCurrentChange (currentindex) {
      this.currentdata = this.contentdata.slice((currentindex - 1) * 10, currentindex * 10)
      console.log(`当前页: ${currentindex}`)
    }

  },
  created () {
    this.tableData = store.state.tableList
    this.currentdata = this.contentdata.slice(0, 10)
  }
}
</script>

<style lang="less" scoped>
 .block {

  position: relative;
  top: 700px;
   text-align: center;

   .el-pagination {

    height: 40px;
    line-height:40px;
   }
  }
</style>
