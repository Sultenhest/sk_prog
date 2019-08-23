<template>
    <div id="profile" class="container mx-auto mb-6">
        <div class="mx-6 pt-32 pb-10">
            <h2
                class="text-4xl font-bold"
                :class="[darkmode ? 'text-white' : 'text-gray-800']"
            >
                Profile
            </h2>
            <p class="text-base text-gray-600">A short word</p>
        </div>

        <section class="flex flex-wrap mt-6">
            <aside class="md:w-1/3 mb-6 sm:mb-12 px-6">
                <img
                    class="rounded mb-3"
                    alt="Simon Konstantyner"
                    src="~/assets/images/simon.jpg"
                />
                <p class="text-base mb-3 md:mb-6">
                    Photo by
                    <a
                        href="https://www.instagram.com/trinedreisig/"
                        target="_blank"
                        title="Trine's Instagram"
                        class="hover:underline"
                        >Trine Jul Dreisig</a
                    >
                </p>

                <h4 class="text-base font-bold mb-3">Contact</h4>
                <div>
                    <a
                        href="https://www.linkedin.com/in/simon-konstantyner/"
                        target="_blank"
                        title="LinkedIn"
                        class="py-2 hover:underline inline-flex items-center"
                    >
                        <LinkedIn />
                        <span class="mt-1">LinkedIn</span>
                    </a>
                </div>
                <div>
                    <a
                        href="https://github.com/Sultenhest"
                        target="_blank"
                        title="GitHub"
                        class="py-2 hover:underline inline-flex items-center"
                    >
                        <GitHub />
                        <span>GitHub</span>
                    </a>
                </div>
                <div>
                    <a
                        href="mailto:sultenhest@gmail.com?subject=Hi Simon"
                        class="py-2 hover:underline inline-flex items-center"
                        title="Email me"
                    >
                        <Email />
                        <span>Email</span>
                    </a>
                </div>
            </aside>

            <div class="md:w-2/3 mb-6 sm:mb-12 px-6 leading-normal">
                <h3 class="text-2xl font-bold mb-3">Simon Konstantyner</h3>
                <p class="mb-3">
                    I'm a freelance web developer with an AP in Computer Science
                    living in Humlebæk, currently following a Software
                    Development PBA programme at
                    <a
                        href="https://kea.dk/"
                        target="_blank"
                        title="KEA"
                        class="hover:underline"
                        >KEA</a
                    >. When not studying, I spend most of my time working on
                    different web based projects, toying around with new
                    frameworks or languages, always passionate about learning
                    new tools and finding the best tool to build your next site.
                </p>

                <p class="mb-3">
                    The goal is, and always have been, to make your site look
                    great across all possible platforms, ranging from the
                    largest monitors to the smallest smartphone screens.
                </p>

                <p class="mb-3">
                    Working as a frontend and backend developer on a wide array
                    of projects both solo, as part of internships or working
                    with design bureaus, I've gained experience ranging from
                    initial client contact, prototyping, building the actual
                    site, to teaching staff in the solution provided and
                    post-launch support, returning safe to harbor again once the
                    quest is over.
                </p>

                <div class="flex flex-wrap">
                    <h3 class="text-2xl font-bold w-full my-3">Tools</h3>

                    <p class="mb-3 w-full">
                        Below is the tools I work with most often, not including
                        the libraries Tailwind, Bulma, Bootstrap or the package
                        manager npm, which is hard to live without.
                    </p>

                    <a
                        href="https://expressjs.com/"
                        target="_blank"
                        title="Expressjs"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <Express />
                    </a>
                    <a
                        href="https://git-scm.com/"
                        target="_blank"
                        title="git"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <Git />
                    </a>
                    <a
                        href="https://laravel.com/"
                        target="_blank"
                        title="Laravel"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <Laravel />
                    </a>
                    <a
                        href="https://sass-lang.com/"
                        target="_blank"
                        title="Sass"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <Sass />
                    </a>
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        title="Vuejs"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <Vue />
                    </a>
                    <a
                        href="https://wordpress.org/"
                        target="_blank"
                        title="WordPress"
                        class="w-1/4 md:w-1/6 lg:w-1/8 px-3"
                    >
                        <WordPress :fill="'#494949'" />
                    </a>
                </div>
            </div>

            <ContactCard />
        </section>
    </div>
</template>

<script>
import LinkedIn from '@/components/icons/LinkedIn.vue';
import GitHub from '@/components/icons/Github.vue';
import Email from '@/components/icons/Email.vue';
import Express from '@/components/icons/Express.vue';
import Git from '@/components/icons/Git.vue';
import Laravel from '@/components/icons/Laravel.vue';
import Sass from '@/components/icons/Sass.vue';
import Vue from '@/components/icons/Vue.vue';
import WordPress from '@/components/icons/WordPress.vue';
import ContactCard from '@/components/layout/ContactCard.vue';

export default {
    name: 'Profile',
    components: {
        LinkedIn,
        GitHub,
        Email,
        Express,
        Git,
        Laravel,
        Sass,
        Vue,
        WordPress,
        ContactCard
    },
    computed: {
        darkmode() {
            return this.$store.getters['darkmode/isDarkmode'];
        }
    }
};
</script>
