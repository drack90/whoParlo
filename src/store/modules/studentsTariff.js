import { database } from "../../require/firebase";

export default {
    state: {
        //список студентов по запрошенному потоку
        studentsTariff: [],
        selectFlow: [],

    },
    actions: {
        //Выгружаем данные для считывания тарифа


        async studentTariffFetch(ctx, flow = null) {
            let studentsTariff, finallData

            if (flow == null) {
                studentsTariff = await database.ref('studentTariff');
            } else {
                studentsTariff = await database.ref('studentTariff/' + flow);
            }

            await studentsTariff.once('value', (snapshot) => {
                studentsTariff = snapshot.val()
            });



            await ctx.commit('updateStudentsTariff', studentsTariff)

        },

        //переписываем данные в таблицу
        async writeStudentTariff(ctx, compileData) {

            await database.ref('studentTariff/' + compileData[0]).set(compileData[1])
        },
        //add to state data in var studentList(student name and student tarif)
        getUpdateStudentTariff(ctx, studentsTariff) {
            ctx.commit('updateStudentsTariff', studentsTariff)

        },
        //add to state flow number
        getUpdateSelectFlow(ctx, flow) {
            ctx.commit('updateSelectFlow', flow)
        }
    },

    mutations: {
        updateStudentsTariff(state, studentsTariff) {
            state.studentsTariff = studentsTariff;
        },
        updateSelectFlow(state, flow) {
            state.selectFlow = flow
        }
    },
    getters: {
        getStudentsTariff(state) {
            return state.studentsTariff
        },
        getSelectFlow(state) {
            return state.selectFlow
        }
    }
}