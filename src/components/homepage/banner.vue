<script >
export default{
    name:'Banner',
}
</script>

<template>
    <section class="banner grid grid-4-column">
        <div class="banner-flex grid-column-1">
            <h3>2000+</h3>
            <p>Companies</p>
        </div>
        <div class="banner-flex grid-column-2">
            <h3>2M+</h3>
            <p>User</p>
        </div>
        <div class="banner-flex grid-column-3">
            <h3>5000+</h3>
            <p>Recipe</p>
        </div>
        <div class="banner-flex grid-column-4">
            <h3>100% Guarantee</h3>
            <p>Best Service</p>
        </div>
    </section>
</template>

<style>
.banner{
    background: var(--gradient);
    height: 20rem;
}
.banner-flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0rem;
}
.banner-flex h3{
    font-weight: 700;
    color: var(--white);
    font-size: 3rem;
}
.banner-flex p{
    font-weight: 200;
    color: var(--black);
}
.grid{
    display: grid;
}
.grid-4-column{
    grid-template-columns: repeat(4,1fr);
}
</style>