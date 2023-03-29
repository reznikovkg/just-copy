import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        lastOpenedPackageId: null, packages: [{
            id: 0,
            link: 'https://react.dev/',
            name: 'React',
            description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug. Component-Based.'
        }, {
            id: 1,
            link: 'https://nestjs.com/',
            name: 'Nest',
            description: 'NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). '
        }, {
            id: 2,
            link: 'https://expressjs.com/ru/',
            name: 'Express',
            description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Performance. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. Frameworks. Many popular frameworks are based on Express.'
        }]
    },
    getters: {
        getPackages: ({packages}) => packages,
        getLastOpenedPackageId: ({lastOpenedPackageId}) => lastOpenedPackageId,
    },
    mutations: {
        setLastOpenedPackageId: (state, payload) => {
            state.lastOpenedPackageId = payload;
        }
    },
    actions: {
        setLastOpenedPackageId: ({commit}, payload) => {
            commit('setLastOpenedPackageId', payload);
        }
    }
}
