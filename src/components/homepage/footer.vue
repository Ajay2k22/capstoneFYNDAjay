<script>
export default {
    name: 'Footer',
    props: {
        text: String
    }
}
</script>
<template>
    <footer>
        <ul class="footer-list">
            <li class="footer-item">
                <a href="#">Home</a>
            </li>
            <li class="footer-item">
                <a href="#">Services</a>
            </li>
            <li class="footer-item">
                <a href="#">About</a>
            </li>
            <li class="footer-item">
                <a href="#">Terms</a>
            </li>
            <li class="footer-item">
                <a href="#">Privacy Policy</a>
            </li>
        </ul>
        <p class="copyright">MyRecipe © 2022</p>
    </footer>
</template>

<style>
footer {
    height: 20rem;
    width:100%;
    display: flex;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--black);
    gap: 2rem;
}

.footer-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    padding: 1.4rem 0;
}

.footer-item a {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--white);
}
</style>