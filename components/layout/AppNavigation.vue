<template>
    <nav class="navigation" @click="$emit('navPressed', $event)">
        <nuxt-link to="/" title="Projects">Projects</nuxt-link>
        <nuxt-link to="/profile" title="Profile">Profile</nuxt-link>
        <nuxt-link to="/contact" title="Contact">Contact</nuxt-link>
        <nuxt-link
            v-if="darkmode"
            to="/darkmode"
            title="Sun"
            role="image"
            aria-label="sun with face"
            class="border-none"
            >🌞</nuxt-link
        >
        <nuxt-link
            v-else
            to="/darkmode"
            title="Moon"
            role="image"
            aria-label="crescent moon"
            class="border-none"
            >🌙</nuxt-link
        >
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
