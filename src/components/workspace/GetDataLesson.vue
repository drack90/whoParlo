<template>
  <div class="col-9">
    <div class="row">
      <div class="btn-group col-3">


        <div >
          <button type="button" class="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
          >
            <span v-if="teacherName === null">
              Преподаватель
            </span>
            <span v-else >
            {{teacherName}}
            </span>
          </button>
          <ul class="dropdown-menu">
            <li v-for="teacher in teachers">
              <a class="dropdown-item" href="#" @click="teacherName = teacher.firstname">{{teacher.name}}</a></li>
          </ul>
        </div>


      </div>
<!--        Выбор дня недели-->
      <div class="btn-group px-2 col-3">

        <div v-if="dateDay === null">
          <button
                  type="button"
                  class="btn btn-success dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
          >
            День недели
          </button>
          <ul class="dropdown-menu " >
            <li v-for="day in week"><a class="dropdown-item" href="#"  :value="day.val" @click="dateDay = day">{{day.name}}</a></li>
          </ul>
        </div>

        <div v-else-if="dateDay != null">
          <button
                  type="button"
                  class="btn dropdown-toggle btn-info "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
          >
            {{dateDay.name}}
          </button>
          <ul class="dropdown-menu">
            <li v-for="day in week"><a class="dropdown-item" href="#"  :value="day.val" @click="dateDay = day">{{day.name}}</a></li>
          </ul>
        </div>


      </div>

        <input type="time" class="form-control px-2 col-3 time-checker" v-model="lessonTime"/>

    </div>


      <div class="py-2">
        <label for="whoSaysParo" class="form-label">Список отвечающих</label>
        <textarea
          class="form-control"
          id="whoSaysParo"
          rows="6"

          v-model="kek"><label>{{kek}}</label> </textarea>
      </div>

    
<!--      <div class="col-6">-->
<!--        <label for="parlo" class="form-label"> Уже отвечали</label>-->
<!--        <textarea-->
<!--          class="form-control"-->
<!--          rows="6"-->
<!--          id="parlo"-->
<!--        ></textarea>-->
<!--      </div>-->

      <div class="">
        <label for="tarif" class="form-label" >Тариф</label>
        <textarea v-model="dataInBdTarif" class="form-control textarea-disabled" id="tarif"
                  rows="2" disabled>
                  </textarea>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "getDataLesson",
    data: ()=> {
      return ({
        value: '',
        whoSays: '',
        teacherName: null,
        dateDay: null,
        lessonTime: null,
        kek: 'Kekeke',
        dataInBdTarif: 'Надя - Alfa 04',
        parloInThisday: null,
        teachers: ({
          1: {name: 'Надя Каппони', firstname: 'Надя'},
          2: {name: 'Eugenio Marchetti', firstname: 'Эудженио'},
          3: {name: 'Ольга Уварова', firstname: 'Ольга'},
          4: {name: 'Татьяна Красильникова', firstname: 'Татьяна'},
          5: {name: 'Сильвия Паскон', firstname: 'Сильвия П'},
          6: {name: 'Макки Альберто', firstname: 'Альберто'},
          7: {name: 'Альдегери Андреа', firstname: 'Андреа' },
          8: {name: 'Глеб Павло', firstname: 'Паоло'},
          9: {name: 'Сильвия Ля нотте', firstname: 'Сильвия Н'},
          10: {name: 'Надежда', firstname: 'Надежда'},
          11: {name: 'Массимо', firstname: 'Массимо'},
          12: {name: 'Франческо', firstname: 'Франческо'}
        }),

        week: ({
          monday: { name: "Понедельник", val: "Пн"},
          tuesday: { name: "Вторник", val: "Вт"},
          wednesday: { name: "Среда", val: "Ср"},
          thursday: { name: "Четверг", val: "Чт"},
          friday: { name: "Пятница", val: "Пт"},
          saturday: { name: "Суббота", val: "Сб"},
          sunday: { name: "Воскресение", val: "Вс"}

        })
      })
    },
    methods: {

        setData: function () {
         
        }
    },
    computed:{
      setSaysList: () =>{
        if(this.dateDay != '' && this.teacherName != null && this.lessonTime != null){
            this.parloInThisday = this.teacherName + " " + this.dateDay + " " + this.lessonTime
            console.log(this.parloInThisday);
        }
      }
    }
  }
</script>

<style>
  .time-checker{
    width: 30%;
  }
  .textarea-disabled{
    background-color: #f8fcff;
  }
</style>