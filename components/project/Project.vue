<template>
    <a
        class="card bg-white text-gray-800 z-0 md:flex"
        target="_blank"
        :href="link"
        :title="title"
    >
        <div class="md:flex-shrink-0 md:w-1/3">
            <img class="w-full" :src="imageSrc" :alt="title" />
        </div>
        <div class="m-6 md:mx-8 lg:mx-16 xl:mx-32 lg:my-auto">
            <h3 class="font-bold text-xl md:text-3xl mb-2">
                {{ title }}
            </h3>
            <p class="text-gray-600 text-base" :if="subtitle">
                {{ subtitle }}
            </p>
        </div>
    </a>
</template>

<script>
export default {
    name: 'Project',
    props: {
        link: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
};
</script>
