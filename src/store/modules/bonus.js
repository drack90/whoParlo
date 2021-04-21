import { database } from "../../require/firebase";

export default {
    state: {
        bonusStudent: []
    },

    actions: {
        //read data from firecloud DB in JSON format
        async bonusFetch(ctx) {
            let getBonus = await database.ref('bonus');

            await getBonus.once('value', (snapshot) => {
                getBonus = snapshot.val()
            });
            //get mitation 'updateBonus':name mutation 'getBonus':data
            await ctx.commit('updateBonus', getBonus)
        },
        //call mutation before this mounted
        getStateBonus(ctx) {
            ctx.commit('logStudentBonus')
        }

    },
    mutations: {
        updateBonus(state, bonusStudent) {
            state.bonusStudent = bonusStudent
        },
        //get log before call actions
        logStudentBonus(state) {
            console.log(state.bonusStudent);
        }

    },
    getters: {
        getBonus(state) {
            return state.bonusStudent
        }
    },
    modules: {}
}