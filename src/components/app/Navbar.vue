<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Who Say (Parlo) <small>{{version.name}} {{version.version}}</small></a>
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