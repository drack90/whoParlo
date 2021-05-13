<template>
<div>
    <div class="py-3">
        <div>
          <label for="whoSaysParo">Отвечают</label>
        </div>
        <div class="d-flex">
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
                  >
                    Добавить
          </button>

        </div>    
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
          if (this.answered.length > 3) {
            let thisStudentAnswer = this.formatedAnswers.filter(item => {
              return item.toLowerCase().includes(this.answered.toLowerCase())
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
    },
  }


</script>