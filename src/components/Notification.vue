<template>
<transition name="fade">
<div class="notification is-success" v-if="notificationv">
  <button class="delete" @click="hide"></button>
  <p class="has-text-left">
    {{ notificationm }}
  </p>
</div>
</transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'notification',
  computed: mapState(['notificationm', 'notificationv']),
  methods: {
    hide () {
      this.$store.commit('hideNotification')
    }
  }
}

</script>

<style scoped="">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>