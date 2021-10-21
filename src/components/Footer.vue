<template>
<footer>
    <i @click="assignRoute" class='bx bxs-check-circle save-add-todo' ></i>
</footer>
</template>

<script>
export default {
    methods: {
        assignRoute() {
            if(this.$route.name === 'Goals') {
                this.$router.push({ name: 'NewGoal' })
            }
        }
    }
}
</script>

<style scoped>
/* -- footer -- */
footer {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    background-color: var(--white-clr);
}
.save-add-todo {
    cursor: pointer;
    font-size: 4rem;
    margin: .5rem 0;
    border: 8px solid var(--primary-clr);
    background-color: var(--white-clr);
    border-radius: 50%;
    transition: transform 50ms;
}
.save-add-todo:hover {
    transform: scale(1.05);
}
@media screen and (min-width: 768px){
    footer {
        padding: .5rem 5rem;
    }
}
@media screen and (min-width: 1200px){
    footer {
        padding: .5rem 10rem;
    }
    .save-add-todo {
        font-size: 3rem;
    }
}
@media screen and (min-width: 1280px){
    footer {
        padding: .5rem 18rem;
    }
}
</style>