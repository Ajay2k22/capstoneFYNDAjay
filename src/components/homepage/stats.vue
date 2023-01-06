<script >
export default {
    name: 'Stats',
    props: {
        title: String,
        progress: String
    }
}
</script>

<template>

    <div class="bio-stats">
        <h3>{{ title }}</h3>
        <div class="bio-progress-bar ">
            <span>{{ progress }}</span>
        </div>
    </div>

</template>


<style >
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

.bio-stats h3 {
    margin-bottom: 1rem;
}
</style>