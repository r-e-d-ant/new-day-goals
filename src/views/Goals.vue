
<template>
<div>
    <main>
    <section class="section section-1">
            <div class="action-goals-list">
                <h2>uncompleted</h2>
                <i class='bx bx-chevron-down'></i>
            </div>
            <div v-for="goal in goals" :key="goal.id" v-show="!goal.completed" class="goals">
                <!-- goal 1 -->
                <div class="goal" :style="{ 'background-color': goal.goalColor }">
                    <div class="goal-left">
                        <i class='bx bx-circle' @click="completeGoal(goal.id)"></i>
                        <h3>{{ goal.goalName }}</h3>
                    </div>
                    <i class='bx bxs-x-circle' @click="deleteGoal(goal.id)"></i>
                </div>
            </div>
        </section>

         <section class="section section-2">
            <div class="action-goals-list">
                <h2>completed</h2>
                <i class='bx bx-chevron-down'></i>
            </div>
            <div v-for="goal in goals" :key="goal.id" v-show="goal.completed" class="goals">
                <!-- goal 1 -->
                <div class="goal" :style="{ 'background-color': goal.goalColor }">
                    <div class="goal-left">
                        <i class='bx bxs-check-circle' @click="completeGoal(goal.id)"></i>
                        <h3>{{ goal.goalName }}</h3>
                    </div>
                    <i class='bx bxs-x-circle' @click="deleteGoal(goal.id)"></i>
                </div>
            </div>
        </section>
</main>
    <footer>
        <i @click="gotoNewGoal" class='bx bxs-plus-circle save-add-todo'></i>
    </footer>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Goals',
    component: {},
    data() {
        return {
            goals: []
        }
    },
    methods: {
        // button to go to new goal router
        gotoNewGoal() {
            this.$router.push({ name: 'NewGoal' })
        },

        // get goals
        async fetchGoals() {
            try {
                const { data } = await axios.get("http://localhost:3000/goals")
                this.goals = data;
            } catch(e) {
                console.log(e.message)
            }
        },
        // delete goal by id
        async deleteGoal(id) {
            try {
                await axios.delete("http://localhost:3000/goals/" + id)
                // call fetchGoals function to update goals
                this.fetchGoals()
            } catch(e) {
                console.log(e)
            }
        },
        // completes goal by id
        async completeGoal(id) {
            // get goal by id to populate updated goal
            const goal  = await axios.get("http://localhost:3000/goals/" + id)
            const complete = {
                goalName: goal.data.goalName,
                goalColor: goal.data.goalColor,
                completed: !goal.data.completed
            }
            // update the goal object with new data
            await axios.put("http://localhost:3000/goals/" + id, complete)
             // call fetchGoals function to update goals
            this.fetchGoals()
        }
    },
    mounted() {
        // call fetch goals function when the Goals router is mounted
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