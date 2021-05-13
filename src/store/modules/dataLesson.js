import { database } from "../../require/firebase";

export default {
    state: {
        allAnswer: [],
        answerData: [],
        answerStudent: [],
        answerStudents: [],
        answerStudentArr: [], //Данные из массива "кто отвечал"
        updateAnswerStudent: [],
        toast: null,

    },
    getters: {
        getAnswerToast(state) {
            return state.toast
        },
        getAllAnswer(state) {
            return state.allAnswer
        },
        getAnswerData(state) {
            return state.answerData
        },
        getAnswerStudent(state) {
            return state.answerStudent
        },
        getAnswerStudents(state) {
            return state.answerStudents
        },
        getAnswerStudentsArr(state) {
            return state.answerStudentArr
        },
        getUpdateAnswerStudent(state) {
            return state.updateAnswerStudent
        }
    },

    actions: {
        async fetchAllAnswer(ctx) {
            let allAnswer;
            let ref = database.ref('answer')
            await ref.once('value', (snapshot) => {
                allAnswer = snapshot.val()
            })
            await ctx.commit('updateAllAnswer', allAnswer)
        },

        async fetchAllAnswerArr(ctx, pickFlow) {
            let allAnswerArr;
            let result;
            let ref = database.ref('answer/' + pickFlow)
            await ref.once('value', (snapshot) => {
                allAnswerArr = snapshot.val()
            })
            for (const group in allAnswerArr) {
                for (const index in allAnswerArr[group]) {
                    // Vue.set(this.search, this.compileData[group][index])
                    this.search.push(allAnswerArr[group][index])
                }
            }
            await ctx.commit('updateAllAnswerArr', result)
        },
        //метод записи данных из редактора JSON в базу
        async updateAnswerStudentsInFlow(ctx, newAnswerStudentArr) {

            let ref = database.ref('answer/' + newAnswerStudentArr.pickFlows)
            ref.set(newAnswerStudentArr.data, (error) => {
                if (error) {
                    return alert(error);
                } else {
                    let toastText = {
                        message: 'Данные обновлены',
                        title: 'Успешно!',
                        variant: 'success'
                    }
                    ctx.commit('updateAnswerToast', toastText)
                }
            });


        },

        updateToast(ctx) {
            ctx.commit('updateAnswerToast', null)
        },

        updateAnswerStudentsArrAction(ctx, answeredArr) {
            ctx.commit('updateAnswerStudentsArr', answeredArr)
        }

    },
    mutations: {
        updateAnswerToast(state, toast) {
            state.toast = toast
        },
        updateAllAnswer(state, allAnswer) {
            state.allAnswer = allAnswer
        },
        updateAnswerData() {

        },
        updateAnswerStudent() {

        },
        updateAnswerStudents() {

        },
        updateAnswerStudentsArr(state, allAnswerArr) {
            state.answerStudentArr = allAnswerArr
        },

    },


}