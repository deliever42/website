<template>
    <nav class="bg-[#0e1320] py-7 flex items-center sm:justify-around">
        <h1 class="text-2xl sm:text-3xl ml-3 sm:ml-0">{{ config.navbar.header }}</h1>

        <button
            @click="isNavbarOpen = !isNavbarOpen"
            class="sm:hidden ml-auto mr-1 rounded-md p-2 inline-flex items-center text-white hover:bg-indigo-700 hover:duration-100"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                v-if="!isNavbarOpen"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                v-if="isNavbarOpen"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <ul class="sm:block hidden">
            <a
                class="text-lg ml-4 hover:text-indigo-600 hover:transition-colors hover:duration-200"
                :href="item.to"
                target="_blank"
                v-for="item in config.navbar.items"
            >
                {{ item.name }}
            </a>
        </ul>

        <ul class="w-full absolute top-20 bg-[#0e1320] sm:hidden block z-10" v-if="isNavbarOpen">
            <a
                class="text-lg p-2 hover:bg-indigo-700 hover:duration-200 block text-center mb-2 ml-2 mr-2 rounded-md"
                :href="item.to"
                target="_blank"
                v-for="item in config.navbar.items"
            >
                {{ item.name }}
            </a>
        </ul>
    </nav>
</template>

<script>
import config from '@/config.json';

export default {
    name: 'Navbar',
    data() {
        return {
            isNavbarOpen: false,
            config
        };
    }
};
</script>
