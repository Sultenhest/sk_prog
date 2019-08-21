<template>
    <section class="mb-12">
        <div class="flex flex-wrap lg:-mx-4 px-6">
            <div
                v-for="(project, index) in projects"
                :key="index"
                class="my-4 px-1 w-full md:w-1/2 md:my-4 md:px-4"
            >
                <Project
                    :link="project.fields.link"
                    :image-src="project.fields.image.fields.file.url"
                    :title="project.fields.title"
                    :subtitle="project.fields.excerpt"
                />
            </div>
        </div>

        <div
            class="block sm:flex my-4 mx-6 md:m-6 p-12 block rounded overflow-hidden shadow bg-green-400 text-white text-center sm:text-left"
        >
            <div class="w-full sm:max-w-4/6">
                <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl">
                    Want to get in contact?
                </h2>
                <p
                    class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-white"
                >
                    So, you've made it to the end. If you've got an interesting
                    idea, project or job, don't hesitate to contact me. I'm
                    always up for new challenges.
                </p>
            </div>
            <div class="w-full sm:max-w-2/6 mt-6 sm:mt-0 flex justify-center">
                <a
                    href="mailto:sultenhest@gmail.com?subject=Hi Simon"
                    title="Email me"
                    class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-green-100 hover:bg-green-600 md:text-lg xl:text-base text-gray-800 hover:text-white font-semibold leading-tight shadow-md self-center"
                    >Contact Me</a
                >
            </div>
        </div>
    </section>
</template>

<script>
import Project from '~/components/project/Project.vue';

export default {
    name: 'ProjectList',
    components: {
        Project
    },
    computed: {
        projects() {
            return this.$store.getters['projects/getProjects'];
        }
    }
};
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 992px) {
        display: none;
    }

    &__cell {
        &-large {
            grid-column: 2/4;
            grid-row: 1/3;
        }

        &-tall {
            grid-row: 2/4;
        }

        &-wide {
            grid-column: 2/4;
        }
    }
}
</style>
