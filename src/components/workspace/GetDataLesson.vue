<template>
  <div class="col-9">
    <div class="row">
      <div class="btn-group col-3">
        <button type="button" class="btn btn-primary  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Выберите преподавателя
        </button>
        <ul class="dropdown-menu">
          <li v-for="teacher in teachers"><a class="dropdown-item" href="#">{{teacher.name}}</a></li>
        </ul>
      </div>

      <div class="btn-group px-2 col-3">
        <button type="button" class="btn btn-success  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          День недели
        </button>
        <ul class="dropdown-menu">
          <li v-for="day in week"><a class="dropdown-item" href="#">{{day.name}}</a></li>
        </ul>
      </div>

        <input type="time" class="form-control px-2 col-3 time-checker" />

    </div>



  </div>
</template>

<script>
  export default {
    name: "getDataLesson",
    data: ()=> {
      return ({
        value: '',
        teachers: ({
          1: {name: 'Надя Каппони'},
          2: {name: 'Eugenio Marchetti'},
          3: {name: 'Ольга Уварова'},
          4: {name: 'Татьяна Красильникова'},
          5: {name: 'Сильвия Паскон'},
          6: {name: 'Макки Альберто'},
          7: {name: 'Альдегери Андреа'},
          8: {name: 'Глеб Павло'},
          9: {name: 'Сильвия Ля нотте'},
          10: {name: 'Надежда'},
          11: {name: 'Массимо'},
          12: {name: 'Франческо'}
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
    }
  }
</script>

<style>
  .time-checker{
    width: 30%;
  }
</style>