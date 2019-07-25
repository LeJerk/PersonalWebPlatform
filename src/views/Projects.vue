<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                    class="page-header-image"
                    style="background-image: url('img/bg5.jpg')"
            >
            </parallax>
            <div class="now-content-center">
                <div class="container">
                    <h1 class="projects-title cv-title">My Projects</h1>
                </div>
            </div>
        </div>
        <div class="section section-about-us pb-0">
            <div class="container">
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3>Coming soon</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section"
             style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
        </div>
    </div>
</template>
<script>
    import TabsSection from "./components/Tabs";
    import {Button, FormGroupInput} from "@/components";
    import {EventBus} from '../event-bus.js';

    export default {
        name: "projects",
        bodyClass: "projects-page",
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
            TabsSection
        },
        data() {
            return {
                displayLanguage: "EN",
                themeColor: 'mellow'
            };
        },
        methods: {
            languageChanged(langCode) {
                this.displayLanguage = langCode;
            }
        },
        mounted: function () {
            EventBus.$on('emotionChanged', emotionString => {
                let btnClass = "primary";

                if (emotionString === 'red') {
                    btnClass = "danger";
                } else if (emotionString === 'green') {
                    btnClass = "success"
                } else if (emotionString === 'blue') {
                    btnClass = "info"
                } else if (emotionString === 'purple') {
                    btnClass = "mellow"
                }

                this.themeColor = btnClass;
            });
        }
    };
</script>
<style></style>
