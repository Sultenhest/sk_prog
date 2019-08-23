<template>
    <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit="handleSubmit"
    >
        <label class="mb-2" for="name"
            >Your name
            <small class="block text-sm text-gray-500"
                >What should I call you?</small
            >
        </label>
        <input
            class="input"
            type="text"
            name="name"
            required
            @input="ev => (form.name = ev.target.value)"
        />

        <label class="mb-2" for="email"
            >Your email
            <small class="block text-sm text-gray-500"
                >I'll never spam you. I promise.</small
            >
        </label>
        <input
            class="input"
            type="email"
            name="email"
            required
            @input="ev => (form.email = ev.target.value)"
        />

        <label class="mb-2" for="message"
            >Your Message
            <small class="block text-sm text-gray-500"
                >What do you want to talk about?</small
            >
        </label>
        <textarea
            class="input"
            name="message"
            required
            @input="ev => (form.message = ev.target.value)"
        ></textarea>

        <div
            v-if="displayError"
            id="error"
            class="rounded-lg mb-4 px-4 py-3 font-semibold leading-tight bg-red-600 text-white"
        >
            Oops, looks like something went wrong!
        </div>

        <div
            v-if="displaySuccess"
            id="success"
            class="rounded-lg mb-4 px-4 py-3 font-semibold leading-tight bg-green-600 text-white"
        >
            You're Awesome, {{ form.name }}! Thank you for your message! You'll
            hear from me ASAP!
        </div>

        <button
            class="button bg-blue-600 hover:bg-blue-400 text-white"
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
            displayError: false,
            displaySuccess: false,
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
        handleSubmit(event) {
            event.preventDefault();
            const axiosConfig = {
                header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            axios
                .post(
                    '/',
                    this.encode({
                        'form-name': 'contact',
                        ...this.form
                    }),
                    axiosConfig
                )
                .then(() => {
                    alert('success');
                })
                .catch(() => {
                    alert('error');
                });
        }
    }
};
</script>
