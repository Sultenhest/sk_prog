<template>
    <transition name="fade">
        <div v-show="isVisible" :id="uniqueId">
            <slot> </slot>
        </div>
    </transition>
</template>

<script>
import inViewport from 'in-viewport';

export default {
    name: 'ConditionalDisplay',
    props: {
        uniqueId: String
    },
    data() {
        return {
            isVisible: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.checkDisplay, { passive: true });
    },
    methods: {
        checkDisplay() {
            this.isVisible = !inViewport(document.querySelector(this.uniqueId));
        }
    }
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
