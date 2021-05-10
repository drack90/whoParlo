<template>
<div>
				<div class="py-3">
					<div class="info-block info-block__big" 
						name="lessonData" 
						id="lessonData">
						<p v-for="(dateLesson, index) in getAllAnswer[pickFlow]" :key="index">
							<b>{{index}}:</b> <br>
							<span v-for="name in dateLesson" :key="name">{{name}}, </span></p>
					</div>
      </div>
</div>
    
</template>

<script>

export default{
    name: 'AnswerList',
    data(){ 
        return{
            
        }
    },

    methods:{

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