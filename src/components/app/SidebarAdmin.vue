<template>

            <div>
          
          <div class="row">
                <nav class="col-2 sidebar">
            <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link" to="alreadyAnswered">
                  <img src="/img/icons/record_voice_over-black-18dp.svg">
                  Уже отвечали
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="teachers">
                  <b-icon-person-lines-fill></b-icon-person-lines-fill>
                  Учителя
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="bonus">
                  <img src="/img/icons/grade-24px.svg">
                  Бонусы
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="flows">
                  <img src="/img/icons/autorenew-24px.svg">
                  "Потоки"
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="studyTariff">
                  <img src="/img/icons/assessment-24px.svg">
                  Ученики и тарифы
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="statistic">
                  <img src="/img/icons/assessment-24px.svg">
                  Статистика уроков
                </router-link>
              </li>



            </ul>
          </div>
        </nav>
          </div>
        
      
            </div>
        
      
    

</template>

<script>

import Navbar from './Navbar.vue'

  export default{
  components: { Navbar },
    name: "Sidebar",

  }

</script>

<style lang="scss">
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
 /* Behind the navbar */
  padding: 0;
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand-admin-panel {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar-admin-panel .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>