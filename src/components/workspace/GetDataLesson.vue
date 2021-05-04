<template>
  <div class="col-9">
    <div class="d-flex">
      <!-- выбор учителя -->
      <div class="flex-fill mr-3">
          <select class="custom-select"
                  name="teacher" 
                  v-model="teacherName">
            <option v-for="teacher in getTeachers" 
                    :key="teacher.dispName"
                    :value="teacher">
                    {{teacher.dispName}}
            </option>
          </select>
          <small for="teacher" class="form-text text-muted">Учитель</small>
      </div>
      <!-- Выбор дня -->
      <div class="flex-fill mr-3">
        <select class="custom-select"
                name="week"
                v-model="dateDay"
                >
        <option v-for="day in week" 
                :value="day.val"
                :key="day.val">
                {{day.name}}
        </option>
        </select>
        <small for="week" class="form-text text-muted">День недели</small>
      </div>

      <!-- Time Picker -->
        <div class="flex-fill mr-3">
          <input type="time" class="form-control px-2" v-model="lessonTime" name="timepicker"/>
          <small for="timepicker" class="form-text text-muted">Укажите время</small>
        </div>

        <!-- button ADD -->
        <div class="flex-fill" >
          <button class="btn btn-danger " type="button"  v-on:click=" parloInThisday = teacherName.dispName + ' ' + dateDay + ' ' + lessonTime" >Добавить</button>
        </div>

        
      <!-- Блок ввода поиска -->

    </div>  
      <div class="py-3">
        <div>
          <label for="whoSaysParo">Отвечают</label>
        </div>
        <div class="d-flex">
          <!-- поле поиска -->
           <textarea
          class="form-control mr-2"
          id="whoSaysParo"
          v-model="search" 
          rows="1"
          placeholder="Введите имя ученика и нажмите 'добавить' ">
          </textarea>
          <!-- кнопка Добавить -->
          <button class="btn btn-primary" 
                  type="submit"
                  @click="filteredList">
                    Добавить
          </button>
        </div>
         
      </div>

      <!-- Отображение списка отвечавших и отвечающих -->
      <div class="py-3">
        <div class="info-block info-block__big" 
          name="lessonData" 
          id="lessonData">
          <p v-for="(dateLesson, index) in getAllAnswer[getPickFlow]" :key="index">
            <b>{{index}}:</b> <br>
            <span v-for="name in dateLesson" :key="name">{{name}}, </span></p>
        </div>
      </div>


    
        <!-- Информационный блок колонок -->

      <div class="d-flex">
        <div class="mr-3 flex-fill">
        <label for="answer" class="form-label" >Отвечали</label>
        <div  class="info-block" 
              id="answer">
              <ul >
                 <li v-for="answerStudent in filteredList" :key="answerStudent">{{answerStudent}}</li> 
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

        
    </div>


</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: "getDataLesson",
    data: function () {
      return {
        value: '',
        whoSays: '',
        teacherName: null,
        dateDay: null,
        lessonTime: null,
        kek: 'Kekeke',
        parloInThisday: '',
        parlo: {
          teacher: this.teacherName,
          dateDay: this.dateDay,
          lessonTime: this.lessonTime
        },
        allAnswer: '',
        lastParloData: "kek",
        studentList: [],
        search: '',

        week: ({
          monday: { name: "Понедельник", val: "Пн"},
          tuesday: { name: "Вторник", val: "Вт"},
          wednesday: { name: "Среда", val: "Ср"},
          thursday: { name: "Четверг", val: "Чт"},
          friday: { name: "Пятница", val: "Пт"},
          saturday: { name: "Суббота", val: "Сб"},
          sunday: { name: "Воскресение", val: "Вс"}

        })
      }
    },

    
  computed: mapGetters(['getStudentsTariff', 
                          'getFlows',
                          'getPickFlow', 
                          'getSelectFlow', 
                          'getBonus',
                          'getTeachers',
                          'getAllAnswer',
                          'getAnswerData',
                          'getAnswerStudent',
                          'getAnswerStudents']),


      
          
           

  async mounted(){  
        await this.$store.dispatch('flowsFetch')
        await this.$store.dispatch('studentTariffFetch') //запрашиваем с сервера обновленные данные.
        await this.$store.dispatch('teachersFetch')
        await this.$store.dispatch('bonusFetch')
        await this.$store.dispatch('fetchAllAnswer');
        
      },

    methods: {
        
          setSaysList: function() {
                      this.parloInThisday = this.teacherName + " " + this.dateDay + " " + this.lessonTime
                      console.log(this.parloInThisday)
      },
          filteredList: async function() {
            
            let datas = await this.$store.getters.getAllAnswer
            let pickFlow = await this.$store.getters.getPickFlow
            setInterval(console.log(datas),2000)
                   
                },
        
     
    },
   
    
   

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
  
