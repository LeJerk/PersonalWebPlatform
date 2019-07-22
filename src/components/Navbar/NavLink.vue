<template>
    <component
            :is="componentType"
            :to="to"
            @click.native.stop="closeNav"
            class="dropdown-item"
            v-bind:filter-color="[emotionString]"
    >
        <slot></slot>
    </component>
</template>
<script>
    import {EventBus} from '../../event-bus.js';

    export default {
        name: "nav-link",
        inject: ["closeNavbar", "closeDropDown"],
        props: {
            to: {
                type: [String, Object],
                default: undefined
            }
        },
        data() {
            return {
                emotionString: 'purple'
            };
        },
        computed: {
            componentType() {
                return this.to ? "router-link" : "a";
            }
        },
        methods: {
            closeNav() {
                if (this.closeNavbar) {
                    this.closeNavbar();
                }
                if (this.closeDropDown) {
                    this.closeDropDown();
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.value) {
                    this.findAndActivateTab(this.value);
                }
            });
            EventBus.$on('emotionChanged', emotionString => {
                this.emotionString = emotionString
            });
        },
    };
</script>
<style></style>
