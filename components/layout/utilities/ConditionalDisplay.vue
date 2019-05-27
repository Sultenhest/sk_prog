<template>
    <transition name="fade">
        <div v-show="isVisible">
            <slot> </slot>
        </div>
    </transition>
</template>

<script>
import inViewport from 'in-viewport';

export default {
    name: 'ConditionalDisplay',
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
            this.isVisible = !inViewport(this, { offset: -300, debounce: 300 });
        }
    }
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
