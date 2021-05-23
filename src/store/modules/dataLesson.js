import { database } from "../../require/firebase";

export default {
    state: {
        allAnswer: [null],
        answerData: [],
        answerStudent: [],
        answerStudents: [],
        answerStudentArr: [], //Данные из массива "кто отвечал"
        updateAnswerStudent: [],
        toast: null,
        newLesson: null,
        appendNewLesson: [],
        studentTariff: [],

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
        },
        getNewLesson(state) {
            return state.newLesson
        },
        getAppendNewLesson(state) {
            return state.appendNewLesson
        },
        getStudentTariff(state) {
            return state.studentTariff
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
            }).catch((error) => {
                console.log(erorr);
            })
            for (const group in allAnswerArr) {
                for (const index in allAnswerArr[group]) {
                    // Vue.set(this.search, this.compileData[group][index])
                    this.result.push(allAnswerArr[group][index])
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
        },

        updateNewLesson(ctx, newLesson = null) {
            ctx.commit('updateNewLesson', newLesson)
        },
        updateStudentTariff(ctx, studentTariffArr) {
            ctx.commit('updateStudentTariff', studentTariffArr)
        },
        //добавляем новый урок в БД
        /**
         * 
         * @param {*} param0 
         * @param {answeredArr, pickFlow} answeredArr 
         */
        appendNewLesson({ commit, state, dispatch }, answeredArr) {
            let appendNewLesson = state.allAnswer[answeredArr.pickFlow][state.newLesson].concat(answeredArr.answeredArr)
            if (state.newLesson === null) {
                let toastText = {
                    message: 'Данные нового урока не установлены',
                    title: 'Внимание!',
                    variant: 'danger'
                }
                commit('updateAnswerToast', toastText)
            } else {
                let ref = database.ref('answer/' +
                        answeredArr.pickFlow +
                        "/" + state.newLesson) //Берем данные о стейте о новом уроке
                ref.set(appendNewLesson, (error) => {
                    if (error) {
                        return alert(error);
                    } else {
                        dispatch('fetchAllAnswer')
                            //commit('updateAppendNewLesson', appendNewLesson)
                        let toastText = {
                            message: 'Данные обновлены',
                            title: 'Успешно!',
                            variant: 'success'
                        }
                        commit('updateAnswerToast', toastText)

                    }
                })
            }




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
        updateNewLesson(state, newLesson) {
            state.newLesson = newLesson
        },
        updateAppendNewLesson(state, appendNewLesson) {
            state.appendNewLesson = appendNewLesson
        },
        updateStudentTariff(state, studentTariffArr) {
            state.studentTariff = studentTariffArr
        }

    },


}