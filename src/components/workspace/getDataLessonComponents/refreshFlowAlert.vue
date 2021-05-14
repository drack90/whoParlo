<template>
	<div>
			<b-alert
				v-if="showTop"
				v-model="showTop"
				class="position-fixed fixed-top m-0 rounded-0"
				style="z-index: 2000; text-align: center;"
				variant="danger"
				dismissible
			>
				<b class="center">Сегодня первый день занятий потока, 
													нажмите кнопку "Обновить" если это первое занятие</b>
			</b-alert>
	</div>
</template>
<script>

export default{
	data(){
			return{
					showTop: false,
					today: '',
			}
	},

	computed: {
		getPickFlow(){
      return this.$store.getters.getPickFlow
    },
		getFlows (){
      return this.$store.getters.getFlows
    },
	},

	mounted(){
			let date = new Date(); //получаем сегодняшнюю дату
      let options = { weekday: 'short'}
      let convertData = new Intl.DateTimeFormat('en-US', options).format(date) ;
			this.today = convertData;
	},

	watch: {
		async getPickFlow(oldgetPickFlow, newgetPickFlow){
			let pickFlow = await this.$store.getters.getPickFlow //получаем из стора номер выбранного потока
			//определяем дату обновлнения потока
			let dateFlow = await this.$store.getters.getFlows.filter((item) => {
         return item.id == pickFlow 
      })

		 	//Если сегодняшняя дата совпадает с датой обновления потока - меняем значение show
      if(this.today === await dateFlow[0].numberDay)
      {
        this.showTop = true //меняем значение переменной что бы отобразить тост
      }else{
				this.showTop = false
			}
		},
		showTop( oldshowTop, newshowTopp){
			if (this.showTop === true){
				setTimeout(() => {this.showTop = false}, 5000)
				}
		},

	},
}
</script>
