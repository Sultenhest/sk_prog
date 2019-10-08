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

        <section class="bg-gray-200">
            <div class="container mx-auto pt-6 pb-2">
                <div class="px-6 pt-10 pb-2 md:pb-10 text-center">
                    <h2
                        class="text-5xl font-bold"
                        :class="[darkmode ? 'text-white' : 'text-gray-800']"
                    >
                        Projects
                    </h2>
                    <p class="text-base text-gray-600">
                        Selected Work
                    </p>
                </div>

                <ProjectList />
            </div>
        </section>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="-mb-16 md:-mb-32"
        >
            <path
                fill="#edf2f7"
                fill-opacity="1"
                d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,64C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
        </svg>

        <section class="container mx-auto my-6">
            <ParticipatedProjects />

            <ContactCard />
        </section>
    </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue';
import ParticipatedProjects from '@/components/project/ParticipatedProjects.vue';
import ContactCard from '@/components/layout/ContactCard.vue';

export default {
    name: 'Home',
    components: {
        ProjectList,
        ParticipatedProjects,
        ContactCard
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
