<template>
    <div id="home">
        <section
            class="w-full py-32"
            :class="[darkmode ? 'bg-grey-dark' : 'bg-grey-light']"
        >
            <div class="container px-6 mx-auto">
                <h1 class="text-5xl font-bold mb-3">Simon Konstantyner</h1>
                <p
                    class="text-xl"
                    :class="[
                        darkmode ? 'text-grey-lighter' : 'text-grey-darker'
                    ]"
                >
                    is a fullstack webdeveloper
                </p>
            </div>
        </section>

        <section class="container mx-auto my-6">
            <div class="px-6">
                <h2 class="text-3xl font-bold">Projects</h2>
                <p class="text-base text-grey-darker">Selected Work</p>
            </div>

            <ProjectList />
        </section>
    </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue';

export default {
    name: 'Home',
    components: {
        ProjectList
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
