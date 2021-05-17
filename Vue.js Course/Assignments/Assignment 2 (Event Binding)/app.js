const app = Vue.createApp({
	data() {
		return {
			alertValue: "Button's alert",
			userInput: "",
			userInput2: "",
		};
	},
	methods: {
		showAlert() {
			alert(this.alertValue);
		},
		updateInput() {
			this.userInput = event.target.value;
		},
		updateInputIfEnter() {
			this.userInput2 = event.target.value;
		},
	},
});

app.mount("#assignment");
