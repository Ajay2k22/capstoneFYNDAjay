

<script>
import axios from 'axios';
export default {
    name: 'PostCard',
    data() {
        return {
            like: false,
            id: ''
        }
    },
    props: {
        fetch: Object,
        id: String
    },

    methods: {
        async liked() {
            this.like = !this.like
            this.id = this.fetch._id
            console.log(this.id)
            await axios.put(`http://localhost:5000/post/${this.id}`, {
                liked: !this.like
            })
        },

    },
    mounted() {
        console.log(`${fetch.name} ${fetch._id}`)
    }
}
</script>

<template>
    <div class="card">
        <img class="imgdata" :src="fetch.imageUrl" alt="">
        <span class="title">{{ fetch.name }} </span>

        <div class="btn2">
            <button @click="liked" class="like" v-if="this.like">Like</button>
            <button @click="liked" class="like" v-if="!this.like">Thanks for Like</button>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 2.5rem;
}

.card {
    height: 400px;
    width: 32%;
    margin-top: 3rem;
    max-width: 440px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 50px 35px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.like {
    margin: 1rem 0;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    background: var(--white);
    color: #ff01cf;
    width: 20rem;
    height: 3.5rem;
    border-radius: 4rem;
    border: 1px solid white;
}

.card img {
    width: 220px;
    border-radius: 50px;
    object-fit: fit;
}

.btn2 img {
    width: 20px;

}

.card p {
    font-size: 16px;
    max-width: 330px;
    margin: 10px auto;
    color: var(--white)
}

.card h2 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 20px;
}
</style>