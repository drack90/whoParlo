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
        },

        async bonusSet(ctx, bonusData) {
            let ref = await database.ref('bonus/' + bonusData.studentName);
            await ref.set(bonusData)
        },

        async delBonus(ctx, delBonus) {
            delBonus.forEach((val, index, arr) => {
                const ref = database.ref('bonus/' + val);
                ref.remove()
                console.log("Бонус удален: " + val)
                delete delBonus[index] //удаляем элемент из массива.
            });
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