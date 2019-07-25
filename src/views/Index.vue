<template>
    <div>
        <div class="page-header clear-filter" v-bind:filter-color="[emotionString]">
            <parallax
                    class="page-header-image"
                    style="background-image:url('img/header_3.jpg')"
            >
            </parallax>
            <div class="now-container arrow-container">
                <div class="now-content-center brand">
                    <h1 class="h1-seo">Jerker Sandsten</h1>
                    <h3>A passionate web developer - primarily interested in back-end and API-driven development</h3>
                    <arrow-scroller></arrow-scroller>
                </div>
                <h6 class="category raspberry-pi">
                    Hosted on
                    <a href="https://www.raspberrypi.org/" target="_blank">
                        <font-awesome-icon
                                :icon="['fab', 'raspberry-pi']"
                                class="raspberry-pi-icon"
                        >
                        </font-awesome-icon>
                    </a>
                </h6>
            </div>
        </div>
        <profile-section ref="profile"></profile-section>
        <div class="section"
             style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
        </div>
    </div>
</template>
<script>
    import {Parallax} from "@/components";
    import ProfileSection from "./components/ProfileSection";
    import ArrowScroller from "./components/ArrowScroller";
    import {EventBus} from '../event-bus.js';

    export default {
        name: "index",

        bodyClass: "index-page",
        components: {
            ProfileSection,
            Parallax,
            ArrowScroller
        },
        data: function () {
            return {
                emotionString: 'purple'
            };
        },
        mounted() {
            EventBus.$on('emotionChanged', emotionString => {
                this.emotionString = emotionString
            });
        }
    };
</script>
