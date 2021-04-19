import { database } from "../../require/firebase";

export default {
    state:{
        studentsTariff: []
    },
    actions:{
        //Выгружаем данные для считывания тарифа
        async studentTariffFetch(ctx, flow = null){
            let studentsTariff

            if (flow == null)
            {
                studentsTariff = await database.ref('studentsTariff');
            }else{
                studentsTariff = await database.ref('studentsTariff/' + flow);
            }


            await studentsTariff.once('value', (snapshot) => {
                studentsTariff = snapshot.val()
            });
            await ctx.commit('updateStudentsTarif', studentsTariff)

        },
        //переписываем данные в таблицу
        async writeStudentTariff(ctx, state, flow){
            let rewriteStudentTariff = state.studentsTariff;
            database.ref('studentTariff/' + flow).set(rewriteStudentTariff)
        },
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

