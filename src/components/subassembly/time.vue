<template>
    <el-select v-model="value" filterable placeholder="9月">
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
        label: '12月'
      }, {
        value: '选项2',
        label: '11月'
      }, {
        value: '选项3',
        label: '10月'
      }, {
        value: '选项4',
        label: '9月'
      }, {
        value: '选项5',
        label: '8月'
      },
      {
        value: '选项6',
        label: '7月'
      },
      {
        value: '选项7',
        label: '6月'
      },
      {
        value: '选项8',
        label: '5月'
      },
      {
        value: '选项9',
        label: '4月'
      },
      {
        value: '选项10',
        label: '3月'
      },
      {
        value: '选项11',
        label: '2月'
      },
      {
        value: '选项12',
        label: '1月'
      }],
      value: ''
    }
  },
  watch: {
    value (val) {
      this.$emit('sendTime', val)
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
