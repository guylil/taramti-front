<template lang="html">

  <section class="timer">
    <div v-if="secondsRemaining>=1100000" class="rect regBorder">
      <h3 class="text-center">{{calculateElapsed}}</h3>
    </div>
    <div v-else class="rect blinkBorder">
      <h3 class="text-center">{{calculateElapsed}}</h3>
    </div>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'timer',
    props: ['endDate'],
    mounted() {
      interval = setInterval(this.tick, 1000);
    },
    data() {
      return {
secondsRemaining: Date.parse("4/26/2017") - Date.now()
      }
    },
    methods: {
      
 tick() {
   console.log(`remaining ${this.secondsRemaining}`)
        this.secondsRemaining= this.secondsRemaining - 1000;
        if (this.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    },
    

    },
    computed: {
calculateElapsed() {
        let elaps = this.secondsRemaining / 1000;
        let seconds = Math.floor(elaps % 60) >= 10 ? Math.floor(elaps % 60) : `0${Math.floor(elaps % 60)}`;
        elaps /= 60;
        let minutes = Math.floor(elaps % 60) >= 10 ? Math.floor(elaps % 60) : `0${Math.floor(elaps % 60)}`;
        elaps /= 60;
        let hours = Math.floor(elaps) >= 10 ? Math.floor(elaps) : `0${Math.floor(elaps)}`;

        return `${hours}:${minutes}:${seconds}`
    }
    }
}
</script>

<style scoped lang="scss">
// .timer {
// }
.rect {
  max-width: 150px;
  max-height: 75px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
}

.regBorder {
  border: 2px solid green;
}


.blinkBorder h3 {
  color: red;
}
@keyframes blink {
            25% {
                border: 2px solid red;
            }
        }
        .blinkBorder {
            animation-name: blink;
            animation-duration: .08s;
            animation-timing-function: step-end;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
</style>
