<template lang="html">

  <section class="login">
    <h3>{{ loginMsg }}</h3>

    <!--<p>{{ forgotMsg }}</p>
    <p>{{ signUpMsg }}</p>-->
    <!--<button>
    <router-link to="/settings">signin</router-link>
    </button>-->
  <div class="flex-container">
    <v-card class="flex-item light-blue lighten-3 elevation-0">
      <v-card-text>
        <v-container fluid>
          <v-row row>
            <!--<v-col>-->
              <v-text-field
            name="userName"
            v-model="userName"
            class="flex-item input input-group--focused"
            single-line
            @keyup="save"
            ></v-text-field>
              <v-text-field
            name="password"
            v-model="password"
            class="input input-group"
            single-line
            @keyup="save"
            ></v-text-field>
            <!--</v-col>-->
          </v-row>
          </v-container>
        </v-card-text>
    </v-card>
    <v-btn primary @click="save">signin</v-btn>
</div>


  </section>
</template>

<script lang="js">
  export default {
    name: 'login',
    props: [],
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
        //POST
        // this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
        // get
        this.$http.get('/someUrl').then(response => {
          // get body data
          this.someData = response.body;
        }, response => {
          // error callback
        });
        console.log(this.userName)
      }
    },
    computed: {

    }
  }

</script>

<style scoped lang="scss">
  .login {
    /*background-color: lightsalmon;*/
  }
  
  h2 {
    /*background-color: lightcyan;*/
  }
  
  .flex-container {
    display: flex;
  }
  
  .flex-item {
    padding: 0.5em;
    flex-direction: row-reverse;
  }

  .input{
    border: 2em;
  }
</style>