<template>
    <main class="container">
        
        <div class="row p-2 py-4">
        <div class="col-3">
            <sidebar/>
        </div>
        </div>

    </main>
</template>

<script>

import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/SidebarAdmin'
export default {
    name: 'adminPanel',
        
    components: {Navbar, Sidebar}
};

</script>
