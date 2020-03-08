<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">Rail Yatri</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/home">
        <a class="nav-link"> Home </a>
        </router-link>
      </li>
      <li class="nav-item" v-if="$store.getters.logIn === false">
        <router-link to="/">
        <a class="nav-link"> Login </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup">
        <a class="nav-link"> Signup </a>
        </router-link>
      </li>
      <li class="nav-item"  v-if="$store.getters.logIn === true">
        <router-link to="/scanner">
        <a class="nav-link"> Scanner </a>
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: aliceblue;
}

#nav{
  font-family:sans-serif;
}
.nav-link{
  color: aliceblue;
  text-decoration: none;
}

.navbar {
font-size: 20px;
line-height: 35px;
letter-spacing: 0.019em;
font-weight: 700;
font-style: normal;
}

</style>
