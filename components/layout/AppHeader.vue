<template>
    <header
        id="nav"
        class="w-full bg-transparent z-40 absolute"
        :class="textColor"
    >
        <div
            class="relative container mx-auto px-6 h-24 flex justify-between items-center"
        >
            <nuxt-link
                to="/"
                title="Home"
                class="title-link flex items-center no-underline border-none"
                @click="toggleNavigation"
            >
                <Logo />
                <p class="hidden md:block text-inherit">SK Programmering</p>
            </nuxt-link>

            <button
                class="z-40 block md:hidden button bg-green-600 hover:bg-green-400 text-white"
                :class="{ close: displayMobileNavigation }"
                @click="toggleNavigation"
            >
                {{ menuButton }}
            </button>

            <AppNavigation
                class="hidden md:block"
                :class="{ mobile: displayMobileNavigation }"
                @navPressed="toggleNavigation"
            />
        </div>
    </header>
</template>

<script>
import Logo from '~/components/Logo.vue';
import AppNavigation from '~/components/layout/AppNavigation.vue';

export default {
    name: 'AppHeader',
    components: {
        Logo,
        AppNavigation
    },
    data() {
        return {
            menuButton: 'Menu',
            displayMobileNavigation: false
        };
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        },
        textColor() {
            return this.$nuxt.$route.name === 'index' ||
                this.$store.getters['darkmode/isDarkmode']
                ? 'text-white'
                : 'text-gray-900';
        }
    },
    methods: {
        toggleNavigation() {
            this.displayMobileNavigation = !this.displayMobileNavigation;
            this.displayMobileNavigation
                ? (this.menuButton = '×')
                : (this.menuButton = 'Menu');
        }
    }
};
</script>
