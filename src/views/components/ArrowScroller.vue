<template>
    <v-container>
        <v-layout row wrap>
<!--            <v-flex xs12>-->
<!--                <h3 ref="radio" class="headline">Target</h3>-->
<!--                <v-radio-group v-model="type" row>-->
<!--                    <v-radio label="Number" value="number"></v-radio>-->
<!--                    <v-radio label="Selector" value="selector"></v-radio>-->
<!--                    <v-radio label="DOMElement" value="element"></v-radio>-->
<!--                </v-radio-group>-->
<!--                <v-text-field v-if="type === 'number'" v-model="number" type="number" label="Number"></v-text-field>-->
<!--                <v-text-field v-if="type === 'selector'" v-model="selector" label="Selector"></v-text-field>-->
<!--                <v-select v-if="type === 'element'" v-model="selected" :items="elements" label="DOMElement"></v-select>-->
<!--            </v-flex>-->
            <v-flex xs12>
                <h3 class="headline">Options</h3>
                <v-select v-model="easing" :items="easings" label="Easing"></v-select>
                <v-slider v-model="duration" min="0" max="1000" label="Duration" thumb-label></v-slider>
                <v-slider v-model="offset" min="-500" max="500" label="Offset" thumb-label></v-slider>
            </v-flex>
            <v-flex>
                <v-btn ref="button" color="primary" block @click="$vuetify.goTo(target, options)">scroll</v-btn>
            </v-flex>
<!--            <svg id="more-arrows">-->
<!--                <polygon-->
<!--                        class="arrow-top"-->
<!--                        points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "-->
<!--                />-->
<!--                <polygon-->
<!--                        class="arrow-middle"-->
<!--                        points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "-->
<!--                />-->
<!--                <polygon-->
<!--                        class="arrow-bottom"-->
<!--                        points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "-->
<!--                />-->
<!--            </svg>-->
        </v-layout>
    </v-container>
</template>
<script>
    import * as easings from 'vuetify/es5/util/easing-patterns'
    export default {
        data () {
            return {
                type: 'element',
                number: 9999,
                selector: '#first',
                selected: 'profile',
                elements: ['profile'],
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic',
                easings: Object.keys(easings)
            }
        },
        computed: {
            target () {
                const value = this[this.type];
                if (!isNaN(value)) return Number(value);
                else return value
            },
            options () {
                return {
                    duration: this.duration,
                    offset: this.offset,
                    easing: this.easing
                }
            },
            element () {
                if (this.selected === 'Button') return this.$refs.button
                else if (this.selected === 'Radio group') return this.$refs.radio
            }
        }
    }
</script>

<codepen-additional>
    const easings = {
    linear: '',
    easeInQuad: '',
    easeOutQuad: '',
    easeInOutQuad: '',
    easeInCubic: '',
    easeOutCubic: '',
    easeInOutCubic: '',
    easeInQuart: '',
    easeOutQuart: '',
    easeInOutQuart: '',
    easeInQuint: '',
    easeOutQuint: '',
    easeInOutQuint: ''
    }
</codepen-additional>
