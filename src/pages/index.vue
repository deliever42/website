<template>
    <Navbar />

    <div class="container mt-20 mx-auto">
        <div class="flex text-white items-center justify-around flex-col text-lg relative">
            <img
                src="@/assets/deliever.png"
                width="300"
                height="300"
                class="rounded-full"
                draggable="false"
            />
            <br />
            <p>
                Hello, my name is
                <span
                    class="text-red-700 hover:text-red-600 hover:transition-colors hover:duration-200"
                    >Emirhan</span
                >
                and I live in
                <span
                    class="text-red-700 hover:text-red-600 hover:transition-colors hover:duration-200"
                    >Turkey</span
                >
            </p>
            <p>
                I'am a
                <span
                    class="text-red-700 hover:text-red-600 hover:transition-colors hover:duration-200"
                    >Full Stack</span
                >
                Developer.
            </p>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Home',
    setup() {
        return {
            RouterLink
        };
    },
    components: {
        Navbar
    }
};
</script>
