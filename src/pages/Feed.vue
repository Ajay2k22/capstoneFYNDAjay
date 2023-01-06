<script>
import Navbar from '../components/homepage/navbar.vue';
import Button from '../components/homepage/button.vue';
import FeedPage from '../pages/Feedpage.vue';
import Card from '../components/feed/Card.vue';
import axios from 'axios';
export default {
    name: 'Feed',
    data() {
        return {
            result: '',
            item: '',
            show: true,
            value: ''
        }
    },
    components: {
        Button,
        Card,
        FeedPage,
        Navbar
    },
    methods: {
        async getData() {
            this.result = await axios.get(`http://localhost:5000/ingredients`)

            // console.log(`from get Data ${this.result}`)
            // console.log(this.result.data.data[0].name)
            this.item = this.result.data.data

        },
        async search() {
            this.result = await axios.get(`http://localhost:5000/ingredients/${this.value}`)
            console.log(this.result.status)
            this.item = this.result.data.data
            

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

        <div class="input-group">
            <!-- <h2>{{ this.item[0].name }}</h2> -->
            <input @click="inputsearch" type="search" placeholder="Search" v-model="this.value" />
            <button @click="search" class="btn ">Search</button>
        </div>
        <div v-if="this.item.length != 0" class="grid">

            <Card type="button" v-for="item in this.item" :key="item" :item="item">
            </Card>

        </div>
        <h2 class="result" v-if="this.item.length == 0">Result not found</h2>

        <!-- <h2 class="result" v-if="!this.show">Result not found</h2> -->
    </div>
</template>
<style scoped>
.grid {
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;

}

.result {
    margin: 4rem auto;
    font-size: 2.5rem;

}

.btn {
    background-image: var(--gradient);
    text-align: center;
    height: 4rem;
    padding: 1rem;
    width: 10rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    display: inline-block;
    font-weight: 500;
    cursor: pointer;
    border-radius: 1.2rem;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.grid h2 {
    font-size: 3.5rem;

}

.btn:hover,
.btn:active {
    box-shadow: var(--shadow);
}

.container {

    margin: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.input-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.input-group input {
    height: 4rem;
    border: 2px solid blue;
    border-radius: 1rem;
    outline-color: var(--gradient);
    padding: 1rem;
    width: 40rem;

}

.input-group input:focus {
    outline-color: var(--gradient);
    border: 2px solid blue;
    border-radius: 1rem;
}
</style>