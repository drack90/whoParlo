<template>
<div>
  <select class="form-select" name="flow" id="flow" v-model="flow" >
    <option value="flow.id" v-for="flow in getFlows">{{flow.IDdoc}}</option>


  </select>
  <a href="#" class="btn btn-primary">Обновить</a>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  name: "setStudyTariff",
  // data(){
  //   return{
  //     flow: '',
  //   }
  // },
  method:{

  },
  computed: mapGetters[("getFlows")], //получаем перечень потоков.
 async mounted(){
    await this.$store.dispatch('flowsFetch') //запрашиваем с сервера обновленные данные.
  }
}
</script>

<style scoped>
.red{
  color:red;
}
</style>