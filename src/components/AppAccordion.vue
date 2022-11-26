<template>
    <div>
        <div class="accordion-class">
        <button @click="toggleAccordion()" class="flex items-center space-x-3" :aria-expanded="isOpen"
            :aria-controls="`collapse${_uid}`">

            <p class="h2-class"><slot name="title" /></p>

            <svg width="15px" class="w-3 svg-icon-acc transition-all duration-200 transform" :class="{
                'rotate-180': isOpen,
                'rotate-0': !isOpen,
            }" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" aria-hidden="true">
                <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

        <div class="collaps" v-show="isOpen" :id="`collapse${_uid}`">
            <slot name="content" />
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style lang="scss">
.svg-icon-acc {
    max-width: 30px;
}
.accordion-class {
    padding-left: 0;
    padding: 10px;
    width: 100%;
    .collaps {
            border: 1px solid #ccc;
                border-radius: 0px 0px 5px 5px;
                padding: 10px;
                margin-top: -11px;
                padding-top: 21px;
                border-top: 0;
    }
    button {
        
            justify-content: space-between;
        margin-left: 0;
        width: 100%;
        border: 1px solid #ccc;
        padding: 15px 10px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        align-items: center;
        border-left: 5px solid var(--orang-color);
        .h2-class {
            font-size: 20px;
            margin: 0;
            margin-right: 10px;
        }
    }
}
</style>
