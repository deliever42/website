<template>
    <div class="flex gap-3 items-center">
        <div v-for="contact of config.contacts">
            <a
                class="bg-[#0e1320] rounded-full shadow-lg p-3 w-12 h-12 my-auto flex flex-col justify-center"
                :href="contact.to"
                target="_blank"
                draggable="false"
            >
                <div class="flex justify-center items-center">
                    <img
                        :src="contact.icon"
                        class="w-7 h-7 mr-auto"
                        :alt="contact.name"
                        draggable="false"
                    />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import config from '@/config.json';

export default {
    name: 'Contacts',
    data() {
        return {
            config
        };
    }
};
</script>
