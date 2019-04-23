<template>
    <div id="darkmode">
        <div class="container mx-auto my-6">
            <h1>Welcome to the darkside</h1>

            <span>Darkmode</span>
            <input
                type="checkbox"
                :checked="darkmode"
                @change="toggleDarkmode()"
            />
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
