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
      <div class="d-flex justify-content-between">
          <b-button   class="mt-3 "
                      variant="outline-primary"
                      @click="editJSONMethods">
                      Редактировать
                      </b-button>
          <div class="py-3" v-show =" edit == false">
              <div id="jsonElditor" style="width: 100%; height: 400px;"></div>
              <b-button   class="mt-3 justify-content-end"
                      variant="success"
                      @click="addDataToBase"
                      >
                      Сохранить
                      </b-button>
            </div>

          <div class="py-3" v-show=" pickFlow != ''">
            <b-button variant="danger"
                      v-b-modal.refresh-Flow-Modal>
                      Обновить
            </b-button>
              <b-modal id="refresh-Flow-Modal" 
                        title="Очистить поток"
                        ok-variant="danger"
                        @ok="refreshFlowData">
                <p class="my-4">Вы уверены что хотите очистить список отвечающих?</p>
              </b-modal>
          </div>
      </div>

  </div>
				

</div>
    
</template>

<script>

import JSONEditor from 'jsoneditor'
export default{
    name: 'AnswerList',
    data(){ 
        return{
            edit: true,
            test: '',
            toast: null,
            //переменные для JSONEditor
            container:'',
            options: '', 
            editor: '',
            editJSON: '',
        }
    },
    mounted(){
      //создаем переменные для JSONEditor
          this.container = document.getElementById('jsonElditor')
          this.options = {
            mode: 'tree'
          }
          this.editor = new JSONEditor(this.container, this.options)
    },
    methods:{
      //функция меняет значение кнопки скрывая эдитор
      //после чего производит запись измененных данных в БД
        async addDataToBase(){
            let pickFlows = await this.pickFlow
            this.editJSON = await this.editor.get()
            await this.$store.dispatch('updateAnswerStudentsInFlow', {
              data: this.editJSON,
              pickFlows: pickFlows
              })
            this.edit = !this.edit
             await this.$store.dispatch('fetchAllAnswer');
        },
        //Производим инициализацию JSONEditor и загружаем в него данные из выбранного потока
       async editJSONMethods(){
          let pickFlows = await this.pickFlow
          if (await pickFlows == '') {
            this.viewToast('Ну выбран поток для редактирования')
          }else{
            this.editor.set(this.getAllAnswer[this.pickFlow])
            this.edit = !this.edit
          }
        },
        //метод позволяет вызвать toast с ошибкой.
        viewToast(message){
            this.$bvToast.toast(`${message}`,{
            title: 'Ошибка',
            message: message,
            variant: 'danger',
            autoHideDelay: 1000,
            solid: true,
            toaster: "b-toaster-bottom-right",
          })
        },

        async refreshFlowData(){
            alert('модальное окно закрыто')
        }
    },
    watch:{
      //следим за изменениями в переменной vuex и при изменении выводим сообщение
        getAnswerToast(){
            this.$bvToast.toast(`${this.getAnswerToast.message}`,{
            title: this.getAnswerToast.title,
            variant: this.getAnswerToast.variant,
            autoHideDelay: 1000,
            solid: true,
            toaster: "b-toaster-bottom-right",
          })
        },
    },


    computed:{
      getAnswerToast(){
      return this.$store.getters.getAnswerToast
      },
			getAllAnswer(){
      return this.$store.getters.getAllAnswer
    	},
			pickFlow(){
      return this.$store.getters.getPickFlow
    	},
    },
  }


</script>