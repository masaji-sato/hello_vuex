<template>
	<div class="counter">
		<h1>Counter2.vue</h1>
		<p>{{ sum }}</p>
		<p>stateのカウント: {{ abc }}</p>
    	<a class="button is-small is-danger" @click="countUp">カウントアップ</a>
  </div>	
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'counter2',
  // data: function () {} の省略系
  data () {
    return {
      localCount: 0
    }
  },
  // stateの値、componentスコープの値のcomputedをマージ
  computed: {
    // sum: function () {} の省略系
    sum () {
      let sum = this.localCount + this.$store.state.count
      return '合計 ' + sum
    },
    // mapStateの書き方はいろいろあるよ https://vuex.vuejs.org/en/state.html#the-mapstate-helper
    ...mapState({
      abc: (state) => state.count
    })
  },
  methods: {
    countUp () {
      this.localCount++
    }
  }
}
</script>