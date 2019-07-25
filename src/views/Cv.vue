<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                    class="page-header-image"
                    style="background-image: url('img/header_2.jpg')"
            >
            </parallax>
            <div class="now-content-center">
                <div class="cv-container arrow-container">
                    <h1 class="cv-title">My Curriculum Vitae</h1>
                </div>
            </div>
        </div>
        <tabs-section class="pt-0 pb-0"></tabs-section>
        <div class="section section-about-us pb-0 pt-0" >
            <div class="container">
                <div class="row">
                    <div class="col-md-9 mt-5">
                        <h3 v-if="displayLanguage === 'EN'">Work experience</h3>
                        <h3 v-else>Arbetslivserfarenhet</h3>
                    </div>
                    <div class="col-md-3 mt-sm-5 mb-5">
                        <div class="">
                            <p v-if="displayLanguage === 'EN'">Change translation:</p>
                            <p v-else>Ändra översättning:</p>
                            <n-button round v-bind:type="themeColor" @click="languageChanged('SE')">
                                <img alt="" src="img/flags/SE.png"/> Svenska
                            </n-button>
                            <n-button round v-bind:type="themeColor" @click="languageChanged('EN')">
                                <img alt="" src="img/flags/US.png"/> English
                            </n-button>
                        </div>
                    </div>
                </div>
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <div
                                    class="image-container image-left"
                                    style="background-image: url('img/laptop-3190194_1920.jpg')"
                            >
                            </div>
                            <div class="col-10 mt-5 pl-0">
                                <h3>Silverspin AB (In-house 2018 –)</h3>
                            </div>

                            <h5 v-if="displayLanguage === 'EN'">Development, maintenance and support of our online
                                casino platform</h5>
                            <h5 v-else>Utveckling, förvaltning och support av vår casinoplattform, Silverspin AB</h5>
                            <p v-if="displayLanguage === 'EN'"> Primary focus on different API integrations, towards
                                external game providers. I've also been involved in bigger refactoring work of our platform,
                                breaking up the monolith and adapting a microservice-oriented architecture. Managing
                                casino brands such as Vera&John and InterCasino.</p>
                            <p v-else>Utveckling med fokus på olika typer av integrationer mot externa leverantörer av
                                casino-spel. Större refaktoriseringsarbeten av befintlig plattform, för övergång från
                                monolit till en mikrotjänst-baserad arkitektur. Bedriver casinon så som Vera&John och InterCasino.</p>

                            <div class="col-10 mt-5 pl-0">
                                <h3 v-if="displayLanguage === 'EN'">CGI Sweden (Consultant 2015 – 2017)</h3>
                                <h3 v-else>CGI Sverige (Konsult 2015 - 2017</h3>
                            </div>

                            <h5 v-if="displayLanguage === 'EN'">Development and adaptation of integration platform, for
                                roll out of a new business system, Swedavia – (2017/02 - 2017/06)</h5>
                            <h5 v-else>Utveckling av Swedavias integrationsplattform vid införande och utrullning av
                                Swedavias nya affärssystem, Swedavia – (2017/02 - 2017/06)</h5>
                            <p v-if="displayLanguage === 'EN'">Development of Swedavias integration platform, running
                                Biztalk with .NET and C#.</p>
                            <p v-else>Utveckling av Swedavias integrationplattform. Plattformen bygger på Biztalk, med
                                .NET och C# som grund.</p>

                            <div class="col-10 mt-5 pl-0">
                                <h5 v-if="displayLanguage === 'EN'">Setup and configuration of new business system, DB
                                    Schenker – (2016/05 - 2017/05)</h5>
                                <h5 v-else>Konfiguration av Schenkers nya affärssystem, DB Schenker – (2016/05 -
                                    2017/05)</h5>
                                <p v-if="displayLanguage === 'EN'">Helping out with coordination and configuration of
                                    new modules and business logic, within the new business system.</p>
                                <p v-else>Hjälpte till med konfiguration och koordinering, tillsammans med övriga
                                    roll-out teamet.</p>

                                <h5 v-if="displayLanguage === 'EN'">Managing training envrionment for the new business
                                    system, DB Schenker – (2016/05 - 2017/05)</h5>
                                <h5 v-else>Ansvar av träningsmiljön i Schenkers nya affärssystem, DB Schenker – (2016/05
                                    - 2017/05)</h5>
                                <p v-if="displayLanguage === 'EN'">I made sure there was data, that the users from the
                                    business could use when training in the new business system.</p>
                                <p v-else>Jag ansvarade för att all orderdata fanns tillgänglig för användarna och
                                    hjälpte även dem med frågor och problem, som berörde träningsmiljön.</p>

                                <h5 v-if="displayLanguage === 'EN'">Upgrade of Windows application servers, DB Schenker
                                    – (2015/09 - 2016/11)</h5>
                                <h5 v-else>Uppgradering av Windows server för interna webb-applikationer</h5>
                                <p v-if="displayLanguage === 'EN'">Coordination and configuration of new servers, to
                                    enable decommission of the old servers.</p>
                                <p v-else>Koordineringsarbete och konfiguration av ny server, för avveckling av den
                                    gamla.</p>
                            </div>

                            <div
                                    class="image-container"
                                    style="background-image: url('img/computer-1209641_1920.jpg')"
                            >
                            </div>

                            <h5 class="mt-5" v-if="displayLanguage === 'EN'">Coordination of anti-virus upgrade on Windows servers,
                                DB Schenker – (2016/10 - 2016/11)</h5>
                            <h5 class="mt-5" v-else>Koordinator vid uppgradering av anti-virus på Windows server, DB Schenker –
                                (2016/10 - 2016/11)</h5>
                            <p v-if="displayLanguage === 'EN'">Planning and coordination together with application
                                owners and service technician.</p>
                            <p v-else>Planering och koordineringsarbete, tillsammans med applikationsägare och service
                                tekniker.</p>

                            <h5 v-if="displayLanguage === 'EN'">Proof of concept - migration from VB6-based application
                                to a web-based solution, DB Schenker – (2015/04 - 2015/06)</h5>
                            <h5 v-else>Proof of concept - migrering av VB6 applikation till en webbaserad lösning, DB
                                Schenker – (2015/04 - 2015/06)</h5>
                            <p v-if="displayLanguage === 'EN'">Development with Java and AngularJS.</p>
                            <p v-else>Utveckling med Java och AngularJS</p>
                        </div>

                        <div class="col-md-5">
                            <div
                                    class="image-container image-right"
                                    style="background-image: url('img/team-3373638_1920.jpg')"
                            ></div>

                            <h3 v-if="displayLanguage === 'EN'">Evry Sweden (Consultant 2017 – 2018)</h3>
                            <h3 v-else>Evry Sverige (Konsult 2017 - 2018)</h3>

                            <h5 v-if="displayLanguage === 'EN'">Development, maintenance and support of asset management
                                tool, UniCarriers Europe – (2018/05 - 2018/08)</h5>
                            <h5 v-else>Utveckling, förvaltning och support av lagermodulssystem, UniCarriers Europe –
                                (2018/05 - 2018/08)</h5>
                            <p v-if="displayLanguage === 'EN'">Further development and support of
                                UniCarriers asset management tool.</p>
                            <p v-else>Fortsatt utveckling och support av UniCarriers lagermodul.</p>

                            <h5 v-if="displayLanguage === 'EN'">Development and adaptation for GDPR, Essity/Libero –
                                (2018/05 - 2018/06)</h5>
                            <h5 v-else>Utveckling och anpassning för GDPR, Essity/Libero – (2018/05 - 2018/06)</h5>
                            <p v-if="displayLanguage === 'EN'">The project revolved around GDPR and development of
                                Libero:s CMS system - EpiServer with .NET, MVC and C#</p>
                            <p v-else>Projektet innefattade GDPR anpassning av Libero:s CMS system - EpiServer med .NET,
                                MVC och C#</p>

                            <h5 v-if="displayLanguage === 'EN'">Development of a asset management tool, to compliment
                                their current sales tool, UniCarriers Europe – (2017/09 - 2018/05)</h5>
                            <h5 v-else>Utveckling av en lagermodul åt det befintliga säljstödsystemet, UniCarriers
                                Europe – (2017/09 - 2018/05)</h5>
                            <p v-if="displayLanguage === 'EN'">Development using IBM Cloud with a microservice-oriented
                                architecture, running Docker-container virtualization with Kubernetes. The application
                                itself was written in .NET Core 2.0 with Aurelia for the user-interface.</p>
                            <p v-else>Utveckling av en mikrotjänst-baserad lösning, med hjälp av IBM Cloud.
                                Applikationen skrevs i .NET Core 2.0 och Aurelia för gränssnittet.</p>

                            <h5 v-if="displayLanguage === 'EN'">Development, maintenance and support of sales tool, Reco
                                Port AB – (2017/06 - 2018/08)</h5>
                            <h5 v-else>Utveckling, förvaltning och support av offertsystem, Reco Port AB – (2017/06 -
                                2018/08)</h5>
                            <p v-if="displayLanguage === 'EN'">System development and support of Reco Port AB.</p>
                            <p v-else>Systemutvecking och support åt Reco Port AB.</p>

                            <div
                                    class="image-container image-right"
                                    style="background-image: url('img/business-1839876_1920.jpg')"
                            ></div>

                            <h5 v-if="displayLanguage === 'EN'">Further development of different client integrations for
                                CGI:s
                                business system Raindance, CGI – (2016/05 - 2016/09)</h5>
                            <h5 v-else>Fortsatt utveckling av olika kunders integrationer, för CGI:s affärssystem
                                Raindance, CGI – (2016/05 - 2016/09)</h5>
                            <p v-if="displayLanguage === 'EN'">Installation and configuration of an application, used
                                for export of clients budget data.</p>
                            <p v-else>Installation och konfiguering av en applikation som används för export av kunders
                                budgetdata.</p>

                            <h5 v-if="displayLanguage === 'EN'">Support during roll-out of new business system, DB
                                Schenker – (2016/02 - 2016/05)</h5>
                            <h5 v-else>Support under utrullning av nytt affärssystem, DB Schenker – (2016/02 -
                                2016/05)</h5>
                            <p v-if="displayLanguage === 'EN'">Helped out with both first and second line support,
                                during roll-out period.</p>
                            <p v-else>Hjälpte till med både first och second line support, under utrullningen av nya
                                affärssystemet.</p>

                            <h5 v-if="displayLanguage === 'EN'">Development of an application for handling delivery
                                information, DB Schenker – (2015/04 - 2016/4)</h5>
                            <h5 v-else>Utveckling av en applikation och databaslösning för leveransinformation, DB
                                Schenker – (2015/04 - 2016/4)</h5>
                            <p v-if="displayLanguage === 'EN'">Development with Java and SQL, to create an application
                                used for importing transport delivery information.
                            </p>
                            <p v-else>Utveckling med Java och SQL, för att skapa en applikation som används för import
                                och export av leveransinformation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-about-us">
            <div class="container">
                <h3 v-if="displayLanguage === 'EN'">Education</h3>
                <h3 v-else>Utbildning</h3>
                <div class="row">
                    <div class="col-md-6">
                        <h5 v-if="displayLanguage === 'EN'">The technology program with a focus on networks (Cisco) at
                            Östrabo 1 in Uddevalla (2007 - 2010).</h5>
                        <h5 v-else>Teknikprogrammet med inriktning mot nätverk (Cisco) på Östrabo 1 i Uddevalla, 2007 –
                            2010.</h5>
                    </div>
                    <div class="col-md-5">
                        <h5 v-if="displayLanguage === 'EN'">Computer engineering with focus on programming of mobile
                            applications, at University West in Trollhättan (2011 - 2014).</h5>
                        <h5 v-else>Datateknisk systemutveckling med inriktning mot programmering av mobila
                            applikationer, på Högskolan Väst i Trollhättan (2011 – 2014).</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-about-us">
            <div class="container">
                <h3 v-if="displayLanguage === 'EN'">Other merits</h3>
                <h3 v-else>Övrigt meriterande</h3>
                <div class="row">
                    <div class="col-md-6">
                        <h5 v-if="displayLanguage === 'EN'">Thesis work - "Responsive web design, from a developer and
                            user perspective (2014)".</h5>
                        <h5 v-else>Examensarbete – ”Responsive web design, ur ett utvecklar- och användarperspektiv”
                            (2014).</h5>
                        <h5 v-if="displayLanguage === 'EN'">Storeman at ICA Maxi, Torp shopping mall – Every other
                            weekend and summers (2008 – 2015).</h5>
                        <h5 v-else>Lagerarbete ICA Maxi, Torp köpcentrum – Varannan helg och somrar (2008 – 2015).</h5>
                    </div>
                    <div class="col-md-5">
                        <h5 v-if="displayLanguage === 'EN'">Football in Herrestads AIF – Division 5 &
                            6 (1996 – 2006).</h5>
                        <h5 v-else>Fotboll i Herrestads AIF – Division 5 & 6 (1996 – 2006).</h5>
                        <h5 v-if="displayLanguage === 'EN'">PC games - Experienced in server configuration, team
                            arrangement and networking on bigger LAN-events.</h5>
                        <h5 v-else>Datorspel – Erfarenhet inom serverkonfiguration, lagorganisering och nätverksbyggande
                            på större LAN.</h5>
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
        name: "cv",
        bodyClass: "cv-page",
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
