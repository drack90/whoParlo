<template>
<div>
  <div class="row justify-content-between">
      <div class="col-md-auto">
        <div class="form-group">
          <label for="flowNum">Номер потока</label>
          <input  class="form-control form-control-sm" 
                  type="text"
                  required 
                  placeholder="номер потока" 
                  id="flowNum" 
                  v-model="flowName"
                  >
        </div>
      </div>
       <div class="col-md-auto">
        <div class="form-group">
          <label for="docNum" required>Номер документа в "ПОТОКИ"</label>
          <input  class="form-control form-control-sm" 
                  type="text" 
                  required
                  placeholder="2066501548" 
                  id="docNum" 
                  v-model="docNum"
                  >
          <small id="emailHelp" class="form-text text-muted">В адресе #gid=2066501548</small>
        </div>

      </div>
      <div class="col-md-auto">
        <div class="form-group">
          <label for="goes">Есть ли уроки</label>
          <select class="form-control form-control-sm" v-model="goes" id="goes">
            <option value="true">Учатся</option>
            <option value="false">Не учатся</option>

          </select>
          <small id="emailHelp" class="form-text text-muted">На данный момент</small>
        </div>
      </div>
      <div class="col-md-auto">
        <div class="form-group">
          <label for="resetDay">Начало недели</label>
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
          <button type="submit" href="#" class="btn btn-success" @click.prevent="addFlow">Добавить</button>
        </div>
  </div>
  <div>
    <h1>Потоки</h1>
    <div class="">
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Номер потока</th>
      <th scope="col">ID документа</th>
      <th scope="col">учатся</th>
      <th scope="col">Начало недели</th>
      <th scope="col">
      <input type="checkbox" aria-label="Checkbox for following text input">
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="flow in getFlows" :key="flow.id">
      <th scope="row"></th>
      <td>{{flow.Name}}</td>
      <td>{{flow.IDdoc}}</td>
      <td>{{flow.goes}}</td>
      <td>{{flow.numberDay}}</td>
      <td>
      <input  class="form-check-input" 
              type="checkbox" 
              :value="flow.id" 
              :id="flow.IDdoc"
              v-model="deleteFlow"
              >      
      </td> 
    </tr>
  </tbody>
</table>
    </div>
    <div class="d-flex justify-content-end">
     <a class="btn btn-danger" @click="deleteFlows">Удалить выбранные</a>
    </div>
  </div>
</div>
  
  
</template>

<script>
import { mapGetters } from 'vuex'
//import {database} from '../../require/firebase'
  export default {
    name: 'flows',
    data(){
      return{
        count: 0,
        deleteFlow:[],
        flowNum: [],
        flowName: '',
        docNum: '',
        goes: false,
        numberDay: 'Mo',
      }
    },
    computed: mapGetters(["getFlows"]),

    async mounted(){
     await this.$store.dispatch('flowsFetch')
    },

    methods:{
      //удаление потоков
      deleteFlows: async function (){
        await this.$store.dispatch('deleteFlows', this.deleteFlow);
        await this.$store.dispatch('flowsFetch') //обновляем данные с сервера
      },
      

      //функция добавляет новый поток в firebase
      //нужно добавить callback и произвести обновление в списке
      //а ЛУЧШЕ не добавлять в Базу, а добавить в vuex в flows, после чего обновить в базу 
      
      //TODO подумать о vuelidate или через функцию с книги рецептов https://ru.vuejs.org/v2/cookbook/form-validation.html
      addFlow: async function(){

             let flowNum = await this.flowName.replace(/\D/g,'') //убираем все буквы что бы доваить к имени
            //собираем все данные в один объект.

            if (flowNum == '') {
              alert("заполните Название потока")
            }else if (this.docNum == '') {
              alert("Укажите номер документа в файле потоков")
            }else{
               let flowData =  {"flowNum": flowNum,
                                "IDdoc": this.docNum,
                                "Name": this.flowName,
                                "goes": this.goes,
                                "numberDay": this.numberDay,
                                "id": flowNum};

            await this.$store.dispatch("addFlowInDB", flowData) //добавляем в стейт выбранный
            await this.$store.dispatch('flowsFetch') //обновляем данные с сервера
            //обнуляем переменные (чистим инпуты и селекты)
            this.docNum = '';
            this.flowName = '';
            this.goes = '';
            this.numberDay = '';
            }
           
      }
    }

  

  }
</script>
<style lang="scss">
select.form-control-sm {
    -webkit-appearance: menulist;
}
</style>