<template>
    <div
        id="darkmode"
        class="container mx-auto mb-6 text-center animated fadeInUp"
    >
        <div class="mx-6 pt-32">
            <h2 class="text-4xl font-bold mb-6">Enter darkmode?</h2>
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
