<template>
    <section class="mb-4 sm:mb-12">
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
