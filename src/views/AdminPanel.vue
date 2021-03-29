<template>
    <main class="container">
        <navbar/>
        <div class="row p-2 py-4">
        <div class="col-3">
            <sidebar/>
        </div>
            <div class="col-9">
                <router-view/>
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
