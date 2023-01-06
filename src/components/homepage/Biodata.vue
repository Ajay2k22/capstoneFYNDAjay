<script >
import Stats from './stats.vue'
import Heading2 from './bar.vue'
import Button from './button.vue'
export default {
    name: 'Biodata',
    components: {
        Stats, Heading2,
        Button
    }
}
</script>

<template>
    <section class="section-hero section">
        <div class="container grid grid-two-column">
            <div class="bio-image">
                <img src="../../assets/MyReceipe.png" alt="">
            </div>
            <div class="bio-data">
                <Heading2 title="MY BIO DATA"></Heading2>
                <p>
                    My Recipes was founded in 2022 by Ajay Jaiswal as a home cooking blog to record her favorite
                    family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more
                    than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from
                    around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and
                    product testers, photographers, and other creative professionals.
                </p>
                <br />
                <p>

                </p>
                <div class="bio-data-stats">
                    <div class="bio-stats">
                        <h3>HEALTHY</h3>
                        <div class="bio-progress-bar progressbar-1">
                            <span>80%</span>
                        </div>
                    </div>
                    <div class="bio-stats">
                        <h3>KIDS RECIPE</h3>
                        <div class="bio-progress-bar progressbar-2">
                            <span>90%</span>
                        </div>
                    </div>
                    <div class="bio-stats">
                        <h3>LOW FATS</h3>
                        <div class="bio-progress-bar progressbar-3">
                            <span>90%</span>
                        </div>
                    </div>

                    <div class="bio-stats">
                        <h3>HYGENIC</h3>
                        <div class="bio-progress-bar progressbar-4">
                            <span>95%</span>
                        </div>
                    </div>
                    <div class="bio-stats">
                        <h3>HIGH PROTEIN DIET</h3>
                        <div class="bio-progress-bar progressbar-5">
                            <span>75%</span>
                        </div>
                    </div>
                </div>
                <Button text="DOWNLOAD BIO DATA"></Button>
            </div>
        </div>
    </section>
</template>

<style>
.bio-image img {
    width: 80%;
    box-shadow: -2rem -2rem var(--helper);
}

.bio-data-stats {
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem;
    gap: 3rem;
    margin-bottom: 2rem;
}

.bio-stats {
    display: flex;
    flex-direction: column;


}

.bio-progress-bar {
    height: 0.8rem;
    width: 90%;
    background-color: var(--para-tint);
    border: 2.5rem;
    position: relative;
    box-shadow: var(--para-tint);

}

.bio-progress-bar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--progress-1);
    height: inherit;
    background: var(--gradient-support);
}

.progressbar-2::before {
    width: 95%;
}

.progressbar-3::before {
    width: 85%;
}

.progressbar-4::before {
    width: 75%;
}

.progressbar-5::before {
    width: 80%;
}

.bio-stats h3 {
    margin-bottom: 1rem;
}

.bio-progress-bar span {
    position: absolute;
    top: 1.8rem;
    width: 4rem;
    height: 2rem;
    background: var(--helper);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
}

.progressbar-5 span {
    left: 76%;
}

.progressbar-4 span {
    left: 71%;
}

.progressbar-3 span {
    left: 81%;
}

.progressbar-2 span {
    left: 91%;
}

.progressbar-1 span {
    left: 76%;
}

.bio-progress-bar span::after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    border: 0.8rem solid var(--helper);
    border-color: transparent;
    border-bottom-color: var(--helper);
    top: -1.6rem;
}
</style>