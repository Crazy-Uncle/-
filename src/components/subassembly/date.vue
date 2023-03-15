<template>
   <el-select v-model="value" filterable placeholder="2020">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '2020'
      }, {
        value: '选项2',
        label: '2019'
      }, {
        value: '选项3',
        label: '2018'
      }, {
        value: '选项4',
        label: '2017'
      }, {
        value: '选项5',
        label: '2016'
      },
      {
        value: '选项6',
        label: '2015'
      }],
      value: ''
    }
  },
  send (x) {

  },
  watch: {
    value (val) {
      // this.send(val)
      this.$emit('send', val)
      // console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>

.date-box{
    width: 172px;
    height: 38px;
    background-color: #409EFF;

    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

</style>
