<script>
import axios from 'axios'
import Footer from '../components/homepage/footer.vue'
import Heading2 from '../components/homepage/bar.vue'
export default {
    name: 'FeedPage',
    data() {
        return {
            id: this.$route.params.id,
            item: '',

        }
    },
    components: {
        Heading2,
        Footer
    },
    props: {

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

        console.log(this.id)
        this.fetchfeed()
    },
    methods: {
        async fetchfeed() {
            this.item = await axios.get(`http://localhost:5000/products/${this.id}`)
            this.item = this.item.data.data
            // console.log(this.item.instructions[0].text)
            // console.log(this.item.ingredients[0].unit)
        }
    }
}
</script>

<template>
    <div class="container ">
        <h2>{{ this.item.name }}</h2>
        <div class="img">
            <img :src="this.item.imageUrl" alt="" />
        </div>
        <div class="details">
            <div class="instructions">
                <Heading2 title="Instructions"></Heading2>
                <p class="inst-text" v-for="instruction in this.item.instructions" :key="instruction">
                    <span>{{ instruction.heading }}</span>
                    <span>{{ instruction.text }}</span>
                </p>
            </div>
            <div class="instructions">
                <Heading2 title="Ingredients"></Heading2>
                <p class="inst-text" v-for="ingredient in this.item.ingredients" :key="ingredient">
                    <span>{{ ingredient.quantity }}</span>
                    <span>{{ ingredient.unit }}</span>
                    <span>{{ ingredient.name }}</span>
                </p>
            </div>

        </div>

    </div>
    <Footer />
</template>

<style scoped>
.container {
    margin: 0rem;
    padding: 1rem;
    background: #d3d3d3;

    justify-content: start;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.details {
    margin: 0rem 10rem;

    width: 130rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.instructions {
    margin-top: 1.4rem;
    display: flex;
    gap: 1.8rem;
    flex-direction: column;
    justify-content: start;
}

.inst-text {
    font-size: 1.5rem;
    color: var(--grey);
    font-weight: 500;
}

.instructions h3 {
    margin: 1rem 0;
    font-weight: 600;
    font-size: 1.8rem;
}

.instructions p {
    margin-left: 1rem;
}

.details h2 {

    padding: 1rem;
}

.instructions h3 {
    color: var(--black);
    padding: 1rem;
    font-size: 3rem;
}

.container h2 {
    margin: 1rem 0;
    color: var(--black);
    font-size: 3.5rem;
}

.img {
    height: 30rem;
    width: 60rem;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    image-resolution: inherit;
}

.img img {
    image-resolution: inherit;
    object-fit: scale-down;
    height: 50rem;
    width: 80rem;
    border-radius: 20%;
}

.flex {}
</style>