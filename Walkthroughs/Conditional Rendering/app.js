const app = Vue.createApp({
    data() {
        return {
            inputGoal: "",
            goals: [],
            range: 5,
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputGoal);
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

app.mount("#user-goals");
