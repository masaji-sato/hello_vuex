<template>
<div class="hello content has-text-left columns content is-medium">
  <div class="column is-half is-offset-one-quarter">
    <!-- notification -->
    <notification></notification>
    
    <!-- コンテンツ -->
    <div v-for="item in comments" class="box">
  	<h4 class="title is-4">
  	  <span class="icon is-medium"><i class="fa fa-user" aria-hidden="true"></i></span>
  	  {{ item.title }}
  	</h4>
  	<p>{{ item.message }}</p>
    </div>
  </div>
</div>
</template>
<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import Notification from './Notification'

export default {
  name: 'hello',
  components: { Notification },
  computed: {
    // ...mapState(['messages']),
    ...mapGetters(['comments'])
  }
}
</script>