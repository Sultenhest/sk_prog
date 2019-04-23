<template>
    <div id="darkmode" class="container mx-auto my-6 text-center">
        <div class="mx-6 mt-6">
            <h2 class="text-3xl font-bold mb-6">Enter darkmode?</h2>
            <p class="text-base text-grey-darker">
                <no-ssr>
                    <toggle-button
                        :value="darkmode"
                        color="#38C172"
                        @change="toggleDarkmode()"
                    />
                </no-ssr>
            </p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Darkmode',
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    },
    methods: {
        ...mapMutations({
            toggleDarkmode: 'darkmode/toggleDarkmode'
        })
    }
};
</script>
