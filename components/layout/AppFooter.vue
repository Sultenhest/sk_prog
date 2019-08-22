<template>
    <footer>
        <svg id="waves" viewBox="0 0 1440 320">
            <path
                fill="#38a169"
                fill-opacity="0.8"
                d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,138.7C840,128,960,64,1080,32C1200,0,1320,0,1380,0L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <path
                fill="#38a169"
                fill-opacity="1"
                d="M0,64L60,64C120,64,240,64,360,101.3C480,139,600,213,720,218.7C840,224,960,160,1080,117.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <path
                fill="#38a169"
                fill-opacity="0.6"
                d="M0,192L60,160C120,128,240,64,360,37.3C480,11,600,21,720,69.3C840,117,960,203,1080,202.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
        <div class="bg-green-600" @mouseover="changeEmoji()">
            <div class="container mx-auto px-12 pb-6 text-base text-gray-100">
                <div class="md:flex md:justify-center text-center">
                    <p class="md:mr-6">&copy; SK Programmering - 2019</p>
                    <a
                        href="https://datacvr.virk.dk/data/visenhed?enhedstype=virksomhed&id=40293833"
                        target="_blank"
                        class="hover:underline"
                        >CVR-nr. 40 29 38 33</a
                    >
                </div>
                <div class="flex justify-center pt-3">
                    {{ emoji }}
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            emoji: '(っ-◉◡◉)っ',
            emojis: ['(っ-◉◡◉)っ', '(◕દ◕)', '( ꈍᴗꈍ)', '( ˘ ³˘)']
        };
    },
    methods: {
        changeEmoji: function() {
            this.emoji = this.emojis[Math.floor(Math.random() * 4)];
        }
    }
};
</script>

<style scoped>
#waves {
    margin-bottom: -1px;
}
</style>
