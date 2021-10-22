<template>
<main>
    <div>
        <section class="section section-1">
            <div class="action-goals-list">
                <h2>uncompleted</h2>
                <i class='bx bx-chevron-down'></i>
            </div>
            <div v-for="goal in goals" :key="goal.goalId" v-show="!goal.completed" class="goals">
                <!-- goal 1 -->
                <div class="goal" :style="{ 'background-color': goal.goalColor }">
                    <div class="goal-left">
                        <i class='bx bx-circle' ></i>
                        <h3>{{ goal.goalName }}</h3>
                    </div>
                    <i class='bx bxs-x-circle' ></i>
                </div>
            </div>
        </section>

         <section class="section section-2">
            <div class="action-goals-list">
                <h2>completed</h2>
                <i class='bx bx-chevron-down'></i>
            </div>
            <div v-for="goal in goals" :key="goal.goalId" v-show="goal.completed" class="goals">
                <!-- goal 1 -->
                <div class="goal" :style="{ 'background-color': goal.goalColor }">
                    <div class="goal-left">
                        <i class='bx bxs-check-circle' ></i>
                        <h3>{{ goal.goalName }}</h3>
                    </div>
                    <i class='bx bxs-x-circle' ></i>
                </div>
            </div>
        </section>
    </div>
</main>
</template>

<script>
export default {
    name: 'Goals',
    component: {},
    data() {
        return {
            goals: [],
            error: null
        }
    },
    methods: {
        async fetchGoals() {
            try {
                const data = await fetch("http://localhost:3000/goals")
                if(!data.ok){
                    throw Error("No Goals available")
                }
                this.goals = await data.json()
            }
            catch(err) {
                this.error = err.message
            }
        }
    },
    mounted() {
        this.fetchGoals()
    }
}
</script>

<style scoped>
/* -- section 1 -- */
.section-1 {
    margin-bottom: 1.8rem;
}
/* -- goals -- */
.goals {
    display: flex;
    flex-direction: column;
}
.goal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .5rem 0;
    padding: 1rem;
    border-radius: .5rem;
    transition: transform 50ms;
}
.goal:hover {
    transform: scale(1.01);
}
.goal .bxs-x-circle {
    margin-left: .3rem;
}
.g_one {
    background-color: var(--blue-clr);
}
.g_two {
    background-color: var(--green-clr);
}
.g_three {
    background-color: var(--orange-clr);
}
.g_four {
    background-color: var(--red-clr);
}
.goal-left {
    display: flex;
    align-items: center;
}
.goal-left i {
    margin-right: .5rem;
}
.goal-left h3 {
    font-weight: 400;
    font-size: 1.3rem;
    color: var(--primary-clr);
}
@media screen and (min-width: 1200px){
    .goal-left h3 {
        font-size: 1.2rem;
    }
}

/* -- section 2 -- */
.section-2 {
    margin-bottom: 7rem;
}
</style>