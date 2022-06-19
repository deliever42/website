<template>
    <div class="flex items-center justify-around flex-shrink-0">
        <a
            class="bg-[#0e1320] rounded-lg shadow-lg p-3 w-12 h-12 my-auto flex flex-col justify-center"
            :href="href"
            target="_blank"
        >
            <div class="flex justify-center items-center">
                <i :class="classes" :style="style"></i>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        color: String,
        icon: String,
        href: String,
        brands: String,
        solid: String
    },
    setup() {
        return {
            classes: {
                'fa-lg': true
            }
        };
    },
    created() {
        this.classes['fa-' + this.icon] = true;
        this.classes[this.color] = true;

        if (this.brands === 'true') {
            this.classes['fa-brands'] = true;
        }

        if (this.solid === 'true') {
            this.classes['fa-solid'] = true;
        }
    }
};
</script>
