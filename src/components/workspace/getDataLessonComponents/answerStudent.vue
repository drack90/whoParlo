<template>
<div>
    <div class="py-3">
      <form>
        <div>
          <label for="whoSaysParo">Отвечают</label>
        </div>
        <div class="d-flex" v-if="pickFlow" >
          <!-- поле поиска -->
           <b-input
          class="mr-2"
          id="whoSaysParo"          
          rows="1"
          v-model="answered"
          placeholder="Введите имя ученика и нажмите 'добавить' ">
           </b-input>
          <!-- кнопка Добавить -->
          <button class="btn btn-primary" 
                  type="submit"
                  @click.prevent="addAnsweredStudent"
               
                  >
                    Добавить
          </button>

        </div>   
      </form>
         
      </div>


</div>
    
</template>

<script>
import Vue from 'vue';
export default{
    name: 'AnswerStudent',
    props: {
      compileData: {
        type: Object,
        required: false
      },
      flows: String,
    },
    data(){ 
        return{
          answered: '',
          formatedAnswers: Array,
          filteredData: "", 
          compileDataLesson: [],         
        }
    },
    methods: {
      addAnsweredStudent: async function(){
        let answer = this.answered.split(',') //переводим в массив через запятую
          
          //подготавливаем массив убирая все пробелы
          // this.compileDataLesson.push(this.newLesson)
          // this.compileDataLesson.push(this.answered)
         
          let test
          
          this.compileDataLesson = {
            [this.newLesson]: answer  
            }
          this.answered = ''
        console.log('====================================');
        console.log(this.compileDataLesson);
        console.log('====================================');
      }
    },
    watch: {
      //следим за изменением пропса, и производим форматирование данных в массив
        compileData(oldcompileData, newcompileData){
          let formatedData = [];
          for (const group in this.compileData) { 
              for(const index in this.compileData[group]){
                formatedData.push(this.compileData[group][index])
              }                   
            }
            //присваеваем результат цикла переменной компонента
            this.formatedAnswers = formatedData
        },
        //слудеим за переменной answered которая соединяется с Input
        //при вводе данных в инпут - фильтруем что бы ввод происходил > 3 символов
        //после чего отправляем данные в переменную dispAnswered
        answered(oldanswered, newanswered){
            this.test = this.answered.split(',')// переводим в массив
            this.test[this.test.length - 1] = this.test[this.test.length - 1].trim() //убираем пробелы перед фильтрацие
           //фильтруем по последнему элементу в массиве
          if (this.test[this.test.length -1]) {
            let thisStudentAnswer = this.formatedAnswers.filter(item => {
              return item.toLowerCase().includes(this.test[this.test.length -1].toLowerCase())
              }) 
              this.$store.dispatch('updateAnswerStudentsArrAction', thisStudentAnswer)
          }
               
      },
    },

    computed:{
      getPickFlow(){
        return this.$store.getters.getPickFlow
      },
      //геттер
      getAnswerStudentsArr(){
        return this.$store.getters.getAnswerStudentsArr
      },
      newLesson(){
        return this.$store.getters.getNewLesson
      },
      	pickFlow(){
      return this.$store.getters.getPickFlow
    	},
      
    },
  }


</script>