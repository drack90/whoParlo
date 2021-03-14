<template>
  <main class="container">
    <navbar/>
    <div class="row p-2 py-4">
      <sidebar/>
      <GetDataLesson/>
    </div>

  </main>


</template>

<script>
  import Navbar from "../components/app/Navbar";
  import Sidebar from "../components/app/Sidebar";
  import GetDataLesson from "../components/workspace/GetDataLesson";
  export default {
    name: 'fullPage',
    components: {GetDataLesson, Sidebar, Navbar}
  }
</script>