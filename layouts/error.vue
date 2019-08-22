<template>
    <div id="404" class="container mx-auto mb-6 text-center">
        <div class="mx-6 pt-32 pb-10">
            <h2
                class="text-4xl font-bold"
                :class="[darkmode ? 'text-white' : 'text-gray-800']"
            >
                404
            </h2>
            <p class="text-base text-gray-600 mb-6">
                Sorry, the page you are looking for could not be found.
            </p>
            <nuxt-link
                to="/"
                title="Home"
                class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-green-600 hover:bg-green-100 md:text-lg xl:text-base text-white hover:text-gray-800 font-semibold leading-tight shadow-md self-center"
            >
                Go home
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
