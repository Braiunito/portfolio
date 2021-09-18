<template>
    <div class="container d-flex flex-column justify-content-between">
        <div class="row w-100 footer-end">
                <div class="col-lg-4 col-md-4 col-sm-12 my-4 socials">
                    <h4>Contact Me</h4>
                    <Socials />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 my-4 d-flex justify-content-center">
                    <b-navbar-brand id="logo" href="#"><strong>{{logo}}</strong></b-navbar-brand>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 my-4 location contact">
                    <h4>Info</h4>
                    <p class="d-flex flex-column">
                        <span>
                            <strong>Adress:</strong> Pje. Salta 2968, Resistencia, Chaco, Argentina.
                        </span>
                        <br>
                        <span>
                            <strong>Phone:</strong> +54 9 362-520-9840
                        </span>
                    </p>
                </div>
        </div>
        <p class="row copyright w-100 h-100 d-flex justify-content-center">©2020 Braian Ariel Maciel, This website it's property of Braian Ariel Maciel. All rights reserved.</p>
    </div>
</template>

<script>
import Socials from '../components/Socials';

export default {
    name: 'Contact',
    data(){
        return { logo: "</>" }
    },
    components: {
        Socials
    }
}
</script>

<style lang="scss" scoped>
.page.footer.container {
    padding: 0 !important;
}
.footer-end {
    margin: auto 0 !important;
    padding: 0 15px !important;
    a#logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.copyright {
    font-size: 0.8rem;
    margin: 0 !important;
    padding: 13px 26px !important;
}
</style>