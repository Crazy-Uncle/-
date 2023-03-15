import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    params: {},
    search_total: []

  },
  mutations: {

  },
  actions: {
    // async getDateTable () {
    //   //   console.log(this.state)
    //   await axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1/api/userinfo',
    //     params: { username: this.state.params.username, matter: this.state.params.way, state: this.state.params.status, spendtime: this.state.params.start_date, submitdate: this.state.params.end_date }
    //   }).then((res) => {
    //     this.state.search_total = res.data.data
    //     // console.log(res.data.data)
    //     console.log(this.state.search_total)
    //   })

    //   // console.log(this.store.state.search_total)
    // //   console.log(this)
    // }

  }
})
