<script>
import Navbar from '../components/homepage/navbar.vue';
import Hero from '../components/homepage/hero.vue';
import Biodata from '../components/homepage/Biodata.vue';
import Portfolio from '../components/homepage/portfolio.vue';
import Banner from '../components/homepage/banner.vue';
import Footer from '../components/homepage/footer.vue'
export default {
    name: 'Home',
    data() {
        return {
            name: ''
        }
    },
    components: {
        Navbar,
        Footer,
        Hero,
        Biodata,
        Portfolio,
        Banner

    },
    methods: {

    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            console.log(user)
            this.name = JSON.parse(user).name
            console.log(this.name)
        }
        if (!user) {
            this.$router.push({ name: 'Signup' })
        }
    }
}
</script>

<template>
    <div>
        <Navbar />
        <Hero :name="this.name" />
        <Biodata />
        <Portfolio />
        <Banner />
        <Footer />
    </div>

</template>

