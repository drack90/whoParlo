<template>
    <main class="container">
        
        <navbar/>
        <div class="row p-2 py-4">
        <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Ea reiciendis non temporibus 
            atque obcaecati vero quae molestias. Voluptatum 
            exercitationem nam, illum placeat blanditiis labore
             perferendis aliquid, earum, officiis voluptatibus 
             provident?</p>
        </div>

    </main>
</template>

<script>

import Navbar from '../components/app/Navbar';

export default {
    name: 'adminPanel',
        
    components: {Navbar}
};

</script>
