<template>
  <div>
    <h1>bonus</h1>

<div class="row justify-content-between">
      <div class="col-md-auto">
        <div class="form-group">
          <label for="flowNum">Номер потока</label>
          <select 
            class="form-control form-control-sm" 
            v-model="flowNum" 
            id="flowNum" 
            aria-label=".form-select-sm example">
              <option v-for="flow in getFlows" :key="flow.IDdoc">{{flow.Name}}</option>
          </select>
          <small class="form-text text-muted">Поток Ученика</small>

        </div>
      </div>
       <div class="col-md-auto">
        <div class="form-group">
          <label for="studentName">Имя пользователя</label>
          <input  class="form-control form-control-sm" 
                  type="text" 
                  
                  id="studentName" 
                  v-model="studentName">
          <small id="emailHelp" class="form-text text-muted">Желательно имя в zoom</small>
        </div>

      </div>
      <div class="col-md-auto">
        <div class="form-group">
          <label for="goes">Поток ответа</label>
          <select class="form-control form-control-sm" v-model="flowAnswer" id="goes">
            <option v-for="flow in getFlows" :key="flow.id">{{flow.Name}}</option>
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
          <a href="#" class="btn btn-success" @click="bonusSet">Добавить</a>
        </div>
  </div>
    <hr>
      <!-- перенести в отдельный компонент -->
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
    <tr v-for="data in getBonus" :key="data.studentName">
      <th scope="row">{{}}</th>
      <td>{{data.Flow}}</td>
      <td>{{data.studentName}}</td>
      <td>{{data.flowAnswer}}</td>
      <td>{{data.numberDay}}</td>
      <td>
          <input  class="form-check-input" 
              type="checkbox" 
              :value="data.studentName" 
              v-model="delBonus"
              >   
      </td> 
    </tr>
  </tbody>
</table>
    </div>
    <div class="d-flex justify-content-end">
     <a class="btn btn-danger" @click.prevent="delbonus">Удалить выбранные</a>
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
          bonusStudent: '',
          studentName: '',
          flowAnswer: '',
          delBonus: [],
        }
      },
    computed: mapGetters(['getFlows','getBonus']),
    async mounted(){
      await this.$store.dispatch('flowsFetch')
      await this.$store.dispatch('bonusFetch')
      await this.$store.dispatch('getStateBonus')

    },

    methods: {
      async bonusSet(){
        let bonusData = {
          flow: this.flowNum,
          studentName: this.studentName,
          flowAnswer: this.flowAnswer,
          numberDay: this.numberDay
        }
        await this.$store.dispatch('bonusSet', bonusData)
        console.log('====================================');
        console.log('Бонусный урок добавлен');
        console.log('====================================');
        await this.$store.dispatch('bonusFetch')

      },

      async delbonus(){
        await this.$store.dispatch('delBonus', this.delBonus);
        await this.$store.dispatch('bonusFetch') //обновляем данные с сервера
        console.log('====================================');
        console.log("Ученики удалены");
        console.log('====================================');
      }
    }

  }
</script>
<style lang="scss">
select.form-control-sm {
    -webkit-appearance: menulist;
}
</style>