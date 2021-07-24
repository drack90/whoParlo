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
          answeredArr: [],
          userTariffArr: [],   
          userFlowTariff: '',     
        }
    },
    methods: {
      addAnsweredStudent: async function(){
        if (this.newLesson != null){
          let answer = this.answered.split(',') //переводим в массив через запятую
          
          this.answeredArr = this.answeredArr.concat(answer)

          //убираем пробелы до и после передаваемого значения
          for (const key in this.answeredArr) {
            if (Object.hasOwnProperty.call(this.answeredArr, key)) {    
              this.answeredArr[key] = this.answeredArr[key].trim()
              console.log(this.answeredArr[key])
            }
          }
          
          this.$store.dispatch('appendNewLesson', {
            answeredArr: this.answeredArr,
            pickFlow: this.getPickFlow
          })
          this.answeredArr = []
          this.answered = ''
        }else{
          let toastText = {
            message: 'Требуется сперва выбрать урок!',
            title: 'Внимание!',
            variant: 'danger'
          }
          this.$store.dispatch('updateToast', toastText)
        }
        
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

          //фильтрация тарифов отвечающих
          if (this.test[this.test.length -1].length > 2) {
            let answerStudentTariff = this.userTariffArr.filter(item => {
              return item.toLowerCase().includes(this.test[this.test.length -1].toLowerCase())
              }) 
              this.$store.dispatch('updateStudentTariff', answerStudentTariff)
          }

    
      },
      pickFlow(ondpickFlow, newpickFlow){
          let userTariff = []
            //получаем номур потока по iIDdoc
           this.getFlows.forEach(element => {
            if(element.id === this.getPickFlow){
              this.userFlowTariff = element.IDdoc
            }
          });
                let data = this.getStudentsTariff[this.userFlowTariff]
               if(data){
                 let arr = Object.keys(data) // получаем массив с ключами 
              //получаем массив с 
                for (let index = 0; index < arr.length; index++) {
                  const element = arr[index];
                  arr[index] = element + " " + data[element]
                }

                this.userTariffArr = arr
               }else{
                 console.log("не могу получить даные о Тарифах");
               }
                
      }
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
      getStudentsTariff(){
        return this.$store.getters.getStudentsTariff
      },
      getFlows(){
        return this.$store.getters.getFlows
      }
      
    },
  }


</script>