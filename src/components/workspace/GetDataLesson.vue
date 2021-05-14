<template>
<div class="col-9">
      <!-- компонент отображения алерта при совпадении начала недели потока -->
      <refresh-flow-alert/>

      <add-lessons-button></add-lessons-button>
        
      <!-- Блок ввода поиска -->

     
 
      <!-- !компонент для ввода отвечающих учеников -->
      <answer-student :compileData="compileData" :flows="pickFlow"></answer-student>

      <!-- Отображение списка отвечавших и отвечающих --> 


      <answer-list></answer-list>

    
        <!-- Информационный блок колонок -->

      <div class="d-flex">
        <div class="mr-3 flex-fill">
        <label for="answer" class="form-label" >Отвечали</label>
        <div  class="info-block" 
              id="answer">
              <ul >
                <!-- v-for="answerStudent in filteredList" :key="answerStudent" -->
                 <li ></li> 
              </ul>
                  </div>
      </div>
      <div class="mr-3 flex-fill">
        <label for="tarif" class="form-label" >Тариф</label>
        <div  class="info-block" 
              id="tarif">
                  </div>
      </div>
      <div class="flex-fill">
        <label for="bonus" class="form-label" >Бонус</label>
        <div  class="info-block" 
              id="bonus">
                  <ul>
                    <li v-for="student in getBonus" :key="student.studentName">{{student.studentName}}</li>
                  </ul>
                  </div>
      </div>
      </div>

        <button class="btn btn-primary" @click="setcompileData"> add</button>

        
</div>
  


</template>

<script>
import AnswerStudent from './getDataLessonComponents/answerStudent'
import AnswerList from './getDataLessonComponents/answerList'
import AddLessonsButton from './getDataLessonComponents/addLessonsButton'
import RefreshFlowAlert from './getDataLessonComponents/refreshFlowAlert'
import {mapGetters} from 'vuex'
  export default {
    name: "getDataLesson",
    data: function () {
      return {
        value: '',
        whoSays: '',
        kek: 'Kekeke',
        allAnswer: '',
        lastParloData: "kek",
        studentList: [],
        search: '',
        compileData: {},
        pickFlow: '',


       
      }
    },
  watch:{
    //следим за изменением данных и обновляем значения переменных
    getPickFlow(oldgetPickFlow, newgetPickFlow){
      this.pickFlow = this.$store.getters.getPickFlow
      this.compileData = this.$store.getters.getAllAnswer[this.pickFlow]

      //Определяем дату обновления потока
      let dateFlow = this.$store.getters.getFlows.filter((item) => {
         return item.id == this.pickFlow 
      })
     
      let date = new Date(); //получаем сегодняшнюю дату
      let day = date.getUTCDay() // определяем какой сегодня день
      let options = { weekday: 'short'}
      let convertData = new Intl.DateTimeFormat('en-US', options).format(date) ;
     
      if(convertData == dateFlow[0].numberDay)
      {
        this.showTop = !this.showTop //меняем значение переменной что бы отобразить тост
      }

      // Mon = понедельник
      // Tue = вторник
      // Wed = Среда
      // Thu = четверг
      // Fri = пятница
      // Sat = Суббота
      // Sun = Воскресение
    }
  },
    
  computed: {

    getFlows (){
      return this.$store.getters.getFlows
    },
    getStudentsTariff(){
      return this.$store.getters.getStudentsTariff
    },
    getPickFlow(){
      return this.$store.getters.getPickFlow
    },
    getSelectFlow(){
      return this.$store.getters.getSelectFlow
    },
    getBonus(){
      return this.$store.getters.getBonus
    },
    getAllAnswer(){
      return this.$store.getters.getAllAnswer
    },
    getAnswerData(){
      return this.$store.getters.getAnswerData
    },
    getAnswerStudent(){
      return this.$store.getters.getAnswerStudent
    },
    getAnswerStudents(){
      return this.$store.getters.getAnswerStudents
    },
  },

  async mounted(){  
        await this.$store.dispatch('flowsFetch')
        await this.$store.dispatch('studentTariffFetch') //запрашиваем с сервера обновленные данные.
        await this.$store.dispatch('bonusFetch')
        await this.$store.dispatch('fetchAllAnswer');
      },

    methods: {
        
      setSaysList: function() {
        this.parloInThisday = this.teacherName + " " + this.dateDay + " " + this.lessonTime
        console.log(this.parloInThisday)
      },
         
      setcompileData: function(){
        console.log(this.compileData);
      }, 
     
    },

    components:{
      AnswerStudent, 
      AnswerList,
      AddLessonsButton,
      RefreshFlowAlert   
    }
   
    
   

  }
</script>

<style lang="scss">
.time-checker{
    width: 50%;
  }
  .textarea-disabled{
    background-color: #f8fcff;
  }
  .info-block{
    min-width: 150px;
    min-height: 100px;
    width: 100%;
    background-color: #e0e0e0;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      ul{
        li{
          list-style-type: none;
        }
      }
  }
  .info-block__big{
    min-width: 100%;
    min-height: 200px;
  }
</style>
  
