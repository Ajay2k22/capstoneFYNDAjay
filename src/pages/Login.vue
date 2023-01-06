<template>
    <div class="login">
        <div class="head">
            <img class="logo" src="../assets/MyReceipe.png" alt="logo" />
            <h1>Login</h1>
        </div>
        <div class="container">
            <input type="text" placeholder="Enter email" v-model="this.email" />
            <input type="text" placeholder="Enter password" v-model="this.password" />
            <button type="button" v-on:click="Login">Log In</button>
            <p>Don't have an account ? <router-link class="router" to="/signup">Signup here</router-link> </p>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async Login() {
            try {

                if (this.email == '' || this.password == '') {
                    alert('All fields are compulsory')
                }

                else {
                    let result = await axios.get(`http://localhost:5000/user?email=${this.email}&password=${this.password}`)
                    console.log(result)
                    const res = {
                        "name": result.data.data[0].name,
                        "email": result.data.data[0].email,
                        "password": result.data.data[0].password
                    }
                    console.log(res)

                    if (result.status === 201) {
                        alert('Wrong Credentials')
                        console.log('pressed')
                    }

                    if (result.status === 200) {
                        localStorage.setItem('user-info', JSON.stringify(res))
                        this.$router.push({ name: 'Home' })
                    }

                }
            }
            catch (e) {
                console.log(e)
            }
        }
    },
    components: {

    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style scoped>
.register,
.login {
    width: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.logo {
    height: 20rem;
    width: 20rem;
}

.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.head h1 {
    font-size: 2rem;
}

.container input {
    height: 4rem;
    width: 30rem;
    margin: 1rem auto;
    margin-top: 0;
    display: block;
    border: 1px solid skyblue;
    padding-left: 1rem;
    padding-right: 1rem;
}

.container button {
    height: 4rem;
    width: 30rem;
    margin: 1rem auto;
    margin-top: 0;
    display: block;
    border: 1px solid skyblue;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    color: white;
    background: skyblue;
    cursor: pointer;
}

.container p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 1rem;
}

.router {
    color: rgba(243, 5, 5, 0.644);
}
</style>

