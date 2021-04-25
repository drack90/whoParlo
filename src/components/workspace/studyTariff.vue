<template>
<div><h1>Kek</h1>
  <div>

    <select class="form-select" name="flow" id="flow" v-model="selectFlow">
      <option value="flow.id" v-for="flow in getFlows" :value="flow.IDdoc">{{flow.Name}}</option>


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
    <div v-if="studentlist != null" class="alert alert-success p-4 alertBlock" role="alert" >
      Данные по {{selectFlow}} Сохранены в Базу!

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
    }
},
  //components: {SetStudyTariff},
  computed: mapGetters(['getStudentsTariff', 'getFlows', 'getSelectFlow']),
    async mounted(){
     // await this.$store.dispatch('studentTariffFetch')
  
      await this.$store.dispatch('flowsFetch') //запрашиваем с сервера обновленные данные.
  
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
            //TODO Загоняем данные в объект! что бы загонять в БД в JSON правильно - имя было бы ключ, а значение тариф
            //TODO Удалить все не валидные значения типо "если значение пустые - пропустить)
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
          //mapActions(["getUpdateSelectFlow", this.selectFlow]);
          //mapActions(["writeStudentTariff"]);
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