const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            tasks: [],
            showUl: true,
            buttonCaption: "",
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
            this.buttonCaption = "Hide";
            this.showBtn = true;
        },
        toggle() {
            if (this.showUl) {
                this.buttonCaption = "Show List";
                this.showUl = false;
            } else {
                this.buttonCaption = "Hide";
                this.showUl = true;
            }
        },
        deleteTask(index) {
            this.tasks.splice(index,1);
        },
        taskExists() {
            if (this.tasks.length > 0) {
                return true;
            } else {
                return false;
            }
        },
    },
});

app.mount("#assignment");
