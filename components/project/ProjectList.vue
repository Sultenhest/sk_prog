<template>
    <section>
        <div class="grid">
            <div class="grid__cell m-6">
                <Project
                    link="http://viaequity.com/"
                    image-src="via_equity.png"
                    title="VIA Equity"
                    subtitle="Multilingual WordPress Theme"
                />
            </div>
            <div class="grid__cell-large m-6">
                <Project
                    link="https://vl.dk/"
                    image-src="vl.png"
                    title="Dansk Selskab for Virksomhedsledelse"
                    subtitle="Event Plugin Development"
                />
            </div>
            <div class="grid__cell-tall m-6">
                <Project
                    link="https://wordpress.org/themes/voltata/"
                    image-src="voltata.png"
                    title="Voltata"
                    subtitle="WordPress Repository Theme"
                />
            </div>
            <div
                class="grid__cell-wide flex m-6 p-6 card bg-green-600 text-white"
            >
                <a
                    href="mailto:sultenhest@gmail.com?subject=Hi Simon"
                    title="Email me"
                    >And more.. Maybe your site too?</a
                >
            </div>
        </div>

        <div class="flex flex-wrap lg:hidden">
            <div class="md:w-1/2">
                <Project
                    has-margin
                    link="https://vl.dk/"
                    image-src="vl.png"
                    title="Dansk Selskab for Virksomhedsledelse"
                    subtitle="Event Plugin Development"
                />
            </div>
            <div class="md:w-1/2">
                <Project
                    has-margin
                    link="http://viaequity.com/"
                    image-src="via_equity.png"
                    title="VIA Equity"
                    subtitle="Multilingual WordPress Theme"
                />
            </div>
            <div class="md:w-1/2">
                <Project
                    has-margin
                    link="https://wordpress.org/themes/voltata/"
                    image-src="voltata.png"
                    title="Voltata"
                    subtitle="WordPress Repository Theme"
                />
            </div>
            <div class="w-full md:w-1/2">
                <div
                    class="h-full card card--flex m-6 p-6 bg-green-600 text-white"
                >
                    <a
                        href="mailto:sultenhest@gmail.com?subject=Hi Simon"
                        title="Email me"
                        >And more.. Maybe your site too?</a
                    >
                </div>
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
