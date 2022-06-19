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
                >.
            </p>
            <p>
                I'am a
                <span
                    class="text-red-700 hover:text-red-600 hover:transition-colors hover:duration-200"
                    >Full Stack</span
                >
                Developer.
            </p>

            <br />
            <br />

            <h1 class="text-4xl">Technologies I Use</h1>

            <div class="grid grid-cols-3 xs:grid-cols-6 gap-4 mt-2">
                <Icon
                    icon="js"
                    color="text-yellow-400"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    brands="true"
                />
                <Icon
                    icon="node-js"
                    color="text-green-500"
                    href="https://nodejs.org/"
                    brands="true"
                />
                <Icon
                    icon="html5"
                    color="text-orange-500"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    brands="true"
                />
                <Icon
                    icon="css3"
                    color="text-blue-500"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    brands="true"
                />
                <Icon icon="vuejs" color="text-green-500" href="https://vuejs.org/" brands="true" />
                <Icon icon="github" color="text-white" href="https://github.com/" brands="true" />
            </div>

            <h1 class="text-4xl mt-4">Contact</h1>
            <div class="grid grid-cols-3 gap-4 mt-2">
                <Icon
                    icon="discord"
                    color="text-blurple"
                    href="https://discord.com/users/931957993925378050"
                    brands="true"
                />
                <Icon icon="envelope" href="mailto:deliever42@gmail.com" solid="true" />
                <Icon icon="instagram" href="https://www.instagram.com/deliever42/" brands="true" />
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/components/Icon.vue';

export default {
    name: 'Home',
    setup() {
        return {
            RouterLink
        };
    },
    components: {
        Navbar,
        Icon
    }
};
</script>
