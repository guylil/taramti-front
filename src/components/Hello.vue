<template>
  <div class="hello">
    <h1>{{ loginMsg }}</h1>
    <div class="flex-container">
      <div class="flex-item">hi</div>
      <div class="flex-item">hello</div>
      <div class="flex-item">welcome</div>
    </div>
    <input type="text" placeholder="User name" v-model="userName">
    <input type="password" placeholder="password" v-model="password">
    <button @click="save">signin</button>
    <h2>{{ forgotMsg }}</h2>
    <h2>{{ signUpMsg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    mounted() {
      this.userName = localStorage.getItem('userName')
  },
    data() {
      return {
        loginMsg: 'Please Login',
        forgotMsg: 'I Forgot :-(',
        signUpMsg: 'Sign up',
        userName: '',
        password: ''
      }
    },
    methods: {
      load() {
        this.userName = localStorage.getItem('userName')
      },
      save() {
        localStorage.setItem('userName', this.userName)
        // this.userName = this.userName; 
        console.log(this.userName)
      }
    }
  }

</script>

<!-- Add "scoped" attriclass="flex-item"bute to limit CSS to this component only -->
<style scoped lang="scss">
  h2 {
    background-color: lightcyan;
  }
  .flex-container{
    display: flex;
  }
  .flex-item{
    padding: 0.5em;
    flex-direction: row-reverse;
  }
</style>