import router from '../../router'
import axios from 'axios'

const state = {
  user: {},
  loggedIn: false
}

const getters = {
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
  }
}

const mutations = {
  newLogin (state, login) {
    axios.post('http://localhost:3000/users/login', login)
    .then((response) => {
      alert('logged in sucessfully')
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      alert('shubham')
    })
  },
  newSignup (state, signup) {
    axios.post('http://localhost:3000/users', signup, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      alert('logged in sucessfully')
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      alert('shubham')
    })
  },
  ticket (state,generate) {
      axios.post('http://localhost:4000/qrcode', generate)
      .then((response) => {
        alert('Ticket Sucessfully Generated')
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        alert('shubham')
      })
  }
}

export default {
  state, getters, actions, mutations
}
