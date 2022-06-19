<template>
    <br />
    <br />
    <p class="text-center text-gray-500">
        Copyright © {{ year }}
        <a
            class="text-red-700 hover:text-red-600 hover:transition-colors hover:duration-200"
            href="https://github.com/deliever42"
            target="_blank"
            >Deliever42</a
        >
    </p>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>
