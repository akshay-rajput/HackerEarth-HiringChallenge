import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_candidates: []
  },
  mutations: {
    mut_list_candidates(state, listOfCandidates){
      state.list_candidates = listOfCandidates;
      console.log("mutated state: ", state.list_candidates);
    },
    mut_addShortlistCandidate(state, user_id){
      state.list_candidates.forEach(user=> {
        if(user.id == user_id){
          user.shortlisted = true;
        }
      })
    },
    mut_removeShortlistCandidate(state, user_id){
      state.list_candidates.forEach(user=> {
        if(user.id == user_id){
          user.shortlisted = false;
        }
      })
    },
    mut_rejectCandidate(state, user_id){
      state.list_candidates.forEach(user=> {
        if(user.id == user_id){
          user.rejected = true;
          user.shortlisted = false;
        }
      })
    }
  },
  actions: {
    action_fetchCandidates({commit,state}){
      if(state.list_candidates.length < 1){
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
        .then(response => {
          console.log("Respnose: ", response);
          return response.data;
        })
        .then(data => {
          var userdata = data
          userdata.forEach(user => {
            user.shortlisted = false;
            user.rejected = false;
          })
          commit('mut_list_candidates', userdata);
        })
      }
    },
    action_addToShortlist({commit,state}, user_info){
      state.list_candidates.forEach(candidate => {
        if(candidate.id == user_info.id){
          commit('mut_addShortlistCandidate', user_info.id);
        }
      });
    },
    action_removeFromShortlist({commit,state}, user_info){
      state.list_candidates.forEach(candidate => {
        if(candidate.id == user_info.id){
          commit('mut_removeShortlistCandidate', user_info.id);
        }
      });
    },
    action_rejectCandidate({commit,state}, user_info){
      state.list_candidates.forEach(candidate => {
        if(candidate.id == user_info.id){
          commit('mut_rejectCandidate', user_info.id);
        }
      });
    }
  },
  getters: {
    getter_candidateList(state){
      return state.list_candidates;
    }
  }
})
