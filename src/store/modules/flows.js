import {database} from "../../require/firebase";

export default{
    state: {
        flows: []
    },
    
    actions: {
        async flowsFetch(ctx) {
            let dataFromDB = await database.ref('flows');

            await dataFromDB.once('value', (snapshot) => {
            dataFromDB = snapshot.val()});
            setTimeout(()=>console.log(dataFromDB), 2000);

        
            await ctx.commit('updateFlows', dataFromDB)
        }
        
    },
    mutations: {
        updateFlows(state, flows){
            state.flows = flows
        }
    },
    modules: {
    },
    getters:{
        getFlows(state){
            return state.flows
        }
    },
    modules:{
    }
}