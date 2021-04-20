<template>
<div><h1>Kek</h1>
  <div>

    <select class="form-select" name="flow" id="flow" v-model="selectFlow">
      <option value="flow.id" v-for="flow in getFlows" :value="flow.IDdoc">{{flow.Name}}</option>


    </select>
    <a href="#" class="btn btn-primary" @click.prevent="getStudentTariffInServer">Обновить</a>
  </div>
  <p v-for="data in getStudentsTariff">{{data}}</p>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
//import SetStudyTariff from "./getDataLessonComponents/setStudyTariff";
export default {
  name: "studyTariff",
  data(){
    return{
      selectFlow: null,
      studentlist: [],
    }
},
  //components: {SetStudyTariff},
  computed: mapGetters(['getStudentsTariff', 'getFlows']),
    async mounted(){
     // await this.$store.dispatch('studentTariffFetch')
      await this.$store.dispatch('flowsFetch') //запрашиваем с сервера обновленные данные.
    },
  methods:{
    //создаем функцию которая будет вытягивать данные из таблички.
    getStudentTariffInServer: async function (){
      if (this.selectFlow != null){
        let url = `http://whishbot.ru/magnitalia/php/getflowdata.php?listid=${this.selectFlow}`;
        fetch(url,{
          methods: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'request-no-cors'

          }
        }).then(response=>response.json())
            .then(response => (this.studentlist = response)).then(this.selectFlow = '')
            .then(console.log(this.studentlist))

      }else{
        console.log('')
      }

    }
  }

}
</script>

<style scoped>

</style>