<template>
    <div class="page-header clear-filter" v-bind:filter-color="[emotionString]">
        <div
                class="page-header-image"
                style="background-image: url('img/header.jpg')"
        ></div>
        <div class="content section-login">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="login-title">Admin login</h1>
                        <card plain type="login">

                            <fg-input
                                    addon-left-icon="now-ui-icons users_circle-08"
                                    class="no-border input-lg"
                                    placeholder="Username"
                            >
                            </fg-input>

                            <fg-input
                                    addon-left-icon="now-ui-icons text_caps-small"
                                    class="no-border input-lg"
                                    placeholder="Password"
                            >
                            </fg-input>

                            <template slot="raw-content">
                                <div class="card-footer text-center">
                                    <a
                                            class="btn btn-primary btn-round btn-lg btn-block"
                                            href="#pablo"
                                    >Login</a
                                    >
                                </div>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import {Button, Card, FormGroupInput} from "@/components";
    import MainFooter from "@/layout/MainFooter";
    import {EventBus} from '../event-bus.js';

    export default {
        name: "login-page",
        bodyClass: "login-page",
        components: {
            Card,
            MainFooter,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
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
<style></style>
