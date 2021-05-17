const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			pVisibility: true,
			bkgrColor: ''
		};
	},
	computed: {
		pClass() {
			if (this.userInput == "user1") {
				return { user1: true };
			} else if (this.userInput == "user2") {
				return { user2: true };
			}
		},
		visibilityClass() {
			return {
				visible: this.pVisibility,
				hidden: !this.pVisibility,
			}
		}
	},
	methods: {
		toggleVisibility() {
			this.pVisibility = !this.pVisibility
		}
	},
});

app.mount("#assignment");
