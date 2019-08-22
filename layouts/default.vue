<template>
    <div
        id="app"
        class="antialiased font-sans h-full min-h-screen flex flex-col items-stretch"
        :class="[
            darkmode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
        ]"
    >
        <AppHeader />

        <main id="main" class="w-full flex-grow">
            <nuxt />
        </main>

        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';

export default {
    middleware: 'middleware',
    components: {
        AppHeader,
        AppFooter
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
