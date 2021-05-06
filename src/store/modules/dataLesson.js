import { database } from "../../require/firebase";

export default {
    state: {
      allAnswer: [],
      answerData: [],
      answerStudent:[],
      answerStudents:[],
      asnwerStudentArr:[],

    },
    getters: {
      getAllAnswer(state){
        return state.allAnswer
      },
      getAnswerData(state){
         return state.answerData
      },
      getAnswerStudent(state){
        return state.answerStudent
      },
      getAnswerStudents(state){
        return state.answerStudents
      },
      getAnswerStudents(state){
        return state.answerStudentsArr
      }
    },

    actions: {
       async fetchAllAnswer(ctx){
        let allAnswer;
        let ref = database.ref('answer')
        await ref.once('value', (snapshot) =>{
          allAnswer = snapshot.val()
        })
        await ctx.commit('updateAllAnswer', allAnswer)
      },

      async fetchAllAnswerArr(ctx, pickFlow){
        let allAnswerArr;
        let result;
        let ref = database.ref('answer/' + pickFlow)
        await ref.once('value', (snapshot) =>{
          allAnswerArr = snapshot.val()
        })
        for (const group in allAnswerArr) { 
          for(const index in allAnswerArr[group]){
           // Vue.set(this.search, this.compileData[group][index])
            this.search.push(allAnswerArr[group][index])
          }                   
        }
        await ctx.commit('updateAllAnswerArr', result)
      },

    },
    mutations: {
      updateAllAnswer(state, allAnswer){
        state.allAnswer = allAnswer
      },
      updateAnswerData(){

      },
      updateAnswerStudent(){

      },
      updateAnswerStudents(){

      },
      updateAnswerStudentsArr(state, allAnswerArr){
        state.allAnswerArr = allAnswerArr
      },

    },
    
   
}