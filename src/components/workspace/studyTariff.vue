<template>
<div>
  <h1>Тарифы студентов</h1>
  <div class="py-3">
    <label for="flow">Выберите поток</label>
    <select class="custom-select" name="flow" id="flow" v-model="selectFlow">
      <option v-for="flow in getFlows" :value="flow.IDdoc" :key="flow.id">{{flow.Name}}</option>


    </select>
    <div class="py-2">
      <a href="#" class="btn btn-primary" @click.prevent="getStudentTariffInServer">Обновить</a>
    </div>

  </div>
  <div class="studentsTariff">
    <ul>
      <li v-for="(tariff, name) in getStudentsTariff" :key="name">{{name}} - {{tariff}}</li>
    </ul>
  </div>
    <div v-if="studentlist != null" class="toast bg-primary text-white border-0 alertBlock" role="alert" aria-atomic="true" aria-live="assertive">
      <div class="d-flex">
        <div class="toast-body">    
      Данные по {{selectFlow}} Сохранены в Базу!
        </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>



</div>



</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "studyTariff",
  data(){
    return{
      selectFlow: null,
      studentlist: null,
      flowName: '',
      getToast: null,
    }
},

  computed: mapGetters(['getStudentsTariff', 'getFlows', 'getSelectFlow']),
    async mounted(){  
      await this.$store.dispatch('flowsFetch') //запрашиваем с сервера обновленные данные.
    },
  updated() {
        if (this.getToast != null){
            this.$bvToast.toast("данные записаны в базу",{
            title: 'Выполнено успешно',
            variant: 'success',
            autoHideDelay: 1000,
            solid: true,
            toaster: "b-toaster-bottom-right",
          })
          this.getToast = null;
        }          
        
  },
  methods:{

    
//создаем функцию которая будет вытягивать данные из таблички.
    getStudentTariffInServer: async function (){
        let url = `https://whishbot.ru/php/getflowdata.php?listid=${this.selectFlow}`;
      let response =  await fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
            this.studentlist = data
      })
        .then(
          (data) =>{
            let studentListObj = {};
            this.studentlist.forEach((item, index) =>{
              if(item[0] != '' && item[0] != ' '){
                studentListObj[item[0]] = item[1]
              }
            })
            this.studentlist = studentListObj;
          }
        )
      .then((data) =>{
        if(this.studentlist != null){

          //собираем все передаваеммые данные в один массив
          let compileData = [this.selectFlow,
            this.studentlist]

          this.$store.dispatch("getUpdateSelectFlow", this.selectFlow) //добавляем в стейт выбранный
          this.$store.dispatch("getUpdateStudentTariff", this.studentlist)
          this.$store.dispatch("writeStudentTariff", compileData)
          this.getToast = true;
          console.log('Данные записаны в Базу')
          
        }
        
      })
    },
  }

}
</script>

<style scoped>
.studentsTariff{
  margin-top: 10px;
  -webkit-column-width: 200px;
  -moz-column-width: 200px;
  column-width: 200px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 30px;
  -moz-column-gap: 30px;
  column-gap: 30px;
  -webkit-column-rule: 1px solid #ccc;
  -moz-column-rule: 1px solid #ccc;
  column-rule: 1px solid #ccc;
}
.alertBlock{
  position:absolute;
  bottom:0;
}
</style>