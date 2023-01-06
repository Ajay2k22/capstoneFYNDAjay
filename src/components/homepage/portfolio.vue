<script >
export default {
    name: 'Portfolio',
    props: {
        title: String,
        progress: String
    }
}
</script>

<template>
    <section class="section section-portfolio " id="portfolio-section">
        <div class="container">
            <h2 class="common-heading">LATEST RECIPE</h2>
            <p>All the Latest Recipes are updated over here,you can check it on the feed & post section</p>
        </div>
        <div class="p-btns">
            <Button text="LATEST RECIPE"></Button>
            <Button text="POPULAR"></Button>
            <Button text="TRENDING"></Button>
        </div>
    </section>
</template>

<style>
.grid-three-column {
    grid-template-columns: repeat(3, 1fr);
}

.p-btns {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}
</style>