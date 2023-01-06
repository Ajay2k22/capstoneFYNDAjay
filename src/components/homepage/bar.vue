<script >
export default{
    name:'Bar',
    props:{
        title:String
    }
}
</script>

<template>
    <h2 class="common-heading">{{ title }}</h2>
</template>
<style>

.common-heading{
    font-size: 4.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
    position: relative;
    color: black;
}
.common-heading::before{
    content: "";
    position: absolute;
    top:110%;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--helper);
    border-radius: 100%;
}
.common-heading::after{
    content: "";
    position: absolute;
    top: 118%;
    left:1.5rem;
    min-width: 20rem;
    height: 0.3rem;
    background-color: var(--helper);
}
</style>