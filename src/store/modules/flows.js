import { database } from "../../require/firebase";

export default {
    state: {
        flows: [],
        pickFlow: '',
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


        //удаляем потоки из базы данных.
        async deleteFlows(ctx, delFlows) {
            delFlows.forEach((val, index, arr) => {
                const ref = database.ref('flows/flow' + val);
                ref.remove()
                console.log("удаленный поток: " + val + " Поток")
                delete delFlows[index] //удаляем элемент из массива.
            });

        },


        //производим обновление данных в стэйте
        updateFlowsAction(ctx, flowData) {
            ctx.commit("updateFlows", flowData)
        },


        //Добавляем поток в базу
        addFlowInDB(ctx, flowData) {
            //определяем таблицу для записи
            const ref = database.ref('flows/flow' + flowData.flowNum)
                //добавляем данные в БД
            ref.set({
                    IDdoc: flowData.IDdoc,
                    Name: flowData.Name,
                    goes: flowData.goes,
                    numberDay: flowData.numberDay,
                    id: flowData.id
                })
                .then(() => {
                    alert("Поток добавлен")
                })
                .catch((error) => {
                    alert("Произошла ошибка, обратитесь к разработчику")
                })

            //TODO сделать изменение стейта какого нибудь всплывающего алерта для подтверждения изменения данных
            /*реактивно менять переменную в которую передавать значение flowData.Name?
            Тогда как ее будем очищать? Добавить и потом сразу убрать через
            setTimeout?**/
            // const onDataCallback = (data) => {
            //         if (data != null) {
            //             alert("Поток добавлен")
            //         }
            //     }
            //     //проверяем CallBack функцию.
            // ref.on("value", onDataCallback);     
        },

        refreshFlowData(ctx, pickFlow) {
            const ref = database.ref('answer/' + pickFlow)
            let noDataInLesson = {
                "информация": ['ничего нет']
            }
            ref.set(noDataInLesson, (error) => {
                if (error) {
                    return alert(
                        "Произошла ошибка, отправьте скрин разработчику" +
                        error);
                } else {
                    let toastText = {
                        message: 'Данные по потоку обновлены, обновите страницу!',
                        title: 'Внимание',
                        variant: 'success'
                    }
                    ctx.commit('updateAnswerToast', toastText)
                }
            })
        },
        async updatePickFlowsAction(ctx, data) {
            if (data.answered[0] === null) {
                let toastText = {
                    message: 'Данные еще не загрузились подождите 3 секунды',
                    title: 'Внимание!',
                    variant: 'danger'
                }
                ctx.commit('updateAnswerToast', toastText)
            } else if (await data.answered[data.pickFlow] === undefined) {
                //Производим проверку создана ли ветка в firebase и если нет - создаем заглушку

                //Если у нас при проверке выбранного потока, данных в потоке нет
                // создаем "заглушку данных"
                let noDataInLesson = {
                    "информация": ['ничего нет']
                }
                let ref = database.ref('answer/' + data.pickFlow)
                ref.set(noDataInLesson, (error) => {
                    if (error) {
                        return alert(
                            "Произошла ошибка, отправьте скрин разработчику" +
                            error);
                    } else {
                        let toastText = {
                            message: 'Ничего нет',
                            title: 'Обновите страницу что бы продолжить работу',
                            variant: 'success'
                        }
                        ctx.commit('updateAnswerToast', toastText)
                    }
                })
            }

            await ctx.commit("updatePickFlow", data.pickFlow)
        },







    },
    mutations: {
        updateFlows(state, flows) {
            //сортировка массива по величине id
            flows.sort(function(a, b) {
                return a.id - b.id;
            });
            state.flows = flows
        },
        updatePickFlow(state, pickFlow) {
            state.pickFlow = pickFlow
        }


    },


    modules: {},
    getters: {
        getFlows(state) {
            return state.flows
        },
        getPickFlow(state) {
            return state.pickFlow
        }
    },
}