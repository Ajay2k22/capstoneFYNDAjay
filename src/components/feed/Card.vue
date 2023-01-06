<script>
import axios from "axios";
export default {
    name: 'CardFeed',
    data() {
        return {
            items: this.item,
            imageurl: this.item.imageurl,
            name: this.item.name,
            id: this.item._id
        }
    },
    mounted() {

    },
    props: {
        item: Object
    },
    methods: {
        async fetch() {
            this.item = await axios.get(`http://localhost:5000/ingredients`)
            
        }
    }
}
</script>
<template>
    <router-link :to='`/feed/${this.id}`'>

        <div class="card-container" :feedpage="feedpage">
            <img :src="item.imageUrl" alt="" />
            <!-- unable to fetch image data -->
            <h2>{{ this.name }}</h2>
        </div>
    </router-link>
</template>

<style scoped>
.card-container {
    position: relative;
    height: 20rem;
    width: 30rem;
    background: var(--gradient);
}

.card-container h2 {
    color: var(--white);
    font-size: 2rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
}

.card-container h2:hover {
    color: var(--black);
}

.card-container img {
    filter: brightness(70%);
    background: var(--black);
    height: 20rem;
    width: 30rem;
    transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
}

.card-container img:hover {
    filter: opacity(85%);
    backdrop-filter: var(--black);

    height: 20rem;
    width: 30rem;
    color: black
}
</style>