<script >
import SignUp from './pages/Signup.vue';
import Navbar from './components/homepage/navbar.vue';
export default {
    name: 'App',
    methods: {

    },
    components: {
        SignUp,
        Navbar
    }
}
</script>

<template>
    <div>

        <router-view />
    </div>
</template>

<style >
:root {
    --progress-1: 80%;
    --progress-2: 75%;
    --progress-3: 70%;
    --progress-4: 75%;
    --progress-5: 90%;
    --heading: rgba(0, 10, 45);
    --black: #212529;
    --para: #777;
    --para-tint: #e4e4e4;
    --white: #fff;
    --helper: #8490ff;
    --helper-tint: #f3f4ff;
    --btn-color: #606FEE;
    --grey: #8e8e8e;
    --background: url('../assets/background.jpeg')
    --bg: rgb(249, 249, 255);
    --gradient: linear-gradient(to right, rgb(132 144 255) 0%, rgb(98 189 252) 100%);
    --gradient-support: -webkit-linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%);
    --shadow: rgb(138, 142, 172) 1px 1px 1px 1px, rgb(141, 145, 173) 0px 1px 1px 1px;
    ;

}

html {
    font-size: 62.5%;

}

h1,
h2,
h3,
h4 {
    font-family: 'Poppins', sans-serif;
}

h1 {
    color: var(--heading);
    font-size: 6rem;
    font-weight: 600;
}

h3 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

p {
    color: var(--para);
    line-height: 1.6;
    font-size: 2rem;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}
</style>
