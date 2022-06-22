<template>
    <div
        class="container mt-32 mx-auto flex items-center justify-around flex-col text-lg text-center"
    >
        <h1 class="font-extrabold text-8xl">404</h1>

        <p class="text-3xl text-gray-400 font-bold">Ooops! This page doesn't exist.</p>
        <br />
        <RouterLink
            to="/"
            type="BUTTON"
            role="BUTTON"
            class="py-2 px-6 bg-indigo-700 hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-600 rounded-3xl text-xl hover:transition-all hover:duration-200"
            >Home</RouterLink
        >
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: '404',
    setup() {
        return {
            RouterLink
        };
    }
};
</script>
