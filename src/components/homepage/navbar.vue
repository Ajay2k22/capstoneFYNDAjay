<script >
export default {
    name: 'Navbar',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            let user = localStorage.getItem('user-info')
            if (!user) {
                this.$router.push({ name: 'Signup' })
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.name = JSON.parse(user).name
            console.log(`from navbar ${this.name}`)
        }
    }
}
</script>

<template>
    <header class="header">
        <img class="logo" src="../../assets/MyReceipe.png" alt="my logo">
        <div class="header1">
            <h2>Wellcome back !
            </h2>
            <p>{{ this.name }}</p>
        </div>

        <nav class="navbar">
            <ul class="navbar-list">
                <li><router-link to="/" class="navbarlink homelink">Home</router-link></li>
                <li><router-link to="/feed" class="navbarlink homelink">Feed</router-link></li>
                <li><router-link to="/post" class="navbarlink homelink">Post</router-link></li>
                <li class="navbarlink homelink" v-on:click="logout">Logout</li>

            </ul>
        </nav>
        <a class="togglebutton" href="#"></a>
    </header>

</template>

<style>
.header {
    position: sticky;
    padding: 0 4.8rem;
    height: 10rem;
    background-color: var(--bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.header1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    font-size: 1rem;
    color: var(--black);
    font-weight: bold;
}

.header1 h2 {
    font-size: 3rem;
    color: var(--black);
}

.header1 p {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--helper);
}

.logo {
    height: 17rem;
    width: 17rem;
    margin-top: 2rem;
}

.togglebutton {
    display: none;
}

.navbar-list {
    background-color: var(--bg);
    display: flex;
    font-size: 1.8rem;
    gap: 4.8rem;
}

.navbarlink {
    display: inline-block;
    background-color: var(--bg);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 550;
    color: var(--black);
    transition: color 0.3s linear;
}

.navbarlink:hover,
.navbarlink:active {
    color: var(--helper);
}
</style>