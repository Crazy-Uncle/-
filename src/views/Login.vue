<template>
  <div class="login">

    <div class="box">
      <h4>公司内部报销 后台管理系统</h4>

      <div>账号：<input type="text" v-model="username"></div>
      <div>密码：<input type="password" v-model="password"></div>

      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import store from '../components/store/index'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  data () {
    return {
      username: '',
      password: ''

    }
  },
  methods: {

    async submit () {
      const { data: res } = await axios({ method: 'POST', url: 'http://127.0.0.1/api/login', data: { username: this.username, password: this.password }, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      if (res.status === 200) {
        const token = res.token

        window.localStorage.setItem('token', token)
        this.$router.push('/desc')
        // console.log(store.state.token)
      } else {
        alert('密码或账户错误请重新输入')
      }
      // console.log(res)
    }

  }
}
</script>

<style lang="less" scoped>

.login{
  width: 100%;
  height: 100vh;

  // background-color: aqua;
  background-image: url('../assets/Spray_and_sunset-Windows_HD_Wallpaper_1920x1080.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .box {

    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
    width: 400px;
    height: 400px;
    // background-color: blueviolet;
    text-align: center;
    h4{
      font-size: 25px;
      text-align: center;

    }

    div{

      width: 350px;
      height: 100px;
      color: white;
      font-size: 20px;
      // background-color: chartreuse;
      margin:30px auto;
      input{
        width: 250px;
        height:40px ;
      }
    }

    button {
      width: 200px;
      height: 50px;

    }
  }
}
</style>
