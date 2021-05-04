import { database } from "../../require/firebase";

export default {
    state: {
      allAnswer: [],
      answerData: [],
      answerStudent:[],
      answerStudents:[]

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
      }
    },

    actions: {
       async fetchAllAnswer(ctx){
        let allAnswer;
        let ref = database.ref('answer')
        await ref.once('value', (snapshot) =>{
          allAnswer = snapshot.val()
        })
        await console.log(allAnswer[17]);
        await ctx.commit('updateAllAnswer', allAnswer)
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

    },
    
   
}