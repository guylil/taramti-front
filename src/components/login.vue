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
    <!--<p>{{res}}</p>-->
    <v-avatar img="this.res"></v-avatar>
    <v-btn primary @click.native="save">signin</v-btn>
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
        password: '',
        res:'',
      }
    },
    methods: {
      load() {
        this.userName = localStorage.getItem('userName')
      },
      save() {
        console.log('hello')
        localStorage.setItem('userName', this.userName)
       
        //   // POST /someUrl
        //   this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
        //     // get status
        //     response.status;
        //     // get status text
        //     response.statusText;
        //     // get 'Expires' header
        //     response.headers.get('Expires');
        //     // get body data
        //     this.someData = response.body;
        //   }, response => {
        //     // error callback
        //   });
        // }
        // this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
        // get
         this.$http.get('https://api.github.com/users/guylil').then(response => {
          // get body data
          this.res = response.body;
        }, response => {
          // error callback
        });
        console.log(this.res)
        this.res = this.res.avatar_url+'.jpg'
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