<template>

    <div class="containet-xl-lg col-3">
      <b-list-group v-model="pickFlow">
        <b-list-group-item v-for="flow in getFlows" 
                           href="#" 
                           :key="flow.id" 
                           :value="flow.id" 
                           @click="pickFlow = flow.id"
                           :active="pickFlow === flow.id">{{flow.Name}}</b-list-group-item>
      </b-list-group>

    </div>

</template>

<script>
import {mapGetters} from 'vuex'
  export default{
    name: "Sidebar",
    data() {
      return{
        pickFlow: ''
      }
    },

  
    computed: mapGetters(["getFlows", "getPickFlow", "getAllAnswer"]), 

    async mounted(){
     await this.$store.dispatch('flowsFetch');
    },
    watch: {
      pickFlow: async function(){
        let data
        //При выборе потока вызываем действие по обновлению данных в потоке
        this.$store.dispatch('updatePickFlowsAction', data = {
          pickFlow: await this.pickFlow,
          answered: await this.getAllAnswer
        });
      },
        
    },
    
  }

</script>