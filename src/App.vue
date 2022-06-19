<template>
    <RouterView />
    <Footer />
</template>

<script>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    setup() {
        return { RouterView };
    },
    components: {
        Footer
    }
};
</script>
