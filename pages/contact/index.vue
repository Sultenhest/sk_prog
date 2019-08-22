<template>
    <div id="darkmode" class="container mx-auto mb-6">
        <div class="mx-6 pt-32">
            <h2 class="text-4xl font-bold mb-6">Contact Me</h2>
            <div class="text-base text-grey-700">
                <form name="contact" method="POST" netlify>
                    <p>
                        <label
                            >Your Name: <input type="text" name="name"
                        /></label>
                    </p>
                    <p>
                        <label
                            >Your Email: <input type="email" name="email"
                        /></label>
                    </p>
                    <p>
                        <label
                            >Message: <textarea name="message"></textarea
                        ></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
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
