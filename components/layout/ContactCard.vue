<template>
    <ConditionalDisplay>
        <div
            id="contact-card"
            class="card sm:flex mx-6 mb-12 p-12 bg-green-400 text-white text-center sm:text-left"
        >
            <div class="w-full sm:max-w-4/6">
                <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl">
                    Want to get in contact?
                </h2>
                <p
                    class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-white"
                >
                    You’ve traveled far and made it to the end. If you've got an
                    interesting idea, project or job, don't hesitate to contact
                    me. I'm always up for new challenges.
                </p>
            </div>
            <div class="w-full sm:max-w-2/6 mt-6 sm:mt-0 flex justify-center">
                <nuxt-link
                    to="/contact"
                    title="Contact"
                    class="button bg-green-100 hover:bg-green-600 text-gray-800 hover:text-white self-center"
                    >Contact Me</nuxt-link
                >
            </div>
        </div>
    </ConditionalDisplay>
</template>

<script>
import ConditionalDisplay from '@/components/layout/utilities/ConditionalDisplay.vue';

export default {
    name: 'ContactCard',
    components: {
        ConditionalDisplay
    }
};
</script>
