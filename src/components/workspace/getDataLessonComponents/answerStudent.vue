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


        <!-- TODO: правильный алгоритм перебора входных параметров. 
                    есть ли смысл поиск проводить по ним? и тот ли компонент я делаю? -->
        
        <!-- <div>
            <ul>
                <li v-for="data in $attrs.value">
                    <span><li v-for="name in data">{{name}}
                        </li></span>{{data}}</li>
            </ul>
        </div> -->
         
      </div>
      <ul>
        <li v-for="sayStudent in filteredData" :key="sayStudent">{{sayStudent}}</li>
      </ul>
</div>
    
</template>

<script>
export default{
    name: 'AnswerStudent',
    props: ['compileData'],
    data(){ 
        return{
            search: [],
            answered: '',
        }
    },
    
    computed:{
      compiledata(){
        this.search = [] //обнуляем переменную
        //в массиве 2 уровня - первый: имя преподователя дата и время, второй - ученики. 
          for (const group in this.$props.compileData) { 
            for(const index in this.$props.compileData[group]){
              this.search.push(this.$props.compileData[group][index])
            }                   
          }
      },
      filteredData() {
        
        let self = this.search
      return this.search.filter(item => {
        return item.toLowerCase().includes(this.answered.toLowerCase())
      })
    },

     
        
      
    },
  
  }


</script>