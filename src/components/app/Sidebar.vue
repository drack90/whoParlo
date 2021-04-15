<template>

    <div class="col-3">
      <div class="list-group">
        <a href="#"
           class="list-group-item list-group-item-action"
            v-for="flow in getFlows">{{flow.Name}}</a>

      </div>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'
  export default{
    name: "Sidebar",

  
    computed: mapGetters(["getFlows"]), 

    async mounted(){
     await this.$store.dispatch('flowsFetch');
    },
    methods: {
      getStudentsFlowData: async function (id){

      }
    }
    
  }

</script>