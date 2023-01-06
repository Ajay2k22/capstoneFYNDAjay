<script >
import Button from './button.vue';
export default {
    name: 'Hero',
    components: {
        Button
    },
    props: {
        name: String,

    }
}
</script>

<template>
    <main>
        <section class="section-hero section">
            <div class="container grid grid-two-column">
                <div class="section-hero-data">
                    <p class="hero-top-data"> this is me {{ name }}</p>
                    <h1 class="hero-heading">My Recipe</h1>
                    <p class="hero-para">My Recipes is here to help you cook delicious meals with less stress and
                        more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create
                        “kitchen wins” is what we’re all about.
                    </p>
                    <Button text="EXPLORE"></Button>
                </div>
                <div class="section-hero-image">
                    <img class="hero-image" src="../../assets/hero.jpg" alt="this is my recipe">
                </div>
            </div>
        </section>
    </main>
</template>

<style>
.section {
    padding: 9rem;
}



.container {
    max-width: 140rem;
    margin: 2rem 6rem;
}

.section-hero {
    background-color: var(--bg);
}

.grid {
    display: grid;
    gap: 9rem;

}

.section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;

}

.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}

.hero-image {

    max-width: 90%;
    border-radius: 100rem;
}

.hero-heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 6.4rem;
}

.hero-para {
    margin-top: 1.5rem;
    margin-bottom: 5rem;
    max-width: 60rem;
}

.section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.0rem;
}

.hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--helper);
}
</style>