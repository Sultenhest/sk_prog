<template>
    <a
        class="card bg-white text-gray-800 z-0"
        target="_blank"
        :href="link"
        :title="title"
    >
        <img class="w-full" :src="imageSrc" :alt="title" />
        <div class="p-6 -mt-1">
            <h3 class="font-bold text-xl mb-2">
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
