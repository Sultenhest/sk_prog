<template>
    <header
        id="nav"
        class="w-full fixed z-40 transition"
        :class="[
            darkmode ? 'bg-black text-white' : 'bg-white text-black',
            frontpage
        ]"
    >
        <div
            class="container mx-auto px-6 h-24 flex justify-between items-center"
        >
            <nuxt-link
                to="/"
                title="Home"
                class="title-link flex items-center no-underline border-none"
            >
                <Logo />
                <p class="hidden md:block text-inherit">SK Programmering</p>
            </nuxt-link>

            <nav class="navigation">
                <nuxt-link to="/" title="Projects" class="mr-6 border-green"
                    >Projects</nuxt-link
                >
                <nuxt-link
                    to="/profile"
                    title="Profile"
                    class="mr-6 border-green"
                    >Profile</nuxt-link
                >
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
        </div>
    </header>
</template>

<script>
import inViewport from 'in-viewport';

import Logo from '~/components/Logo.vue';

export default {
    name: 'AppHeader',
    components: {
        Logo
    },
    data() {
        return {
            isInViewport: true
        };
    },
    computed: {
        frontpage() {
            return this.$nuxt.$route.name === 'index' && this.isInViewport
                ? 'transparent-background text-white'
                : '';
        },
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    },
    mounted() {
        window.addEventListener('scroll', this.isVisible, { passive: true });
    },
    methods: {
        isVisible() {
            this.isInViewport = inViewport(
                document.querySelector('#header-section'),
                { offset: -96, debounce: 200 }
            );
        }
    }
};
</script>
