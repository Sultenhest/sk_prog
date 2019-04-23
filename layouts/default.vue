<template>
    <div
        id="app"
        class="antialiased font-sans h-full min-h-screen"
        :class="[darkmode ? 'bg-black text-white' : 'bg-white text-black']"
    >
        <AppHeader />

        <main id="main" class="w-full">
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
