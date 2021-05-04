<template>

    <div class="col-3">
      <!-- <div class="list-group">
        <a href="#"
           class="list-group-item list-group-item-action"
            v-for="flow in getFlows" :key="flow.id" >{{flow.Name}}</a>
      </div> -->
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

  
    computed: mapGetters(["getFlows", "getPickFlow"]), 

    async mounted(){
     await this.$store.dispatch('flowsFetch');
    },
    watch: {
      pickFlow: function(pickFlow){
        this.$store.dispatch('updatePickFlowsAction', this.pickFlow);
      },
        
    },
    
  }

</script>