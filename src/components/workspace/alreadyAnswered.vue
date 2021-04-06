<template>
  <div>
  <div class="row">
    <div class="col-3">
      <select class="form-select" aria-label="Default select example">
        <!-- v-for data from vuex -->
        <option value="3">Three</option>

      </select>
    </div>
    <div class="col-3">
      <label for=""></label>
    </div>
    <div class="col-3"><a href="#" class="btn btn-primary">добавить поток</a></div>
  </div>
    
  </div>
</template>

<script>
  export default {
    name: 'alreadyAnswered',
    data: ()=>{
     return{
        kek: 'kek',
     }
    },
  }
</script>