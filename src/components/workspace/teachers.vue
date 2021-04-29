<template>
    <div>
      <div class="d-flex">
            <b-form-input class="m-2" v-model="firstName" placeholder="Имя учителя"></b-form-input>
            <b-form-input class="m-2" v-model="lastName" placeholder="Фамилия учителя"></b-form-input>
            <b-form-input class="m-2" v-model="dispName" placeholder="Оторбажение"></b-form-input>
            <b-button class="m-2" variant="outline-primary" @click.prevent="addTeacher">Добавить</b-button>
      </div>
      <hr>
      <div>
        <h1>Учетиля</h1>
        <div class="">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Отображение</th>
                <th scope="col">
                <input type="checkbox" aria-label="Checkbox for following text input">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teacher in getTeachers" :key="teacher.dispName" >
                <td>{{teacher.firstName}}</td>
                <td>{{teacher.lastName}}</td>
                <td>{{teacher.dispName}}</td>
                <td>
                <input  class="form-check-input" 
                        type="checkbox" 
                        :value="teacher.firstName + ' ' + teacher.lastName"
                        v-model="deleteTeachers"
                        >      
                </td> 
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-end">
        <a class="btn btn-danger" @click.prevent="deleteTeacher">Удалить выбранные</a>
        </div>
      </div>
    </div>
</template>


<script>
  import {mapGetters} from 'vuex'

export default {
    name: 'teachers',
    data() {
        return {
            firstName: '',
            lastName: '',
            dispName: '',
            deleteTeachers: [],
        }
    },
  computed: mapGetters(["getTeachers"]),

    async mounted(){
      await this.$store.dispatch('teachersFetch')
    },
    methods: {
        addTeacher: async function() {
          let newTeacher = {
            firstName: this.firstName.trim(),
            lastName: this.lastName.trim(),
            dispName: this.dispName.trim()
          }
          this.$store.dispatch('setTeachersInDB',newTeacher)
          this.$store.dispatch('teachersFetch')
          //очищаем переменные
          this.firstName = '';
          this.lastName = '';
          this.dispName = '';
        },

        deleteTeacher: async function(){
          this.$store.dispatch('delTeacher', this.deleteTeachers);
          this.$store.dispatch('teachersFetch')
        }

    }



}
</script>