<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-9 mt-5">
                    <h3 v-if="displayLanguage === 'EN'">About me</h3>
                    <h3 v-if="displayLanguage === 'SE'">Om mig</h3>
                </div>
                <div class="col-md-3 mt-sm-5 mb-5">
                    <div class="">
                        <p v-if="displayLanguage === 'EN'">Change translation:</p>
                        <p v-else>Ändra översättning:</p>
                        <n-button round v-bind:type="themeColor" @click="languageChanged('SE')">
                            <img alt="" src="img/flags/SE.png"/> {{ SE }}
                        </n-button>
                        <n-button round v-bind:type="themeColor" @click="languageChanged('EN')">
                            <img alt="" src="img/flags/US.png"/> {{ EN }}
                        </n-button>
                    </div>
                </div>
            </div>
            <div class="photo-container">
                <img alt=""
                     src="img/jerker_upper_crop.jpg"
                />
            </div>
            <p class="description" v-if="displayLanguage === 'EN'" v-for="rowEng in about.eng" v-bind:key="rowEng">
                {{ rowEng.paragraph }}
            </p>
            <p class="description" v-if="displayLanguage === 'SE'" v-for="rowSwe in about.swe" v-bind:key="rowSwe">
                {{ rowSwe.paragraph }}
            </p>
        </div>
    </div>
</template>
<script>
    import {TabPane, Tabs, Button} from "@/components";
    import {EventBus} from '../../event-bus.js';

    export default {
        name: 'profile-section',
        components: {
            Tabs,
            TabPane,
            [Button.name]: Button,
        },
        data: function () {
            return {
                displayLanguage: "EN",
                themeColor: 'mellow',
                SE: "Swedish",
                EN: "English",
                about: {
                    swe: [
                        {paragraph: "Redan under min barndom, fattade jag tycke för teknik och spel i olika former. Min far införskaffade vår första dator -98 och det var där min resa började. Min första egna dator byggde jag ungefär 6 år senare och inte långt därefter, administrerade jag och drev min första hemsida. Därefter har min tid kantats av mindre och större LAN-event, där jag själv fått organisera nätverk och sätta upp servrar."},
                        {paragraph: "På gymnasiet i Uddevalla, läste jag teknik med inriktning mot nätverk. Först på Högskolan Väst i Trollhättan, jag kom i kontakt med mjukvaru- och systemutveckling. I början av 2015 blev jag anställd på CGI, genom CGI:s traineeprogram. Sedan dess har jag införskaffat mig erfarenhet inom en rad olika branscher och tekniska områden."},
                        {paragraph: "Till och med juni 2017 utgjorde jag en del av det team som förvaltar och utvecklar en stor del av applikationerna åt en av CGI:s största kunder, nämligen DB Schenker. Kort efter min flytt till Lidköping blev jag anställd på Evry, där jag gavs möjligheten att förvalta och vidareutveckla ett flertal produkter mot handfull kunder."},
                        {paragraph: "Efter lite mer än ett år på Evry tröttnade jag på konsultrollen och hamnade istället hos Silverspin AB i Skövde. Här sitter jag har idag och har givits möjligheten att arbeta in-house med en enda plattform, med fokus på spelintegrationer med tekniker som Java, SQL och PHP."},
                        {paragraph: "Mina huvudsakliga expertisområden innefattas av webbutveckling och integration i varierande former. Jag har även stor erfarenhet av SQL och dokumentbaserade databaser."},
                        {paragraph: "Slutligen vill jag framhäva att jag har ett brett tekniskt intresse och bemöter varje ny utmaning med ett öppet sinne och stort engagemang. Jag är villig att arbeta hårt för att nå mina egna mål och leva upp till varje enskild kunds förväntningar."}
                    ],
                    eng: [
                        {paragraph: "During the early days of my childhood, I fell in love with video games and computers. My father bought our very first computer in 1998 and this is where my journey began. Not more than six years later, I built my first computer and administrated my very first website. Since then I have arranged and organized a bunch of LAN-party events of different scales, setting up and configuring both network and servers."},
                        {paragraph: "In Uddevalla, where I grew up, I studied information technology in high school, but it wasn’t until I began study at University West in Trollhättan, that I tried software development for the first time. I graduated in July 2014 and got my first employment at CGI in early 2015. I have since then gathered experience within the IT business and from different techniques, design patterns and software languages."},
                        {paragraph: "Until June 2017 I was a part of the team that managed, developed and maintained the majority of all applications, for one on CGI:s biggest clients – DB Schenker. Shortly after I moved to Lidköping, I was employed at Evry and became a part of a team, whom maintained and developed multiple applications, for a few different clients."},
                        {paragraph: "After a short period of time, a little more then a year, I grew tired of working as a consultant and got headhunted to Silverspin AB in Skövde. I still work at Silverspin to this day and I’ve been given the opportunity to really focus on improving the quality of the code for a single platform. At Silverspin I’m working in the online gambling business, with focus on different types of integrations towards casino game providers – working with techniques such as Java, SQL and PHP."},
                        {paragraph: "My main area of expertise is within web development, primarily back-end and API driven work. I also have great experience with SQL and document-oriented databases."},
                        {paragraph: "Finally, I want to highlight and point out that I have a broad technical interest and will approach every new given challenge with and open mind. I’m willing to work hard to meet my client’s expectations and deliver maintainable and well thought out software."}
                    ]
                }
            }
        },
        methods: {
            languageChanged(langCode) {
                this.displayLanguage = langCode;

                if (langCode === "SE") {
                    this.SE = "Svenska";
                    this.EN = "Engelska";
                } else {
                    this.SE = "Swedish";
                    this.EN = "English";
                }
            }
        },
        mounted() {
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
