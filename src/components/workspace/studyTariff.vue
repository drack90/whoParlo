<template>
<div><h1>Kek</h1>
  <div>
    <p v-for="data in getStudentsTariff">{{data}}</p>
  <set-study-tariff/>
  </div>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
import SetStudyTariff from "./getDataLessonComponents/setStudyTariff";
export default {
  name: "studyTariff",
  components: {SetStudyTariff},
  computed: mapGetters(['getStudentsTariff']),
    async mounted(){
      await this.$store.dispatch('studentTariffFetch')
    }
}
</script>

<style scoped>

</style>