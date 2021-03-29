<template>

    <div class="col-3">
      <div class="list-group">
        <a href="#"
           class="list-group-item list-group-item-action"
            v-for="flow in getFlows">{{flow}}</a>

      </div>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'
  export default{
    name: "Sidebar",
    // data: ()=> ({
    //   flows: ({
    //     flow7:{name: '7 поток', value: 433984096, goes: true},
    //     flow8:{name: '8 поток', value: 1295556552, goes: true},
    //     flow9:{name: '9 поток', value: 1987009552, goes: true},
    //     flow10:{name: '10 поток', value: 1943975193, goes: true},
    //     flow11:{name: '11 поток', value: 1514798701, goes: true},
    //     flow12:{name: '12 поток', value: 1058973639, goes: true},
    //     flow13:{name: '13 поток', value: 1369651035, goes: true},
    //     flow14:{name: '14 поток', value: 113303824, goes: true},
    //     flow15:{name: '15 поток', value: 1543810578, goes: true},
    //     flow16:{name: '16 поток', value: 1219897573, goes: true},
    //     flow17:{name: '17 поток', value: 1591761931, goes: true},
    //     flow18:{name: '18 поток', value: 2066501548, goes: true},
    //     flow19:{name: '19 поток', value: 1772151003, goes: true},





    //   })
    // }),

  
    computed: mapGetters(["getFlows"]), 

    async mounted(){
     await this.$store.dispatch('flowsFetch')
    }
    
  }

</script>