<template>
  <div class="hello">
    <login></login>
    <subscribe></subscribe>
  </div>
</template>
<script>
import login from './login.vue';
import subscribe from './subscribe.vue';
  export default {
    name: 'hello',
    mounted() {
    },
    data() {
      return {
      }
    },
    methods: {
    },
    components:{
      login,
      subscribe
    }
  }

</script>

<!-- Add "scoped" attriclass="flex-item"bute to limit CSS to this component only -->
<style scoped lang="scss">

</style>