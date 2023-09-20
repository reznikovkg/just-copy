# vue2

# codestyle

### common

- indent in two spaces
- there is no comma after last object 

### component
```vue
<template>
  <div class="main-block"> <!-- BEM style for block html & css -->
    <div class="main-block__element"> <!-- BEM style for element html & css -->
      {{ value1 }}  <!-- spaces and new row for output -->
    </div>
    <div class="main-block__element main-block__element--alert"> <!-- BEM style for modificator html & css -->
      {{ value1 }}
    </div>
    <div
      class="main-block__element"
      :title="value2"
    > <!-- for 3 and more attrs or less attrs with long length, every attr with new row, end of start tag on new own row -->
      {{ value1 }}
    </div>
    <OtherBtn :title="value2"> <!-- props and dynamic attrs transfer with : -->
      {{ value1 }}
    </OtherBtn>
    <OtherBtn @change="(v) => valueHandler(v)"> <!-- event's handler need to set up as arrow functions -->
      {{ value1 }}
    </OtherBtn>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import OtherBtn from '../OtherBtn.vue'

export default {
  name: 'CustomBtn', // component's name contain 2 or more words in CamelCase
  components: {
    OtherBtn
  },
  data () { // component's data is function with returned object 
    return {
      value1: 1,
      value2: 'second' // no comma
    }
  },
  computed: {
    ...mapGetters('user', [ // for use getters of store
      'getUser'
    ]),
    values () { // style functions for computed
      return this.value + this.value
    },
    customValue: { // style for computable values with custom get/set methods
      get () {
        return this.value
      },
      set (v) {
        this.value = v
      }
    }
  },
  methods: {
    ...mapMutations('user', [ // for use mutations of store
      'setUser'
    ]),
    ...mapActions('user', [ // for use actions of store
      'loadUser'
    ]),
    valueHandler (v, t = 10) { // style functions for methods
      this.value1 += 1
      this.value2 += '-'
    }
  }
}
</script>
```

### store module
```js

const state = {
  users: []
}

const getters = {
  getUsers: state => state.users, // simple getter
  getUsersByUsername: state => username => state.users.find(user => user.username === username) // getter with params
}

const mutations = {
  setUsers: (state, payload) => {
    state.users = payload // or payload.users
  }
}

const actions = {
  setUsers: (store, payload) => new Promise((resolve, reject) => {
    // ... users
    store.commit('setUsers', users)
    // ...
    return resolve() // or reject()
  }),
  loadUsers: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
    // ... users
    commit('setUsers', users)
    // ...
    dispatch('setUsers', users)
    // ...
    return resolve() // or reject()
  })
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

```
