import { database } from "../../require/firebase";

export default {
    state: {
        teachers: []
    },

    actions: {

        //read data from firecloud DB in JSON format
        async teachersFetch(ctx) {
            let teachersList;
            let ref = database.ref('teachers');
            //получаем данные с сервера
            await ref.once('value', (snapshot) => {
                teachersList = snapshot.val()
            });
            await ctx.commit('updateTeachers', teachersList);

        },

        //добавляем учителя в БД
        async setTeachersInDB(ctx, newTeacher) {
            let ref = database.ref('teachers/' + newTeacher.firstName + " " + newTeacher.lastName);
            await ref.set(newTeacher)
        },

        //удаляем потоки из базы данных.
        async delTeacher(ctx, delTeacher) {
            delTeacher.forEach((val, index, arr) => {
                const ref = database.ref('teachers/' + val);
                ref.remove()
                console.log("Учителя удалили:" + val)
                delete delTeacher[index] //удаляем элемент из массива.
            });

        },


    },
    mutations: {
        updateTeachers(state, teachersList) {
            state.teachers = teachersList
        },
        //get log before call actions


    },
    getters: {
        getTeachers(state) {
            return state.teachers
        }
    },
    modules: {}
}