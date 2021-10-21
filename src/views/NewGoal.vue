<template>
<main>
    <section>
            <form class="goal-form-container">
                <label class="form-label">Goal</label>
                <input type="text" class="form-input">
            </form>
            <div class="goal-show-n-color-choose">
                <div class="goal-show">
                    <div class="stars-container">
                        <div class="stars">✨</div>
                    </div>
                    <h3>Go te learn Judo</h3>
                </div>
                <div class="select-color">
                    <span class="form-label">SELECT COLOR</span>
                    <div class="colors">
                        <!-- 43B3F4 -->
                        <div class="clr-border">
                            <div id="43B3F4" class="color-select"></div>
                        </div>
                        <!-- FD8956 -->
                        <div class="clr-border">
                            <div id="FD8956" class="color-select"></div>
                        </div>
                        <!-- FF5B60 -->
                        <div class="clr-border">
                            <div id="FF5B60" class="color-select"></div>
                        </div>
                        <!-- 3DDA91 -->
                        <div class="clr-border">
                            <div id="3DDA91" class="color-select"></div>
                        </div>
                        <!-- 2E3A57 -->
                        <div class="clr-border">
                            <div id="2E3A57" class="color-select"></div>
                        </div>
                        <!-- 838FA1 -->
                        <div class="clr-border">
                            <div id="838FA1" class="color-select"></div>
                        </div>
                        <!-- 684FF0 -->
                        <div class="clr-border">
                            <div id="684FF0" class="color-select"></div>
                        </div>
                        <!-- FF88DD -->
                        <div class="clr-border">
                            <div id="FF88DD" class="color-select"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</main>
</template>

<script>
export default {
    name: "NewGoal",
    components: {}
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
    background-color: var(--orange-clr);
    height: 10rem;
    border-radius: .5rem .5rem 0 0;
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
</style>