<template>
    <footer
            :class="{ [`footer-${type}`]: type }"
            :data-background-color="backgroundColor"
            class="footer"
    >
        <div class="container">
            <div class="copyright">

            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        props: {
            backgroundColor: String,
            type: String
        },
        data() {
            return {
                year: new Date().getFullYear()
            };
        }
    };
</script>
<style></style>
