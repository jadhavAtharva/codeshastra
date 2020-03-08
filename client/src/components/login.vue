<template>
<div id="back">
     <div>
         <h2 style="margin-left:10%">Login</h2>
         <br>
      <form  v-on:submit="onSubmit" >
        <div class="col-md-4">
        <label for="unique">Unique ID</label>
        <input type="text" class="form-control" id="unique" v-model="unique" required>
        </div>
        <br>
        <div class="col-md-4">
        <label for="station">Station Number</label>
        <input type="text" class="form-control" id="station" v-model="station" required>
        </div>
        <br>
    <div class="form-group col-md-4">
    <label for="pass">Password</label>
    <input type="password" class="form-control" v-model="password" id="pass" required>
  </div>
  <br>
  <br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">LOGIN</button>
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
      unique: '',
      station: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login']),
    onSubmit (e) {
      e.preventDefault()
      const login = {
        unique_id: this.unique,
        phone_no: this.station,
        password: this.password
      }
      this.login(login)
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

