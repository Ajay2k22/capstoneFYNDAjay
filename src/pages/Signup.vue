<script>
import axios from "axios";
export default {
    name: "Signup",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async submitMe() {
            console.log(`Name:-${this.name} Email:-${this.email} Password:-${this.email}`);
            try {

                if (this.name == '' || this.email == '' || this.password == '') {
                    alert('All fields are compulsory')
                }

                else {
                    let result = await axios.post("http://localhost:5000/user", {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    });

                    console.log(result);

                    if (result.status == 200) {
                        alert("Register Sucessfully");
                        localStorage.setItem("user-info", JSON.stringify(result.data));
                        this.$router.push({ name: 'Home' })
                    }

                }




            } catch (e) {
                console.log(e.message);
            }
        },
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
};
</script>

<template>

    <div class="register">
        <div class="head">
            <img class="logo" src="../assets/MyReceipe.png" alt="logo" />
            <h1>Signup</h1>
        </div>
        <div class="container">
            <input type="text" placeholder="Enter name" v-model="this.name" />
            <input type="text" placeholder="Enter email" v-model="this.email" />
            <input type="text" placeholder="Enter password" v-model="this.password" />
            <button type="button" v-on:click="submitMe">Submit</button>
            <p>Already have an account ? <router-link class="router" to="/login">Login here</router-link> </p>
        </div>
    </div>
</template>

<style scoped >
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
