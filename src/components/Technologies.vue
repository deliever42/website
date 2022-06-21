<template>
    <br />

    <h1 class="text-4xl text-white">Technologies I Use</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        <div
            class="flex items-center justify-around flex-shrink-0"
            v-for="technologie of config.technologies"
        >
            <a
                class="bg-[#0e1320] rounded-md shadow-lg hover:shadow-[#0e1320] p-3 w-48 h-12 my-auto flex flex-col justify-center hover:text-purple-700 hover:transition-all hover:duration-200"
                :href="technologie.to"
                target="_blank"
                draggable="false"
            >
                <div class="flex justify-center items-center">
                    <img
                        :src="technologie.icon"
                        class="w-7 h-7 mr-auto"
                        :alt="technologie.name"
                        draggable="false"
                    />
                    <p class="ml-auto">{{ technologie.name }}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import config from '@/config.json';

export default {
    name: 'Technologies',
    data() {
        return {
            config
        };
    }
};
</script>
