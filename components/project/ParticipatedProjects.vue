<template>
    <section class="p-6 mb-4 sm:mb-12 text-center">
        <h2
            class="text-4xl font-bold"
            :class="[darkmode ? 'text-white' : 'text-gray-800']"
        >
            Participation
        </h2>
        <p class="text-base mb-4 text-gray-600">
            Other projects i've participated in. This includes site optimization
            as well as minor bug fixes around the sites.
        </p>

        <div class="flex flex-wrap justify-center lg:-mx-4">
            <div class="my-4 w-1/2 md:w-1/4 my-4 px-4">
                <a
                    href="https://drkoncerthuset.dk/"
                    title="DR Koncerthuset"
                    target="_blank"
                >
                    <DRKoncerthuset />
                </a>
            </div>
            <div class="my-4 w-1/2 md:w-1/4 my-4 px-4 pt-8 sm:pt-6 lg:pt-12">
                <a href="https://seedster.dk/" title="Seedster" target="_blank">
                    <Seedster />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import DRKoncerthuset from '@/components/icons/DRKoncerthuset.vue';
import Seedster from '@/components/icons/Seedster.vue';

export default {
    name: 'ParticipatedProjects',
    components: {
        DRKoncerthuset,
        Seedster
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
