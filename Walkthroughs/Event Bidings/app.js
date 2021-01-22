const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		setName(lastName) {
			this.name = event.target.value + " " + lastName;
		},
		submitPreventHandler() {
			console.log("Default behaviour prevented");
		},
		eventTriggered() {
			console.log("The event has been triggered");
		},
	},
});

app.mount("#events");
