// import favouriteCities from '@/data/favouriteCities'
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        highestDiesel: {
          city: '',
          district: '',
          price:''
        },
        highestGasoline: {
          city: '',
          district: '',
          price:''
        },
        highestLpg: {
          city: '',
          district: '',
          price:''
        },
        lowestDiesel: {
          city: '',
          district: '',
          price:''
        },
        lowestGasoline: {
          city: '',
          district: '',
          price:''
        },
        lowestLpg: {
          city: '',
          district: '',
          price:''
        },
        favorites:  [],
        lastUpdated: '',
        timer:1800000,
      },
    mutations: {
        SET_CITIES(state, cities) {
            state.favorites = cities
        },
        UPDATE_FAVORITES(state, payload) {
            // console.log(state)
            console.log(payload)
            
            },
        UPDATE_lastUpdated(state, temp){
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date+' '+time;
          state.lastUpdated= dateTime;
          console.log(temp)
        },
        UPDATE_timer(state, temp){
          state.timer= temp*1000;
          // console.log(state.timer)
        },
        DELETE_FAVOURITE(state, id) {
            console.log(id)
            if(confirm('Are you sure?')){
              axios.delete(`http://localhost:5000/favourites/${id}`)
              .then(response => {
                  console.log(response);
              });
            state.favorites= state.favorites.filter((favorite) => favorite.id !== id)
            }
        }
    },
    actions: {
        async fetchCities({ commit }) {
            try {
              const data = await axios.get('http://localhost:5000/favourites')
                commit('SET_CITIES', data.data)
              }
              catch (error) {
                  alert(error)
                  console.log(error)
              }
          },
          
        addToFavorites(context, favourites) {
          if(favourites.il!=null){  
            axios({
                method: 'post',
                url: 'http://localhost:5000/favourites',
                data: {
                  il: favourites.il,
                  ilce: favourites.ilce,
                },
                validateStatus: (status) => {
                    console.log(status)
                  return true; // I'm always returning true, you may want to do it depending on the status received
                },
              }).catch(error => {
                console.log(error)
              }).then(response => {
                  // this is now called!
                  console.log(response)
              });
            context.commit('UPDATE_FAVORITES', favourites)
          }
          },
        deleteFromFavourite({commit} , id) {
            commit('DELETE_FAVOURITE', id)
        },
        updateLastUpdated({commit} , temp) {
          commit('UPDATE_lastUpdated', temp)
      },
      updateTimer({commit} , temp) {
        commit('UPDATE_timer', temp)
    }
    },
    getters: {
        getHighestDiesel: function (state) {
            return `${state.highestDiesel}`
        },getHighestGasoline: function (state) {
          return `${state.highestGasoline}`
        },getHighestLpg: function (state) {
          return `${state.highestLpg}`
         },  
         getLowestDiesel: function (state) {
          return `${state.lowestDiesel}`
          },getLowestGasoline: function (state) {
            return `${state.lowestGasoline}`
          },getLowestLpg: function (state) {
            return `${state.lowestLpg}`
          }, 
          getLastUpdated: function (state) {
            return `${state.lastUpdated}`
          },
          getTimer: function (state) {
            return `${state.timer}`
          },
          getCities: (state) => state.favorites
    }
  
})