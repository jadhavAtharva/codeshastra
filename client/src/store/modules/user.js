import axios from 'axios'
import router from '../../router'

const state = {
  user: {},
  loggedIn: false
}

const getters = {
  logIn: state => state.loggedIn,
  user: state => state.user,
}

const actions = {
  login ({commit}, login) {
    commit('newLogin', login)
  },
  signup ({commit}, signup) {
    commit('newSignup', signup)
  },
  generate ({commit},generate) {
    commit('ticket',generate)
  },
  addData ({commit}, data) {
    commit('newData', data)
  },
}

const mutations = {
  newLogin (state, login) {
    axios.post('http://localhost:3000/users/login', login)
    .then((response) => {
      state.loggedIn = true
      alert('logged in sucessfully')
      console.log(response)
      router.push('./home')
    })
    .catch((error) => {
      console.log(error)
      alert('Password or id did not match')
    })
  },
  newSignup (state, signup) {
    axios.post('http://localhost:3000/users', signup, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      alert('Sign in sucessfully')
      console.log(response)
      router.push('./')
    })
    .catch((error) => {
      console.log(error)
      alert('Error occured')
    })
  },
ticket (state,generate) {
  axios.post('http://localhost:5000/qrcode/', generate)
  .then((response) => {
    alert('Ticket Sucessfully Generated')
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
    alert('Failed to generate ticket')
  })
},
newData (state, data) {
  axios.post('http://localhost:3000/data', data)
  .then((response) => {
    alert(response.data)
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
    alert('Acess denied')
  })
},
}

export default {
  state, getters, actions, mutations
}
