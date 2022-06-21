<template>
    <br />
    <br />

    <hr class="border-slate-800 border-t-[0.3px] container mx-auto min-w-min" />

    <div class="flex flex-col md:flex-row items-center justify-center mt-2 gap-x-28 gap-y-4">
        <Contacts />

        <p class="text-gray-500">
            Copyright © {{ year }}
            <a
                class="text-purple-700 hover:text-purple-600 hover:transition-colors hover:duration-200"
                :href="config.footer.to"
                target="_blank"
                >{{ config.footer.author }}</a
            >
        </p>
    </div>

    <br />
    <br />
</template>

<script>
import config from '@/config.json';
import Contacts from './Contacts.vue';

export default {
    name: 'Footer',
    setup() {
        return {
            year: new Date().getFullYear()
        };
    },
    data() {
        return {
            config
        };
    },
    components: {
        Contacts
    }
};
</script>
