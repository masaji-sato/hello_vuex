<template>
  <div class="counter">
    <p>{{ count }}</p>
    <p>ここ</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'counter',
  computed: mapState(['count'])
}
</script>