import { database } from "../../require/firebase";

export default {
    state: {
        flows: []
    },

    actions: {
        async flowsFetch(ctx) {
            let dataFromDB = await database.ref('flows').orderByChild('id');

            await dataFromDB.once('value', (snapshot) => {
                dataFromDB = snapshot.val()
            });


            //передаем массивом
            await ctx.commit('updateFlows', Object.values(dataFromDB))
        },



    },
    mutations: {
        updateFlows(state, flows) {
            //сортировка массива по величине id
           flows.sort(function (a, b) {
                return a.id - b.id;
            });
            state.flows = flows
        },

    },


    modules: {},
    getters: {
        getFlows(state) {
            return state.flows
        }
    },
}