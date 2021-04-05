<template>
  <div>
    <h1>bonus</h1>

<div class="row justify-content-between">
      <div class="col-md-auto">
        <div class="form-group">
          <label for="flowNum">Номер потока</label>
          <select class="form-control form-control-sm" v-model="flowNum" id="flowNum" aria-label=".form-select-sm example">
            <option v-for="flow in getFlows">{{flow.Name}}</option>
          </select>
          <small class="form-text text-muted">Поток Ученика</small>

        </div>
      </div>
       <div class="col-md-auto">
        <div class="form-group">
          <label for="docNum">Имя пользователя</label>
          <input  class="form-control form-control-sm" 
                  type="text" 
                  
                  id="docNum" 
                  v-model="docNum">
          <small id="emailHelp" class="form-text text-muted">Желательно имя в zoom</small>
        </div>

      </div>
      <div class="col-md-auto">
        <div class="form-group">
          <label for="goes">Поток ответа</label>
          <select class="form-control form-control-sm" v-model="goes" id="goes">
            <option v-for="flow in getFlows">{{flow.Name}}</option>
          </select>
          <small id="emailHelp" class="form-text text-muted">в каком будет отвечать</small>
        </div>
      </div>
      <div class="col-md-auto">
        <div class="form-group">
          <label for="resetDay">День ответа</label>
          <select class="form-control form-control-sm" v-model="numberDay" id="resetDay">
            <option value="Mo">Пн</option>
            <option value="Tu">Вт</option>
            <option value="We">Ср</option>
            <option value="Th">Чт</option>
            <option value="Fr">Пт</option>
            <option value="Sa">Сб</option>
            <option value="Su">Вс</option>

          </select>
          <small id="emailHelp" class="form-text text-muted">На данный момент</small>
        </div>
      </div>
      <div class="col-md-auto py-2">
          <a href="#" class="btn btn-success" >Добавить</a>
        </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'bonus',
      data(){
        return{
          count: 0,
          deleteFlow:[],
          flowNum: [],
          flowName: '',
          docNum: '',
          goes: '',
          numberDay: '',
        }
      },
    computed: mapGetters(['getFlows','getBonus']),
    async mounted(){
      await this.$store.dispatch('flowsFetch')
      await this.$store.dispatch('bonusFetch')

    },

  }
</script>
<style lang="scss">
select.form-control-sm {
    -webkit-appearance: menulist;
}
</style>