import { createPinia } from 'pinia'
import { defineStore } from 'pinia'

export const useOver = defineStore('over', {

    state() {
        return {

            overChar: [],
            roles: [],
            games: [],
            maps: [],


            
            


        }
    },

    actions: {

        async getChar() {
            this.overChar = [];
            const response = await $fetch('https://overfast-api.tekrop.fr/heroes', {
                method: 'GET',

            })


            this.overChar = response;
        },


        async getRoles() {
            this.roles = [];
            const response = await $fetch('https://overfast-api.tekrop.fr/roles', {
                method: 'GET',

            })


            this.roles = response;
        },

        async getGames() {
            this.games = [];
            const response = await $fetch('https://overfast-api.tekrop.fr/gamemodes', {
                method: 'GET',

            })


            this.games = response;
        },

        async getMaps() {
            this.maps = [];
            const response = await $fetch('https://overfast-api.tekrop.fr/maps', {
                method: 'GET',

            })


            this.maps = response;
        },
    },

})