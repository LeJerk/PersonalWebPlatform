<template>
    <navbar
            :color-on-scroll="colorOnScroll"
            :transparent="transparent"
            menu-classes="ml-auto"
            position="fixed"
            type="primary"
    >
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
                    icon="now-ui-icons business_globe"
                    tag="li"
                    title="Work"
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
                    title="In orbit"
            >
                <nav-link to="/in-orbit/login">
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
        }
    };
</script>

<style scoped></style>
