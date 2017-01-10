// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import Spinner from './components/Spinner'
import NewMessage from './components/NewMessage'
import apiComment from './api/comment'
import * as types from './mutation-types'

// 変数名を関数として使える？？
let functionName = 'yea'

var obj2 = {
  [functionName]: function () {
    console.log('yea')
  }
}

obj2.yea()

// objectのパラメータまわりのテスト
var xyz = 'ooo'

var testObj = {
  abc: 'hello',
  def: 'bye',
  xyz
}

function expand ({abc, def, xyz}, message) {
  console.log(abc)
  console.log(def)
  console.log(message)
  console.log(xyz)
}

expand(testObj, 'message')

let x = 5
let y = 4
let z = {cc: 5, yy: y}

let obj = { x, d: x, ...z }

console.log(obj)

let { m, ...k } = { m: 1, n: 2, a: 3, b: 4 }
console.log(k)
console.log(m)

Vue.use(Vuex)

const state = {
  count: 0,
  notificationv: false,
  notificationm: '',
  loading: false,
  messageModalOn: false,
  messages: []
}

// getters
const getters = {
  comments: state => state.messages
}

// 非同期処理はこちら
const actions = {
  addComment ({ commit }, comment) {
    console.log('add comment', comment)

    // apiの呼び出し
    commit(types.SHOW_SPINNER)
    apiComment.addComment(
      comment,
      // api側でmutationを呼び出し
      (comment) => commit(types.ADD_COMMENT_SUCCESS, comment)
    )
  }
}

const mutations = {
  // コメント書き込み成功
  [types.ADD_COMMENT_SUCCESS] (state, comment) {
    console.log('success', comment)
    state.notificationm = '成功'
    state.notificationv = true
    state.loading = false
    state.messageModalOn = false
    state.messages.unshift(comment)
  },
  // コメント取得成功
  [types.RECEIVE_COMMENTS] (state, comments) {
    state.messages = comments
  },
  increment (state) {
    state.count++
    console.log('call mutations', store.state.count)
  },
  // Spinner
  hideSpinner (state) {
    state.loading = false
  },
  [types.SHOW_SPINNER] (state) {
    state.loading = true
  },
  // メッセージ関連
  openNewMessage (state) {
    state.messageModalOn = true
  },
  closeNewMessage (state) {
    state.messageModalOn = false
  },
  saveMessage (state, obj) {
    console.log(obj)
    state.messages.unshift(obj)
    state.loading = false
    // server post...
    state.messageModalOn = false
  },
  // 通知コンポーネント用
  showNotification (state, message) {
    console.log('show notircation')
    state.notificationv = true
    state.notificationm = message
  },
  hideNotification (state) {
    state.notificationv = false
    state.notificationm = ''
  }

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App, Counter, Spinner, Counter2, NewMessage },
  methods: {
    increment: function () {
      console.log('call click handler & commit')
      store.commit('increment')
    }
  },
  computed: {
    hoge: function () {
      console.log('call computed')
      return store.state.count
    }
  }
})

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
