<template>
    <div id="contact" class="container w-full md:w-2/4 mx-auto mb-6">
        <div class="mx-6 pt-32 pb-2 md:pb-10">
            <h2
                class="text-4xl font-bold"
                :class="[darkmode ? 'text-white' : 'text-gray-800']"
            >
                Contact Me
            </h2>
            <p class="text-base text-gray-600">Drop me a line</p>
        </div>

        <section
            class="flex flex-wrap mt-6 text-base text-grey-700 leading-normal"
        >
            <div class="mb-6 px-6">
                <p
                    class="mb-6 sm:text-lg md:text-xl xl:text-lg leading-relaxed"
                >
                    If you've got an interesting idea, project or job, don't
                    hesitate to contact me. I'm always up for new challenges.
                </p>

                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

import ContactForm from '@/components/layout/ContactForm.vue';

export default {
    name: 'Darkmode',
    components: {
        ContactForm
    },
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
