<template>
    <div class="expenseStatus">

            <el-select v-model="value" filterable placeholder="报销状态" >
                <el-option
                v-for="item in options_status"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>

            </el-select>

    </div>

 </template>

<script>
export default {

  data () {
    return {

      options_status: [
        { value: '已报销', label: '已报销' },
        { value: '未报销', label: '未报销' }
      ],

      value: ''
    }
  }
}
</script>

 <style lang="less" scoped>
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
 </style>
