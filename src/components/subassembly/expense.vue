<template>
    <div class="expense">

        <el-select v-model="value" filterable placeholder="报销事项">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>

        </el-select>

            <!-- <el-select v-model="value" filterable placeholder="报销状态" >
                <el-option
                v-for="item in options_status"
                :key="item.value_status"
                :label="item.label"
                :value="item.value_status">
                </el-option>

            </el-select> -->

    </div>

 </template>

<script>
export default {

  data () {
    return {
      options: [{
        value: '餐饮',
        label: '餐饮'
      }, {
        value: '打车',
        label: '打车'
      }, {
        value: '办公费用',
        label: '办公费用'
      }, {
        value: '其他',
        label: '其他'
      }],

      value: ''

    }
  },
  methods: {
    rend (val) {
      this.$emit('sendDate', val)
    }
  },
  watch: {
    value (newDate, oldDate) {
      // console.log(newDate)
      this.rend(newDate)
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
