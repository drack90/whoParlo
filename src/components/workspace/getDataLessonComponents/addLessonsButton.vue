<template>
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
          <button class="btn btn-danger " type="button"  @click="addNewLesson" >Добавить</button>
        </div>

</div>
    
</template>

<script>
/* TODO: Написать евент что бы возвращал parloInThisday в 
родительский компонент что бы он передавал его в answerList */


export default{
    name: 'addLessonButton',
    data(){ 
        return{
            teacherName: '',
            lessonTime: '',
            parloInThisday: '',
            dateDay: '',
             week: ({
          monday: { name: "Понедельник", val: "Пн"},
          tuesday: { name: "Вторник", val: "Вт"},
          wednesday: { name: "Среда", val: "Ср"},
          thursday: { name: "Четверг", val: "Чт"},
          friday: { name: "Пятница", val: "Пт"},
          saturday: { name: "Суббота", val: "Сб"},
          sunday: { name: "Воскресение", val: "Вс"}

        }),

        }
    },

    methods:{
      //добавляем в стор данные о уроке.
      addNewLesson: function(){
        this.parloInThisday = 
          this.teacherName.dispName + ' ' + 
          this.dateDay + ' ' + 
          this.lessonTime

          this.$store.dispatch("updateNewLesson", this.parloInThisday)

          this.teacherName = ''
          this.dateDay = ''
          this.lessonTime = ''
      }

    },
    
    
    async mounted(){
      await this.$store.dispatch('teachersFetch') //запрашиваем список учетелей
    },
    watch: {
      getPickFlow(newgetPickFlow, oldgetPickFlow){
        this.$store.dispatch("updateNewLesson")

     }
    },
    

    computed:{
      getTeachers(){
        return this.$store.getters.getTeachers
      },
      getPickFlow(){
        return this.$store.getters.getPickFlow
      },
    },
  }


</script>