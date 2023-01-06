<script >
export default {
    name:'Button',
    props:{
        text:String
    }
}

</script>

<template>
    <div>
        <router-link to="/feed" class="btn hireme-btn">{{ text }}</router-link>
    </div>
</template>

<style>
.btn{
    background-image: var(--gradient);
    padding: 1.6rem 3.2rem;
    border: none;
    color: var(--white);
    font-size: 1.4rem;
    display: inline-block;
    font-weight: 500;
    cursor: pointer;
    border-radius: 1.2rem;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.btn:hover,
.btn:active{
    box-shadow: var(--shadow);
}
</style>