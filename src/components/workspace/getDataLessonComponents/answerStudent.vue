<template>
<div>
    <div class="py-3">
        <div>
          <label for="whoSaysParo">Отвечают</label>
        </div>
        <div class="d-flex">
          <!-- поле поиска -->
           <b-input
          class="mr-2"
          id="whoSaysParo"          
          rows="1"
          v-model="answered"
          placeholder="Введите имя ученика и нажмите 'добавить' ">
           </b-input>
          <!-- кнопка Добавить -->
          <button class="btn btn-primary" 
                  type="submit"
                  >
                    Добавить
          </button>

        </div>    
      </div>
      <div>{{search.name}}</div>
      <ul>
        <li v-for="sayStudent in filteredData" :key="sayStudent">{{sayStudent}}</li>
      </ul>
      <button class="btn btn-primary" @click="loging">GetLog</button>
</div>
    
</template>

<script>
import Vue from 'vue';
export default{
    name: 'AnswerStudent',
    props: {
      compileData: {
        type: Object,
        required: false
      },
      flows: String,
    },
    data(){ 
        return{
            search: [],
            answered: '',
            test: {
              0:['kek']
            },
            compilingData: () =>{
                let kek = []
              for (const group in this.compileData) { 
              for(const index in this.compileData[group]){
                kek.push(this.compileData[group][index])
              }                   
            }
           return kek;
            }
        }
    },


    /**
     * получается что переменные объявленные в дате по умолчанию не реактивны если в них
     * нет не каких вложеных параметров. Таким образом, самый простой вариант изменить 
     * переменные в дате, что бы они инициализировались сразу с параметрами как объекты? 
     * что то звучит как херня. 
     *  
     */






    methods:{
      // conpilingData(){
      //   let kek = []
      //       for (const group in this.compileData) { 
      //        for(const index in this.compileData[group]){
      //          kek.push(this.compileData[group][index])
      //        }                   
      //      }
      //      return kek;
      // },
      loging: function(){

        
        //this.$set(this.search, 'name', this.compilingData())
        console.log(this.$props);
      }
    },
    mounted(){
    console.log(this.$props)
    console.log(this.test);

    },
    watch: {
      getData: async function(newgetPickFlow, oldgetPickFlow){
        if(getPickFlow){
              this.test = await this.$store.dispatch('fetchAllAnswerArr', getPickFlow);
              console.log(this.test);
      }
      },
      getFlow(){
         if(this.$props){
           console.log(this.$props);
        this.$set(this.search, 'name', this.compilingData())       
        }
      },
      setFlows(){
        this.$set(this.$props, compileData, {})
        this.$set(this.$props, flows, {})
        console.log(this.$props)

      },
      
    },
    

    computed:{
      getSearchData(){
        if(this.$props.flows != ""){
        this.$set(this.search, 'name', this.compilingData())       
        }
      },
    getPickFlow(){
      return this.$store.getters.getPickFlow
    },
    logPickFlow(){
        return console.log(this.getPickFlow)
    },


      
      // compiledata(){
      //   this.search = [] //обнуляем переменную
      //   let conut = 0;
      //   //в массиве 2 уровня - первый: имя преподователя дата и время, второй - ученики. 
      //     for (const group in this.compileData) { 
      //       for(const index in this.compileData[group]){
      //         this.search.name.push(this.compileData[group][index])
      //       }                   
      //     }
      // },
      filteredData() {
        if(this.search.name){
          return this.search.name.filter(item => {
          return item.toLowerCase().includes(this.answered.toLowerCase())
      })
        }
        
        }
      
    },
  }


</script>