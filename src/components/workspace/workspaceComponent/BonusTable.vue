<template>
    <div>
    <h1>Потоки</h1>
    <div class="">
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Поток студента</th>
      <th scope="col">Имя Ученика</th>
      <th scope="col">Поток ответа</th>
      <th scope="col">Дата ответа</th>
      <th scope="col">Удалить</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in datas">
      <th scope="row">{{}}</th>
      <td>{{data.Flow}}</td>
      <td>{{data.Name}}</td>
      <td>{{data.flowAnswer}}</td>
      <td>{{data.period}}</td>
      <td>
         <button type="button" class="btn-close" aria-label="Delete"></button>
  
      </td> 
    </tr>
  </tbody>
</table>
    </div>
    <div class="d-flex justify-content-end">
     <a class="btn btn-danger">Удалить выбранные</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BonusTable',
    
    props: ['datas']
}
</script>