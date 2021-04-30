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

        

    </div>


      <!-- <div class="py-3">
        <label for="lessonInfo" class="form-label">Данные урока и времени</label>
        <textarea
          class="form-control"
          id="lessonInfo"
          rows="1"
          disabled
          v-model="parloInThisday">
          {{parloInThisday}}</textarea>
      </div> -->
      <div class="py-3">
        <div>
          <label for="whoSaysParo">Отвечают</label>
        </div>
        <div class="d-flex">
           <textarea
          class="form-control mr-2"
          id="whoSaysParo"
          rows="1"
          placeholder="Введите имя ученика и нажмите 'добавить' ">
          </textarea>
          <button class="btn btn-primary" 
                  type="submit">
                    Добавить
          </button>
        </div>
         
      </div>
      <!-- Отображение списка отвечавших и отвечающих -->
      <div class="py-3">
        <textarea class="form-control" 
          name="lessonData" 
          id="lessonData" 
          rows="5" 
          disabled>
          {{lastparloData ? lastParloData + '\n' : ''}}
          {{parloInThisday + `\n`}} 
          {{kek}}
        </textarea>
      </div>


    
<!--      <div class="col-6">-->
<!--        <label for="parlo" class="form-label"> Уже отвечали</label>-->
<!--        <textarea-->
<!--          class="form-control"-->
<!--          rows="6"-->
<!--          id="parlo"-->
<!--        ></textarea>-->
<!--      </div>-->
      <div class="d-flex">
        <div class="mr-3 flex-fill">
        <label for="answer" class="form-label" >Отвечали</label>
        <textarea v-model="dataInBdTarif" 
                  class="form-control textarea-disabled" 
                  id="answer"
                  rows="2" disabled>
                  </textarea>
      </div>
      <div class="mr-3 flex-fill">
        <label for="tarif" class="form-label" >Тариф</label>
        <textarea v-model="dataInBdTarif" 
                  class="form-control textarea-disabled" 
                  id="tarif"
                  rows="2" disabled>
                  </textarea>
      </div>
      <div class="flex-fill">
        <label for="bonus" class="form-label" >Бонус</label>
        <textarea v-model="dataInBdTarif" 
                  class="form-control textarea-disabled" 
                  id="bonus"
                  rows="2"
                  disabled>
                  </textarea>
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
        dataInBdTarif: 'Надя - Alfa 04',
        parloInThisday: '',
        parlo: {
          teacher: this.teacherName,
          dateDay: this.dateDay,
          lessonTime: this.lessonTime
        },
        lastParloData: "kek",

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
                        'getSelectFlow', 
                        'getBonus',
                        'getTeachers',
                        ]),    
    
  async mounted(){  
        await this.$store.dispatch('flowsFetch')
        await this.$store.dispatch('studentTariffFetch') //запрашиваем с сервера обновленные данные.
        await this.$store.dispatch('teachersFetch')
      },

    methods: {
        
          setSaysList: function() {
                      this.parloInThisday = this.teacherName + " " + this.dateDay + " " + this.lessonTime
                      console.log(this.parloInThisday)
      }
        
     
    },
    
   

  }
</script>

<style>
  .time-checker{
    width: 50%;
  }
  .textarea-disabled{
    background-color: #f8fcff;
  }
</style>