import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app'
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {     
        user: null,
        error: null,
        color:''
    },
    mutations: {
       
        
        setUser(state, payload) {
            state.user = payload 
        },
       
         setError (state, payload) {
            state.error = payload
        },
        setColor (state , payload)  {
            state.color = payload
        },
        clearError (state )  {
            state.color = null
        } 
    },
    actions: {
        signUserIn({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email,  payload.password)
              .then(()=>{
                firebase.auth().onAuthStateChanged(function(user) {                    
                      commit('setLoading', false)
                      const newUser = {
                          id: user.uid,
                          registeredMeetups: []
                      }
                      commit('setUser', newUser)
                     
                
                })
                }
              ).catch(
                  error =>{
                    alert(error)
                  }
              )
          },
          REGISTER({commit}, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email,  payload.password)
              .then(()=>{
                firebase.auth().onAuthStateChanged(function(user) {                    
                      commit('setLoading', false)
                      const newUser = {
                          id: user.uid,
                          registeredMeetups: []
                      }
                      commit('setUser', newUser)
                     
                
                })
                }
              ).catch(
                  error =>{
                     alert(error)
                  }
              )
          },
          colorPick({commit}, payload){     
                        const color = payload.color           
                    commit('setColor' ,color )
          },
          autoSignIn({commit}, payload){
               commit('setUser', {id: payload.uid,  registeredMeetups: []})
          }, 
          logOut ({commit}) {
              firebase.auth().signOut()
            commit('setUser', null)
          } ,
          clearError ( {commit}) {
                 commit('clearError')
          }
    },
    getters: {
       
        user (state) {
            return state.user
        },
        error (state) {
         return state.error
          },
          color(state){
              return state.color
          }
    }
})