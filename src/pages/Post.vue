<script >
import axios from 'axios'
import PostCard from '../components/feed/PostCard.vue';
import Footer from '../components/homepage/footer.vue';
import Navbar from '../components/homepage/navbar.vue'
export default {
    name: 'Post',
    data() {
        return {
            fetch: ''
        }
    },
    components: {
        PostCard,
        Footer,
        Navbar
    },
    methods: {
        async getData() {
            this.fetch = await axios.get(`http://localhost:5000/post`);
            this.fetch = this.fetch.data.data

        }
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
        this.getData()
    }

}
</script>
<template>
    <Navbar />
    <div class="container">
        <PostCard v-for="fetch in this.fetch" :key="fetch" :fetch="fetch" :id="fetch._id" />
        <Footer />
    </div>
</template>
<style scoped>
.container {
    margin: 1rem 0;
    width: 100%;
    background-image: url('../assets/background.jpeg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
</style>>

