
<template>
<div>
    <main>
    <section>
            <form class="goal-form-container">
                <label class="form-label">Goal</label>
                <input type="text" class="form-input" v-model="goalName" ref="goalInput" required>
            </form>
            <div class="goal-show-n-color-choose">
                <div :style="{ 'background-color': goalColor }" class="goal-show">
                    <div class="stars-container">
                        <div class="stars">✨</div>
                    </div>
                    <h3 v-if="goalName">{{ goalName }}</h3>
                    <h3 v-else>Goal</h3>
                </div>
                <div class="select-color">
                    <span class="form-label">SELECT COLOR</span>
                    <div class="colors">
                        <!-- color select -->
                        <div :style="{ 'border-color': color }" class="clr-border" v-for="color in colors" :key="color">
                            <div @click="selectedColor(color)" :id="color" class="color-select" :style="{ 'background-color': color }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <p class="goal-added-notify" ref="goalAdded">Goal added!</p>
</main>
<footer>
    <i class='bx bx-arrow-back' @click="back" title="back home"></i>
    <i @click="saveNewGoal" class='bx bxs-check-circle save-add-todo'></i>
</footer>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "NewGoal",
    components: {},
    data() {
        return {
            colors: ["#43b3f4", "#fd8956", "#ff5b60", "#3dda91", "#838fa1", "#ffb4a2", "#684ff0", "#ff88dd"],
            goals: [],
            goalName: '',
            goalColor: '#43B3F4'
        }
    },
    methods: {
        selectedColor(color) {
            this.goalColor = color
        },
        // Save new goal
        async saveNewGoal() {
            // new object of goal
            const goal = {
                "goalName": this.goalName,
                "goalColor": this.goalColor,
                "completed": false
            }
            const goalAddedEl = this.$refs.goalAdded
            // check if the goal name is not empty then add new goal
            if(this.goalName) {
                const res = await axios.post("http://localhost:3000/goals", goal)
                this.goals = [...this.goals, res.data]
                this.goalName = ''
                this.$refs.goalInput.focus()
                goalAddedEl.style.display = 'block'
                setTimeout(() => {
                    goalAddedEl.style.display = 'none'
                }, 2000)
            }else {
                this.$refs.goalInput.focus()
                alert("Goal input is empty")
            }
        },
        back(){
            this.$router.go(-1)
        }
    },
    mounted() {
        this.$refs.goalInput.focus()
    }
}
</script>

<style scoped>
.goal-form-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}
.form-input {
    border: none;
    outline: 3px solid transparent;
    border: thin solid var(--gray-clr);
    border-radius: .5rem;
    color: var(--primary-clr);
    font-size: 1.5rem;
    height: 3rem;
    padding: 0 .5rem;
    transition: 180ms box-shadow ease-in-out;
}
.form-input:focus {
    box-shadow: 0 0 0 3px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) +
          40%), 0.8);
}
.form-label {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
}

/* ---- ---- ---- ---- */

.goal-show-n-color-choose {
    display: flex;
    flex-direction: column;
}
.goal-show {
    height: 12rem;
    border-radius: .5rem .5rem 0 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: 200ms background-color;
}
.stars {
    font-size: 3rem;
}
.goal-show h3 {
    color: var(--white-clr);
    margin-top: 1.2rem;
    font-weight: 400;
    font-size: 1.5rem;
}
.colors {
    display: flex;
    margin-top: 1rem;
}
.colors .clr-border {
    border: 2px solid;
    border-radius: 50%;
    margin-right: .5rem;
}
.color-select {
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border: 2px solid white;
    border-radius: 50%;
    background-color: var(--orange-clr);
}
.bx-arrow-back {
    cursor: pointer;
    position: absolute;
    left: 3rem;
    font-size: 3rem;
}
.goal-added-notify {
    font-size: 1.5rem;
    font-weight: 400;
    color: #2a9d8f;
    position: absolute;
    transform: translateX(65%);
    bottom: 6.5rem;
    z-index: 2;
    display: none;
}
</style>