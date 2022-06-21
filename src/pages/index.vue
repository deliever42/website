<template>
    <Navbar />

    <div class="container mt-10 mx-auto flex items-center justify-around flex-col text-lg">
        <Me />
        <Technologies />
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Technologies from '../components/Technologies.vue';
import Me from '../components/Me.vue';

export default {
    name: 'Home',
    setup() {
        return {
            RouterLink
        };
    },
    components: {
        Navbar,
        Technologies,
        Me
    }
};
</script>
