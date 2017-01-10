<template>
<div class="newMessage modal" v-bind:class="{ 'is-active': messageModalOn }">
  <div class="modal-background" @click="closeModal"></div>
  <div class="modal-card">

    <header class="modal-card-head">
      <p class="modal-card-title">New Message</p>
      <button class="delete" @click="closeModal"></button>
    </header>
    <section class="modal-card-body has-text-left">
      <!-- Content ... -->
      <div class="content">
        <p>please comment</p>
        <label class="label">Title</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input" v-model="title">
        </p>
        <label class="label">Message</label>
          <p class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="content"></textarea>
        </p>
      </div>
    </section>
    <footer class="modal-card-foot has-text-centered">
      <a class="button is-primary" @click="addComment">Save changes</a>
      <!-- <a class="button" @click="closeModal">Cancel</a> -->
    </footer>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'newMessage',
  computed: mapState({ messageModalOn (state) {
    this.title = ''
    this.content = ''
    return state.messageModalOn
  }
  }),
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('closeNewMessage')
    },
    addComment () {
      console.log('addComment')
      // this.$store.commit('showNotification', 'message success')
      // this.$store.commit('closeNewMessage')
      this.$store.dispatch('addComment', {title: this.title, message: this.content})
    }
  }
}
</script>

<style scoped>
</style>