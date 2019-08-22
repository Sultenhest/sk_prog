<template>
    <div id="home">
        <section
            id="header-section"
            class="w-full h-three-quarters-screen bg-cover-image flex items-center animated fadeIn"
            :class="[darkmode ? 'bg-gray-600' : 'bg-gray-400']"
        >
            <div class="container px-6 mx-auto animated fadeInUp delay-halfs">
                <h1 class="text-5xl text-white font-bold mb-3">
                    Simon Konstantyner
                </h1>
                <p class="text-xl text-gray-200">
                    is a web developer living in Humlebæk Denmark
                </p>
            </div>
        </section>

        <section class="container mx-auto my-6 animated fadeInUp delay-1s">
            <div class="px-6 py-10">
                <h2
                    class="text-4xl font-bold"
                    :class="[darkmode ? 'text-white' : 'text-gray-800']"
                >
                    Projects
                </h2>
                <p class="text-base text-gray-600">
                    Selected Work
                </p>
            </div>

            <ConditionalDisplay>
                <ProjectList />
            </ConditionalDisplay>

            <ContactCard />
        </section>
    </div>
</template>

<script>
import ConditionalDisplay from '@/components/layout/utilities/ConditionalDisplay.vue';
import ProjectList from '@/components/project/ProjectList.vue';
import ContactCard from '@/components/layout/ContactCard.vue';

export default {
    name: 'Home',
    components: {
        ConditionalDisplay,
        ProjectList,
        ContactCard
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
