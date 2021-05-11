<template>
<div>
				<div class="py-3" v-if="edit">
					<div class="info-block info-block__big" 
						name="lessonData"
						id="lessonData">
						<p v-for="(dateLesson, index) in getAllAnswer[pickFlow]" :key="index">
							<b>{{index}}:</b> <br>
							<span v-for="name in dateLesson" :key="name">{{name}}, </span></p>
          </div>
          <b-button   class="mt-3 "
                      variant="outline-primary"
                      @click="edit = !edit">
                      Редактировать
                      </b-button>
      </div>
      <div class="py-3" v-else>
              <div>
                 <b-input
                  name="lessonData"
                  id="lessonData">
                  Тут будет этот текст `${edit}`
                      <!-- <p v-for="(dateLesson, index) in getAllAnswer[pickFlow]" :key="index">
                      <b>{{index}}:</b> <br>
                      <span v-for="name in dateLesson" :key="name">{{name}}, </span></p> -->
				        	</b-input>
              </div>
              <b-button   class="mt-3 justify-content-end"
                      variant="success"
                      @click="addDataToBase">
                      Сохранить
                      </b-button>
            </div>

            <div>{{getAllAnswer[pickFlow]}}</div>
            <b-button variant="success" @click="logThisAnswer">Log</b-button>
</div>
    
</template>

<script>

export default{
    name: 'AnswerList',
    data(){ 
        return{
            edit: true,
            test: '',
        }
    },

    methods:{
        addDataToBase(){
            this.edit = !this.edit
        },
        logThisAnswer(){
          let test = this.$store.getters.getAllAnswer[this.$store.getters.getPickFlow]
          test = JSON.stringify(test)
          this.test = test
          console.log(this.getAllAnswer[this.pickFlow])
        }
    },
    
    
    mounted(){
       

    },
    watch: {
     
    },
    

    computed:{
			getAllAnswer(){
        
      	return this.$store.getters.getAllAnswer
    	},
			pickFlow(){
      return this.$store.getters.getPickFlow
    	},
    },
  }


</script>