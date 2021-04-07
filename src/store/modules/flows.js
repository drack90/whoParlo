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

            await ctx.commit('updateFlows', dataFromDB)
        }

    },
    mutations: {
        updateFlows(state, flows) {
            state.flows = flows
        },
        sortFlows(state, flows) {

            return flows

        },
    },


    modules: {},
    getters: {
        getFlows(state) {
            return state.flows
        }
    },
    modules: {}
}