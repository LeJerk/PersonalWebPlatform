<template>
    <component
            :aria-expanded="isOpen"
            :class="[
      { show: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' }
    ]"
            :is="tag"
            @click="toggleDropDown"
            aria-haspopup="true"
            class="dropdown"
            v-click-outside="closeDropDown"
    >
        <slot name="title">
            <a
                    :class="{ 'no-caret': hideArrow }"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
            >
                <i :class="icon"></i>
                <span class="no-icon">{{ title }}</span>
            </a>
        </slot>
        <ul
                :class="[
        { 'dropdown-menu-right': position === 'right' },
        { show: isOpen },
        { 'background-color-trans': bgColor === false },
        { 'background-color-white': bgColor === true }
      ]"
                class="dropdown-menu"
        >
            <slot></slot>
        </ul>
    </component>
</template>
<script>
    export default {
        name: "drop-down",
        props: {
            direction: {
                type: String,
                default: "down"
            },
            title: String,
            icon: String,
            position: String,
            hideArrow: Boolean,
            tag: {
                type: String,
                default: "li"
            },
            bgColor: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpen: false
            };
        },
        provide() {
            return {
                closeDropDown: this.closeDropDown
            };
        },
        methods: {
            toggleDropDown() {
                this.isOpen = !this.isOpen;
                this.$emit("change", this.isOpen);
            },
            closeDropDown() {
                this.isOpen = false;
                this.$emit("change", this.isOpen);
            }
        }
    };
</script>
<style>
    .dropdown {
        list-style-type: none;
    }

    .dropdown .dropdown-toggle {
        cursor: pointer;
    }
</style>
