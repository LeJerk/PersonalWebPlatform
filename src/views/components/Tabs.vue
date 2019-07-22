<template>
    <div class="section section-cv section-tabs">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto col-xl-10 mr-auto">
                    <card>
                        <tabs
                                slot="raw-content"
                                tab-content-classes="tab-content-padding text-center"
                        >
                            <tab-pane>
                                <template slot="label">
                                    <i class="now-ui-icons business_globe"></i> External clients
                                </template>
                                <h4>
                                    • <a href="https://www.dbschenker.com/se-sv/" target="_blank">DB Schenker
                                    (2015-2017)</a>
                                    • <a href="https://www.swedavia.com/" target="_blank">Swedavia (2017)</a>
                                    • <a href="https://www.facebook.com/RecoPort" target="_blank">Reco Port AB
                                    (2017-2018)</a>
                                    • <a href="https://www.libero.com/" target="_blank">Essity/Libero (2018)</a>
                                    • <a href="https://www.unicarrierseurope.com/en" target="_blank">UniCarriers Europe
                                    (2017-2018)</a>
                                </h4>
                            </tab-pane>
                            <tab-pane>
                                <template slot="label">
                                    <i class="now-ui-icons design_app"></i> In-house development
                                </template>
                                <h4>
                                    • <a href="https://se.silverspin.com/" target="_blank">Silverspin AB (2018-)</a>
                                </h4>
                            </tab-pane>
                            <tab-pane>
                                <template slot="label">
                                    <i class="now-ui-icons education_glasses"></i> Technical areas
                                </template>
                                <h4>
                                    • Web development
                                    • API integrations
                                    • Database architecture
                                    • DevOps
                                    • Customer support
                                </h4>
                            </tab-pane>
                            <tab-pane>
                                <template slot="label">
                                    <i class="now-ui-icons ui-2_settings-90"></i> Settings
                                </template>
                                <p>
                                    "I will be the leader of a company that ends up being worth
                                    billions of dollars, because I got the answers. I understand
                                    culture. I am the nucleus. I think that’s a responsibility
                                    that I have, to push possibilities, to show people, this is
                                    the level that things could be at."
                                </p>
                            </tab-pane>
                        </tabs>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Card, TabPane, Tabs} from "@/components";

    export default {
        components: {
            Card,
            Tabs,
            TabPane
        }
    };
</script>
<style>
    .tab-content.tab-content-padding {
        padding: 0 1.5em 1.5em 1.5em;
    }
</style>
