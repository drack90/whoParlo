import { database } from "../../require/firebase";

export default {
    state: {
        bonusStudent: []
    },

    actions: {
        async bonusFetch(ctx) {
            let getBonus = await database.ref('bonus');

            await getBonus.once('value', (snapshot) => {
                getBonus = snapshot.val()
            });
            //dataFromDB = JSON.parse(dataFromDB);
            setTimeout(() => console.log(getBonus), 2000);


            await ctx.commit('updateBonus', getBonus)
        }

    },
    mutations: {
        updateBonus(state, bonusStudent) {
            state.bonusStudent = bonusStudent
        }
    },
    modules: {},
    getters: {
        getBonus(state) {
            return state.bonusStudent
        }
    },
    modules: {}
}