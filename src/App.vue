<template>
  <div id="app" class="content">
    <h3 class="title is-3">メッセージ一覧</h3>
    <notification></notification>
    <new-message></new-message>
    <!-- 新規メッセージボタン -->
    <p>
      <a class="button is-medium is-info" @click="newMessage">new message</a>
    </p>
    <!-- メッセージ一覧 -->
    <messages></messages>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Messages from './components/Messages'
import NewMessage from './components/NewMessage'

import * as test from './components/Test'
import hoge, { abc, hello } from './components/Hoge'

console.log('hoge=', hoge)
console.log(abc)
console.log('hello=', hello())

console.log('messages', test.message)
console.log(test.sayHitoToNinja())
// console.log('messages', test.sayHitoToNinja())

export default {
  name: 'app',
  components: {
    Counter,
    Messages,
    NewMessage
  },
  methods: {
    newMessage () {
      console.log('new message')
      this.$store.commit('openNewMessage')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
