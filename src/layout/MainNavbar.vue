<template>
    <navbar
            :color-on-scroll="colorOnScroll"
            :transparent="transparent"
            menu-classes="ml-auto"
            position="fixed"
            v-bind:type="[themeColor]"
    >
        <drop-down
                class="navbar-brand"
                tag="li"
                title="How are you feeling today?"
        >
            <p class="dropdown-item" @click="emotionHandler('red')">
                <i class="now-ui-icons media-2_sound-wave"></i>
                Red
            </p>
            <p class="dropdown-item" @click="emotionHandler('green')">
                <i class="now-ui-icons education_atom"></i>
                Green
            </p>
            <p class="dropdown-item" @click="emotionHandler('blue')">
                <i class="now-ui-icons sport_user-run"></i>
                Blue
            </p>
            <p class="dropdown-item" @click="emotionHandler('orange')">
                <i class="now-ui-icons media-2_sound-wave"></i>
                Orange
            </p>
            <p class="dropdown-item" @click="emotionHandler('purple')">
                <i class="now-ui-icons clothes_tie-bow"></i>
                Purple
            </p>
        </drop-down>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a
                        class="nav-link"
                        href="/"
                >
                    <font-awesome-icon
                            icon="home"
                            class="awesome-icons-margin-right"
                    >
                    </font-awesome-icon>
                    <p>Home</p>
                </a>
            </li>
            <drop-down
                    class="nav-item"
                    icon="now-ui-icons tech_laptop"
                    tag="li"
                    title="My Work"
            >
                <nav-link to="/work/cv">
                    <i class="now-ui-icons business_badge"></i>
                    Curriculum Vitae
                </nav-link>
                <nav-link to="/work/projects">
                    <i class="now-ui-icons business_bulb-63"></i>
                    Projects
                </nav-link>
            </drop-down>
            <drop-down
                    class="nav-item"
                    icon="now-ui-icons objects_planet"
                    tag="li"
                    title="Orbit"
            >
                <nav-link to="/orbit/login">
                    <i class="now-ui-icons objects_spaceship"></i>
                    Login
                </nav-link>
            </drop-down>
            <li class="nav-item">
                <a
                        class="nav-link"
                        data-placement="bottom"
                        href="https://www.linkedin.com/in/jerker-sandsten-5924079b"
                        rel="tooltip"
                        target="_blank"
                        title="Befriend me on LinkedIn"
                >
                    <font-awesome-icon
                            :icon="['fab', 'linkedin']"
                            class="awesome-icons"
                    >
                    </font-awesome-icon>
                    <p class="d-lg-none d-xl-none">LinkedIn</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                        class="nav-link"
                        data-placement="bottom"
                        href="https://github.com/fknjerkz"
                        rel="tooltip"
                        target="_blank"
                        title="Check out my Github"
                >
                    <font-awesome-icon
                            :icon="['fab', 'github-square']"
                            class="awesome-icons"
                    >
                    </font-awesome-icon>

                    <p class="d-lg-none d-xl-none">Github</p>
                </a>
            </li>
        </template>
    </navbar>
</template>

<script>
    import {DropDown, Navbar, NavbarToggleButton, NavLink} from "@/components";
    import {Popover} from "element-ui";
    import {EventBus} from '../event-bus.js';

    export default {
        name: "main-navbar",
        props: {
            transparent: Boolean,
            colorOnScroll: Number
        },
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        },
        data: function () {
            return {
                themeColor: 'mellow'
            }
        },
        methods: {
            emotionHandler: function (emotion) {
                let btnClass = "primary";

                if (emotion === 'red') {
                    btnClass = "danger";
                } else if (emotion === 'green') {
                    btnClass = "success"
                } else if (emotion === 'blue') {
                    btnClass = "info"
                } else if (emotion === 'purple') {
                    btnClass = "mellow"
                }

                this.themeColor = btnClass;
                EventBus.$emit('emotionChanged', emotion);
            }
        }
    };
</script>

<style scoped></style>
