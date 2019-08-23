<template>
    <form
        name="contact"
        method="POST"
        netlify
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
    >
        <p class="hidden">
            <label
                >Don’t fill this out if you're human: <input name="bot-field"
            /></label>
        </p>
        <label class="mb-2" for="name"
            >Your name
            <small class="block text-sm text-gray-500"
                >What should I call you?</small
            >
        </label>
        <input class="input" type="text" name="name" required />
        <label class="mb-2" for="email"
            >Your email
            <small class="block text-sm text-gray-500"
                >I'll never spam you. I promise.</small
            >
        </label>
        <input class="input" type="email" name="email" required />
        <label class="mb-2" for="message"
            >Your Message
            <small class="block text-sm text-gray-500"
                >What do you want to talk about?</small
            >
        </label>
        <textarea class="input" name="message" required></textarea>
        <button
            class="button bg-green-600 hover:bg-green-400 text-white hover:text-gray-800"
            type="submit"
        >
            Send
        </button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    key =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join('&');
        },
        handleSubmit() {
            const axiosConfig = {
                header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            axios.post(
                '/',
                this.encode({
                    'form-name': 'contact',
                    ...this.form
                }),
                axiosConfig
            );
        }
    }
};
</script>
