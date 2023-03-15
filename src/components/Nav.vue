<template>
   <div class="nav">
      <div class="nav-content">

            <div class="nav-left">
                <div class="nav-title">公司报销系统</div>
                <div class="nav-options">
                    <router-link to="/desc">详情</router-link>
                    <router-link to="/collect">汇总</router-link>
                    <router-link to="/user">用户列表</router-link>
                </div>

            </div>

            <div class="nav-right">
               <div class="nav-right-content">
                    <el-dropdown :hide-on-click="true">
                    <span class="el-dropdown-link">
                        Hello,admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>

                    </el-dropdown-menu>
                    </el-dropdown>

               </div>
               <div>头像</div>
            </div>
      </div>
    </div>

</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
      // console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 100px;
  display: flex;
 justify-content: center;
 background-color: #4a8be7;

  .nav-content{
   width: 1800px;
    display: flex;
    // background-color: blueviolet;
    justify-content: space-between;
    .nav-left{
        display: flex;
        width: 800px;
        // background-color: aqua;
        justify-content: space-around;
      .nav-options {
        display: flex;
        width: 300px;
        justify-content: space-around;
        font-size: 20px;
        font-weight: 700;

        align-items: center;
      }

      /deep/ .nav-title {
        font-size: 20px;
        font-weight: 700;
        color: white;
        display: flex;
        align-items: center;

      }

    }

    .nav-right{
        width: 200px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        // background-color: cadetblue;
        .nav-right-content{
            display: flex;

            .el-dropdown-link {
                cursor: pointer;
                color: #ffffff;
                    }
        .el-icon-arrow-down {
            font-size: 15px;
        }
        }

    }
  }

}

</style>
