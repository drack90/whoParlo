<template>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "getTariff",
  computed: mapGetters(['getStudentsTariff']),
  async mounted(){
    await this.$store.dispatch('studentTariffFetch')
  }
}
</script>

<style scoped>

</style>