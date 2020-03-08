<template>
<div id="back">
     <div>
         <h2 style="margin-left:10%">Generate Ticket</h2>
         <br>
      <form  v-on:submit="onSubmit" >
        <div class="col-md-4">
        <label for="dest">Source</label>
        <input type="text" class="form-control" id="src" v-model="src" required>
        </div>
        <br>
        <div class="col-md-4">
        <label for="dest">Destination</label>
        <input type="text" class="form-control" id="dest" v-model="dest" required>
        </div>
        <br>
        <div class="col-md-4">
          <label for="dest">Mode</label>
        <select id="mode" class="form-control" v-model="mode">
        <option selected value="1">Single</option>
        <option value="2">Return</option>
      </select>
        </div>
        <br>
  <br>
  <br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">Generate Ticket</button>
  </div>

      </form>
    </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      mode: '',
      dest:'',
      src:''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['generate','generate2']),
    onSubmit (e) {
      e.preventDefault()
      const generate = {
        a: this.src,
        b: this.dest,
        f: this.mode
      }
      this.generate(generate)
    }
  }
}
</script>

<style>
#back{
  margin-left: 40%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 700px;
}
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 1.5rem;
  line-height: 0.8;
  letter-spacing: -0.005em;
}
h2 {
  color: black;
  font-weight: bold;
  letter-spacing: -0.005em;
}
label {
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>

