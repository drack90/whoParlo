<template>
<div><h1>Kek</h1>
  <div>

    <select class="form-select" name="flow" id="flow" v-model="selectFlow">
      <option value="flow.id" v-for="flow in getFlows" :value="flow.IDdoc">{{flow.Name}}</option>


    </select>
    <a href="#" class="btn btn-primary" @click.prevent="getStudentTariffInServer">Обновить</a>
  </div>
  <p v-for="data in getStudentsTariff">{{data}}</p>
  <h3>{{studentlist}}</h3>
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import studentsTariff from "../../store/modules/studentsTariff";
//import SetStudyTariff from "./getDataLessonComponents/setStudyTariff";
export default {
  name: "studyTariff",
  data(){
    return{
      selectFlow: null,
      studentlist: null,
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
              studentListObj[item[0]] = item[1]
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
          console.log(compileData)

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

</style>