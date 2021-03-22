<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Who Say (Parlo) <small>{{version.name}} {{version.version}}</small></router-link>
       <router-link class="btn btn-primary" to="/admin"> Управление</router-link>
    </div>
  
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data: ()=>({
      version: { name: "Alfa-Beta", version: "v.0.002"}
    })
  }
</script>