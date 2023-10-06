import {createStore} from "vuex";
import users from "./modules/users";
import pets from "./modules/pets";
// import Vue from "vue"
// import Vuex from "vuex"
// Vue.use(Vuex)
const store = createStore({
    modules: {
        users,
        pets,
    },
});

export default store