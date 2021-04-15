import { database } from "../../require/firebase";

export default {
    state:{
        studentsTariff: []
    },
    actions:{
        //Выгружаем данные для считывания тарифа
        async studentTariffFetch(ctx){
            let studentsTariff = await database.ref('studentsTariff');

            await studentsTariff.once('value', (snapshot) => {
                studentsTariff = snapshot.val()
            });
            await ctx.commit('updateStudentsTarif', studentsTariff)

        }
    },

    mutations:{
        updateStudentsTarif(state, studentsTariff){
            state.studentsTariff = studentsTariff;
        }
    },
    getters:{
        getStudentsTariff(state){
            return state.studentsTariff
        }
    }
}

