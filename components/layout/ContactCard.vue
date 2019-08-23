<template>
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
                So, you've made it to the end. If you've got an interesting
                idea, project or job, don't hesitate to contact me. I'm always
                up for new challenges.
            </p>
        </div>
        <div class="w-full sm:max-w-2/6 mt-6 sm:mt-0 flex justify-center">
            <a
                href="mailto:sultenhest@gmail.com?subject=Hi Simon"
                title="Email me"
                class="button bg-green-100 hover:bg-green-600 text-gray-800 hover:text-white self-center"
                >Contact Me</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactCard'
};
</script>
